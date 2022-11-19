import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  font-size: 50px;
  font-weight: 600;
  letter-spacing: -1px;
  background-color: black;
`;

function Contact() {
  return <Container>Contact</Container>;
}

export default Contact;
