import React from "react";

import { useState, useEffect } from "react";
import SplitPane from "react-split-pane";
import Dropdown from "react-dropdown";
import Editor from "./Editor";

const Ide = () => {
  const [open, setOpen] = useState(false);
  const [code, setCode] = useState("");
  const [lan, setLan] = useState("javascript");

  const options = ["c", "cpp", "java", "python", "javascript"];
  const defaultOption = options[4];

  console.log(lan);
  function setlanguage(value) {
    console.log(value);
    if (value === "c") {
      setLan("c_cpp");
    } else if (value === "cpp") {
      setLan("c_cpp");
    } else {
      setLan(value);
    }
  }

  function handleOpen() {
    setOpen(!open);
  }
  return (
    <div className="ide">
      <div className="header">
        <Dropdown
          options={options}
          onChange={(e) => {
            setlanguage(e.value);
          }}
          value={defaultOption}
          placeholder="Select an option"
        />
      </div>
      <div className="split-con">
        <div className={open ? "upper-con" : "upper-con-open"}>
          <Editor code={code} setCode={setCode} lan={lan} />
        </div>

        <div className="down-header">
          <button onClick={handleOpen}>clck</button>
        </div>
        <div className={open ? "con-open" : "con-close"}></div>
      </div>
    </div>
  );
};

export default Ide;
