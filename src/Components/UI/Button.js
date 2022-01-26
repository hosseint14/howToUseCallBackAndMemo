import React from "react";

const Button = (props) => {
  return (
    <button
      className={`${props.className}`}
      type={"button" || props.type}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default React.memo(Button);
