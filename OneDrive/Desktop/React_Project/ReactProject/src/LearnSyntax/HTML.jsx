import React, { useEffect, useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import './All.css'
// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
// } from "../Components/ui/sheet";
// import { ScrollArea } from "../Components/ui/scroll-area";
// import { Button } from "../Components/ui/button";
// import { Separator } from "../Components/ui/separator";

// const HTMLTutorial = () => {
//   const [HTML, setHTML] = useState({});
//   const [selectedMain, setSelectedMain] = useState("");
//   const [selectedSub, setSelectedSub] = useState("");
//   const [selectedTopic, setSelectedTopic] = useState("");
//   const [selectedContent, setSelectedContent] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("http://localhost:3000/syntax");
//         const data = await response.json();
//         setHTML(data[0].HTML);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleMainClick = (main) => {
//     setSelectedMain(selectedMain === main ? "" : main);
//     setSelectedSub("");
//     setSelectedTopic("");
//     setSelectedContent("");
//   };

//   const handleSubClick = (sub) => {
//     setSelectedSub(selectedSub === sub ? "" : sub);
//     setSelectedTopic("");
//     setSelectedContent("");
//   };

//   const handleTopicClick = (topic) => {
//     setSelectedTopic(selectedTopic === topic ? "" : topic);
//     setSelectedContent("");
//   };

//   const handleContentClick = (content) => {
//     setSelectedContent(selectedContent === content ? "" : content);
//   };

//   const getDisplayContent = () => {
//     if (selectedContent && selectedTopic && selectedSub && selectedMain) {
//       const content =
//         HTML[selectedMain]?.[selectedSub]?.[selectedTopic]?.[selectedContent];
//       return {
//         title: selectedContent,
//         content: typeof content === "string" ? content : "Content not found",
//       };
//     }
//     if (selectedTopic && selectedSub && selectedMain) {
//       const topic = HTML[selectedMain]?.[selectedSub]?.[selectedTopic];
//       if (typeof topic === "string") {
//         return { title: selectedTopic, content: topic };
//       }
//     }
//     if (selectedSub && selectedMain) {
//       const sub = HTML[selectedMain]?.[selectedSub];
//       if (typeof sub === "string") {
//         return { title: selectedSub, content: sub };
//       } else {
//         let content = "";
//         Object.entries(sub || {}).forEach(([key, value]) => {
//           if (typeof value === "string") {
//             content += `${key}:\n${value}\n\n`;
//           }
//         });
//         return { title: selectedSub, content: content.trim() };
//       }
//     }
//     if (selectedMain) {
//       const main = HTML[selectedMain];
//       if (typeof main === "string") {
//         return { title: selectedMain, content: main };
//       }
//     }
//     return null;
//   };

//   const displayContent = getDisplayContent();

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <div className="w-72 bg-muted border-r">
//         <div className="p-4">
//           <h1 className="text-lg font-bold mb-4">HTML Tutorial</h1>
//           <Separator />
//           <ScrollArea className="h-[85vh]">
//             {Object.entries(HTML).map(([main, mainContent]) => (
//               <div key={main} className="my-2">
//                 <Button
//                   variant="ghost"
//                   className="w-full justify-start text-left"
//                   onClick={() => handleMainClick(main)}
//                 >
//                   {selectedMain === main ? (
//                     <ChevronDown className="mr-2 h-4 w-4" />
//                   ) : (
//                     <ChevronRight className="mr-2 h-4 w-4" />
//                   )}
//                   {main}
//                 </Button>

//                 {selectedMain === main && (
//                   <div className="ml-4">
//                     {Object.entries(mainContent || {}).map(([sub, subContent]) => (
//                       <div key={sub}>
//                         <Button
//                           variant="ghost"
//                           size="sm"
//                           className="w-full justify-start text-left pl-6"
//                           onClick={() => handleSubClick(sub)}
//                         >
//                           {selectedSub === sub ? (
//                             <ChevronDown className="mr-2 h-3 w-3" />
//                           ) : (
//                             <ChevronRight className="mr-2 h-3 w-3" />
//                           )}
//                           {sub}
//                         </Button>

//                         {selectedSub === sub && typeof subContent === 'object' && (
//                           <div className="ml-4">
//                             {Object.entries(subContent || {}).map(([topic, topicContent]) => (
//                               <div key={topic}>
//                                 <Button
//                                   variant="ghost"
//                                   size="sm"
//                                   className="w-full justify-start text-left pl-8"
//                                   onClick={() => handleTopicClick(topic)}
//                                 >
//                                   {selectedTopic === topic ? (
//                                     <ChevronDown className="mr-2 h-3 w-3" />
//                                   ) : (
//                                     <ChevronRight className="mr-2 h-3 w-3" />
//                                   )}
//                                   {topic}
//                                 </Button>

//                                 {selectedTopic === topic && typeof topicContent === 'object' && (
//                                   <div className="ml-6">
//                                     {Object.keys(topicContent || {}).map((content) => (
//                                       <Button
//                                         key={content}
//                                         variant="ghost"
//                                         size="sm"
//                                         className="w-full justify-start text-left pl-10"
//                                         onClick={() => handleContentClick(content)}
//                                       >
//                                         {content}
//                                       </Button>
//                                     ))}
//                                   </div>
//                                 )}
//                               </div>
//                             ))}
//                           </div>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </ScrollArea>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="flex-1 p-8 bg-background overflow-y-auto">
//         {displayContent ? (
//           <div>
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-2xl font-bold text-primary">
//                 {displayContent.title}
//               </h2>
//               <span className="text-sm text-muted-foreground">HTML</span>
//             </div>

//             <div className="prose prose-invert max-w-none">
//               <pre className="whitespace-pre-wrap text-sm leading-relaxed">
//                 {displayContent.content}
//               </pre>
//             </div>
//           </div>
//         ) : (
//           <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
//             <p className="text-lg mb-2">Select a topic to view content</p>
//             <p className="text-sm">HTML Tutorial Documentation</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HTMLTutorial;


// import { useState, useEffect } from 'react';
// import { ChevronDown, ChevronRight, BookOpen, Layout, FileText, Settings, ExternalLink } from 'lucide-react';

// const HTMLTutorial = () => {
//   const [HTML, setHTML] = useState({});
//   const [selectedMain, setSelectedMain] = useState("");
//   const [selectedSub, setSelectedSub] = useState("");
//   const [selectedTopic, setSelectedTopic] = useState("");
//   const [selectedContent, setSelectedContent] = useState("");
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("http://localhost:3000/syntax");
//         const data = await response.json();
//         setHTML(data[1].HTML);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleMainClick = (main) => {
//     setSelectedMain(selectedMain === main ? "" : main);
//     setSelectedSub("");
//     setSelectedTopic("");
//     setSelectedContent("");
//   };

//   const handleSubClick = (sub) => {
//     setSelectedSub(selectedSub === sub ? "" : sub);
//     setSelectedTopic("");
//     setSelectedContent("");
//   };

//   const handleTopicClick = (topic) => {
//     setSelectedTopic(selectedTopic === topic ? "" : topic);
//     setSelectedContent("");
//   };

//   const getDisplayContent = () => {
//     // 1. Check if a full chain has been selected
//     if (selectedContent && selectedTopic && selectedSub && selectedMain) {
//       const content =
//         HTML[selectedMain][selectedSub][selectedTopic][selectedContent];
//       return {
//         title: selectedContent,
//         content: typeof content === "string" ? content : "Content not Found",
//       };
//     }

//     // 2. If a topic is selected
//     if (selectedTopic && selectedSub && selectedMain) {
//       const topic = HTML[selectedMain][selectedSub][selectedTopic];
//       if (typeof topic === "string") {
//         return {
//           title: selectedTopic,
//           content: topic,
//         };
//       }
//     }

//     // 3. When a sub-heading is selected
//     if (selectedSub && selectedMain) {
//       const sub = HTML[selectedMain][selectedSub];
//       if (typeof sub === "string") {
//         return {
//           title: selectedSub,
//           content: sub,
//         };
//       } else {
//         let aggregatedContent = "";
//         Object.entries(sub).forEach(([key, value]) => {
//           if (typeof value === "string") {
//             aggregatedContent += `${key}:\n${value}\n\n`;
//           }
//         });
//         if (!aggregatedContent.trim()) {
//           aggregatedContent = JSON.stringify(sub, null, 2);
//         }
//         return {
//           title: selectedSub,
//           content: aggregatedContent,
//         };
//       }
//     }

//     // 4. Fallback: if only a main heading is selected
//     if (selectedMain) {
//       const main = HTML[selectedMain];
//       if (typeof main === "string") {
//         return {
//           title: selectedMain,
//           content: main,
//         };
//       }
//     }

//     return null;
//   };

//   const displayContent = getDisplayContent();

//   return (
//     <div className="flex h-screen bg-black text-white">
//       {/* Sidebar */}
//       <div className="w-64 bg-zinc-900 border-r border-zinc-800 flex flex-col">
//         {/* Brand/Logo Area */}
//         <div className="p-4 border-b border-zinc-800">
//           <div className="flex items-center gap-2">
//             <div className="bg-blue-600 p-2 rounded">
//               <BookOpen size={20} className="text-white" />
//             </div>
//             <div>
//               <h2 className="font-semibold">HTML Tutorial</h2>
//               <p className="text-sm text-zinc-400">Interactive Guide</p>
//             </div>
//           </div>
//         </div>
        
//         {/* Main Navigation */}
//         <div className="flex-1 overflow-auto py-2">
//           <div className="px-3 py-2">
//             <p className="text-xs font-medium text-zinc-400 mb-2">CONTENT</p>
//           </div>
          
//           {isLoading ? (
//             <div className="flex justify-center py-4">
//               <div className="animate-pulse text-zinc-500">Loading...</div>
//             </div>
//           ) : (
//             <nav className="space-y-1">
//               {Object.entries(HTML).map(([main, mainContent]) => (
//                 <div key={main}>
//                   <button
//                     onClick={() => handleMainClick(main)}
//                     className={`flex items-center justify-between w-full px-3 py-2 text-sm hover:bg-zinc-800/50 ${
//                       selectedMain === main ? "bg-zinc-800/70" : ""
//                     }`}
//                   >
//                     <div className="flex items-center">
//                       <Layout size={16} className="mr-2 text-zinc-400" />
//                       <span>{main}</span>
//                     </div>
//                     {typeof mainContent === "object" && (
//                       <div className="text-zinc-400">
//                         {selectedMain === main ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
//                       </div>
//                     )}
//                   </button>
                  
//                   {selectedMain === main && (
//                     <div className="ml-6 mt-1 space-y-1">
//                       {Object.entries(mainContent).map(([sub, subContent]) => (
//                         <div key={sub}>
//                           <button
//                             onClick={() => handleSubClick(sub)}
//                             className={`flex items-center justify-between w-full px-3 py-2 text-sm hover:bg-zinc-800/50 ${
//                               selectedSub === sub ? "bg-zinc-800/70" : ""
//                             }`}
//                           >
//                             <div className="flex items-center">
//                               <FileText size={16} className="mr-2 text-zinc-400" />
//                               <span>{sub}</span>
//                             </div>
//                             {typeof subContent === "object" && (
//                               <div className="text-zinc-400">
//                                 {selectedSub === sub ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
//                               </div>
//                             )}
//                           </button>
                          
//                           {selectedSub === sub && typeof subContent === "object" && (
//                             <div className="ml-6 mt-1 space-y-1">
//                               {Object.entries(subContent).map(([topic, topicContent]) => (
//                                 <button
//                                   key={topic}
//                                   onClick={() => handleTopicClick(topic)}
//                                   className={`flex items-center w-full px-3 py-2 text-sm hover:bg-zinc-800/50 ${
//                                     selectedTopic === topic ? "bg-zinc-800/70" : ""
//                                   }`}
//                                 >
//                                   <ExternalLink size={16} className="mr-2 text-zinc-400" />
//                                   <span>{topic}</span>
//                                 </button>
//                               ))}
//                             </div>
//                           )}
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </nav>
//           )}
//         </div>
        
//         {/* Bottom user section */}
//         <div className="p-4 border-t border-zinc-800">
//           <div className="flex items-center gap-2">
//             <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-2 rounded-full">
//               <div className="text-white font-bold text-xs">HT</div>
//             </div>
//             <div>
//               <p className="text-sm font-medium">HTML Tutorial</p>
//               <p className="text-xs text-zinc-400">tutorial@example.com</p>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Content Area */}
//       <div className="flex-1 overflow-auto">
//         <div className="flex items-center h-12 px-4 border-b border-zinc-800">
//           <div className="flex items-center space-x-1">
//             <span className="text-sm text-zinc-400">
//               {selectedMain && selectedMain}
//               {selectedSub && ` / ${selectedSub}`}
//               {selectedTopic && ` / ${selectedTopic}`}
//             </span>
//           </div>
//         </div>
        
//         <div className="p-6">
//           {displayContent ? (
//             <div>
//               <h2 className="text-xl font-semibold mb-4">{displayContent.title}</h2>
//               <div className="bg-zinc-900 p-4 rounded border border-zinc-800">
//                 <pre className="whitespace-pre-wrap text-sm text-zinc-300">
//                   {displayContent.content}
//                 </pre>
//               </div>
//             </div>
//           ) : (
//             <div className="flex flex-col items-center justify-center h-64 text-zinc-400">
//               <BookOpen size={48} className="mb-4 opacity-30" />
//               <p>Select a topic from the sidebar to view its content</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HTMLTutorial;

// import { Sidebar } from "../Components/ui/sidebar";
// function HTMLTutorial () {
//   return (
//     <Sidebar />
//   )
// }
// export default HTMLTutorial





const HTML = () => {

  const [HTML, setHTML] = useState({});
  const [selectedMain, setSelectedMain] = useState("");
  const [selectedSub, setSelectedSub] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedContent, setSelectedContent] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/syntax");
        const data = await response.json();
        setHTML(data[0].HTML);
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
        HTML[selectedMain][selectedSub][selectedTopic][selectedContent];
      return {
        title: selectedContent,
        content: typeof content === "string" ? content : "Content not Found",
      };
    }

    // 2. If a topic is selected
    if (selectedTopic && selectedSub && selectedMain) {
      const topic = HTML[selectedMain][selectedSub][selectedTopic];
      if (typeof topic === "string") {
        return {
          title: selectedTopic,
          content: topic,
        };
      }
    }

    // 3. When a sub-heading is selected
    if (selectedSub && selectedMain) {
      const sub = HTML[selectedMain][selectedSub];
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
      const main = HTML[selectedMain];
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
        <h1 className="text-xl font-bold mb-4">HTML Tutorial</h1>
        {Object.entries(HTML).map(([main, mainContent]) => (
          <div key={main} className="mb-2">
            <button
              className="flex items-center w-full text-left px-2 py-1 rounded hover:bg-gray-200"
              style={{ border: "none", backgroundColor: "#4f46e5", color: "white" }}
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
                      border: "1px solid #4f46e5",
                      marginLeft: "20px",
                      backgroundColor: "white",
                      color:"#4f46e5",
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
              <span style={{ color: "#C586C0", fontSize: "14px" }}>HTML</span>
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

export default HTML;