import styled from "styled-components";

const sizes = {
  "48px": "3rem",
  "36px": "2.25rem",
  "26px": "1.625rem",
  "24px": "1.5rem",
  "20px": "1.25rem",
  "16px": "1rem",
  "12px": "0.75rem",
  "10px": "0.625rem",
};

const variants = {
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

interface TypographyProps {
  color?: string;

  weight?: 700 | 500 | 400;

  size?: "48px" | "36px" | "26px" | "24px" | "20px" | "12px" | "10px";
}

interface AvatarProps {
  color?: string;
  size?: string;
}

interface TitleProps extends TypographyProps {
  variant?:
    | "heading1"
    | "heading2"
    | "heading2Regular"
    | "heading3"
    | "heading4";
}

interface TextProps extends TypographyProps {
  variant?:
    | "texting1"
    | "texting2"
    | "texting3"
    | "texting4"
    | "texting5"
    | "texting6"
    | "texting7";
}

interface ButtonProps {
  variant?: "gray" | "blue";
}

export const Title = styled.h1<TitleProps>`
  font-weight: ${(props) =>
    props.variant
      ? variants[props.variant].weight
      : props.weight
      ? props.weight
      : 400};

  font-size: ${(props) =>
    props.variant
      ? variants[props.variant].size
      : props.size
      ? sizes[props.size]
      : "1rem"};

  color: ${(props) => (props.color ? props.color : "var(--black)")};
`;

export const Text = styled.p<TextProps>`
  font-weight: ${(props) =>
    props.variant
      ? variants[props.variant].weight
      : props.weight
      ? props.weight
      : 400};

  font-size: ${(props) =>
    props.variant
      ? variants[props.variant].size
      : props.size
      ? sizes[props.size]
      : "1rem"};

  color: ${(props) => (props.color ? props.color : "var(--black)")};
`;

export const Avatar = styled.div<AvatarProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 3px solid;
  border-color: ${(props) =>
    props.color ? props.color : "var(--gray-medium)"};
  border-radius: 50%;

  width: ${(props) => (props.size ? props.size : "10rem")};
  height: ${(props) => (props.size ? props.size : "10rem")};
`;

export const Span = styled.span<TypographyProps>`
  font-weight: 700;

  font-size: ${(props) => (props.size ? sizes[props.size] : "1rem")};

  color: ${(props) => (props.color ? props.color : "var(--black)")};
`;

export const Button = styled.button<ButtonProps>`
  background: ${(props) =>
    props.variant
      ? props.variant === "blue"
        ? "var(--primary)"
        : "var(--gray-light)"
      : "var(--gray-light)"};

  color: ${(props) =>
    props.variant
      ? props.variant === "blue"
        ? "var(--white)"
        : "var(--primary)"
      : "var(--primary)"};

  font-weight: ${variants["texting5"].weight};

  font-size: ${variants["texting5"].size};

  border-radius: 8px;
  border: none;
  padding: 1rem;
  text-align: center;
`;
