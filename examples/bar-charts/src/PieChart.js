import { ResponsivePie } from '@nivo/pie'
import React from 'react';
import { generateProgrammingLanguageStats } from 'nivo-generators'

export default class PieChart extends React.Component {
  render() {
    return (
      <div style={{height: 200}}>
        <ResponsivePie
          margin={{
            top: 1.5,
            right: 1.5,
            bottom: 1.5,
            left: 1.5,
          }}
          data={generateProgrammingLanguageStats(true, 9).map(d => ({
            id: d.label,
            name: 'test',
            format: 0,
            formattedValue: d.value + 'h',
            template: `<div style="border-radius: 50%; height: 20px; width: 20px; border: 1px solid; line-height: 20px;">ad</div>`,
            ...d,
          }))}
          innerRadius={0.4}
          enableRadialLabels={false}
          slicesLabelsSkipAngle={10}
          animate={false}
        />
      </div>
    );
  }
}
