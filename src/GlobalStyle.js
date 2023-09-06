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
        color: ${({theme}) => theme.color.mineShaft};
        background: ${({theme}) => theme.color.whiteLilac};
    }
`;