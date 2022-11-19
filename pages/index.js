import AnimatedBackground from "../components/AnimatedBackground/index";
import styled from "styled-components";

export const HomeElements = styled.div`
  height: 100vh;
  width: 100vw;
  /* background-color: red; */
  position: relative;
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 100%;
  top: 0;
  right: 0;
  @media screen and (max-width: 1024px) {
    width: 100vw;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 50px;
  font-weight: 600;
  letter-spacing: -1px;
`;

export default function Home() {
  return (
    <>
      <HomeElements>
        <Overlay>
          <Container>Hello</Container>
        </Overlay>
        <AnimatedBackground />
      </HomeElements>
    </>
  );
}
