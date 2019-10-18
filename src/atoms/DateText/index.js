import React from "react";
import PropTypes from "prop-types";
import styles from "./DateText.module.scss";
import builderCSSClass from "classnames";

/**
 The naming of this component is based on the semantics and ease of understanding of the code,
 trying to address the reuse depends a lot on the philosophy of the team and company.
 */
const DateTextComponent = ({
  element,
  onClickHandler,
  //style props
  background,
  border,
  fontSize,
  fontColor
}) => {
  const createStyle = (fontColor, background) => {
    let style = {};
    if (fontColor) {
      style.color = fontColor;
    }
    if (background) {
      style.backgroundColor = background;
    }
    return style;
  };

  const style = createStyle(fontColor, background);
  const classNames = builderCSSClass(
    styles.DateText,
    styles[`border_${border}`],
    styles[`font_${fontSize}`]
  );

  return (
    <input
      ref={element}
      type="text"
      onClick={() => onClickHandler()}
      placeholder="Select a date"
      readOnly={true}
      style={style}
      className={classNames}
      data-testid="text-input-date"
    />
  );
};

DateTextComponent.displayName = "DateText";

DateTextComponent.propTypes = {
  /**  react ref to access DOM node */
  element: PropTypes.object,
  /**  onClick callback */
  onClickHandler: PropTypes.func,
  /**  custom style  to background */
  background: PropTypes.string,
  /**  "solid", "none"default none */
  border: PropTypes.oneOf(["solid", "none"]),
  /* 'small',  'medium', "large" default: 'large' */
  fontSize: PropTypes.oneOf(["small", "medium", "large"]),
  /**  custom style  to color */
  fontColor: PropTypes.string
};

DateTextComponent.defaultProps = {
  background: "white",
  fontSize: "large",
  border: "none",
  fontColor: "black"
};

export const DateText = DateTextComponent;
