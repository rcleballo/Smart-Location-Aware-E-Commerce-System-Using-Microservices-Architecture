import styled from 'styled-components';
import Chart from '../Components/Chart';
import FeaturedInfo from '../Components/FeaturedInfo';
import WidgetLarge from '../Components/WidgetLarge';
import WidgetSmall from '../Components/WidgetSmall';
import { userData } from '../data';
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../requestMethods";


const Container = styled.div`
  flex: 4;
`;

const Widgets = styled.div`
  display: flex;
  margin: 20px;
`;

const Home = () => {
  const [userStats, setUserStats] = useState([]);
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try { 
        const res = await userRequest.get("/users/stats");
        res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Active User": item.total },
          ])
        );
      } catch {}
    };
    getStats();
  }, [MONTHS]);

  return (
    <Container>
      <FeaturedInfo />
      <Chart 
        data={userStats} 
        title="User Analytics" 
        grid 
        dataKey="Active User"
      />
      <Widgets>
        <WidgetSmall title='New Users' />
        <WidgetLarge title='Latest Translations' />
      </Widgets>
    </Container>
  )
}

export default Home