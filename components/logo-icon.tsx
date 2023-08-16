import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type LogoIconType = {
  /** Style props */
  logoIconPosition?: CSSProperties["position"];
  logoIconTop?: CSSProperties["top"];
  logoIconLeft?: CSSProperties["left"];
};

const LogoIcon: NextPage<LogoIconType> = ({
  logoIconPosition,
  logoIconTop,
  logoIconLeft,
}) => {
  const logoIconStyle: CSSProperties = useMemo(() => {
    return {
      position: logoIconPosition,
      top: logoIconTop,
      left: logoIconLeft,
    };
  }, [logoIconPosition, logoIconTop, logoIconLeft]);

  return (
    <img
      className="relative w-[184px] h-12"
      alt=""
      src="/logo.svg"
      style={logoIconStyle}
    />
  );
};

export default LogoIcon;
