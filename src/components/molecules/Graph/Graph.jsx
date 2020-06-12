import React from 'react'
import {
  Chart,
  Series,
  ArgumentAxis,
  Legend,
  Label,
} from 'devextreme-react/chart'

const Graph = ({graphData}) => {
  return (
    <React.Fragment>
      <Chart id="chart" dataSource={graphData} title="News Graph">
        <Series argumentField="objectID" />
        <ArgumentAxis>
          <Label wordWrap="none" overlappingBehavior={'rotate'} />
        </ArgumentAxis>
        <Legend visible={false} />
      </Chart>
    </React.Fragment>
  )
}

export default Graph
