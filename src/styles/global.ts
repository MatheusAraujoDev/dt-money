import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --blue: #5429cc;
    --red: #e52e4d;
    --blue-light: #6933ff;
    --text-title: #363f5f;
    --text-body: #969cb3;
    --shape: #FFFFFF;
    --green: #33cc95;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // font-size padrão de 16px
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialised;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }

  .react-modal-content {
    background: var(--background);
    border-radius: 0.24rem;
    max-width: 576px;
    padding: 3rem;
    position: relative;
    width: 100%;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`


