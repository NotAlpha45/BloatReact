// A simple react functional component

import React from "react";

const Test = () => {
  const [ state, setState ] = React.useState(10);

  const foo = () => {
    switch (state) {
      case 10:
        return "10";
      case 20:
        return "20";
      default:
        return "default";
    }
  };

  return (<div>
    Test {foo()}
  </div>);
};

export default Test;
