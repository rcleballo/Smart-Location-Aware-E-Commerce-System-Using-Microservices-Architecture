import { useEffect, useState } from 'react';
import styled from 'styled-components';
import {format} from "timeago.js"
import { userRequest } from '../requestMethods';

const Widget = styled.div`
  flex: 2;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;
`;

const WidgetTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
`;

const WidgetTable = styled.table`
  width: 100%;
  border-spacing: 20px;
`;

const WidgetTbody = styled.tbody`

`;

const WidgetTr = styled.tr`

`;

const WidgetTh = styled.th`
  text-align: left;
`;

const WidgetTd = styled.td`
  display: flex;
  align-items: center;
  font-weight: 600;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const UserName = styled.span`

`;

const Date = styled.td`
  font-weight: 300;
`;

const Amount = styled.td`
  font-weight: 300;
`;

const Status = styled.td`

`;

const WidgetButton = styled.button`
  padding: 5px 7px;
  border: none;
  border-radius: 10px;
  background-color: ${props => {
    switch(props.type) {
      case "Approved": 
        return "#74c69d";
      case "Declined": 
        return "#e5989b";
      default: 
        return  "#ade8f4";
    }
  }};
  color: ${props => {
    switch(props.type) {
      case "Approved": 
        return "#40916c";
      case "Declined": 
        return "#dc2f02";
      default: 
        return  "#0077b6";
    }
  }};
`;

const WidgetLarge = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("orders");
        setOrders(res.data);
      } catch {}
    };
    getOrders();
  }, []);

  const Button = ({ type }) => {
    return <WidgetButton type={type}>{ type }</WidgetButton>
  }

  return (
    <Widget>
      <WidgetTitle>Latest Translations</WidgetTitle>
      <WidgetTable>
        <WidgetTbody>
          <WidgetTr>
            <WidgetTh>Customer</WidgetTh>
            <WidgetTh>Date</WidgetTh>
            <WidgetTh>Amount</WidgetTh>
            <WidgetTh>Status</WidgetTh>
          </WidgetTr>
          {orders.map((order) => (
            <WidgetTr key={order._id}>
              <WidgetTd>
                <UserName>{order.userId}</UserName>
              </WidgetTd>
              <Date>{format(order.createdAt)}</Date>
              <Amount>M{order.amount}</Amount>
              <Status>
                <Button type={order.status} />
              </Status>
            </WidgetTr>
          ))}
        </WidgetTbody>
      </WidgetTable>
    </Widget>
  )
}

export default WidgetLarge