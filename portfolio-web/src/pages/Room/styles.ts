import styled from "styled-components";

export const StyledRoom = styled.div`

.section {
  padding: 0;
  overflow-Y: auto;
}

#page-room {
  padding: 4.5rem 1rem;

  header {
    padding: 24px 0;
    border-bottom: 1px solid #e2e2e2;

    .content {
      max-width: 1128px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

      > img {
        max-height: 40px;
        align-self: flex-end;
      }

      > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        gap: 16px;

        @media (min-width: ${props => props.theme.mobile.large}) {
          flex-direction: row;
        }

        button {
          height: 40px;
        }
      }
    }
  }

  main {
    max-width: 800px;
    margin: 0 auto;

    .room-title {
      margin: 32px 0 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      h1 {
        font-family: 'Poppins', sans-serif;
        font-size: 1rem;
        color: ${props => props.theme.colors.text};
        font-style: italic;
      }

      @media (min-width: ${props => props.theme.mobile.large}) {
        h1 {
          font-size: 1.5rem;
        }

        justify-content: flex-start;
      }

      span {
        margin-left: 16px;
        background: #e559f9;
        border-radius: 9999px;
        text-align: center;
        padding: 8px 16px;
        color: #FFF;
        font-weight: 500;
        font-size: 14px;
      }
    }

    form {
      textarea {
        width: 100%;
        border: 0;
        padding: 16px;
        border-radius: 8px;
        background: #fefefe;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
        resize: vertical;
        min-height: 130px;
      }

      .form-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 16px;

        .user-info {
          display: flex;
          align-items: center;

          img {
            width: 32px;
            height: 32px;
            border-radius: 58%;
          }

          span {
            margin-left: 8px;
            color: ${props => props.theme.colors.text};
            font-weight: 500;
            font-size: 14px;
          }
        }

        > span {
          font-size: 14px;
          color: #737380;
          font-weight: 500;

          button {
            background: transparent;
            border: 0;
            color: #835AFD;
            text-decoration: underline;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
          }
        }
      }
    }

    .question-list {
      margin-top: 32px;
    }

    .empty-question {
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      gap: .8rem;

      img {
        width: 8rem;
        height: 8rem;
      }

      h2 {
        font: 600 1.25rem ${props => props.theme.fonts.titleFont}
      }
      
      p {
        max-width: 350px;
      }

      @media (min-width: ${props => props.theme.mobile.large}) {
        img {
          width: 10rem;
          height: 10rem;
        }

        h2 {
          font-size: 1.4rem;
        }

        p {
          font-size: 1.1rem;
        }
      }
    }
  }
}
`