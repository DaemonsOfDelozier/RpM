import React from "react";
import ReactDOM from "react-dom";
import App from "./app.jsx";

ReactDOM.render(<App user={window.user}/>, document.getElementById("content"));