import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import GlobalStyles from "../components/GlobalStyles";

const HeaderContainer = styled.header`
  background-color: blue;
  padding: 10px;
  color: white;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 100px;
  height: auto;
  object-fit: fixed;
`;

const BurgerIcon = styled(FaBars)`
  font-size: 24px;
  color: #fff;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    background-color: blue;
    padding: 10px;
    width: 100%;
    height: ${({ isOpen }) => (isOpen ? "auto" : "0")};
    overflow: hidden;
    transition: height 0.3s ease-in-out;
  }
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 5px;

  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
        setIsDropdownOpen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <HeaderContainer>
      <GlobalStyles />
      <div className="y-wrap">
        <Nav>
          <Logo src="images/customlogo.JPG" alt="Logo" />
          {isMobile ? (
            <>
              <BurgerIcon onClick={toggleDropdown} />
              <NavLinks isOpen={isDropdownOpen}>
                <NavLink href="/headlines">Headlines</NavLink>
                <NavLink href="/world">World</NavLink>
                <NavLink href="/politics">Politics</NavLink>
                <NavLink href="/business">Business</NavLink>
                <NavLink href="/health">Health</NavLink>
                <NavLink href="/entertainment">Entertainment</NavLink>
                <NavLink href="/travel">Travel</NavLink>
                <NavLink href="/sports">Sports</NavLink>
                <NavLink href="/profile">Profile</NavLink>
                <NavLink href="/account">Account</NavLink>
              </NavLinks>
            </>
          ) : (
            <NavLinks>
              <NavLink href="/headlines">Headlines</NavLink>
              <NavLink href="/world">World</NavLink>
              <NavLink href="/politics">Politics</NavLink>
              <NavLink href="/business">Business</NavLink>
              <NavLink href="/health">Health</NavLink>
              <NavLink href="/entertainment">Entertainment</NavLink>
              <NavLink href="/travel">Travel</NavLink>
              <NavLink href="/sports">Sports</NavLink>
              <NavLink href="/profile">Profile</NavLink>
              <NavLink href="/account">Account</NavLink>
            </NavLinks>
          )}
        </Nav>
      </div>
    </HeaderContainer>
  );
};

export default Header;
