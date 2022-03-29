import styled from 'styled-components';
import Chart from '../Components/Chart';
import FeaturedInfo from '../Components/FeaturedInfo';
import { userData, salesData } from '../data';

const Container = styled.div`
  flex: 4;
`;

const Analytics = () => {
  return (
    <Container>
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active Users"/>
      <Chart data={salesData} title="Sales Analytics" grid dataKey="Sales"/>
    </Container>
  )
}

export default Analytics