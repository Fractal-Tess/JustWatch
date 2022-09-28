import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export type Link = {
  target: {
    href: string;
    newTab?: boolean;
  };
  content: {
    text?: string;
    icon?: IconDefinition;
  };
};

export type StyledLink = Link & {
  styles: {
    icon?: {
      className: string;
    };
    textContent?: {
      className: string;
    };
    anchor?: {
      className: string;
    };
    container?: {
      className: string;
    };
  };
};
