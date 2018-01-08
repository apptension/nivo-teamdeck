import React from 'react'
import { ResponsiveLine } from '@nivo/line';
import { generateDrinkStats } from 'nivo-generators'
import { keys } from 'lodash';

const colors = ['#fae04d', '#ff744c', '#789792', '#b1646a', '#efa9a1', '#8470c7', '#97a66f'];
const data = generateDrinkStats();
const dataKeys = keys(data[0]);
const keyNames = dataKeys.reduce((keyNameAcc, name) => {
  keyNameAcc[name] = {
    name,
    format: 1,
  };
  return keyNameAcc;
}, {});

class LineChart extends React.Component {
  render() {
    return (
      <div style={{marginTop: '80px', marginLeft: '50px', height: '400px', minWidth: '600px'}}>
        <ResponsiveLine
          margin={{
            top: 1.5,
            right: 0,
            bottom: 2,
            left: 40,
          }}
          padding={0.2}
          titles={data.map(() => 'test')}
          layout={'vertical'}
          data={data}
          indexBy="country"
          enableGridX={false}
          enableGridY={false}
          keys={['rock', 'jazz', 'hip-hop', 'reggae', 'folk']}
          keyNames={keyNames}
          colors={colors}
          groupMode={'stacked'}
          enableTemplates={true}
          enableLabel={false}
          tooltipFormat={(value) => `${value}pln`}
          axisFormat={2}
          isInteractive={true}
          animate={false}
        />
      </div>
    )
  }
}


export default LineChart
