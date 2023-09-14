import { useMemo } from "react";
import "./VariantContainedSizeLarge.css";

const VariantContainedSizeLarge = ({
  button,
  variantContainedSizeLargeBoxSizing,
  buttonFontSize,
  buttonLineHeight,
  buttonColor,
  buttonDisplay,
}) => {
  const variantContainedSizeLargeStyle = useMemo(() => {
    return {
      boxSizing: variantContainedSizeLargeBoxSizing,
    };
  }, [variantContainedSizeLargeBoxSizing]);

  const buttonStyle = useMemo(() => {
    return {
      fontSize: buttonFontSize,
      lineHeight: buttonLineHeight,
      color: buttonColor,
      display: buttonDisplay,
    };
  }, [buttonFontSize, buttonLineHeight, buttonColor, buttonDisplay]);

  return (
    <div
      className="variantcontained-sizelarge"
      style={variantContainedSizeLargeStyle}
    >
      <div className="button" style={buttonStyle}>
        {button}
      </div>
    </div>
  );
};

export default VariantContainedSizeLarge;
