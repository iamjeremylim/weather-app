import React from "react";
import styled from "styled-components";
import { AlertCircle } from "feather-icons-react";

const ErrorWrapper = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;

interface ErrorProps {
  text?: string;
}

const ErrorComponent = ({ text = "Something went wrong..." }: ErrorProps) => {
  return (
    <ErrorWrapper>
      <div className="error-icon" data-testid="error-message">
        <AlertCircle />
      </div>
      <span>{text}</span>
    </ErrorWrapper>
  );
};

export default ErrorComponent;
