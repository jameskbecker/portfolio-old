type BreakPoints = {
  tablet: number;
  mobileLandscape: number;
  mobile: number;
};

const breakpoints: BreakPoints = {
  tablet: 991,
  mobileLandscape: 767,
  mobile: 478,
};

export const tabletMax = `
  max-width: ${breakpoints.tablet}px
`;

export const landscapeMax = `
  max-width: ${breakpoints.mobileLandscape}px
`;

export const mobileMax = `
  max-width: ${breakpoints.mobile}px
`;
