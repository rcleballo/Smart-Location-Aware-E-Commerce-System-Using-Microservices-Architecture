import styled from 'styled-components';
import Chart from '../Components/Chart';
import FeaturedInfo from '../Components/FeaturedInfo';
import { userData } from '../data';

const Container = styled.div`
  flex: 4;
`;

const Home = () => {
  return (
    <Container>
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active Users"/>
    </Container>
  )
}

export default Home