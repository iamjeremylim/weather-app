"use client";

import styled from "styled-components";
import Search from "@/components/Search";

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 20px;

  @media (min-width: 768px) {
    width: 700px;
  }
`;

export default function Home() {
  return (
    <Wrapper>
      <Search />
    </Wrapper>
  );
}
