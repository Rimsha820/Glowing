import React from 'react';
import styled from 'styled-components';
import { FaArrowRight, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'; 
import Blog1 from '../assets/blog-1.jpg';
import Blog2 from '../assets/blog-2.jpg';
import Blog3 from '../assets/blog-3.jpg';
import logo from '../assets/logo.png'; 
import { FaWhatsapp } from 'react-icons/fa6';

// Styled components
const BlogContainer = styled.div`
  padding: 20px;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const BlogHeading = styled.h1`
  font-size: 2.5rem;
  color: #333;
  font-family: 'Urbanist', sans-serif;
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 15px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const BlogImageWrapper = styled.div`
  text-align: center;
  flex: 1;
  max-width: 430px;
  margin-top: 40px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const BlogImage = styled.img`
  width: 100%;
  height: auto;
  transition: transform 0.3s ease-in-out;

  ${BlogImageWrapper}:hover & {
    transform: scale(1.05); 
  }
`;

const ImageTextHeading = styled.h2`
  font-size: 1.5rem;
  color: #333;
  font-family: 'Urbanist', sans-serif;
  margin-top: 30px;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const ImageTextParagraph = styled.p`
  font-size: 1.1rem;
  color: black;
  font-family: 'Urbanist', sans-serif;
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-left: 170px;

  @media (max-width: 768px) {
    margin-left: 0;
    justify-content: center;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ArrowIcon = styled(FaArrowRight)`
  margin-left: 6px;
  color: black; 
`;

const FooterContainer = styled.footer`
  width: 100%;
  height: 50vh;
  background-color: #f8f9fa;
  display: flex;
  justify-content: space-between; 
  align-items: flex-start;
  padding: 40px 60px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 30px 20px;
  }

  @media (max-width: 480px) {
    padding: 20px 10px;
  }
`;

const FooterSection = styled.div`
  display: flex;
  gap: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  @media (max-width: 480px) {
    gap: 20px;
  }
`;

// Footer column styles
const FooterColumnBase = styled.div`
  text-align: left;
  max-width: 300px;
  margin-top: 100px;

  @media (max-width: 768px) {
    margin-top: 40px;
    max-width: 100%;
    text-align: center;
  }

  @media (max-width: 480px) {
    margin-top: 20px;
  }
`;

const CompanyColumn = styled(FooterColumnBase)`
  margin-left: 100px;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const UsefulLinksColumn = styled(FooterColumnBase)`
  margin-left: 50px;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const InformationColumn = styled(FooterColumnBase)`
  margin-left: 50px;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const GoodEmailsColumn = styled(FooterColumnBase)`
  font-size: 1.2rem;
  margin-left: 200px;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const FooterHeading = styled.h3`
  font-size: 1.5rem;
  color: #333;
  font-family: 'Urbanist', sans-serif;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const FooterHeadings = styled.h3`
  font-size: 2.1rem;
  color: #333;
  font-family: 'Urbanist', sans-serif;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

const FooterText = styled.p`
  font-size: 1rem;
  color: #555;
  font-family: 'Urbanist', sans-serif;
  margin: 5px 0;
  line-height: 1.5;
  cursor: pointer;

  &:hover {
    color: #000;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

// Footer Text for Good Emails Column, limited to 2 lines
const GoodEmailsText = styled(FooterText)`
  display: -webkit-box;
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const EmailInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; 
  margin-top: 10px;
  width: 500px;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const EmailInput = styled.input`
  flex: 1;
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: 'Urbanist', sans-serif;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #000;
  }

  @media (max-width: 480px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

const SubscribeButton = styled.button`
  padding: 12px 20px;
  font-size: 1rem;
  color: white;
  background-color: black;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Urbanist', sans-serif;

  &:hover {
    background-color: #333;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

// Social Media and Copyright Container
const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 60px;
  box-sizing: border-box;
  background-color: #f8f9fa;
  border-top: 1px solid #ddd;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 15px 20px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const CopyrightText = styled.p`
  font-size: 0.9rem;
  color: #555;
  font-family: 'Urbanist', sans-serif;
  flex: 1; 

  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 10px;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  gap: 20px;
  font-size: 1.2rem;
  color: #555;
  cursor: pointer;

  & > *:hover {
    color: black;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const Logo = styled.img`
  height: 40px;
  margin: 0 20px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    position: static;
    transform: none;
    margin-top: 10px;
  }

  @media (max-width: 480px) {
    height: 30px;
  }
`;

// BlogPage component
const BlogPage: React.FC = () => {
  return (
    <>
      <BlogContainer>
        <BlogHeading>More to Discover</BlogHeading>
        <ImageContainer>
          <BlogImageWrapper>
            <BlogImage src={Blog1} alt="Blog 1" />
            <ImageTextHeading>Find a Store</ImageTextHeading>
            <ImageTextParagraph>
              Our Store
              <ArrowIcon />
            </ImageTextParagraph>
          </BlogImageWrapper>
          <BlogImageWrapper>
            <BlogImage src={Blog2} alt="Blog 2" />
            <ImageTextHeading>From Our Blog</ImageTextHeading>
            <ImageTextParagraph>
              Our Store
              <ArrowIcon />
            </ImageTextParagraph>
          </BlogImageWrapper>
          <BlogImageWrapper>
            <BlogImage src={Blog3} alt="Blog 3" />
            <ImageTextHeading>Our Story</ImageTextHeading>
            <ImageTextParagraph>
              Our Store
              <ArrowIcon />
            </ImageTextParagraph>
          </BlogImageWrapper>
        </ImageContainer>
      </BlogContainer>

      {/* Footer Section */}
      <FooterContainer>
        <FooterSection>

          {/* Company Information */}
          <CompanyColumn>
            <FooterHeading>Company</FooterHeading>
            <FooterText>Find a location nearest you. See <br /><span style={{fontWeight:'bold', color:'black'}}>Our Stores</span></FooterText>
            <FooterText><span style={{fontWeight:'bold', color:'black'}}>+391 (0)35 2568 4593</span></FooterText>
            <FooterText>hello@domain.com</FooterText>
          </CompanyColumn>

          {/* Useful Links */}
          <UsefulLinksColumn>
            <FooterHeading>Useful Links</FooterHeading>
            <FooterText>New Products</FooterText>
            <FooterText>Best Sellers</FooterText>
            <FooterText>Bundle & Save</FooterText>
            <FooterText>Online Gift Card</FooterText>
          </UsefulLinksColumn>

          {/* Information */}
          <InformationColumn>
            <FooterHeading>Information</FooterHeading>
            <FooterText>Start a Return</FooterText>
            <FooterText>Contact Us</FooterText>
            <FooterText>Shipping FAQ</FooterText>
            <FooterText>Terms & Conditions</FooterText>
          </InformationColumn>

          {/* Good Emails Section */}
          <GoodEmailsColumn>
            <FooterHeadings>Good Emails.</FooterHeadings>
            <GoodEmailsText>
              Enter your email below to be the first to know about new collections and product <br />launches.
            </GoodEmailsText>
            <EmailInputContainer>
              <EmailInput type="email" placeholder="Enter your email" />
              <SubscribeButton>Subscribe</SubscribeButton>
            </EmailInputContainer>
          </GoodEmailsColumn>

        </FooterSection>
      </FooterContainer>

      {/* Footer Bottom Section */}
      <FooterBottom>
        <CopyrightText>© 2022 codewithsade</CopyrightText>
        <Logo src={logo} alt="Company Logo" />
        <SocialMediaIcons>
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaYoutube />
          <FaWhatsapp/>
        </SocialMediaIcons>
      </FooterBottom>
    </>
  );
};

export default BlogPage;
