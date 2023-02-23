import React from "react";
function About(props) {
  return (
    <div
      className={`container my-5 py-2 text-${
        props.Mode === "dark" ? "light" : "dark"
      }`}
    >
      <h1>About TextUtils</h1>
      <p className="AboutPara">
        Text Utilities is a simple and user-friendly web application that
        provides a variety of text-related tools to help make your life easier.
        Whether you're a writer, student, or professional, we've got you
        covered.
      </p>{" "}
      <p className="AboutPara">
        Our website includes tools for text manipulation, analysis, formatting,
        and more. Need to convert a block of text from uppercase to lowercase,
        or vice versa? No problem. Want to count the number of words or
        characters in your text? We've got you covered.
      </p>{" "}
      <p className="AboutPara">
        At Text Utilities, we're committed to making text-related tasks as easy
        and streamlined as possible. We believe that text should be a tool that
        helps you, not a source of frustration or inconvenience. That's why
        we're constantly working to improve and expand our toolset to meet the
        needs of our users.
      </p>{" "}
      <p className="AboutPara">
        So whether you're a blogger, writer, or just someone who works with text
        on a regular basis, give Text Utilities a try. We're confident that
        you'll find our tools to be a valuable addition to your workflow.t that
        you'll find our tools to be a valuable addition to your workflow.
      </p>
    </div>
  );
}
export default About;
