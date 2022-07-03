import styled, { keyframes } from "styled-components";

const slideSection = keyframes`
  0% { 
    opacity: 0.1;
  }
  70% {
    transform: translateY(-10%);
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
`

export const StyledAbout = styled.div`
  .section {
    display: grid;
    grid-auto-flow: row;
    align-items: center;
    justify-content: center;
    font: 700 2rem ${props => props.theme.fonts.idealFont};

    @media (min-width: ${props => props.theme.mobile.large}) {
      padding: 10rem 0;
    }

    .container {
      animation: ${slideSection} 1s linear;
      
      &.grid {
        @media (min-width: ${props => props.theme.mobile.large}) {
          grid-auto-flow: column;
          gap: 4rem;
          justify-content: space-between;
          align-items: center;
          max-width: 1050px;
          margin-left: auto;
          margin-right: auto;
        }
      }

      .image {
        position: relative;
        z-index: 980;
        
        img {
          position: relative;
          left: 2.5rem;
          height: 100%;
          width: 100%;
        }

        @media (min-width: ${props => props.theme.mobile.large}) {
          order: 0;
        }
      }

      .image::before {
        content: '';
        height: 100%;
        width: 100%;
        opacity: .9;
        background: ${props => props.theme.colors.secundary};
        position: absolute;
        top: -20.3%;
        left: -18%;
        z-index: -1;
      }

      .image img,
      .image::before {
        border-radius: 0.25rem;
      }

      .image img:hover {
        filter: brightness(110%);
      }

      .text {
        margin-left: .5rem;
        margin-right: .5rem;
        text-align: center;

        @media (min-width: ${props => props.theme.mobile.large}) {
          order: 1;
          max-width: 24rem;
          text-align: left;
          font-size: 1rem;
        }

        h2, p {
          margin-bottom: 1rem;
          font: 700 1rem ${props => props.theme.fonts.idealFont};
        }
        
        h2 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          
          @media (min-width: ${props => props.theme.mobile.large}) {
            font-size: 1.8rem;
          }
        }
      }
    }
  }
`