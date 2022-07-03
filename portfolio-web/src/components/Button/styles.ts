import styled from "styled-components";

export const StyledButton = styled.div`
  .buttonBtn {
    height: 50px;
    border-radius: 8px;
    font-weight: 500;
    background: ${props => props.theme.colors.optional};
    color: #FFF;
    padding: 0 32px;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    border: 0;

    transition: 0.2s;

    &.outlined {
      background: #fff;
      border: 1px solid #835afd;
      color: #835afd;
    }

    &:not(:disabled):hover {
      filter: brightness(0.9);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
`