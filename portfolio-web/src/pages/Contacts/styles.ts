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

export const StyledContacts = styled.div`
  #page-not-found {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #a8a8b3;
    font-size: 24px;
    font-family: 'Poppins', sans-serif;
  }

  #page-auth {
    display: flex;
    flex-flow: column;
    gap: 1.5rem;
    animation: ${slideSection} 1s linear;
    justify-content: center;
    align-items: center;
    align-content: center;
    padding: 5rem 1rem;

    @media (min-width: ${(props) => props.theme.mobile.large}) {
      flex-flow: row;
      height: 100vh;
    }

    aside {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      max-width: 380px;
      color: ${(props) => props.theme.colors.secundary};

      @media (min-width: ${(props) => props.theme.mobile.large}) {
        align-items: flex-start;
        text-align: start;
      }

      strong,
      p {
        font: 700 1.8rem ${(props) => props.theme.fonts.idealFont};
      }

      p,
      a {
        font-size: 1.2rem;
        line-height: 32px;
        margin-bottom: 8px;
        color: ${(props) => props.theme.colors.secundary};
      }

      .content {
        margin-bottom: 1rem;
      }

      .content-icons .icon {
        width: 32px;
        height: 32px;
        margin-right: 1rem;
        transition: 0.3s;
      }

      .content-icons .icon:hover {
        transform: translateY(-8px);
      }
    }

    .main-content {
      display: flex;
      flex-direction: column;
      padding: 1.5rem;
      border-radius: 0.25rem;
      background: ${(props) => props.theme.colors.secundary};
      box-shadow: 0 4px 8px 0px rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);

      .background img {
        position: absolute;
        z-index: 960;
      }

      .login {
        z-index: 961;
        padding: 1.5rem;
        display: flex;
        flex-flow: column;
        text-align: center;
        color: ${(props) => props.theme.colors.background};
      }

      .login img {
        align-self: center;
      }

      h2 {
        font-size: 24px;
        margin: 64px 0 24px 0;
        font-family: 'Poppins', sans-serif;
      }

      form {
        input {
          height: 50px;
          border-radius: 8px;
          padding: 0 16px;
          background: #fff;
          border: 1px solid #a8a8b3;
        }

        button {
          margin-top: 16px;
        }

        button,
        input {
          width: 100%;
        }
      }

      p {
        font-size: 14px;
        margin-top: 16px;
      }

      a {
        color: ${(props) => props.theme.colors.background};
        font-weight: 700;
      }
    }

    .create-room {
      margin-top: 24px;
      padding: 1.5rem;
      height: 50px;
      border-radius: 8px;
      font-weight: 500;
      background: #ea4335;
      color: #fff;

      display: flex;
      justify-content: center;
      align-items: center;

      cursor: pointer;
      border: 0;

      transition: 0.2s;

      img {
        margin-right: 8px;
      }

      &:hover {
        filter: brightness(0.9);
      }
    }

    .separator {
      font-size: 14px;
      color: ${(props) => props.theme.colors.primnary};

      margin: 32px 0;
      display: flex;
      align-items: center;

      &::before {
        content: '';
        flex: 1;
        height: 1px;
        background: ${(props) => props.theme.colors.primnary};
        margin-right: 16px;
      }

      &::after {
        content: '';
        flex: 1;
        height: 1px;
        background: ${(props) => props.theme.colors.primnary};
        margin-left: 16px;
      }
    }
  }
`;
