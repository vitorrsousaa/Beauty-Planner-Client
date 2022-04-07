import { LogoProps } from "./interface";

import LogoImage from "../../assets/icons/LogoImage";

import { LogoContainer } from "./styles";

function Logo({ variant }: LogoProps) {
  return (
    <LogoContainer>
      <LogoImage />
      {variant && (
        <h1>
          Beauty<span>Planner</span>
        </h1>
      )}
    </LogoContainer>
  );
}

export default Logo;
