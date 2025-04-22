import React from "react";
import styled from "styled-components";
import { Loader as LoadingIcon } from "feather-icons-react";

const LoaderWrapper = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;

  .loader-icon {
    animation: spin 1.5s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

interface LoaderProps {
  text?: string;
}

const LoaderComponent = ({ text = "Loading" }: LoaderProps) => {
  return (
    <LoaderWrapper>
      <div className="loader-icon" data-testid="loader">
        <LoadingIcon />
      </div>
      <span>{text}</span>
    </LoaderWrapper>
  );
};

export default LoaderComponent;
