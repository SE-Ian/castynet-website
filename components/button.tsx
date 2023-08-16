import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type ButtonType = {
  ctaText?: string;

  /** Style props */
  buttonPosition?: CSSProperties["position"];
  buttonTop?: CSSProperties["top"];
  buttonLeft?: CSSProperties["left"];
  letsTalkLeft?: CSSProperties["left"];
};

const Button: NextPage<ButtonType> = ({
  ctaText,
  buttonPosition,
  buttonTop,
  buttonLeft,
  letsTalkLeft,
}) => {
  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      position: buttonPosition,
      top: buttonTop,
      left: buttonLeft,
    };
  }, [buttonPosition, buttonTop, buttonLeft]);

  const letsTalkStyle: CSSProperties = useMemo(() => {
    return {
      left: letsTalkLeft,
    };
  }, [letsTalkLeft]);

  return (
    <div
      className="relative w-[180px] h-[58px] text-center text-mid text-white font-bold-2"
      style={buttonStyle}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-11xl bg-orange" />
      <b
        className="absolute top-[29.31%] left-[28.89%] leading-[25px]"
        style={letsTalkStyle}
      >
        {ctaText}
      </b>
    </div>
  );
};

export default Button;
