import React from 'react'
import PropTypes from 'prop-types'

import {
  Chart,
  Series,
  ArgumentAxis,
  Legend,
  Label,
} from 'devextreme-react/chart'

import './graph.scss'

const Graph = ({ graphData }) => {
  return (
    <div className="graph">
      <Chart id="chart" dataSource={graphData} title="News Graph">
        <Series argumentField="objectID" />
        <ArgumentAxis>
          <Label wordWrap="none" overlappingBehavior={'rotate'} />
        </ArgumentAxis>
        <Legend visible={false} />
      </Chart>
      <span className="graph__id">Id</span>
    </div>
  )
}

export default Graph

Graph.propTypes = {
  graphData: PropTypes.shape()
}
