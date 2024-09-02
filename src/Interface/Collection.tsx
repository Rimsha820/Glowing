import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaArrowRight } from 'react-icons/fa';
import { IoPersonOutline, IoStarOutline } from 'react-icons/io5';
import { RiShoppingBag4Line } from 'react-icons/ri';

// Importing images
import product1 from '../assets/product-01.jpg';
import product2 from '../assets/product-02.jpg';
import product3 from '../assets/product-03.jpg';
import product4 from '../assets/product-04.jpg';
import product5 from '../assets/product-05.jpg';
import product6 from '../assets/product-06.jpg';
import product7 from '../assets/product-07.jpg';
import product8 from '../assets/product-08.jpg';
import product9 from '../assets/product-09.jpg';
import product10 from '../assets/product-10.jpg';
import banner1 from '../assets/banner-1.jpg';
import banner2 from '../assets/banner-2.jpg';

// Keyframes for the shine effect
const shine = keyframes`
  0% {
    background-position: -150%;
  }
  50% {
    background-position: 150%;
  }
  100% {
    background-position: -150%;
  }
`;

// Styled components
const PageContainer = styled.div`
  padding: 20px;
  background-color: white;
  min-height: 100vh;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const HeaderContainers = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 100px;
  font-family: 'Urbanist', sans-serif;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    margin-top: 50px;
  }
`;

const Header = styled.h1`
  color: #333;
  font-family: 'Urbanist', sans-serif;
  margin-left: 230px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-left: 0;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

const Paragraph = styled.p`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-family: 'Urbanist', sans-serif;
  margin-right: 230px;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-right: 0;
    margin-top: 10px;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const ArrowIcon = styled(FaArrowRight)`
  margin-left: 8px;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
`;

const CollectionImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const CollectionImage = styled.img`
  width: 240px;
  height: auto;
  object-fit: cover;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const IconContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 10px;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;

  @media (max-width: 768px) {
    gap: 5px;
  }

  @media (max-width: 480px) {
    gap: 4px;
  }
`;

const Icon = styled.div`
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  padding: 10px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
`;

const ProductInfo = styled.div`
  text-align: center;
  margin-top: 20px;
  padding: 0 10px;
`;

const Price = styled.p`
  font-size: 18px;
  color: #333;
  margin: 5px 0;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const ProductName = styled.p`
  font-size: 20px;
  color: black;
  margin: 5px 0;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const RatingAndReviews = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: #ffcc00;
  margin: 5px 0;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const Reviews = styled.p`
  font-size: 14px;
  color: #999;
  margin-left: 10px;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

const BannerContainer = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 100px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
  }
`;

const Banner = styled.div<{ bgImage: string }>`
  flex: ${({ bgImage }) => (bgImage === banner1 ? '0 0 48%' : '0 0 25%')};
  height: 420px;
  background-image: url(${({ bgImage }) => bgImage});
  background-size: cover;
  background-position: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-left: ${({ bgImage }) => (bgImage === banner1 ? '225px' : '0')};
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    flex: 0 0 90%;
    margin-left: 0;
    height: 300px;
  }

  &:hover::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0.4) 20%,
      rgba(255, 255, 255, 0.2) 40%
    );
    background-size: 200% auto;
    animation: ${shine} 1.2s infinite linear;
  }
`;

const BannerTextContainer = styled.div`
  position: absolute;
  top: 70px;
  left: 50px;
  color: black;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 768px) {
    top: 50px;
    left: 20px;
  }

  @media (max-width: 480px) {
    top: 30px;
    left: 10px;
  }
`;

const BannerHeading = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  font-family: 'Urbanist', sans-serif;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const BannerParagraph = styled.p`
  font-size: 32px;
  margin-top: 8px;
  font-weight: bold;
  font-family: 'Urbanist', sans-serif;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const BannerButton = styled.button`
  width: 120px;
  padding: 15px;
  background-color: white;
  color: black;
  border: none;
  font-size: 15px;
  cursor: pointer;
  transition: background-color 0.3s;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 8px;
  }
`;

const CollectionPage: React.FC = () => {
  // Array for "Our Best Sellers" images
  const bestSellerImages = [product1, product2, product3, product4, product5];
  // Array for "Under $25" images
  const under25Images = [product6, product7, product8, product9, product10];

  // Sample data for the product details
  const productDetails = [
    { price: "$39.00", name: "Facial cleanser", rating: "★★★★★", reviews: "5170 reviews" },
    { price: "$29.00", name: "Bio-shoom serum", rating: "★★★★★", reviews: "1170 reviews" },
    { price: "$25.00", name: "Coffee bean eye cream", rating: "★★★★★", reviews: "6190 reviews" },
    { price: "$19.00", name: "Facial cream", rating: "★★★★★", reviews: "2170 reviews" },
    { price: "$15.00", name: "Caffeine cream", rating: "★★★★★", reviews: "9170 reviews" },
  ];

  return (
    <PageContainer>
      <HeaderContainer>
        <Header>Our Best Sellers</Header>
        <Paragraph>
          Shop All Products <ArrowIcon />
        </Paragraph>
      </HeaderContainer>
      <ImageContainer>
        {bestSellerImages.map((image, index) => (
          <CollectionImageWrapper key={index}>
            <CollectionImage src={image} alt={`Product ${index + 1}`} />
            <IconContainer>
              <Icon>
                <IoPersonOutline size={24} />
              </Icon>
              <Icon>
                <IoStarOutline size={24} />
              </Icon>
              <Icon>
                <RiShoppingBag4Line size={24} />
              </Icon>
            </IconContainer>
            <ProductInfo>
              <Price>{productDetails[index]?.price || "$0.00"}</Price>
              <ProductName>{productDetails[index]?.name || "Product Name"}</ProductName>
              <RatingAndReviews>
                <span>{productDetails[index]?.rating || "★★★★★"}</span>
                <Reviews>{productDetails[index]?.reviews || "0 reviews"}</Reviews>
              </RatingAndReviews>
            </ProductInfo>
          </CollectionImageWrapper>
        ))}
      </ImageContainer>

      <HeaderContainers>
        <Header>Under $25</Header>
        <Paragraph>
          Shop All Products <ArrowIcon />
        </Paragraph>
      </HeaderContainers>
      <ImageContainer>
        {under25Images.map((image, index) => (
          <CollectionImageWrapper key={index}>
            <CollectionImage src={image} alt={`Under $25 Product ${index + 1}`} />
            <IconContainer>
              <Icon>
                <IoPersonOutline size={24} />
              </Icon>
              <Icon>
                <IoStarOutline size={24} />
              </Icon>
              <Icon>
                <RiShoppingBag4Line size={24} />
              </Icon>
            </IconContainer>
            <ProductInfo>
              <Price>{productDetails[index]?.price || "$0.00"}</Price>
              <ProductName>{productDetails[index]?.name || "Product Name"}</ProductName>
              <RatingAndReviews>
                <span>{productDetails[index]?.rating || "★★★★★"}</span>
                <Reviews>{productDetails[index]?.reviews || "0 reviews"}</Reviews>
              </RatingAndReviews>
            </ProductInfo>
          </CollectionImageWrapper>
        ))}
      </ImageContainer>

      {/* Banner images with headings, paragraphs, and buttons on the left side */}
      <BannerContainer>
        <Banner bgImage={banner1}>
          <BannerTextContainer>
            <BannerHeading>NEW COLLECTION</BannerHeading>
            <BannerParagraph>Discover Our <br />Autumn Skincare.</BannerParagraph>
            <BannerButton>Explore More</BannerButton>
          </BannerTextContainer>
        </Banner>
        <Banner bgImage={banner2}>
          <BannerTextContainer>
            <BannerHeading>25% off Everything</BannerHeading>
            <BannerParagraph>Check our <br />latest addition</BannerParagraph>
            <BannerButton>Shop Sale</BannerButton>
          </BannerTextContainer>
        </Banner>
      </BannerContainer>
    </PageContainer>
  );
};

export default CollectionPage;
