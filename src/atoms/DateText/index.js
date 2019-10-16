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
  border = "none",
  fontSize = "large",
  fontColor,
  formatDate = "defaut"
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
    />
  );
};

DateTextComponent.displayName = "DateText";

DateTextComponent.propTypes = {
  /**
	 Sets the property of the list of day name */
  days: PropTypes.arrayOf(PropTypes.string)
};

export const DateText = DateTextComponent;
