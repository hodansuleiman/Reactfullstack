import React from "react";
import styled from "styled-components";
const FooterContainer = styled.header`
  background-color: blue;
  padding: 10px;
  color: blue;
`;

const Footer = () => (
  <FooterContainer>
    <div className="y-wrap">Footer</div>
  </FooterContainer>
);

export default Footer;
