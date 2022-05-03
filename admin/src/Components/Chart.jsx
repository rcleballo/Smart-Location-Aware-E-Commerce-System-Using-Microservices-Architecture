import styled from 'styled-components';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ChartContainer = styled.div`
  margin: 20px;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const ChartTitle = styled.h3`
  margin-bottom: 20px;
`;

const Chart = ({ title, data, dataKey, grid }) => {
  return (
    <ChartContainer>
      <ChartTitle>{title}</ChartTitle>
      <ResponsiveContainer width="100%" aspect={4/1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#48cae4" />
          <Line type="monotone" dataKey={dataKey} stroke="#00b4d8" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#dee2ff" strokeDasharray="5 5"/>}
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

export default Chart;