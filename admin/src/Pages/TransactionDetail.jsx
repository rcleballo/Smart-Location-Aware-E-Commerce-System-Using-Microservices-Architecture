import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';

const Container = styled.div`
  flex: 4;
`;

const TransactionTop = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75); 
`;

const TransactionTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TransactionTitle = styled.h1`
  color: #555
`;

const EditButton = styled.button`
  width: 80px;
  border: none;
  padding: 5px;
  background-color: #2a9d8f;
  border-radius: 10px;
  cursor: pointer;
  color: white;
  font-size: 16px;
`;

const TransactionTopTitle = styled.h2`
  font-weight: 600;
  color: #343a40;
`;

const Hr = styled.hr`
  margin-top: 10px;
  border-bottom: 0px solid #e9ecef;
`;

const TransactionTopItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  margin-right: 20px;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
`;

const TransactionTopItemName = styled.span`
  font-weight: 600;
`;

const TransactionTopItemPrice = styled.span`
  font-weight: 300;
`;

const TransactionTopItemCount = styled.span`

`;

const TransactionTopTotalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  margin-right: 20px;
`;

const TransactionTopTotalName = styled.span`
  font-weight: 600;
`;

const TransactionTopTotal = styled.span`
  font-weight: 300;
`;

const TransactionContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75); 
`;

const TransactionContactTitle = styled.h2`
  font-weight: 600;
  color: #343a40;
`;

const TransactionContactName = styled.span`
  margin-top: 10px;
`;

const TransactionShippingContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75); 
`;

const TransactionDetail = (props) => {
  const location = useParams();

  return (
    <Container>
      <TransactionTitleContainer>
        <TransactionTitle>Order: {location.transId}</TransactionTitle>
      </TransactionTitleContainer>
      <TransactionTop>
        <TransactionTopTitle>Items</TransactionTopTitle>
        <Hr />
        <TransactionTopItems>
          <Image src="https://i.ibb.co/HNYjMxp/81-Xdqh0b-WGL-AC-SY355.jpg" alt="" />
          <TransactionTopItemName>MSI GF65 thin 9SD</TransactionTopItemName>
          <TransactionTopItemPrice>M 20000</TransactionTopItemPrice>
          <TransactionTopItemCount>2</TransactionTopItemCount>
          <TransactionTopItemPrice>M 40000</TransactionTopItemPrice>
        </TransactionTopItems>
        <TransactionTopItems>
          <Image src="https://i.ibb.co/HNYjMxp/81-Xdqh0b-WGL-AC-SY355.jpg" alt="" />
          <TransactionTopItemName>MSI GF65 thin 9SD</TransactionTopItemName>
          <TransactionTopItemPrice>M 20000</TransactionTopItemPrice>
          <TransactionTopItemCount>1</TransactionTopItemCount>
          <TransactionTopItemPrice>M 40000</TransactionTopItemPrice>
        </TransactionTopItems>
        <TransactionTopItems>
          <Image src="https://i.ibb.co/HNYjMxp/81-Xdqh0b-WGL-AC-SY355.jpg" alt="" />
          <TransactionTopItemName>MSI GF65 thin 9SD</TransactionTopItemName>
          <TransactionTopItemPrice>M 20000</TransactionTopItemPrice>
          <TransactionTopItemCount>2</TransactionTopItemCount>
          <TransactionTopItemPrice>M 40000</TransactionTopItemPrice>
        </TransactionTopItems>
        <TransactionTopItems>
          <Image src="https://i.ibb.co/HNYjMxp/81-Xdqh0b-WGL-AC-SY355.jpg" alt="" />
          <TransactionTopItemName>MSI GF65 thin 9SD</TransactionTopItemName>
          <TransactionTopItemPrice>M 20000</TransactionTopItemPrice>
          <TransactionTopItemCount>1</TransactionTopItemCount>
          <TransactionTopItemPrice>M 40000</TransactionTopItemPrice>
        </TransactionTopItems>
        <Hr />
        <TransactionTopTotalContainer>
          <TransactionTopTotalName>Subtotal</TransactionTopTotalName>
          <TransactionTopTotal>M 120000</TransactionTopTotal>
        </TransactionTopTotalContainer>
        <TransactionTopTotalContainer>
          <TransactionTopTotalName>Shipping</TransactionTopTotalName>
          <TransactionTopTotal>M 1200</TransactionTopTotal>
        </TransactionTopTotalContainer>
        <Hr />
        <TransactionTopTotalContainer>
          <TransactionTopTotalName>Total</TransactionTopTotalName>
          <TransactionTopTotal>M 122200</TransactionTopTotal>
        </TransactionTopTotalContainer>
      </TransactionTop>
      <TransactionContactContainer>
        <TransactionContactTitle>Contact</TransactionContactTitle>
        <TransactionContactName style={{ fontWeight: "400" }}>John Smith</TransactionContactName>
        <TransactionContactName style={{ fontWeight: "400", color: "#023e8a" }}>johnsmith@gmail</TransactionContactName>
        <TransactionContactName style={{ fontWeight: "400", color: "#6c757d" }}>+266 5687 5643</TransactionContactName>
      </TransactionContactContainer>
      <TransactionShippingContainer>
        <TransactionContactTitle>Shipping Address</TransactionContactTitle>
        <TransactionContactName style={{ fontWeight: "400" }}>John Smith</TransactionContactName>
        <TransactionContactName style={{ fontWeight: "400" }}>Roma 180</TransactionContactName>
        <TransactionContactName style={{ fontWeight: "400" }}>Maseru 100</TransactionContactName>
        <TransactionContactName style={{ fontWeight: "400" }}>Lesotho</TransactionContactName>
      </TransactionShippingContainer>
    </Container>
  )
}

export default TransactionDetail