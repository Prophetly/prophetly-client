import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Select from 'react-select';

import AppActions from '../actions/AppActions';

import 'react-select/dist/react-select.css';


class ControlPanelComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  logChange() {
    //
  }

  render() {
    return (<Row start="xs">
      <Col xs={3}>
			<Select
				name="form-field-name"
				options={this.props.columns}
				placeholder="datestamp column"
				onChange={this.logChange}
				clearable={false}
			/>
      </Col>
      <Col xs={3}>
      <Select
        name="form-field-name"
        options={this.props.columns}
        placeholder="y column"
        onChange={this.logChange}
        clearable={false}
      />
      </Col>
      <Col xs={3} xsOffset={3}>
        <button
					style={{'marginBottom': '40px'}}
					className="btn btn-block btn-danger btn-outline"
					id="upload-button"
					type="button"
				>
          Forecast
        </button>
      </Col>
    </Row>);
  }
}

export default ControlPanelComponent;
