import React from 'react';
import { Table } from 'react-bootstrap';

const renderHead = () => {
  return (
    <thead>
      <tr>
        <th>Label</th>
        <th>Description</th>
      </tr>
    </thead>
  );
};

const renderBody = (task) => {
  if (task === 'chemical-disease') {
    return (
      <tbody>
        <tr>
          <td>CPR:3</td>
          <td>Unregular and activator</td>
        </tr>
        <tr>
          <td>CPR:4</td>
          <td>Downregular and inactivator</td>
        </tr>
        <tr>
          <td>CPR:5</td>
          <td>Agonist</td>
        </tr>
        <tr>
          <td>CPR:6</td>
          <td>Antagonist</td>
        </tr>
        <tr>
          <td>CPR:9</td>
          <td>Substrate and product of</td>
        </tr>
        <tr>
          <td>False</td>
          <td>No relation</td>
        </tr>
      </tbody>
    );
  } else if (task === 'drug-drug') {
    return (
      <tbody>
        <tr>
          <td>DDI-mechanism</td>
          <td>
            This type is used to annotate DDIs that are described by PK
            mechanism
          </td>
        </tr>
        <tr>
          <td>DDI-effect</td>
          <td>
            This type is used to annotate DDIs describing an effect or a PD
            mechanism
          </td>
        </tr>
        <tr>
          <td>DDI-advise</td>
          <td>
            This type is used to annotate recommendation or advice regarding a
            drug interaction is given
          </td>
        </tr>
        <tr>
          <td>DDI-int</td>
          <td>
            This type is used to annotate when a DDI appears in the text without
            providing any additional information
          </td>
        </tr>
        <tr>
          <td>DDI-false</td>
          <td>No relation</td>
        </tr>
      </tbody>
    );
  } else if (task === 'gene-disease') {
    return (
      <tbody>
        <tr>
          <td>0</td>
          <td>GENE affects DISEASE</td>
        </tr>
        <tr>
          <td>1</td>
          <td>GENE does not affect DISEASE</td>
        </tr>
      </tbody>
    );
  } else {
    return null;
  }
};

const Label = ({ task }) => {
  return (
    <div id="displayDiv">
      <Table size="sm">
        {renderHead()}
        {renderBody(task)}
      </Table>
    </div>
  );
};

export default Label;
