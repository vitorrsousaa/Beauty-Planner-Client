export const sizes = {
  "48px": "3rem",
  "36px": "2.25rem",
  "26px": "1.625rem",
  "24px": "1.5rem",
  "20px": "1.25rem",
  "16px": "1rem",
  "12px": "0.75rem",
  "10px": "0.625rem",
};

export const variants = {
  heading1: {
    size: "3rem",
    weight: 700,
  },
  heading2: {
    size: "2.25rem",
    weight: 700,
  },
  heading2Regular: {
    size: "2.25rem",
    weight: 400,
  },
  heading3: {
    size: "1.5rem",
    weight: 700,
  },
  heading4: {
    size: "1.25rem",
    weight: 600,
  },
  texting1: {
    size: "1.5rem",
    weight: 700,
  },
  texting2: {
    size: "1.5rem",
    weight: 400,
  },
  texting3: {
    size: "1.25rem",
    weight: 400,
  },
  texting4: {
    size: "0.75rem",
    weight: 700,
  },
  texting5: {
    size: "1rem",
    weight: 500,
  },
  texting6: {
    size: "0.875rem",
    weight: 500,
  },
  texting7: {
    size: "0.675rem",
    weight: 400,
  },
};

export interface TypographyProps {
  color?: string;

  weight?: 700 | 500 | 400;

  size?: "48px" | "36px" | "26px" | "24px" | "20px" | "12px" | "10px";
}

export interface CardAvatarProps {
  color?: string;
  size?: string;
  stroke?: string;
}

export interface TitleProps extends TypographyProps {
  variant?:
    | "heading1"
    | "heading2"
    | "heading2Regular"
    | "heading3"
    | "heading4";
}

export interface TextProps extends TypographyProps {
  variant?:
    | "texting1"
    | "texting2"
    | "texting3"
    | "texting4"
    | "texting5"
    | "texting6"
    | "texting7";
}

export interface ButtonProps {
  variant?: "gray" | "blue";
}
