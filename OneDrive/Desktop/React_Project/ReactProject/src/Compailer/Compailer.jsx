// import React, { useState } from 'react';
// import { Select } from '@/components/ui/select';
// import { Button } from '@/components/ui/button';

// // List of supported languages
// const LANGUAGES = [
//   { value: 'python', label: 'Python' },
//   { value: 'javascript', label: 'JavaScript' },
//   { value: 'cpp', label: 'C++' },
//   { value: 'java', label: 'Java' },
//   { value: 'rust', label: 'Rust' },
//   { value: 'go', label: 'Go' }
// ];

// const OnlineCompiler = () => {
//   // State management
//   const [language, setLanguage] = useState(LANGUAGES[0].value);
//   const [code, setCode] = useState('');
//   const [output, setOutput] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   // Handle language selection
//   const handleLanguageChange = (selectedLanguage) => {
//     setLanguage(selectedLanguage);
    
//     // Default code templates for each language
//     const defaultTemplates = {
//       python: 'print("Hello, World!")',
//       javascript: 'console.log("Hello, World!");',
//       cpp: '#include <iostream>\nint main() {\n    std::cout << "Hello, World!" << std::endl;\n    return 0;\n}',
//       java: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}',
//       rust: 'fn main() {\n    println!("Hello, World!");\n}',
//       go: 'package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Hello, World!")\n}'
//     };

//     setCode(defaultTemplates[selectedLanguage] || '');
//   };

//   // Simulate code execution (replace with actual backend API call)
//   const handleRun = async () => {
//     setIsLoading(true);
//     setOutput('');

//     try {
//       // In a real-world scenario, you'd send this to a backend API
//       const response = await fetch('/api/compile', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           language,
//           code
//         })
//       });

//       const result = await response.json();
//       setOutput(result.output || 'Compilation successful!');
//     } catch (error) {
//       setOutput(`Error: ${error.message}`);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="p-4 max-w-4xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Online Compiler</h1>
      
//       <div className="flex space-x-4 mb-4">
//         <select 
//           value={language}
//           onChange={(e) => handleLanguageChange(e.target.value)}
//           className="w-1/2 p-2 border rounded"
//         >
//           {LANGUAGES.map((lang) => (
//             <option key={lang.value} value={lang.value}>
//               {lang.label}
//             </option>
//           ))}
//         </select>

//         <Button 
//           onClick={handleRun} 
//           disabled={isLoading}
//           className="w-1/2"
//         >
//           {isLoading ? 'Running...' : 'Run Code'}
//         </Button>
//       </div>

//       <div className="grid md:grid-cols-2 gap-4">
//         <div>
//           <h2 className="text-xl font-semibold mb-2">Code Editor</h2>
//           <textarea
//             value={code}
//             onChange={(e) => setCode(e.target.value)}
//             className="w-full h-96 p-2 border rounded font-mono text-sm"
//             placeholder="Enter your code here..."
//           />
//         </div>

//         <div>
//           <h2 className="text-xl font-semibold mb-2">Output</h2>
//           <div className="bg-gray-100 p-4 h-96 overflow-auto rounded">
//             {output || 'Output will appear here...'}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OnlineCompiler;
// import React, { useState, useEffect } from 'react';
// import Opal from 'opal-runtime';
// import * as Babel from '@babel/standalone';
// import * as ts from 'typescript';
// import * as pyodide from 'pyodide';

// const LANGUAGES = [
//   { 
//     value: 'javascript', 
//     label: 'JavaScript',
//     runner: (code) => {
//       try {
//         const outputs = [];
//         const originalConsole = { ...console };
//         console.log = (...args) => outputs.push(args.map(String).join(' '));
//         console.error = (...args) => outputs.push(`Error: ${args.map(String).join(' ')}`);
        
//         const result = new Function(`
//           try {
//             ${code}
//           } catch (error) {
//             return error.toString();
//           }
//         `)();
        
//         console.log = originalConsole.log;
//         console.error = originalConsole.error;
        
//         return outputs.join('\n') || 'Code executed successfully';
//       } catch (error) {
//         return `Execution Error: ${error.toString()}`;
//       }
//     }
//   },
//   { 
//     value: 'typescript', 
//     label: 'TypeScript',
//     runner: (code) => {
//       try {
//         const transpiled = ts.transpile(code);
//         const outputs = [];
//         const originalConsole = { ...console };
//         console.log = (...args) => outputs.push(args.map(String).join(' '));
        
//         new Function(transpiled)();
        
//         console.log = originalConsole.log;
//         return outputs.join('\n') || 'TypeScript code transpiled and executed';
//       } catch (error) {
//         return `Transpilation Error: ${error.toString()}`;
//       }
//     }
//   },
//   { 
//     value: 'python', 
//     label: 'Python',
//     runner: async (code) => {
//       try {
//         // This requires Pyodide to be loaded
//         const pyodideInstance = await window.loadPyodide();
        
//         let output = '';
//         pyodideInstance.runPython(`
// import sys
// from io import StringIO

// # Capture stdout
// old_stdout = sys.stdout
// sys.stdout = captured_output = StringIO()

// # Run the user's code
// ${code}

// # Get the captured output
// output = captured_output.getvalue()

// # Restore stdout
// sys.stdout = old_stdout

// print(output)
// `);
        
//         return pyodideInstance.runPython('output');
//       } catch (error) {
//         return `Python Execution Error: ${error.toString()}`;
//       }
//     }
//   },
//   { 
//     value: 'ruby', 
//     label: 'Ruby (Opal)',
//     runner: (code) => {
//       try {
//         // Assumes Opal is loaded globally
//         const outputs = [];
//         const originalConsole = { ...console };
//         console.log = (...args) => outputs.push(args.map(String).join(' '));
        
//         Opal.eval(code);
        
//         console.log = originalConsole.log;
//         return outputs.join('\n') || 'Ruby code executed';
//       } catch (error) {
//         return `Ruby Execution Error: ${error.toString()}`;
//       }
//     }
//   }
// ];

// const OnlineCompiler = () => {
//   const [language, setLanguage] = useState(LANGUAGES[0].value);
//   const [code, setCode] = useState('');
//   const [output, setOutput] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [pyodideLoaded, setPyodideLoaded] = useState(false);

//   // Load Pyodide on component mount
//   useEffect(() => {
//     const loadPyodide = async () => {
//       try {
//         window.loadPyodide = pyodide.loadPyodide;
//         await window.loadPyodide();
//         setPyodideLoaded(true);
//       } catch (error) {
//         console.error('Failed to load Pyodide', error);
//       }
//     };

//     loadPyodide();
//   }, []);

//   // Handle code execution
//   const handleRun = async () => {
//     setIsLoading(true);
//     setOutput('');

//     try {
//       // Find the selected language runner
//       const selectedLanguage = LANGUAGES.find(lang => lang.value === language);
      
//       if (!selectedLanguage) {
//         setOutput('Unsupported language');
//         return;
//       }

//       // Special handling for async runners
//       if (language === 'python') {
//         if (!pyodideLoaded) {
//           setOutput('Python interpreter is loading...');
//           return;
//         }
//         const result = await selectedLanguage.runner(code);
//         setOutput(result);
//       } else {
//         const result = selectedLanguage.runner(code);
//         setOutput(result);
//       }
//     } catch (error) {
//       setOutput(`Execution Error: ${error.toString()}`);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Handle language change and set default code
//   const handleLanguageChange = (selectedLanguage) => {
//     setLanguage(selectedLanguage);
    
//     // Default code templates
//     const defaultTemplates = {
//       javascript: `// JavaScript Example
// console.log("Hello, World!");
// function add(a, b) {
//   return a + b;
// }
// console.log("5 + 3 =", add(5, 3));`,
//       typescript: `// TypeScript Example
// interface Person {
//   name: string;
//   age: number;
// }

// const greet = (person: Person) => {
//   console.log(\`Hello \${person.name}, you are \${person.age} years old\`);
// };

// greet({ name: "Alice", age: 30 });`,
//       python: `# Python Example
// def add(a, b):
//     return a + b

// print("Hello, World!")
// result = add(5, 3)
// print(f"5 + 3 = {result}")`,
//       ruby: `# Ruby Example
// def add(a, b)
//   a + b
// end

// puts "Hello, World!"
// result = add(5, 3)
// puts "5 + 3 = #{result}"`
//     };

//     setCode(defaultTemplates[selectedLanguage] || '');
//   };

//   return (
//     <div className="p-4 max-w-4xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Web-Based Multi-Language Compiler</h1>
      
//       <div className="flex space-x-4 mb-4">
//         <select 
//           value={language}
//           onChange={(e) => handleLanguageChange(e.target.value)}
//           className="w-1/2 p-2 border rounded"
//         >
//           {LANGUAGES.map((lang) => (
//             <option key={lang.value} value={lang.value}>
//               {lang.label}
//             </option>
//           ))}
//         </select>

//         <button 
//           onClick={handleRun} 
//           disabled={isLoading || (language === 'python' && !pyodideLoaded)}
//           className="w-1/2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
//         >
//           {isLoading ? 'Running...' : 'Run Code'}
//         </button>
//       </div>

//       <div className="grid md:grid-cols-2 gap-4">
//         <div>
//           <h2 className="text-xl font-semibold mb-2">Code Editor</h2>
//           <textarea
//             value={code}
//             onChange={(e) => setCode(e.target.value)}
//             className="w-full h-96 p-2 border rounded font-mono text-sm"
//             placeholder="Enter your code here..."
//           />
//         </div>

//         <div>
//           <h2 className="text-xl font-semibold mb-2">Output</h2>
//           <div className="bg-gray-100 p-4 h-96 overflow-auto rounded">
//             {output || 'Output will appear here...'}
//           </div>
//         </div>
//       </div>

//       <div className="mt-4 p-2 bg-yellow-100 rounded">
//         <p className="text-yellow-800">
//           Note: This is a client-side compiler with limited language support.
//           Complex programs may not work as expected.
//         </p>
//       </div>
//     </div>
//   );
// };









// export default OnlineCompiler;
// import React, { useState } from 'react';
// import Editor from "@monaco-editor/react";
// import { Play, Save, Download, Upload, Copy, Trash2 } from 'lucide-react';

// const CodeCompiler = () => {
//   const [code, setCode] = useState(`// Write your code here
// console.log("Hello, World!");`);
//   const [output, setOutput] = useState('');
//   const [language, setLanguage] = useState('javascript');
//   const [theme, setTheme] = useState('light');
//   const [fileName, setFileName] = useState('untitled.js');
//   const [savedFiles, setSavedFiles] = useState([]);
//   const [isRunning, setIsRunning] = useState(false);

//   const languageExtensions = {
//     javascript: 'js',
//     python: 'py',
//     typescript: 'ts'
//   };

//   const languageTemplates = {
//     javascript: `// JavaScript Template
// console.log("Hello from JavaScript!");

// // Example function
// function greet(name) {
//   return \`Hello, \${name}!\`;
// }

// console.log(greet("World"));`,
    
//     python: `# Python Template
// print("Hello from Python!")

// # Example function
// def greet(name):
//     return f"Hello, {name}!"

// print(greet("World"))`,
    
//     typescript: `// TypeScript Template
// interface Person {
//   name: string;
//   age: number;
// }

// function greet(person: Person): string {
//   return \`Hello, \${person.name}! You are \${person.age} years old.\`;
// }

// const person: Person = {
//   name: "World",
//   age: 25
// };

// console.log(greet(person));`
//   };

//   const runCode = () => {
//     setIsRunning(true);
//     setOutput('');
    
//     try {
//       // For demonstration, we're using a simple eval
//       // In production, use a secure code execution service
//       const oldLog = console.log;
//       let output = '';
      
//       console.log = (...args) => {
//         output += args.join(' ') + '\n';
//       };

//       if (language === 'javascript' || language === 'typescript') {
//         new Function(code)();
//       } else if (language === 'python') {
//         setOutput('Python execution is simulated in this demo.\nIn production, this would connect to a Python runtime.');
//         return;
//       }
      
//       console.log = oldLog;
//       setOutput(output);
//     } catch (error) {
//       setOutput(`Error: ${error.message}`);
//     } finally {
//       setIsRunning(false);
//     }
//   };

//   const handleLanguageChange = (newLanguage) => {
//     setLanguage(newLanguage);
//     setFileName(`untitled.${languageExtensions[newLanguage]}`);
//     setCode(languageTemplates[newLanguage]);
//   };

//   const saveFile = () => {
//     const newFile = {
//       name: fileName,
//       language,
//       code,
//       timestamp: new Date().toISOString()
//     };
//     setSavedFiles(prev => [...prev, newFile]);
//   };

//   const loadFile = (file) => {
//     setFileName(file.name);
//     setLanguage(file.language);
//     setCode(file.code);
//   };

//   const downloadFile = () => {
//     const blob = new Blob([code], { type: 'text/plain' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = fileName;
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//     URL.revokeObjectURL(url);
//   };

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(code);
//   };

//   const clearCode = () => {
//     setCode(languageTemplates[language]);
//   };

//   return (
//     <div className="space-y-6">
//       <div className="flex justify-between items-center">
//         <h1 className="text-3xl font-bold text-gray-900">Online Code Compiler</h1>
//         <div className="flex items-center space-x-4">
//           <input
//             type="text"
//             value={fileName}
//             onChange={(e) => setFileName(e.target.value)}
//             className="border rounded px-3 py-1 text-sm"
//             placeholder="File name"
//           />
//           <select
//             value={theme}
//             onChange={(e) => setTheme(e.target.value)}
//             className="border rounded px-3 py-1 text-sm"
//           >
//             <option value="light">Light Theme</option>
//             <option value="dark">Dark Theme</option>
//           </select>
//         </div>
//       </div>
      
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <div className="space-y-4">
//           <div className="flex items-center space-x-4">
//             <select
//               value={language}
//               onChange={(e) => handleLanguageChange(e.target.value)}
//               className="border rounded px-3 py-1"
//             >
//               <option value="javascript">JavaScript</option>
//               <option value="python">Python</option>
//               <option value="typescript">TypeScript</option>
//             </select>
            
//             <div className="flex space-x-2">
//               <button
//                 onClick={runCode}
//                 disabled={isRunning}
//                 className={`px-3 py-1 rounded flex items-center space-x-1 ${
//                   isRunning
//                     ? 'bg-gray-300 cursor-not-allowed'
//                     : 'bg-green-600 hover:bg-green-700 text-white'
//                 }`}
//               >
//                 <Play className="h-4 w-4" />
//                 <span>Run</span>
//               </button>
              
//               <button
//                 onClick={saveFile}
//                 className="px-3 py-1 rounded bg-blue-600 hover:bg-blue-700 text-white flex items-center space-x-1"
//               >
//                 <Save className="h-4 w-4" />
//                 <span>Save</span>
//               </button>
              
//               <button
//                 onClick={downloadFile}
//                 className="px-3 py-1 rounded bg-purple-600 hover:bg-purple-700 text-white flex items-center space-x-1"
//               >
//                 <Download className="h-4 w-4" />
//                 <span>Download</span>
//               </button>
              
//               <button
//                 onClick={copyToClipboard}
//                 className="px-3 py-1 rounded bg-gray-600 hover:bg-gray-700 text-white flex items-center space-x-1"
//               >
//                 <Copy className="h-4 w-4" />
//                 <span>Copy</span>
//               </button>
              
//               <button
//                 onClick={clearCode}
//                 className="px-3 py-1 rounded bg-red-600 hover:bg-red-700 text-white flex items-center space-x-1"
//               >
//                 <Trash2 className="h-4 w-4" />
//                 <span>Clear</span>
//               </button>
//             </div>
//           </div>
          
//           <div className="h-[500px] border rounded">
//             <Editor
//               height="100%"
//               defaultLanguage="javascript"
//               language={language}
//               value={code}
//               onChange={(value) => setCode(value || '')}
//               theme={theme === 'light' ? 'light' : 'vs-dark'}
//               options={{
//                 minimap: { enabled: false },
//                 fontSize: 14,
//                 lineNumbers: 'on',
//                 roundedSelection: false,
//                 scrollBeyondLastLine: false,
//                 automaticLayout: true
//               }}
//             />
//           </div>
//         </div>
        
//         <div className="space-y-4">
//           <div className="flex justify-between items-center">
//             <h2 className="text-xl font-semibold">Output</h2>
//             <button
//               onClick={() => setOutput('')}
//               className="text-gray-600 hover:text-gray-800"
//             >
//               Clear output
//             </button>
//           </div>
//           <div className="h-[500px] bg-gray-900 text-white p-4 rounded font-mono overflow-auto">
//             <pre>{output || 'Run your code to see output here...'}</pre>
//           </div>
          
//           {savedFiles.length > 0 && (
//             <div>
//               <h3 className="font-semibold mb-2">Saved Files</h3>
//               <div className="space-y-2">
//                 {savedFiles.map((file, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center justify-between p-2 bg-gray-50 rounded hover:bg-gray-100 cursor-pointer"
//                     onClick={() => loadFile(file)}
//                   >
//                     <div>
//                       <span className="font-medium">{file.name}</span>
//                       <span className="text-sm text-gray-500 ml-2">
//                         {new Date(file.timestamp).toLocaleString()}
//                       </span>
//                     </div>
//                     <span className="text-xs bg-gray-200 px-2 py-1 rounded">
//                       {file.language}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CodeCompiler;