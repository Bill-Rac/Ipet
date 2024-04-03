import { css } from "styled-components";

export const sm = (content) => css`
  @media only screen and (min-width: 640px) {
    ${content}
  }
`;

export const md = (content) => css`
  @media only screen and (min-width: 768px) {
    ${content}
  }
`;

export const lg = (content) => css`
  @media only screen and (min-width: 1024px) {
    ${content}
  }
`;

export const xl = (content) => css`
  @media only screen and (min-width: 1280px) {
    ${content}
  }
`;

export const xxl = (content) => css`
  @media only screen and (min-width: 1536px) {
    ${content}
  }
`;
