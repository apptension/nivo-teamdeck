import React from 'react'
import { ResponsiveBarCanvas } from '@nivo/bar';
import { generateCountriesData } from 'nivo-generators'
import { keys } from 'lodash';

const colors = ['#fae04d', '#ff744c', '#789792', '#b1646a', '#efa9a1', '#8470c7', '#97a66f'];
const data = generateCountriesData(['rock', 'jazz', 'hip-hop', 'reggae', 'folk'], { size: 9 });
console.log(data);
data[0].jazz = -77;
data[1].jazz = -37;
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

const Bar = () => (
  <div style={{marginTop: '80px', marginLeft: '50px', height: '400px', minWidth: '600px'}}>
    <ResponsiveBarCanvas
      margin={{
        top: 10,
        right: 0,
        bottom: 10,
        left: 40,
      }}
      padding={0.2}
      data={data}
      indexBy="country"
      enableGridX={false}
      enableGridY={false}
      keys={['rock', 'jazz', 'hip-hop', 'reggae', 'folk']}
      keyNames={keyNames}
      colors={colors}
      enableTemplates={true}
      templates={templates}
      groupMode={'grouped'}
      enableLabel={false}
      tooltipFormat={(value) => value}
      isInteractive={true}
      animate={false}
      edge={{
        value: 120,
        color: '#ff2e0e'
      }}
    />
  </div>
)

export default Bar
