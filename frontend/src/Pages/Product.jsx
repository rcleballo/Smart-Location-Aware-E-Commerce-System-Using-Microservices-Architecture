import Navbar from '../Components/Navbar';
import Announcement from '../Components/Announcement';
import Footer from '../Components/Footer';
import styled from 'styled-components';
import { AddCircle, RemoveCircle } from '@material-ui/icons';
import { mobile } from '../responsive';
import Products from '../Components/Products';

const Container = styled.div`

`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 120vh;
  object-fit: cover;
  ${mobile({ height: "60vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Description = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props=>props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option`

`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;


const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  border-radius: 10px;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
    background-color: #f8f4f4;
  }
`;

const Related = styled.div`

`;

const RelatedTitle = styled.h1`
  font-weight: 200;
  font-size: 20px;
`;

const Product = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/HHTFhnV/sister.png" />
        </ImgContainer>
        <InfoContainer>
          <Title>Fashion Blanket</Title>
          <Description>
            The finest comfort of any cold season or place is the warm snugness of a blanket.
            How cruel then that we’re forced to leave it in the sanctuary of our bedrooms to brave the low temperatures. 
            Because, wouldn’t it raise a few eyebrows if we strolled into a meeting of our peers, swaddled in a blanket?
            In the Kingdom of Lesotho, Basotho blankets are a common part of daily wear. Not only as a barrier to the cold, 
            but also as a status symbol and cultural identification. Functional and aesthetically pleasing, 
            these blankets are built to last a lifetime
          </Description>
          <Price>M 300</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black"/>
              <FilterColor color="Yellow"/>
              <FilterColor color="Blue"/>
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveCircle/>
              <Amount>1</Amount>
              <AddCircle/>
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Related>
        <RelatedTitle>YOU MAY ALSO LIKE</RelatedTitle>
        <Products limit = {3}/>
      </Related>
      <Footer/>
    </Container>
  );
};

export default Product;
