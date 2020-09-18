import React from 'react';
import { Container, Button, Collapse } from 'react-bootstrap';
import { MoonLoader } from 'react-spinners';
import parse from 'html-react-parser';
import Label from './Label';
import Breadcrumbs from '../Breadcrumbs';
import fileUpload from '../../apis/fileUpload';
import baseURL from '../../shared/baseURL';

class CommonTemplate extends React.Component {
  state = {
    selectedFile: null,
    resultText: '',
    resultPerformance: 0,
    resultFileName: '',
    resultFilePath: '',
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

    const { result, performance, file_name, file_path } = response.data;

    this.setState({
      loading: false,
      isSubmitted: true,
      resultText: result,
      resultPerformance: performance,
      resultFileName: file_name,
      resultFilePath: file_path,
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
      resultFileName: '',
      resultFilePath: '',
      loading: false,
      isSubmitted: false,
      labelOpen: false,
      inputKey: Math.random().toString(36),
    });
  };

  //      <Button
  //       href="data:image/jpeg;base64,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"
  //       color="transparent"
  //       target="_blank"
  //       download>Download
  //  </Button>
  // var str1 = '<a href ="';
  //           var str2 = "{{result_file_path}}";
  //           var str3 = '" download = "{{result_file_name}}"><button type=button class="btn btn-danger" style="margin-right: 4px">Download</button></a> ';

  //           var $a = $(str1.concat(str2).concat(str3));
  //           var $l = $(' <button type="button" id="btn" class="btn btn-danger">About labels</button>')
  //           $("#result_down").append($a);
  //           $("#result_down").append($l);
  renderDownloadReset() {
    const url = `${baseURL}/${this.state.resultFilePath}`;
    console.log('url:', url);
    return (
      <Container className="text-center">
        <Button
          href={url}
          variant="danger"
          disabled={!this.state.isSubmitted}
          download
        >
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
