import styled, { keyframes } from 'styled-components'

const showMenuOn = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
`;

const showMenuOff = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

export const StyledMenu = styled.div`
  .container {
    width: 100%;
    height: 100%;
    z-index: 990;
    position: fixed;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    opacity: 0;
    visibility: hidden;

    &.container.off {
      transition: all .5s ease;
      opacity: 1;

      .background {
        position: absolute;
        z-index: 990;
        background: rgba(61,73,92, 0.5);
        opacity: 0;
        transition: .5s;
        height: 100%;
        width: 100%;
      }
    }

    .menu {
        width: 20rem;
        height: 100%;
        background: ${props => props.theme.colors.primnary};
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;    
        animation: ${showMenuOff} .5s linear;
        z-index: 990;
        gap: 2rem;

        @media (max-width: ${props => props.theme.mobile.medium}) {
          width: 15rem;
          gap: 1.5rem;
        }
      }
    
      .icons {
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.secundary};
        display: grid;
        grid-auto-flow: column;
        align-items: center;
        border-radius: 0.25rem;
        font-size: 1.5rem;
        font-weight: 600;
        width: 90%;
        text-decoration: none;

        @media (max-width: ${props => props.theme.mobile.medium}) {
          font-size: 1rem;
        }

        .icon {
          padding: 0.2rem;

          @media (max-width: ${props => props.theme.mobile.medium}) {
            height: 2rem;
          }
        
          &.selected {
            background: ${props => props.theme.colors.secundary};
          }
        }
        
        &.icons:hover {
              color:  ${props => props.theme.colors.primnary};
              background: ${props => props.theme.colors.secundary};
              transition: color 0.5s linear;
              transition: background-color 0.5s linear;
            }
      }

    &.container.active {
        opacity: 1;
        visibility: visible;
        
      .background {
        position: absolute;
        z-index: 990;
        background: rgba(61,73,92, 0.5);
        height: 100%;
        width: 100%;
        opacity: 1;
        transition: .5s;
      }
 
      .menu {
        animation: ${showMenuOn} 0.3s linear;
        z-index: 990;
      }
    }
  }
`
