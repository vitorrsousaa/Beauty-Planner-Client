import { ReactElement } from "react";
import { StoreContainer } from "./style";

interface StoreViewerProps {
  children: ReactElement;
}

function StoreViewer({ children }: StoreViewerProps) {
  return <StoreContainer>{children}</StoreContainer>;
}

export default StoreViewer;
