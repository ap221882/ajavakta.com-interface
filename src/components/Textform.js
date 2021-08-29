import React, { useState } from "react";

// console.log(useState("Enter text here2"));

export default function Textform(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked!");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase", "success");
  };
  // console.log("On change!");
  const handleBlankClick = () => {
    let newText = text.replace(/^\s*\n/gm, "");
    setText(newText);
    props.showAlert("Blank lines removed", "success");
  };
  const handleLoClick = () => {
    // console.log("Uppercase was clicked!");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("lowercased your text", "success");
  };
  const handleOnChange = (event) => {
    // console.log("On change!");
    setText(event.target.value);
  };
  const handleCopy = () => {
    let text = document.getElementById("mybox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard", "success");
  };

  const [text, setText] = useState("");
  //   text = "new text";//Wrong way
  //   setText("new text"); //Right way
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2> {props.heading}</h2>
        <p>Your text will be changed accordingly.</p>
      </div>
      <div
        className="form-floating my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="mybox"
          rows="8"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "dark" ? "#a5a5b7" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        ></textarea>
        <label htmlFor="mybox">Start from here</label>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-2 mx-2"
          onClick={handleUpClick}
        >
          Convert to Uppercase.
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-2 mx-2"
          onClick={handleLoClick}
        >
          Convert to Lowercase.
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-2 mx-2"
          onClick={handleBlankClick}
        >
          Remove blank lines
        </button>
        <button
          disabled={text.length === 0}
          onClick={handleCopy}
          className="btn btn-primary my-2 mx-2"
        >
          Copy to clipboard
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary.</h2>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes read.
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview it here."}</p>
      </div>
    </>
  );
}
