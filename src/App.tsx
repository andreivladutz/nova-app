import React from "react";
import Homepage from "./components/Homepage";

function Index() {
  return (
    <div>
      <header>
        <h1 style={{ margin: 0 }}>
          Welcome to Plasmic!
        </h1>
      </header>

      <Homepage />
    </div>
  );
}

export default Index;