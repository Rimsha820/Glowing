import React from 'react';
import styled from 'styled-components';
import offer1 from '../assets/offer-banner-1.jpg';
import offer2 from '../assets/offer-banner-2.jpg';

// Styled components
const OfferContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  margin: 20px auto;
  height: 80vh;

  @media (max-width: 1024px) {
    flex-direction: column;
    height: auto;
    padding: 20px 10px;
  }

  @media (max-width: 768px) {
    padding: 15px 5px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    padding: 10px;
  }
`;

const FirstOfferImage = styled.img`
  width: 18%;
  height: auto;
  margin-left: 240px;

  @media (max-width: 1024px) {
    width: 30%;
    margin-left: 0;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    width: 35%;
  }

  @media (max-width: 480px) {
    width: 40%;
  }
`;

const SecondOfferImage = styled.img`
  width: 23%;
  height: auto;
  margin-left: 40px;

  @media (max-width: 1024px) {
    width: 35%;
    margin-left: 0;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    width: 40%;
  }

  @media (max-width: 480px) {
    width: 45%;
  }
`;

const OfferText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 80px;

  @media (max-width: 1024px) {
    margin-left: 0;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 480px) {
    margin-top: 20px;
  }
`;

const OfferHeading = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin: 0;
  font-family: Urbanist, sans-serif;
  display: flex;
  align-items: center;

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const DiscountHeading = styled.span`
  font-size: 1rem;
  color: #fff;
  background-color: hsl(148, 20%, 38%);
  padding: 6px 12px;
  margin-left: 10px; 
  font-family: 'Urbanist', sans-serif;

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 5px 10px;
  }
`;

const SecondaryHeading = styled.h3`
  font-size: 2.4rem;
  color: #333;
  margin-bottom: 10px;
  font-family: 'Urbanist', sans-serif;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const OfferDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0; 
  font-family: 'Urbanist', sans-serif;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const Timer = styled.p`
  font-size: 2.5rem;
  color: #4e7460;
  margin: 20px 0; 
  font-family: 'Urbanist', sans-serif;
  font-weight: bold;
  letter-spacing: 2px; 

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const OfferButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 15px 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    padding: 12px 18px;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 10px 16px;
    font-size: 0.85rem;
  }
`;

// OfferComponent
const OfferComponent: React.FC = () => {
  return (
    <OfferContainer>
      <FirstOfferImage src={offer1} alt="Offer Banner 1" />
      <SecondOfferImage src={offer2} alt="Offer Banner 2" />
      <OfferText>
        <OfferHeading>
          Special Offer
          <DiscountHeading>-20%</DiscountHeading>
        </OfferHeading>
        <SecondaryHeading>Mountain Pine Bath Oil</SecondaryHeading>
        <OfferDescription>
          Made using clean, non-toxic ingredients, our products <br />are designed for everyone.
        </OfferDescription>
        <Timer>15&nbsp;:&nbsp;21&nbsp;:&nbsp;46&nbsp;:&nbsp;08</Timer>
        <OfferButton>Get only $39.00</OfferButton>
      </OfferText>
    </OfferContainer>
  );
};

export default OfferComponent;
