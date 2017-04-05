'use strict';

import React from 'react';
import { AutoSizer, Column, Table } from 'react-virtualized';
import 'react-virtualized/styles.css'; // only needs to be imported once


class DataPreviewComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  _rowClassName ({ index }) {
    if (index < 0) {
      return "headerRow"
    } else {
      return index % 2 === 0 ? "evenRow" : "oddRow"
    }
  }

  render() {
    const rowList = this.props.fileRows.toJS();
    const rowColumns = this.props.fileColumns.toJS();

    if (rowList.length === 0 && rowColumns.length === 0) {
      return (
        <div>
          <div className="blankslate blankslate-spacious">
            <h3>Upload and select a dataset</h3>
            <p>Watch the preview</p>
          </div>
        </div>
      );
    } else {
      return (
        <AutoSizer>
          {({ width }) => (
            <Table
              headerHeight={40}
              height={window.innerHeight}
              rowCount={rowList.length}
              rowGetter={({ index }) => rowList[index]}
              rowHeight={30}
              width={width}
              rowClassName={this._rowClassName}
            >
              {
                rowColumns.map((col) => (
                  <Column
                    label={col}
                    dataKey={col}
                    key={col}
                    width={100}
                  />
                ))
              }
            </Table>
          )}
        </AutoSizer>
      );
    }
  }
}

export default DataPreviewComponent;
