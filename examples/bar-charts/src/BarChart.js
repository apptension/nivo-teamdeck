import React from 'react'
import { ResponsiveBar } from '@nivo/bar';
import { generateCountriesData } from 'nivo-generators'
import { keys } from 'lodash';

const colors = ['#fae04d', '#ff744c', '#789792', '#b1646a', '#efa9a1', '#8470c7', '#97a66f'];
const data = generateCountriesData(['rock', 'jazz', 'hip-hop', 'reggae', 'folk'], { size: 9 });
const dataKeys = keys(data[0]);
const keyNames = dataKeys.reduce((keyNameAcc, name) => {
  keyNameAcc[name] = {
    name,
    format: 1,
  };
  return keyNameAcc;
}, {});

const templates = data.map(({country}) => {
  return `<div style="border-radius: 50%; height: 20px; width: 20px; border: 1px solid; line-height: 20px;">${country}</div>`;
})

data[2].jazz = -33;
data[0].rock = 0;
data[2].rock = 0;
data[7].jazz = -77;

class Bar extends React.Component {
  render() {
    return (
      <div style={{marginTop: '80px', marginLeft: '50px', height: '400px', minWidth: '600px'}}>
        <ResponsiveBar
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
          templates={templates}
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


export default Bar
