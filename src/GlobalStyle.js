import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        margin: 0 auto;
        overflow-wrap: break-word;
        font-family: 'Inter', sans-serif;
        color: ${({ theme }) => theme.textcolor};
        background: ${({ theme }) => theme.webBackground};
        transition: background-color 0.25s ease, color 0.25s ease;
    }
`;
