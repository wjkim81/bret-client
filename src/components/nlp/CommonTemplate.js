import React from 'react';
import { Container, Button, Collapse } from 'react-bootstrap';
import { MoonLoader } from 'react-spinners';
import parse from 'html-react-parser';
import Label from './Label';
import Breadcrumbs from '../Breadcrumbs';
import fileUpload from '../../apis/fileUpload';

class CommonTemplate extends React.Component {
  state = {
    selectedFile: null,
    resultText: '',
    resultPerformance: 0,
    loading: false,
    isSubmitted: false,
    labelOpen: false,
    inputKey: Math.random().toString(36),
  };

  componentDidMount() {
    console.log(this.props.task);
  }

  renderExplanation = (task) => {
    const highlight = { backgroundColor: 'yellow' };
    if (task === 'chemical-disease') {
      return (
        <h6>
          EX) In defects of <span style={highlight}>BC6ENTG</span> ,{' '}
          <span style={highlight}>BC6OTHER</span> is transformed to{' '}
          <span style={highlight}>BC6ENTC</span> , resulting in high levels of{' '}
          <span style={highlight}>BC6OTHER</span> in the body.
        </h6>
      );
    } else if (task === 'drug-drug') {
      return (
        <h6>
          EX) Concomitant <span style={highlight}> @DRUG$ </span> administration
          decreased the mean AUC of total{' '}
          <span style={highlight}> @DRUG$ </span>
          approximately 55%.
        </h6>
      );
    } else if (task === 'gene-disease') {
      return (
        <h6>
          EX) MPO genotype GG is associated with{' '}
          <span style={highlight}>@DISEASE$</span> in patients with hereditary{' '}
          <span style={highlight}>@GENE$.</span>
        </h6>
      );
    } else {
      return null;
    }
  };

  onSubmit = async (event) => {
    event.preventDefault();
    const { selectedFile } = this.state;
    const formData = new FormData();
    formData.append('file', selectedFile);
    // console.log(selectedFile);

    if (!selectedFile) {
      // console.log('Please upload file!');
      return;
    }

    this.setState({ loading: true });
    const response = await fileUpload.post(`/api/${this.props.task}`, formData);

    // Check status code === 200 and return proper actions.
    console.log(response.status);
    console.log(response.data);

    const { result, performance } = response.data;

    this.setState({
      loading: false,
      isSubmitted: true,
      resultText: result,
      resultPerformance: performance,
    });
  };

  renderFileUpload() {
    // console.log('!selectedFile', !this.state.selectedFile);
    // console.log('!isSubmitted:', !this.state.isSubmitted);
    const buttonDisabled = !this.state.selectedFile === !this.state.isSubmitted;
    // console.log('buttonDisabled:', buttonDisabled);

    return (
      <form>
        Select a file to upload:
        <input
          type="file"
          name="fileToUpload"
          key={this.state.inputKey}
          onChange={(event) => {
            this.setState({ selectedFile: event.target.files[0] });
          }}
        />
        <Button
          variant="danger"
          onClick={this.onSubmit}
          disabled={buttonDisabled}
        >
          Upload a file
        </Button>
      </form>
    );
  }

  renderLabel(task) {
    const open = this.state.labelOpen;
    return (
      <div>
        <div> &nbsp; </div>
        <Button
          onClick={() => this.setState({ labelOpen: !open })}
          aria-controls="collapse-label"
          aria-expanded={open}
          variant="danger"
          size="sm"
        >
          About labels
        </Button>
        <Collapse in={open}>
          <div id="collapse-label">
            <Label task={task} />
          </div>
        </Collapse>
      </div>
    );
  }

  renderLoading() {
    if (this.state.loading) {
      const style = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      };
      return (
        <div>
          <div style={style}>
            <MoonLoader size={150} loading={this.state.loading} />
          </div>
        </div>
      );
    }
  }

  renderTextResult() {
    const highlight = 'background-color:yellow';
    var text = this.state.resultText;
    text = text.replaceAll('<s>', `<span style=${highlight}>`);
    text = text.replaceAll('</s>', '</span>');
    text = text.replaceAll('newline', '</br>');
    // console.log(text);
    // console.log(parse(text));

    return <p>{parse(text)}</p>;
  }

  resetState = () => {
    this.setState({
      selectedFile: null,
      resultText: '',
      resultPerformance: 0,
      loading: false,
      isSubmitted: false,
      labelOpen: false,
      inputKey: Math.random().toString(36),
    });
  };

  renderDownloadReset() {
    return (
      <Container className="text-center">
        <Button variant="danger" disabled={!this.state.isSubmitted}>
          Download
        </Button>{' '}
        <Button
          variant="danger"
          disabled={!this.state.isSubmitted}
          onClick={this.resetState}
        >
          Reset
        </Button>
      </Container>
    );
  }

  renderResult() {
    const log_style = {
      overflowX: 'hidden',
      height: '300px',
      width: '100%',
      border: '1px solid #aaaaaa',
    };

    return (
      <>
        <div> &nbsp; </div>
        <div id="log" className="result-box" style={log_style}>
          {this.renderLoading()}
          {this.renderTextResult()}
        </div>
        <h5>Model Performance</h5>
        f1 score: {this.state.resultPerformance}
        {this.renderDownloadReset()}
      </>
    );
  }

  render() {
    console.log('state:', this.state);
    return (
      <div>
        <Breadcrumbs task={this.props.task} />
        <section>
          <Container>
            <h5>Please upload the .txt file with the following format.</h5>
            {this.renderExplanation(this.props.task)}
            {this.renderFileUpload()}
            {this.renderLabel(this.props.task)}
            {this.renderResult()}
          </Container>
        </section>
      </div>
    );
  }
}

export default CommonTemplate;
