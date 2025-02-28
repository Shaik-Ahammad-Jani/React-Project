import { useEffect, useRef, useState } from "react";
import { EditorState } from "@codemirror/state";
import { EditorView, keymap } from "@codemirror/view";
import { defaultKeymap } from "@codemirror/commands";
import { css } from "@codemirror/lang-css";
import { autocompletion } from "@codemirror/autocomplete";
import { foldGutter, indentOnInput } from "@codemirror/language";
import { Button,  } from "antd";


const cssExamples = [
  `/* Example 1: Basic Styling */
  body { background-color: lightblue; }
  p { color: red; font-size: 18px; text-align: center; }`,

  `/* Example 2: Flexbox */
  .container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100vh;
  }
  .box {
    width: 100px;
    height: 100px;
    background: coral;
  }`,

  `/* Example 3: Grid Layout */
  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
  .grid-item {
    padding: 20px;
    background: purple;
    color: white;
  }`,

  `/* Example 4: Hover Effects */
  .button {
    background: blue;
    color: white;
    padding: 10px 20px;
    transition: background 0.3s;
  }
  .button:hover {
    background: darkblue;
  }`,
];

const CodeEditors = () => {
  const editorRef = useRef(null);
  const [currentExample, setCurrentExample] = useState(0);

  useEffect(() => {
    if (!editorRef.current) return;

    const state = EditorState.create({
      doc: cssExamples[currentExample], // Load initial example
      extensions: [
        css(), // Enables CSS syntax
        keymap.of(defaultKeymap),
        autocompletion(), // CSS autocompletion
        foldGutter(), // Code folding
        indentOnInput(), // Auto indentation
      ],
    });

    const view = new EditorView({
      state,
      parent: editorRef.current,
    });

    return () => view.destroy();
  }, [currentExample]); // Reload on example change

  const handleNextExample = () => {
    setCurrentExample((prev) => (prev + 1) % cssExamples.length);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div
        ref={editorRef}
        style={{
          border: "1px solid #ddd",
          minHeight: "300px",
          marginBottom: "10px",
        }}
      />
      <button
        onClick={handleNextExample}
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
      >
        Next CSS Example
      </button>
      <Button type="link" shape="round">
        click me
      </Button>
      
    </div>
  );
};

export default CodeEditors;
