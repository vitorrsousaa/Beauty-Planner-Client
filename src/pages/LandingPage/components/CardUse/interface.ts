import { ReactElement } from "react";

export interface CardUseProps {
  children: ReactElement;
  step: string;
  title: string;
  text: string;
}
