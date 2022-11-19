import NavBar from "./NavBar";
import styled from "styled-components";

export const Background = styled.div`
  padding: 10px;
`;

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      {/* <Background /> */}
    </>
  );
}
