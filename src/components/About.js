// import React, { useState } from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "white",
  //   backgroundColor: "black",
  // });
  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "#514d63" : "white",
  };
  // const [btnText, setBtnText] = useState("Enable Dark mode");
  // const toggleStyle = () => {
  //   if (myStyle.color === "white") {
  //     setMyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setBtnText("Enable Dark Mode");
  //   } else {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //       // border: "0.5px solid white",
  //     });
  //     setBtnText("Enable White Mode");
  //   }
  // };
  return (
    <div
      className="container"
      style={{
        color: props.mode === "dark" ? "white" : "black",
        backgroundColor: props.mode === "dark" ? "rgb(77,76,151)" : "white",
      }}
    >
      <div className="my-3">
        <h3>Hamare bare me</h3>
      </div>
      <div
        className="accordion"
        id="accordionExample"
        style={{
          color: "black",
          backgroundColor: "white",
        }}
      >
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              <strong>About us</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>
                About us is he thing which holds us intact with the customer we
                get.
              </strong>{" "}
              laborum proident id in laborum est pariatur laboris officia est
              veniam in mollit proident elit cillum ullamco adipisicing laboris
              laborum cillum occaecat cillum id
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              Links to our origin
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>
                Roots tell you and guide you every path you should take in our
                life ahead.
              </strong>
              laborum proident id in laborum est pariatur laboris officia est
              veniam in mollit proident elit cillum ullamco adipisicing laboris
              laborum cillum occaecat cillum id
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              Join our community?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>
                It is the only you which make this website special.
              </strong>{" "}
              laborum proident id in laborum est pariatur laboris officia est
              veniam in mollit proident elit cillum ullamco adipisicing laboris
              laborum cillum occaecat cillum id
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        {/* <button
          type="button"
          onClick={toggleStyle}
          className="my-3 btn btn-primary"
        >
          {btnText}
        </button> */}
      </div>
    </div>
  );
}
