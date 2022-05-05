import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import Chart from '../Components/Chart';
import FeaturedInfo from '../Components/FeaturedInfo';
import { userData, salesData } from '../data';
import { userRequest } from '../requestMethods';

const Container = styled.div`
  flex: 4;
`;

const Analytics = () => {
  const [salesStats, setSalesStats] = useState([]);
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
        const res = await userRequest.get("/orders/stats");
        res.data.map((item) =>
          setSalesStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Sales": item.total },
          ])
        );
      } catch {}
    };
    getStats();
  }, [MONTHS]);

  return (
    <Container>
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active Users"/>
      <Chart data={salesStats} title="Sales Analytics" grid dataKey="Sales"/>
    </Container>
  )
}

export default Analytics