import { material } from 'Helpers'

// Breakpoints
export const breakpoints = {
  xs: 0,
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
}

// Colors
export const colors = {
  white: material.shades.white,
  offWhite: material.grey.m50,
  light: material.grey.m100,

  lighterGrey: material.grey.m200,
  lightGrey: material.grey.m300,
  grey: material.grey.m400,
  darkGrey: material.grey.m500,
  darkerGrey: material.grey.m600,

  dark: material.grey.m800,
  black: material.grey.m900,

  primaryLighter: material.lightBlue.m400,
  primaryLight: material.lightBlue.m500,
  primary: material.lightBlue.m600,
  primaryDark: material.lightBlue.m700,
  primaryDarker: material.lightBlue.m800,

  secondaryLighter: material.green.m100,
  secondaryLight: material.green.m200,
  secondary: material.green.m300,
  secondaryDark: material.green.m400,
  secondaryDarker: material.green.m500,

  tertiaryLighter: material.yellow.m100,
  tertiaryLight: material.yellow.m200,
  tertiary: material.yellow.m300,
  tertiaryDark: material.yellow.m500,
  tertiaryDarker: material.yellow.m600,

  accentLight: material.orange.a200,
  accent: material.orange.a400,
  accentDark: material.orange.a700,

  onPrimary: material.grey.m50,
  onSecondary: material.grey.m900,
  onBackground: material.grey.m900,
  onSurface: material.grey.m900,
  onError: material.grey.m50,

  info: material.blue.m400,
  success: material.green.m400,
  warning: material.yellow.m400,
  error: material.red.m400,

  link: material.blue.m500,
  linkVisited: material.purple.m600,
  linkHover: material.grey.m800,
  linkFocus: material.grey.m800,
  linkActive: material.grey.m800,

  code: material.red.m500,
}

export const font = {
  xxs: '10px',
  xs: '12px',
  sm: '14px',
  md: '21px',
  lg: '30px',
  xl: '36px',
  xxl: '50px',

  thinnest: 100,
  thinner: 300,
  thin: 400,
  bold: 600,
  bolder: 700,
  boldest: 900,

  closer: '-0.05em',
  close: '-0.025em',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',

  none: 1,
  tighter: 1.2,
  tight: 1.3,
  loose: 1.625,
  looser: 2,

  center: 'center',
  right: 'right',
  left: 'left',
  justify: 'justify',

  uppercase: 'uppercase',
  lowercase: 'lowercase',
  capitalize: 'capitalize',

  top: 'top',
  textTop: 'text-top',
  bottom: 'bottom',
  textBottom: 'text-bottom',
  middle: 'middle',
  baseline: 'baseline',

  noWrap: 'nowrap',
  pre: 'pre',
  preLine: 'pre-line',
  prewrap: 'pre-wrap',

  code: 'Consolas, monaco, monospace',
  roboto: 'Roboto, sans-serif',
  sansSerif:
    'BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
  serif: 'georgia, times, serif',
}

// Transitions
export const transitions = {
  fastOutSlowIn: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
  linearOutSlowIn: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
  fastOutLinearIn: 'cubic-bezier(0.4, 0.0, 1, 1)',
  easeInOut: 'cubic-bezier(0.4, 0.0, 0.6, 1)',
  fastInFastOut: 'cubic-bezier(.25,.8,.25,1)',
  swing: 'cubic-bezier(.25,.8,.50,1)',
}

export const forms = {
  file: {
    borderColor: colors.greyLighter,
    radius: 0,

    cta: {
      activeColor: colors.greyDarker,
      backgroundColor: colors.light,
      textColor: colors.greyDark,
      hoverColor: colors.greyDarker,
    },

    name: {
      borderColor: colors.greyLighter,
      borderStyle: 'solid',
      borderWidth: '1px 1px 1px 0',
      maxWidth: '16em',
    },
  },

  input: {
    arrowColor: colors.link,
    bgColor: colors.white,
    borderColor: colors.greyLighter,
    borderRadius: 0,
    borderWidth: '1px',
    textColor: colors.greyDarker,
    height: '2.25em',
    fontSize: '16px',
    lineHeight: 1.5,
    paddingHorizontal: 16 * 0.625 - 1,
    paddingVertical: 16 * 0.375 - 1,
    placeholderColor: colors.grey,

    active: {
      borderColor: material.blue.m300,
      shadow: `0 0 0 0.125em rgba(0, 0, 0, 0.25)`,
    },

    disabled: {
      textColor: colors.grey,
      bgColor: colors.light,
      borderColor: colors.light,
      placeholderColor: colors.greyLight,
    },

    focus: {
      borderColor: material.blue.m300,
      shadow: `0 0 0 0.125em rgba(0, 0, 0, 0.25)`,
    },

    hover: {
      borderColor: colors.greyLight,
    },

    icon: {
      batextColorse: colors.greyLighter,
      activeColor: colors.grey,
    },
  },

  label: {
    textColor: colors.greyDarker,
    weight: 700,
  },

  message: {
    fontSize: fonts.size.xs,
  },
}
