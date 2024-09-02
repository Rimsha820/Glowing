import React from 'react';
import styled from 'styled-components';
import Feature1 from '../assets/feature-1.jpg';
import Feature2 from '../assets/feature-2.jpg';
import Feature3 from '../assets/feature-3.jpg';

// Styled components
const PageContainer = styled.div`
  padding: 20px;
  background-color: white;
  // min-height: 100vh;z
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin-top: 90px;
  font-family: 'Urbanist', sans-serif;
`;

const FeaturesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;
  flex-wrap: wrap;
  margin-top:40px;
`;

const FeatureImageWrapper = styled.div`
  text-align: center;
`;

const FeatureImage = styled.img`
  width: 150px;
  height: auto;
  margin-top: 60px;
`;

const FeatureDescription = styled.p`
  font-size: 1.5rem;
  color: black;
  font-family: 'Urbanist', sans-serif;
  font-weight: bold;
  margin-bottom: 10px;
`;

const AdditionalInfo = styled.p`
  font-size: 1rem;
  color: #666;
  font-family: 'Urbanist', sans-serif;
`;

// ShopPage component
const ShopPage: React.FC = () => {
  return (
    <PageContainer>
      <Heading>Why Shop With Glowing?</Heading>
      <FeaturesContainer>
        <FeatureImageWrapper>
          <FeatureImage src={Feature1} alt="Feature 1" />
          <FeatureDescription>Guaranteed PURE</FeatureDescription>
          <AdditionalInfo>All Grace formulations adhere to strict purity <br/>standards and will never contain harsh or toxic ingredients.</AdditionalInfo>
        </FeatureImageWrapper>
        <FeatureImageWrapper>
          <FeatureImage src={Feature2} alt="Feature 2" />
          <FeatureDescription>Completely Cruelty-Free</FeatureDescription>
          <AdditionalInfo>All Grace formulations adhere to strict purity <br/>standards and will never contain harsh or toxic ingredients.</AdditionalInfo>
        </FeatureImageWrapper>
        <FeatureImageWrapper>
          <FeatureImage src={Feature3} alt="Feature 3" />
          <FeatureDescription>Ingredient Sourcing</FeatureDescription>
          <AdditionalInfo>All Grace formulations adhere to strict purity<br/> standards and will never contain harsh or toxic ingredients.</AdditionalInfo>
        </FeatureImageWrapper>
      </FeaturesContainer>
    </PageContainer>
  );
};

export default ShopPage;
