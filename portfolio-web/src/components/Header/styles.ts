import styled, { keyframes } from 'styled-components';

const showNav = keyframes`
  0% {
    opacity: 0.1;
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
    opacity: 1;
  }
`;

const showSwitch  = keyframes`
  0% {
    opacity: 0.1;
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
    opacity: 1;
  }
`;

const showLogo = keyframes`
  0% {
    opacity: 0.1;
  }
  100% {
    opacity: 1;
  }
`;

export const StyledHeader = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 4.5rem;
  background: ${props => props.theme.colors.primnary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.theme.colors.text};
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.15);
  animation: ${showLogo} 1s linear;
  padding-left: .5rem;
  padding-right: .5rem;

  @media (max-width: ${props => props.theme.mobile.medium}) {
    padding-left: 0;
    padding-right: 0;
  }

  div.container .right {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    > svg {
      width: 32px;
      height: 32px;
      fill: ${props => props.theme.colors.secundary};
      animation: ${showLogo} 1s linear;
      cursor: pointer;
    }
    
    .Switch {
      animation: ${showSwitch} 1s linear;
    }

    @media (max-width: ${props => props.theme.mobile.medium}) {
      gap: .5rem;
      > svg {
        width: 25px;
        height: 25px;
      }
    }
  }

  nav.container {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    gap: 2rem;

    @media (max-width: ${props => props.theme.mobile.medium}) {
      gap: 1rem;
    }
  }

  nav .logo {
    text-decoration: none;
    font: 700 1.31rem ${props => props.theme.fonts.titleFont};
    color: ${props => props.theme.colors.secundary};
    animation: ${showLogo} 1s linear;

    @media (max-width: ${props => props.theme.mobile.medium}) {
      font-size: .8rem;
    }
  }

  nav .logo span {
    color: ${props => props.theme.colors.optional};

    @media (max-width: ${props => props.theme.mobile.medium}) {
      font-size: .8rem;
    }
  }

  nav.container .left {
    .hamburger {
      cursor: pointer;
      display: flex;
      flex-direction: column;
      height: 25px;
      justify-content: space-between;
      width: 31px;
      animation: ${showNav} 1s linear;

      @media (max-width: ${props => props.theme.mobile.medium}) {
        height: 20px;
        width: 25px;
      }

      span {
        background-color: ${props => props.theme.colors.secundary};
        height: 3px;
        transform-origin: left;
        transition: all 1s ease;
        width: 100%;
      }

      &.active {    
          span {
            &:first-child {
              background-color: ${props => props.theme.colors.secundary};
              transform: rotate(45deg);
            }
            &:nth-child(2) {
              opacity: 0;
            }
            &:last-child {
              background-color: ${props => props.theme.colors.secundary};
              transform: rotate(-45deg);
            }
          }
        }
			}
		}    
`