import React, { useEffect, useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

const Node = () => {
  const [NodeJS, setNodeJS] = useState({});
  const [selectedMain, setSelectedMain] = useState("");
  const [selectedSub, setSelectedSub] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedContent, setSelectedContent] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/syntax");
        const data = await response.json();
        setNodeJS(data[4].NodeJS);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const handleMainClick = (main) => {
    setSelectedMain(selectedMain === main ? "" : main);
    setSelectedSub("");
    setSelectedTopic("");
    setSelectedContent("");
  };

  const handleSubClick = (sub) => {
    setSelectedSub(selectedSub === sub ? "" : sub);
    setSelectedTopic("");
    setSelectedContent("");
  };

  const getDisplayContent = () => {
    // 1. Check if a full chain has been selected
    if (selectedContent && selectedTopic && selectedSub && selectedMain) {
      const content =
      NodeJS[selectedMain][selectedSub][selectedTopic][selectedContent];
      return {
        title: selectedContent,
        content: typeof content === "string" ? content : "Content not Found",
      };
    }

    // 2. If a topic is selected
    if (selectedTopic && selectedSub && selectedMain) {
      const topic = NodeJS[selectedMain][selectedSub][selectedTopic];
      if (typeof topic === "string") {
        return {
          title: selectedTopic,
          content: topic,
        };
      }
    }

    // 3. When a sub-heading is selected
    if (selectedSub && selectedMain) {
      const sub = NodeJS[selectedMain][selectedSub];
      if (typeof sub === "string") {
        return {
          title: selectedSub,
          content: sub,
        };
      } else {
        let aggregatedContent = "";
        Object.entries(sub).forEach(([key, value]) => {
          if (typeof value === "string") {
            aggregatedContent += `${key}:\n${value}\n\n`;
          }
        });
        if (!aggregatedContent.trim()) {
          aggregatedContent = JSON.stringify(sub, null, 2);
        }
        return {
          title: selectedSub,
          content: aggregatedContent,
        };
      }
    }

    // 4. Fallback: if only a main heading is selected
    if (selectedMain) {
      const main = NodeJS[selectedMain];
      if (typeof main === "string") {
        return {
          title: selectedMain,
          content: main,
        };
      }
    }

    return null;
  };

  const displayContent = getDisplayContent();

  return (
    <div
      className="flex min-h-screen font-sans bg-white text-black"
      style={{ display: "flex" }}
    >
      {/* Sidebar */}
      <div
        className="w-1/4 min-h-screen bg-[#f9fafb] p-4 overflow-y-auto border-r border-gray-300"
        style={{ width: "20%", border: "1px solid", overflow: "auto" }}
      >
        <h1 className="text-xl font-bold mb-4">Node Tutorial</h1>
        {Object.entries(NodeJS).map(([main, mainContent]) => (
          <div key={main} className="mb-2">
            <button
              className="flex items-center w-full text-left px-2 py-1 rounded hover:bg-gray-200"
              style={{ border: "none", backgroundColor: "blue", color: "white" }}
              onClick={() => handleMainClick(main)}
            >
              {selectedMain === main ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}
              <span className="ml-2 font-medium">{main}</span>
            </button>

            {selectedMain === main &&
              Object.entries(mainContent).map(([sub, subContent]) => (
                <div className="ml-4" key={sub}>
                  <button
                    className="flex items-center w-full text-left px-2 py-1 rounded hover:bg-gray-100"
                    style={{
                      border: "none",
                      marginLeft: "20px",
                      backgroundColor: "green",
                      color: "white",
                    }}
                    onClick={() => handleSubClick(sub)}
                  >
                    {selectedSub === sub ? (
                      <ChevronDown size={14} />
                    ) : (
                      <ChevronRight size={14} />
                    )}
                    <span className="ml-2 text-sm">{sub}</span>
                  </button>
                </div>
              ))}
          </div>
        ))}
      </div>

      {/* Content area - dark theme editor style */}
      <div
        style={{
          width: "80%",
          backgroundColor: "#1E1E1E",
          color: "#D4D4D4",
          fontFamily: "Consolas, Monaco, 'Andale Mono', monospace",
          padding: "20px",
          overflowY: "auto",
          minHeight: "100vh"
        }}
      >
        {displayContent ? (
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
              <h2 style={{ color: "#C586C0", margin: 0 }}>{displayContent.title}</h2>
              <span style={{ color: "#C586C0", fontSize: "14px" }}>NodeJS</span>
            </div>
            
            {/* This is the key change - content displayed with preserved formatting */}
            <pre style={{ 
              margin: 0,
              whiteSpace: "pre-wrap",
              fontFamily: "Consolas, Monaco, 'Andale Mono', monospace",
              color: "#D4D4D4",
              lineHeight: "1.6"
            }}>
              {displayContent.content}
            </pre>
          </div>
        ) : (
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", color: "#6A9955" }}>
            Select a topic from the sidebar to view its content
          </div>
        )}
      </div>
    </div>
  );
};

export default Node;