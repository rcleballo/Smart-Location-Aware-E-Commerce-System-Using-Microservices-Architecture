import styled from 'styled-components';
import Chart from '../Components/Chart';
import FeaturedInfo from '../Components/FeaturedInfo';
import WidgetLarge from '../Components/WidgetLarge';
import WidgetSmall from '../Components/WidgetSmall';
import { userData } from '../data';

const Container = styled.div`
  flex: 4;
`;

const Widgets = styled.div`
  display: flex;
  margin: 20px;
`;

const Home = () => {
  return (
    <Container>
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active Users"/>
      <Widgets>
        <WidgetSmall />
        <WidgetLarge />
      </Widgets>
    </Container>
  )
}

export default Home