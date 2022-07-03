import styled, { keyframes } from 'styled-components'

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

export const StyledHome = styled.div`
  .section {
    display: grid;
    grid-auto-flow: row;
    align-items: center;
    justify-content: center;

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
          max-width: 950px;
          margin-left: auto;
          margin-right: auto;
        }
      }

      .image {
        position: relative;
        z-index: 980;
        
        img {
          position: relative;
          right: 2.93rem;
          height: 100%;
          width: 100%;
        }

        @media (min-width: ${props => props.theme.mobile.large}) {
          order: 1;
        }
      }

      .image::before {
        content: '';
        height: 100%;
        width: 100%;
        opacity: .9;
        background: ${props => props.theme.colors.secundary};
        position: absolute;
        top: -16.8%;
        left: 16.7%;
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
          order: 0;
          max-width: 24rem;
          text-align: left;
          font-size: 1rem;
        }

        h2, h3 {
          margin-bottom: .5rem;
          font: 700 1rem ${props => props.theme.fonts.idealFont};
        }
        
        h2 {
          font-size: 1.5rem;

          @media (min-width: ${props => props.theme.mobile.large}) {
            font-size: 1.8rem;
          }
        }

        p {
          margin-bottom: 1rem;
        }

        .buttons {
            display: grid;
            grid-auto-flow: row;
            gap: 1em;
            align-items: center;
            justify-content: center;

            @media (min-width: ${props => props.theme.mobile.large}) {
              grid-auto-flow: column;
            }

          .button {
            border: 1px solid  ${props => props.theme.colors.secundary};
            color: ${props => props.theme.colors.secundary};
            height: 2.8rem;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0 2rem;
            border-radius: 0.25rem;
            font: 500 1rem ${props => props.theme.fonts.bodyFont};
            transition: background 0.3s;
        
            @media (min-width: ${props => props.theme.mobile.large}) {
              height: 3.125rem;
              padding: 0 1rem;
            }
          }
          
        }

        .button:hover {
          background:  ${props => props.theme.colors.secundary};
          color: ${props => props.theme.colors.primnary};
        }
      }
    }
  }
`