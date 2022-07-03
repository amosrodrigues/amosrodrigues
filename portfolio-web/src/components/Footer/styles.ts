import styled, { keyframes } from "styled-components";

const slideinFotter = keyframes`
  0% {
    opacity: 0.1;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
`

const slideinIcons = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-180deg);
  }
  100% {
    transform: rotate(-360deg);
  }
`

export const StyledFooter = styled.div`
  .footer {
    animation: ${slideinFotter} 1s linear;
    bottom: 0;
    color: rgb(255 255 255);
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 995;
    width: 100%;
    background: ${props => props.theme.colors.primnary};
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.15);

    img {
      height: 2.5rem;
      margin: 0.5rem 1rem;
      transform: rotate(360deg);
      background: ${props => props.theme.colors.secundary};
      padding: 0.3rem;
      border-radius: .4rem;
      box-shadow: 0 4px 8px 0px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

      @media (max-width: ${props => props.theme.mobile.medium}) {
        height: 2rem;
        margin: 0.5rem;
        padding: 0.3rem;
      }
    }

    img:hover {
      animation: ${slideinIcons} 3s linear infinite;
    }
  }
`