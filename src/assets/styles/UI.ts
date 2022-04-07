import styled from "styled-components";
import {
  ButtonProps,
  CardAvatarProps,
  sizes,
  TextProps,
  TitleProps,
  TypographyProps,
  variants,
} from "./interfaces";

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

export const CardAvatar = styled.div<CardAvatarProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  border: ${(props) => (props.stroke ? `${props.stroke} solid` : "3px solid")};
  border-color: ${(props) =>
    props.color ? props.color : "var(--gray-medium)"};
  border-radius: 50%;

  width: ${(props) => (props.size ? props.size : "6rem")};
  height: ${(props) => (props.size ? props.size : "6rem")};
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

export const Avatar = styled.img`
  background-size: cover;
  background-position: top center;
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
`;
