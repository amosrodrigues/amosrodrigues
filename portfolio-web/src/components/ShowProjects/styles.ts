import styled from "styled-components";

export const StyledShowProjects = styled.div`
  z-index: 970;

  .carousel {
    width: 100vw;
  }

  .carousel-container {
    height: 500px;
    @media (max-width: ${props => props.theme.mobile.medium}) {
      height: fit-content;
      padding-bottom: .3rem;
    }
  }

  .container {
      
    &.grid {
        @media (min-width: ${props => props.theme.mobile.large}) {
          grid-auto-flow: column;
          gap: 5rem;
          justify-content: center;
          align-items: center;
          max-width: 1500px;
          margin-left: auto;
          margin-right: auto;
        }

      h1.title {
        @media (min-width: ${props => props.theme.mobile.large}) {
          display: none;
        }
      }

      .image {
        position: relative;
        z-index: 980;
        
        img {
          position: relative;
          right: 1.5rem;
          height: 100%;
          width: 100%;
          box-shadow: 0 4px 8px 0px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }

        @media (min-width: ${props => props.theme.mobile.large}) {
          order: 1;
          right: 1.5rem;
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
        left: 1.5rem;
        z-index: -1;
      }

      .image img,
      .image::before {
        border-radius: 0.25rem;
      }

      .image img:hover {
        transform: scale(1.03)
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

        h2.title {
          font: 700 1.5rem ${props => props.theme.fonts.idealFont};

          @media (min-width: ${props => props.theme.mobile.large}) {
            font-size: 1.8rem;
          }
        }

        p {
          margin-bottom: 1rem;
        }

        .buttons {
            display: flex;
            flex-flow: column;
            gap: 1em;
            align-items: center;
            text-align: center;
            justify-content: center;
            margin-bottom: 1.5rem;

            @media (min-width: ${props => props.theme.mobile.large}) {
              flex-flow: row;
            }

          .button {
            border: 1px solid  ${props => props.theme.colors.secundary};
            color: ${props => props.theme.colors.secundary};
            height: 2.8rem;
            width: 60%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
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