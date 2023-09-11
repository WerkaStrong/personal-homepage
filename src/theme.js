export const theme = {
    color: {
        white: "#FFFFFF",
        whiteLilac: "#FBFBFE",
        cornflowerBlue: "#0366D633",
        dodgerBlue: "#2188FF",
        scienceBlue: "#0366D6",
        silver: "#C4C4C4",
        slateGray: "#6E7E91",
        gray: "#363636B8",
        mineShaft: "#252525",
    },
};

export const lightTheme = {
    webBackground: theme.color.whiteLilac,
    textcolor: theme.color.mineShaft,
    default: theme.color.white,
    button: theme.color.scienceBlue,
    describe: theme.color.slateGray,
    borderHover: theme.color.cornflowerBlue,
    tileTitle: theme.color.scienceBlue,
    tileDefault: theme.color.white,
};

export const darkTheme = {
    webBackground: theme.color.mineShaft,
    textcolor: theme.color.white,
    default: theme.color.mineShaft,
    button: theme.color.dodgerBlue,
    describe: theme.color.white,
    borderHover: theme.color.scienceBlue,
    tileTitle: theme.color.white,
    tileDefault: theme.color.gray,
};
