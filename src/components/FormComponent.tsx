import { FormComponentProps } from "../types";
import { StyledInput, StyledButton } from "./index";
import { pxToRem } from "../utils";
import styled from "styled-components";
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(16)};
`;

export function FormComponent({ inputs, button, message }: FormComponentProps) {
  return (
    <StyledForm>
      {inputs.map((input, index) => (
        <StyledInput key={index} {...input} />
      ))}
      {button.map((button, index) => (
        <StyledButton key={index} {...button} />
      ))}
      {message && (
        <div style={{ color: message.type === "success" ? "green" : "red" }}>
          <p>{message.msg}</p>
        </div>
      )}
    </StyledForm>
  );
}
