import { material } from './helpers/material-colors'

// Breakpoints
export const breakpoints = ['600px', '960px', '1264px', '1904px']

breakpoints.xs = 0
breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

export const bpObj = {
  xs: 0,
  sm: breakpoints.sm,
  md: breakpoints.md,
  lg: breakpoints.lg,
  xl: breakpoints.xl,
}
// Colors
export const colors = {
  white: material.shades.white,
  light: material.grey.m100,
  grey: {
    lighter: material.grey.m200,
    light: material.grey.m300,
    base: material.grey.m400,
    dark: material.grey.m500,
    darker: material.grey.m600,
  },
  dark: material.grey.m800,
  black: material.grey.m900,
  primary: {
    lighter: material.lightBlue.m400,
    light: material.lightBlue.m500,
    base: material.lightBlue.m600,
    dark: material.lightBlue.m700,
    darker: material.lightBlue.m800,
  },
  secondary: {
    lighter: material.green.m100,
    light: material.green.m200,
    base: material.green.m300,
    dark: material.green.m400,
    darker: material.green.m500,
  },
  tertiary: {
    lighter: material.yellow.m100,
    light: material.yellow.m200,
    base: material.yellow.m300,
    dark: material.yellow.m500,
    darker: material.yellow.m600,
  },
  accent: {
    light: material.orange.a200,
    base: material.orange.a400,
    dark: material.orange.a700,
  },
  on: {
    primary: material.grey.m50,
    secondary: material.grey.m900,
    background: material.grey.m900,
    surface: material.grey.m900,
    error: material.grey.m50,
  },
  info: material.blue.m400,
  success: material.green.m400,
  warning: material.yellow.m400,
  error: material.red.m400,
  link: {
    base: material.blue.m500,
    visited: material.purple.m600,
    hover: material.grey.m800,
    focus: material.grey.m800,
    active: material.grey.m800,
  },
  text: {
    base: material.grey.m900,
    light: material.grey.m600,
  },
  code: material.red.m500,
  disabled: {
    bg: material.grey.m300,
    color: material.grey.m500,
    bgDark: material.grey.m700,
  },
  background: material.grey.m50,
  surface: material.grey.m50,
}

// Fonts
export const fontSizes = [10, 12, 14, 16, 20, 24, 34, 48, 60, 96]

fontSizes.smallest = fontSizes[0]
fontSizes.smaller = fontSizes[1]
fontSizes.small = fontSizes[2]
fontSizes.base = fontSizes[3]
fontSizes.h6 = fontSizes[4]
fontSizes.h5 = fontSizes[5]
fontSizes.h4 = fontSizes[6]
fontSizes.h3 = fontSizes[7]
fontSizes.h2 = fontSizes[8]
fontSizes.h1 = fontSizes[9]

export const fonts = {
  family: {
    code: 'Consolas, monaco, monospace',
    roboto: 'Roboto, sans-serif',
    sansSerif:
      'BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
    serif: 'georgia, times, serif',
  },
  letterSpacing: {
    tighter: '-0.04em',
    tight: '-0.02em',
    normal: 'normal',
    wide: '0.02em',
    wider: '0.04em',
  },
  size: {
    h1: `${fontSizes.h1}px`,
    h2: `${fontSizes.h2}px`,
    h3: `${fontSizes.h3}px`,
    h4: `${fontSizes.h4}px`,
    h5: `${fontSizes.h5}px`,
    h6: `${fontSizes.h6}px`,
    html: '16px',
    base: `${fontSizes.base}px`,
    small: `${fontSizes.small}px`,
    smaller: `${fontSizes.smaller}px`,
    smallest: `${fontSizes.smallest}px`,
  },
  weight: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },
}

// Space
export const space = [0, 1, 4, 8, 16, 32, 64, 128, 256]

export const spaces = {
  none: `${space[0]}`,
  one: `${space[1]}px`,
  xxs: `${space[2]}px`,
  xs: `${space[3]}px`,
  sm: `${space[4]}px`,
  md: `${space[5]}px`,
  lg: `${space[6]}px`,
  xl: `${space[7]}px`,
  xxl: `${space[8]}px`,
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
