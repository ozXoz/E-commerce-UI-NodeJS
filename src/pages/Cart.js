import React from 'react';
import styled from 'styled-components';
import { Add, Remove } from '@mui/icons-material';

const Container = styled.div``;

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
  cursor: pointer;
  border: ${(props) => props.type === 'filled' && 'none'};
  background-color: ${(props) =>
    props.type === 'filled' ? 'black' : 'transparent'};
  color: ${(props) => props.type === 'filled' && 'white'};
`;

const TopTexts = styled.div``;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
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
  align-items: center;
`;

const Image = styled.img`
  width: 200px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;


const Details = styled.div`
  padding: 20px;
`;

const ProductName = styled.span`
  font-size: 14px;
  font-weight: 600;
`;

const ProductId = styled.span`
  font-size: 12px;
`;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span`
  font-size: 12px;
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
  font-size: 20px;
  font-weight: 600;
  transition: color 0.3s ease;

  &:hover {
    color: teal;
  }
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
  font-weight: ${(props) => props.type === 'total' && '600'};
  font-size: ${(props) => props.type === 'total' && '20px'};
`;

const SummaryItemText = styled.span`
  font-size: 16px;
`;

const SummaryItemPrice = styled.span`
  font-size: 18px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const AddButton = styled(Add)`
  transition: color 0.3s ease;

  &:hover {
    color: teal;
  }
`;

const RemoveButton = styled(Remove)`
  transition: color 0.3s ease;

  &:hover {
    color: teal;
  }
`;

const Cart = () => {
    return (
      <Container>
        <Wrapper>
          <Title>YOUR BAG</Title>
          <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
              <TopText>Shopping Bag (2)</TopText>
              <TopText>Your Wishlist (0)</TopText>
            </TopTexts>
            <TopButton type="filled">CHECKOUT NOW</TopButton>
          </Top>
          <Bottom>
            <Info>
              <Product>
                <ProductDetail>
                  <Image src="https://www.hilifiger-canada.com/images/large/hilfiger-canada/Men_s_Tommy_Hilfiger_Essential_Organic_C-TH328OFC_ZOOM.jpg" />
                  <Details>
                    <ProductName>
                      <b>Product:</b> Men's Tommy Hilfiger Essential Organic Cotton Flag T Shirts Red
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> TH328OFC
                    </ProductId>
                    <ProductColor color="black" />
                    <ProductSize>
                      <b>Size:</b> L
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                <ProductAmountContainer>
                    <AddButton />
                <ProductAmount>2</ProductAmount>
                     <RemoveButton />
                    </ProductAmountContainer>
                  <ProductPrice>$30</ProductPrice>
                </PriceDetail>
              </Product>
              <Hr />
              <Product>
                <ProductDetail>
                  <Image src="https://i.ibb.co/zXkwt6Y/16460373-002.jpg" />
                  <Details>
                    <ProductName>
                      <b>Product:</b> Fossil Blue 42mm Men's Fashion Watch - Brown/Green/Silver
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> 9381372323
                    </ProductId>
                    <ProductColor color="gray" />
                    <ProductSize>
                      <b>Size:</b> M
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                <ProductAmountContainer>
                    <AddButton />
                <ProductAmount>2</ProductAmount>
                     <RemoveButton />
                    </ProductAmountContainer>
                  <ProductPrice>$20</ProductPrice>
                </PriceDetail>
              </Product>
            </Info>
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>$80</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice>$5.90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemPrice>-$5.90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>$80</SummaryItemPrice>
              </SummaryItem>
              <Button>CHECKOUT NOW</Button>
            </Summary>
          </Bottom>
        </Wrapper>
      </Container>
    );
  };
  
  export default Cart;
  
