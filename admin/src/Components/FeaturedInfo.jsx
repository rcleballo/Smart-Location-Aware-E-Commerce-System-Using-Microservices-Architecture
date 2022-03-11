import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import styled from 'styled-components';

const Feature = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const FeaturedItem = styled.div`
  flex: 1;
  margin: 0px 20px;
  padding: 30px;
  border-radius: 10px;
  cursor: pointer;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const FeaturedTitle = styled.span`
  font-size: 20px;
`;

const FeaturedMoneyContainer = styled.div`
  margin: 10px 0px 0px;
  display: flex;
  align-items: center;
`;

const FeaturedMoney = styled.span`
  font-size: 30px;
  font-weight: 600;
`;

const FeaturedMoneyRate = styled.span`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

const FeaturedSubTitle = styled.span`
  font-size: 15px;
  color: grey;
`;

const FeaturedInfo = () => {
  return (
    <Feature>
      <FeaturedItem>
        <FeaturedTitle>Revenue</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>M10 000</FeaturedMoney>
          <FeaturedMoneyRate>
            -100
            <ArrowDownward style={{ fontSize: "14px", marginLeft: "5px", color: "red" }}/>
          </FeaturedMoneyRate>
        </FeaturedMoneyContainer>
        <FeaturedSubTitle>Compared to Last Month</FeaturedSubTitle>
      </FeaturedItem>
      <FeaturedItem>
        <FeaturedTitle>Sales</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>M50 000</FeaturedMoney>
          <FeaturedMoneyRate>
            -200
            <ArrowDownward style={{ fontSize: "14px", marginLeft: "5px", color: "red" }}/>
          </FeaturedMoneyRate>
        </FeaturedMoneyContainer>
        <FeaturedSubTitle>Compared to Last Month</FeaturedSubTitle>
      </FeaturedItem>
      <FeaturedItem>
        <FeaturedTitle>Cost</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>M5 000</FeaturedMoney>
          <FeaturedMoneyRate>
            +1000
            <ArrowUpward style={{ fontSize: "14px", marginLeft: "5px", color: "green" }}/>
          </FeaturedMoneyRate>
        </FeaturedMoneyContainer>
        <FeaturedSubTitle>Compared to Last Month</FeaturedSubTitle>
      </FeaturedItem>
    </Feature>
  )
}

export default FeaturedInfo