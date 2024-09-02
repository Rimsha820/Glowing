import React from 'react';
import styled from 'styled-components';
import { IoPersonOutline, IoStarOutline } from 'react-icons/io5';
import { RiShoppingBag4Line } from 'react-icons/ri';
import { MdSearch } from 'react-icons/md';

// Styled components
const HeaderContainer = styled.header`
  background-color: white; 
  color: black; 
  height: 100px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column; 
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  margin-bottom:40px;
`;

const HeadingAndIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    
  }
`;

const Heading = styled.h1`
  font-size: 24px;
  color: black;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5); 
  margin: 0;

  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 10px;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

const PriceLabel = styled.span`
  font-size: 14px;
  font-weight: bold;
  margin-left: 10px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const SearchBar = styled.input`
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 150px;
  height: 22px;

  @media (min-width: 768px) {
    width: 210px;
    font-size: 16px;
  }
`;

const SearchIcon = styled(MdSearch)`
  color: black;
  font-size: 20px;
  margin-left: -30px;

  @media (min-width: 768px) {
    font-size: 24px;
    margin-left: -40px;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    display: none; // Hide menu on small screens
  }
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  gap: 20px;
  margin-top: 40px;
`;

const MenuItem = styled.li`
  margin-left: 20px;
   text-decoration: none;
`;

const MenuLink = styled.a`
  text-decoration: none;
  color: black; 
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: red;
  }
`;

// Add a responsive mobile menu button
const MobileMenuButton = styled.button`
  display: none;
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  left: 20px;
  top: 60px;
  z-index: 1100;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: none;
  position: absolute;
  top: 100px;
  left: 20px;
  background-color: white;
  border: 1px solid #ccc;
  padding: 10px;
  z-index: 1000;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenuItem = styled(MenuItem)`
  margin-left: 0;
  margin-bottom: 10px;
`;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <HeaderContainer>
      <HeadingAndIcons>
        <SearchContainer>
          <SearchBar placeholder="Search Product" />
          <SearchIcon />
        </SearchContainer>
        <Heading>GLOWING</Heading> 
        <IconContainer>
          <IoPersonOutline size={24} />
          <IoStarOutline size={24} />
          <PriceLabel>$0.00</PriceLabel>
          <RiShoppingBag4Line size={24} />
        </IconContainer>
        <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </MobileMenuButton>
      </HeadingAndIcons>
      <HeaderContent>
        <Menu>
          <MenuItem>
            <MenuLink href="#home">Home</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="#collection">Collection</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="#shop">Shop</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="#offer">Offer</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="#blog">Blog</MenuLink>
          </MenuItem>
        </Menu>
      </HeaderContent>
      {isMenuOpen && (
        <MobileMenu>
          <MobileMenuItem>
            <MenuLink href="#home">Home</MenuLink>
          </MobileMenuItem>
          <MobileMenuItem>
            <MenuLink href="#collection">Collection</MenuLink>
          </MobileMenuItem>
          <MobileMenuItem>
            <MenuLink href="#shop">Shop</MenuLink>
          </MobileMenuItem>
          <MobileMenuItem>
            <MenuLink href="#offer">Offer</MenuLink>
          </MobileMenuItem>
          <MobileMenuItem>
            <MenuLink href="#blog">Blog</MenuLink>
          </MobileMenuItem>
        </MobileMenu>
      )}
    </HeaderContainer>
  );
};

export default Header;
