import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

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
  font-weight: 500;
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

  const order = useSelector((state) =>
    state.order.orders.find((order) => order._id === location.transId)
  );

  console.log(order);

  return (
    <Container>
      <TransactionTitleContainer>
        <TransactionTitle>Order: {location.transId}</TransactionTitle>
      </TransactionTitleContainer>
      <TransactionTop>
        <TransactionTopTitle>Items</TransactionTopTitle>
        <Hr />
        {order.products.map((order) => (
          <TransactionTopItems id={order.productId}>
            <TransactionTopItemName>ID: {order.productId}</TransactionTopItemName>
            <TransactionTopItemCount>Quantity: {order.quantity}</TransactionTopItemCount>
          </TransactionTopItems>
        ))}
        <Hr />
        <TransactionTopTotalContainer>
          <TransactionTopTotalName>Total</TransactionTopTotalName>
          <TransactionTopTotal>M {order.amount}</TransactionTopTotal>
        </TransactionTopTotalContainer>
      </TransactionTop>
      <TransactionContactContainer>
        <TransactionContactTitle>Customer</TransactionContactTitle>
        <TransactionContactName style={{ fontWeight: "400" }}>User ID: {order.userId}</TransactionContactName>
      </TransactionContactContainer>
      <TransactionShippingContainer>
        <TransactionContactTitle>Shipping Address</TransactionContactTitle>
        <TransactionContactName style={{ fontWeight: "400" }}>{order.address}</TransactionContactName>
      </TransactionShippingContainer>
    </Container>
  )
}

export default TransactionDetail