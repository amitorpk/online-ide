import React from "react";

import "react-dropdown/style.css";

import AceEditor from "react-ace";

// import mode-<language> , this imports the style and colors for the selected language.
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/webpack-resolver";
// there are many themes to import, I liked monokai.
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-github";
// this is an optional import just improved the interaction.
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/ext-beautify";

function Editor({ setCode, code, lan }) {
  function handleChange(editor, data, value) {
    setCode(value);
  }
  console.log(lan);

  return (
    <AceEditor
      height="100%"
      style={{ height: "100%", width: "100%" }}
      placeholder="Start Coding"
      mode={lan}
      theme="monokai"
      name="basic-code-editor"
      onChange={handleChange}
      fontSize={16}
      showGutter={true}
      highlightActiveLine={true}
      showPrintMargin={false}
      width="100%"
      value={code}
      onLoad={(editorInstance) => {
        editorInstance.container.style.resize = "both";
        // mouseup = css resize end
        document.addEventListener("mouseup", (e) => editorInstance.resize());
      }}
    />
  );
  {
    /*}setOptions={{
          enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,

        tabSize: 4,
      }}
    {*/
  }
}

export default Editor;
