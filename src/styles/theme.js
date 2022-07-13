const calcRem = (size) => `${size / 8}rem`;

const fontSizes = {
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18),
  titleSize: calcRem(20),
};

const paddings = {
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18),
};

const margins = {
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18),
};

const interval = {
  base: calcRem(50),
  lg: calcRem(100),
  xl: calcRem(150),
  xxl: calcRem(200),
};

const verticalInterval = {
  base: `${calcRem(10)} 0 ${calcRem(10)} 0`,
  lg: `${calcRem(20)} 0 ${calcRem(20)} 0`,
  xl: `${calcRem(35)} 0 ${calcRem(35)} 0`,
  xxl: `${calcRem(50)} 0 ${calcRem(50)} 0`,
};

const width = {
  base: calcRem(30),
  lg: calcRem(60),
  xl: calcRem(90),
  xxl: calcRem(120),
};

const height = {
  base: calcRem(10),
  lg: calcRem(20),
  xl: calcRem(30),
  xxl: calcRem(40),
};

const deviceSizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "450px",
  tablet: "768px",
  tabletL: "1024px",
};

const palette = {
    mi_purple_1: "#661FEA",
    mi_yellow_1: "#ffea54",
    mi_black_1: "#000000",
    mi_black_2: "#47443D",
    mi_gray_1: "#6C6C6C",
    mi_gray_2: "#A9A9A9",
    mi_gray_3: "#C4C4C4",
    mi_gray_4: "#D9D9D9",
    mi_gray_5: "#EAEAEA",
    mi_white_1: "#FFFFFF",
    mi_red_1: "#FC2162"
};

const device = {
  mobileS: `only screen and (max-width: ${deviceSizes.mobileS})`,
  mobileM: `only screen and (max-width: ${deviceSizes.mobileM})`,
  mobileL: `only screen and (max-width: ${deviceSizes.mobileL})`,
  tablet: `only screen and (max-width: ${deviceSizes.tablet})`,
  tabletL: `only screen and (max-width: ${deviceSizes.tabletL})`,
};

const theme = {
  fontSizes,
  palette,
  deviceSizes,
  device,
  paddings,
  margins,
  interval,
  verticalInterval,
  width,
  height,
//   gradient,
};

export default theme;