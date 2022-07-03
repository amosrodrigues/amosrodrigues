import styled, { keyframes } from 'styled-components';

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
`;

export const StyledSkills = styled.div`
  .section {
    display: grid;
    grid-auto-flow: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 5.5rem 0;

    .container {
      animation: ${slideSection} 1s linear;
    }

    header .title {
      font: 700 1.5rem ${(props) => props.theme.fonts.idealFont};
      margin-bottom: -1rem;

      @media (min-width: ${(props) => props.theme.mobile.large}) {
        margin-bottom: 1.5rem;
      }
    }

    .cards {
      display: grid;
      grid-gap: 1.5rem;
      grid-template: repeat(4, 1fr) / repeat(3, 1fr);
      grid-auto-flow: row dense;

      @media (min-width: ${(props) => props.theme.mobile.large}) {
        grid-template: repeat(3, 1fr) / repeat(4, 1fr);
      }
    }

    .card::before {
      content: ' ';
      height: 0.25rem;
      width: 0%;
      background-color: ${(props) => props.theme.colors.secundary};
      border-radius: 0.313rem 0.313rem 0 0;
      position: absolute;
      top: 0;
      left: -1px;
      transition: all 0.2s;
    }

    .card {
      padding: 1rem 0rem 0rem;
      box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12),
        0px 0px 12px rgba(255, 255, 255, 0.19);
      border-bottom: 0.25rem solid ${(props) => props.theme.colors.secundary};
      border-radius: 0.25rem 0.25rem 0 0;
      text-align: center;

      &:hover {
        filter: brightness(120%);
        transform: scale(1.03);

        ::before {
          width: 100%;
        }
      }
    }

    .card img,
    svg {
      height: 50%;
      width: 50%;
      margin-bottom: 1rem;
    }

    .card .title {
      font-size: 1rem;
      margin-bottom: 0.75rem;
    }
  }
`;
