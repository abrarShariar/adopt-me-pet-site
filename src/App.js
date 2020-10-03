import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParam";

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt me!</h1>
      <SearchParams />
    </div>
  );
};

render(React.createElement(App), document.getElementById("root"));
