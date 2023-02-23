import React from "react";

function Alert(props) {
  const capitaltext = (word) => {
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + word.slice(1);
  };
  return (
    props.Popup && (
      <div
        style={{
          minWidth: "100%",
          position: "absolute",
        }}
        className={`alert alert-${props.Popup.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitaltext(props.Popup.type)}!&nbsp;</strong>
        {props.Popup.msg}
      </div>
    )
  );
}

export default Alert;
