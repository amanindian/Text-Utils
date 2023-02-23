import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, SetText] = useState("");
  const inputRef = useRef(null);

  const hendleUpClick = () => {
    if (!text.length > 0) {
      props.Showpopup("Enter Somthing in TextBox", "danger");
    } else {
      let newtext = text.toUpperCase();
      SetText(newtext);
      props.Showpopup("Youe text converted to Uppercase", "success");
    }
  };

  const hendleLoClick = () => {
    if (!text.length > 0) {
      props.Showpopup("Enter Somthing in TextBox", "danger");
    } else {
      let newtext = text.toLowerCase();
      SetText(newtext);
      props.Showpopup("Youe text converted to Lowercase", "success");
    }
  };

  const hendleClearClick = () => {
    if (!text.length > 0) {
      props.Showpopup(
        "Your TextBox is already clear please Enter Sonthing",
        "danger"
      );
    } else {
      let newtext = "";
      SetText(newtext);
      props.Showpopup("TextBox Clear Successfuly", "success");
    }
  };
  const hendleCopyText = () => {
    if (!text.length > 0) {
      props.Showpopup("Enter Somthing in TextBox", "danger");
    } else {
      inputRef.current.select();
      document.execCommand("copy");
      window.getSelection().removeAllRanges();
      props.Showpopup("Your text Copied", "success");
    }
  };

  const hendleExtraSpace = () => {
    if (!text.length > 0) {
      props.Showpopup("Enter Somthing in TextBox", "danger");
    } else if (!text.includes("  ")) {
      props.Showpopup("There are no any Extra Space in TextBox", "danger");
    } else {
      let newtext = text.replace(/\s+/g, " ").trim();
      SetText(newtext);
      props.Showpopup("Extra Space removed Successfully", "success");
    }
  };

  const hendleFLUC = () => {
    if (!text.length > 0) {
      props.Showpopup("Enter Somthing in TextBox", "danger");
    } else {
      let newtext = text.replace(/(^\w{1}|\.\s+\w{1})/g, (letter) =>
        letter.toUpperCase()
      );
      SetText(newtext);
      props.Showpopup(
        "The first letter of Sentence has been converted to Uppercase",
        "success"
      );
    }
  };
  const hendleFNUC = () => {
    if (!text.length > 0) {
      props.Showpopup("Enter Somthing in TextBox", "danger");
    } else {
      let newtext = text.replace(/(\b\w{1})/g, (letter) =>
        letter.toUpperCase()
      );
      SetText(newtext);
      props.Showpopup(
        "The first letter of Word has been converted to Uppercase",
        "success"
      );
    }
  };
  const hendleonChange = (event) => {
    SetText(event.target.value);
  };

  return (
    <>
      <div
        style={{
          minWidth: "100%",
          paddingTop: "60px",
        }}
        className={`container px-5 text-${props.Mode === "dark" ? "light" : "dark"
          }`}
      >
        <h1>{props.heading}</h1>
        <textarea
          value={text}
          ref={inputRef}
          onChange={hendleonChange}
          className="form-control"
          style={{
            backgroundColor: "transparent",
            color: `${props.Mode === "light" ? "black" : "white"}`,
          }}
          rows="8"
        ></textarea>
        <button className="btn btn-primary  my-2 mx-1" onClick={hendleFLUC}>
          First Letter UpperCase of Sentences
        </button>
        <button className="btn btn-primary  my-2 mx-1" onClick={hendleFNUC}>
          First Letter UpperCase of Words
        </button>
        <button
          className="btn btn-primary  my-2 mx-1"
          onClick={hendleExtraSpace}
        >
          Remove Extra Space Text
        </button>
        <button className="btn btn-primary my-2 mx-1" onClick={hendleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary  my-2 mx-1" onClick={hendleLoClick}>
          Convert to LowerCase
        </button>
        <button
          className="btn btn-primary  my-2 mx-1"
          onClick={hendleClearClick}
        >
          Clear Text Box
        </button>
        <button className="btn btn-primary  my-2 mx-1" onClick={hendleCopyText}>
          Copy Text
        </button>
      </div>
      <div
        style={{ minWidth: "100%" }}
        className={`container py-5 px-5  text-${props.Mode === "dark" ? "light" : "dark"
          } `}
      >
        <p>Your Characters length is : {text.length > 0 ? text.length : 0}</p>
        <p>
          Your Word length is :{" "}
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }
        </p>
        <p>
          You will take{" "}
          <b>
            {" "}
            {text.length > 0
              ? 0.008 *
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length
              : 0}
          </b>{" "}
          minute for reading this text
        </p>
        <h1>Text Preview</h1>
        <p className="red">
          <i>{text.length > 0 ? text : "Enter Somthing in TextBox"}</i>
        </p>
      </div>
    </>
  );
}

TextForm.defaultProps = {
  heading: `This is Your heading`,
};
TextForm.propType = {
  heading: PropTypes.string,
};
