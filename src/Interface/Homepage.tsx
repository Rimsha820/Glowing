import React from 'react';
import styled from 'styled-components';
import { FaArrowRightLong } from 'react-icons/fa6';  
import hero1 from '../assets/hero-banner-1.jpg';
import collect1 from '../assets/collection-1.jpg';
import collect2 from '../assets/collection-2.jpg';
import collect3 from '../assets/collection-3.jpg';

const PageContainer = styled.div`
  background: url(${hero1}) center center/cover no-repeat;
  height: 70vh;
  color: white;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 20px;
  position: relative;
  margin-top: 150px;

  @media (max-width: 768px) {
    height: 60vh;
    padding: 0 10px;
  }

  @media (max-width: 480px) {
    height: 50vh;
    justify-content: center;
    text-align: center;
  }
`;

const ContentWrapper = styled.div`
  max-width: 600px;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 65px;
  margin-left: 60px;

  @media (max-width: 768px) {
    margin-left: 20px;
    max-width: 90%;
  }

  @media (max-width: 480px) {
    margin: 0 auto;
  }
`;

const Title = styled.h1`
  font-size: 55px;
  color: black;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 45px;
  }

  @media (max-width: 480px) {
    font-size: 35px;
  }
`;

const Description = styled.p`
  font-size: 22px;
  color: #777876;
  margin: 20px 0;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const Price = styled.div`
  font-size: 22px;
  color: black;
  margin: 24px 0;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 15px 28px;
  font-size: 16px;
  color: white;
  background-color: black;
  text-decoration: none;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 480px) {
    padding: 12px 24px;
    font-size: 14px;
  }
`;

const CollectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 50px 20px;
  gap: 40px;
  margin-top: 50px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 20px;
    padding: 30px 10px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CollectionItem = styled.div<{ background: string }>`
  position: relative;
  width: 410px;
  height: 460px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url(${(props) => props.background}) center center/cover no-repeat;
    z-index: -2;  
    transition: transform 0.5s;  
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: -75%;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      75deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.3) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    transition: all 0.7s;
    z-index: -1;  
  }

  &:hover:before {
    transform: scale(1.1);  
  }

  &:hover:after {
    left: 100%;  
  }

  @media (max-width: 768px) {
    width: 350px;
    height: 400px;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 350px;
    height: 380px;
  }
`;

const CollectionText = styled.div`
  position: absolute; 
  top: 40px; 
  left: 40px; 
  color: white;

  @media (max-width: 480px) {
    top: 20px;
    left: 20px;
  }
`;

const CollectionTitle = styled.h2`
  font-size: 28px;
  margin: 0;
  color: black;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const CollectionDescription = styled.p`
  font-size: 18px;
  margin: 8px 0 0;
  color: black;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const DiscoverContainer = styled.div`
  position: absolute;
  bottom: 20px; 
  left: 40px;  
  display: flex; 
  align-items: center; 
  color: black; 
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;

  @media (max-width: 480px) {
    bottom: 15px;
    left: 20px;
    font-size: 16px;
  }
`;

const HomePage: React.FC = () => {
  return (
    <>
      <PageContainer>
        <ContentWrapper>
          <Title>Reveal The <br /> Beauty of Skin</Title>
          <Description>
            Made using clean, non-toxic ingredients, our products <br />are designed for everyone.
          </Description>
          <Price>Starting at $7.99</Price>
          <Button href="/about">Shop Now</Button>
        </ContentWrapper>
      </PageContainer>

      {/* Collection Section */}
      <CollectionContainer>
        {/* Collection Item 1 */}
        <CollectionItem background={collect1}>
          <CollectionText>
            <CollectionTitle>Summer Collection</CollectionTitle>
            <CollectionDescription>Starting at $17.99</CollectionDescription>
          </CollectionText>
          <DiscoverContainer>
            Discover Now <FaArrowRightLong style={{ marginLeft: '10px' }} />
          </DiscoverContainer>
        </CollectionItem>

        {/* Collection Item 2 */}
        <CollectionItem background={collect2}>
          <CollectionText>
            <CollectionTitle>What's New</CollectionTitle>
            <CollectionDescription>Get the glow</CollectionDescription>
          </CollectionText>
          <DiscoverContainer>
            Discover Now <FaArrowRightLong style={{ marginLeft: '10px' }} />
          </DiscoverContainer>
        </CollectionItem>

        {/* Collection Item 3 */}
        <CollectionItem background={collect3}>
          <CollectionText>
            <CollectionTitle>Buy 1 Get 1</CollectionTitle>
            <CollectionDescription>Starting at $7.99</CollectionDescription>
          </CollectionText>
          <DiscoverContainer>
            Discover Now <FaArrowRightLong style={{ marginLeft: '10px' }} />
          </DiscoverContainer>
        </CollectionItem>
      </CollectionContainer>
    </>
  );
};

export default HomePage;
