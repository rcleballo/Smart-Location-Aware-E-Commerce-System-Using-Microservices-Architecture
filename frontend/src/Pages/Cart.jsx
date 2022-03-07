import Navbar from '../Components/Navbar';
import Announcement from '../Components/Announcement';
import Footer from '../Components/Footer';
import styled from 'styled-components';
import { AddCircle, RemoveCircle } from '@material-ui/icons';

const Container = styled.div`

`;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) => props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`

`;

const TopText = styled.span`
  text-decoration: underline;
  margin: 0px 10px;
  cursor: pointer;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span`
  display: flex;
  justify-content: flex-end;
`;

const ProductId = styled.span`

`;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color}
`;

const ProductSize = styled.span`

`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${props=>props.type === "total" && "500"};
  font-size: ${props=>props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span`

`;

const SummaryItemPrice = styled.span`

`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <Title>YOUR CART</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Cart(2)</TopText>
            <TopText>Wishlist(0)</TopText>
          </TopTexts>
          <TopButton type='filled'>CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src='https://i.ibb.co/HHTFhnV/sister.png'/>
                <Details>
                  <ProductName><b>Product:</b> WINTER FASHIONABLE BLANKET</ProductName>
                  <ProductId><b>ID:</b> 12345678</ProductId>
                  <ProductColor color='grey'/>
                  <ProductSize><b>Size:</b> 32</ProductSize>
                </Details>
              </ProductDetail>
              <ProductDetail></ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddCircle/>
                  <ProductAmount>3</ProductAmount>
                  <RemoveCircle/>
                </ProductAmountContainer>
                <ProductPrice>M 900</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr/>
            <Product>
              <ProductDetail>
                <Image src='https://i.ibb.co/CPsvTZh/brother.png'/>
                <Details>
                  <ProductName><b>Product:</b> MEN'S BAG</ProductName>
                  <ProductId><b>ID:</b> 12345678</ProductId>
                  <ProductColor color='black'/>
                  <ProductSize><b>Size:</b> 32</ProductSize>
                </Details>
              </ProductDetail>
              <ProductDetail></ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddCircle/>
                  <ProductAmount>1</ProductAmount>
                  <RemoveCircle/>
                </ProductAmountContainer>
                <ProductPrice>M 100</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>M 900</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>M 100</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>M 100</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>M -50</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>M 1050</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer/>
    </Container>
  );
};

export default Cart;
