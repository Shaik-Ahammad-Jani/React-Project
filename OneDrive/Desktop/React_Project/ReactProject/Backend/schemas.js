const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Users = new Schema ({
  name:String,
  email:String,
  password:String,
  confirmPassword:String,
  number:Number
})

// HTML Introduction section schemas
const HTMLIntroductionSchema = new Schema({
  "What is HTML?": String,
  "Features of HTML": String,
  "Why the Term HyperText & Markup Language?": String,
  "History of HTML:": String
});

const HTMLWorkingSchema = new Schema({
  "HTML Working": String,
  "How do websites work?": String,
  "What is a Web Browser?": String,
  "What is an HTML Document?": String,
  "What is a Rendered Page:": String,
  "How does a basic website work?": String,
  "How does a browser work?": String
});

const HTMLInstallationSchema = new Schema({
  "HTML Installation": String,
  "What are the prerequisites to learning HTML?": String,
  "Tools needed to make an HTML page:": String,
  "Installation & Setup of Visual Studio Code for HTML:": String,
  "Live Server Extension": String
});

const HTMLExecutionSchema = new Schema({
  "HTML Execution": String,
  "Creating a New File": String,
  "Pasting the code": String,
  "Going Live using the 'live server' extension": String
});

const HTMLPageStructureSchema = new Schema({
  "HTML Page Structure": String,
  "DOCTYPE Declaration": String,
  "HTML Root Element": String,
  "Head Section": String,
  "Title Tag": String,
  "Body Tag": String,
  "Summary": String
});

const HTMLTagsSchema = new Schema({
  "HTML Tags": String,
  "Commonly used tags in HTML": String,
  "Document Structure Tags": String,
  "Metadata Tags": String,
  "Text Formatting Tags": String,
  "List Tags": String,
  "Hyperlink and Media Tags": String,
  "Form Tags": String,
  "Table Tags": String,
  "Semantic Tags": String,
  "Paired and Unpaired HTML Tags": String
});

const HTMLElementsSchema = new Schema({
  "HTML Elements": String,
  "What is an HTML Element?": String,
  "What is a Nested HTML Element?": String,
  "What is an Empty HTML Element?": String,
  "HTML Tags vs. Elements": String
});

const HTMLAttributesSchema = new Schema({
  "HTML Attributes": String,
  "Types of HTML Attributes": String
});

const HTMLCommentsSchema = new Schema({
  "HTML Comments": String,
  "Key Points About HTML Comments": String,
  "Types of Comments in HTML": String
});

const HTMLIdAndClassesSchema = new Schema({
  "HTML Id & Classes": String,
  "What is an ID?": String,
  "What are Classes?": String,
  "The Style Tag": String
});

// HTML Basics section schemas
const SkeltenTagsSchema = new Schema({
  "Skeletal Tags": String,
  "<html> Tag: 'Root of an HTML Page'": String,
  "<head> Tag: 'Header Part of an HTML Page'": String,
  "<title> Tag: 'Title Part of an HTML Page'": String,
  "<body> Tag: 'Body Part of an HTML Page'": String
});

const HeadingTagsSchema = new Schema({
  "Heading Tags": String,
  "<h1> Tag: First-Level Heading": String,
  "<h2> Tag: Second-Level Heading": String,
  "<h3> Tag: Third-Level Heading": String,
  "<h4> Tag: Fourth-Level Heading": String,
  "<h5> Tag: Fifth-Level Heading": String,
  "<h6> Tag: Sixth-Level Heading": String,
  "Summary": String
});

const ParagraphTagSchema = new Schema({
  "Paragraph Tag": String,
  "<p> Tag: Defining a Paragraph in HTML": String,
  "Attributes and Styling": String
});

const HorizontalLineTagSchema = new Schema({
  "Horizontal Line Tag": String,
  "How to use the <hr> tag?": String
});

const LineBreakTagSchema = new Schema({
  "Line Break Tag": String
});

const AnchorTagSchema = new Schema({
  "Anchor Tag": String,
  "Key Characteristics of HTML Links": String,
  "Syntax of HTML Links": String,
  "Essential Attributes of the Anchor Tag": String,
  "Linking to Specific Page Sections": String,
  "Link Colors": String
});

const ImageTagSchema = new Schema({
  "Image Tag": String,
  "Basic Syntax for Embedding Images": String,
  "Key Features of the <img> Tag": String
});

const PreTagSchema = new Schema({
  "Pre Tag": String,
  "What Does the <pre> Tag Do?": String,
  "Syntax for Using the <pre> Tag": String,
  "Key Features": String,
  "When to Use the <pre> Tag?": String
});

// Inline and Block Elements schemas
const HTMLInlineElementsSchema = new Schema({
  "HTML Inline Elements": String,
  "What are Inline Elements?": String,
  "Common Inline Elements": String,
  "Styling Inline Elements": String
});

const HTMLBlockElementsSchema = new Schema({
  "HTML Block Elements": String,
  "What are Block-level Elements?": String,
  "Characteristics of Block-level Elements:": String,
  "Common Block-level Elements:": String
});

// HTML Lists schemas
const HTMLListsSchema = new Schema({
  "HTML Lists": String,
  "Types of HTML Lists": String
});

const HTMLUnorderedListsSchema = new Schema({
  "HTML Unordered List": String,
  "Key Characteristics of Unordered Lists": String,
  "Basic Example": String
});

const HTMLOrderedListsSchema = new Schema({
  "HTML Ordered List": String,
  "Key Points": String,
  "Basic Example": String
});

const HTMLDefinitionListSchema = new Schema({
  "HTML Definition Lists": String,
  "Definition List Example": String
});

// HTML Tables schemas
const HTMLTablesSchema = new Schema({
  "HTML Tables": String,
  "Syntax of HTML Table": String,
  "Key Elements of HTML Table": String,
  "Basic Table Structure": String,
  "rowspan and colspan Attributes": String,
  "Examples": String
});

const MoreOnTablesSchema = new Schema({
  "More on Tables": String,
  "Adding a Caption": String,
  "Table Headers and Footers": String,
  "Column Groups": String,
  "Accessibility in Tables": String,
  "Sample HTML Table": String
});

// HTML Forms schemas
const IntroductionToHTMLFormSchema = new Schema({
  "Introduction to HTML Forms": String,
  "Why Do We Use Forms?": String,
  "HTML Forms Structure:": String,
  "How to Use Form Controls?": String
});

const HTMLInputTypesSchema = new Schema({
  "HTML Input Types": String,
  "Text Input": String,
  "Password Input": String,
  "Radio Buttons": String,
  "Checkbox": String,
  "More Input Types": String
});

const TextareasAndSelectSchema = new Schema({
  "Textarea & Select": String,
  "The Textarea Element": String,
  "The Select Element": String,
  "Combining Textarea and Select": String
});

const MoreOnFormsSchema = new Schema({
  "More on forms": String,
  "Common Attributes": String,
  "New HTML5 Attributes": String,
  "HTML5 Validation Attributes": String
});

// Head Elements schemas
const HTMLMetaTagsSchema = new Schema({
  "HTML Meta Tags": String,
  "Explanation of each meta tag:": String,
  "How to add favicon in HTML?": String
});

const LinkAndScriptTagsSchema = new Schema({
  "Link & Script Tags": String,
  "The <link> Tag": String,
  "The <script> Tag": String
});

// HTML Media schemas
const VideoAndAudioTagsSchema = new Schema({
  "Video & Audio Tags": String,
  "The <video> Tag": String,
  "The <audio> Tag": String
});

const SVGInHTMLSchema = new Schema({
  "SVG in HTML": String,
  "What is SVG?": String,
  "Why Use SVG?": String,
  "How to Embed SVG in HTML": String,
  "SVG Attributes": String,
  "Practical Examples": String
});

const IFrameInHTMLSchema = new Schema({
  "iFrames in HTML": String,
  "What is an iFrame?": String,
  "Why Use iFrames?": String,
  "Basic Syntax": String,
  "Attributes of iFrame": String,
  "Practical Examples": String
});

// Main HTML Documentation schema
const HTMLDocumentationSchema = new Schema({
  HTML: {
    INTRODUCTION: {
      "HTML Introduction": HTMLIntroductionSchema,
      "HTML Working": HTMLWorkingSchema,
      "HTML Installation": HTMLInstallationSchema,
      "HTML Execution": HTMLExecutionSchema,
      "HTML Page Structure": HTMLPageStructureSchema,
      "HTML Tags": HTMLTagsSchema,
      "HTML Elements": HTMLElementsSchema,
      "HTML Attributes": HTMLAttributesSchema,
      "HTML Comments": HTMLCommentsSchema,
      "HTML Id & Classes": HTMLIdAndClassesSchema
    },
    HTML_BASICS: {
      "Skelten Tags": SkeltenTagsSchema,
      "Heading Tags": HeadingTagsSchema,
      "Paragraph Tag": ParagraphTagSchema,
      "Horizontal Line Tag": HorizontalLineTagSchema,
      "Line Break Tag": LineBreakTagSchema,
      "Anchor Tag": AnchorTagSchema,
      "Image Tag": ImageTagSchema,
      "Pre Tag": PreTagSchema
    },
    INLINE_AND_BLOCK_ELEMENTS: {
      "HTML Inline Elements": HTMLInlineElementsSchema,
      "HTMl Block Elements": HTMLBlockElementsSchema
    },
    HTML_LISTS: {
      "HTML Lists": HTMLListsSchema,
      "HTML Unordered Lists": HTMLUnorderedListsSchema,
      "HTML Ordered Lists": HTMLOrderedListsSchema,
      "HTML Definition List": HTMLDefinitionListSchema
    },
    HTML_TABLES: {
      "HTML Tables": HTMLTablesSchema,
      "More on Tables": MoreOnTablesSchema
    },
    HTML_FORMS: {
      "Introduction to HTML FORM": IntroductionToHTMLFormSchema,
      "HTML Input Types": HTMLInputTypesSchema,
      "Textareas & Select": TextareasAndSelectSchema,
      "More On Forms": MoreOnFormsSchema
    },
    HEAD_ELEMENTS: {
      "HTML Meta Tags": HTMLMetaTagsSchema,
      "Link & Script Tags": LinkAndScriptTagsSchema
    },
    HTML_MEDIA: {
      "Video & Audio Tags": VideoAndAudioTagsSchema,
      "SVG in HTML": SVGInHTMLSchema,
      "iFrame in HTML": IFrameInHTMLSchema
    }
  }
}, { timestamps: true });

//css start

const CSSIntroductionSchema = new Schema({
    "What is CSS?": String,
    "Features of CSS": String,
    "Why the Term Cascading & Style Sheets?": String,
    "History of CSS:": String
  });
  
  const CSSWorkingSchema = new Schema({
    "CSS Working": String,
    "How does CSS integrate with HTML?": String,
    "What are CSS Selectors?": String,
    "Three Ways to Insert CSS": String
  });
  
  const CSSInstallationSchema = new Schema({
    "CSS Installation": String,
    "What are the prerequisites to learning CSS?": String,
    "Tools needed for CSS development:": String,
    "Setting up Visual Studio Code for CSS": String
  });
  
  const CSSExecutionSchema = new Schema({
    "CSS Execution": String,
    "Creating CSS Files": String,
    "Basic HTML Structure": String,
    "Adding CSS": String,
    "Viewing Your Styled Page": String
  });
  
  // CSS BASICS schemas
  const CSSSyntaxSchema = new Schema({
    "CSS Syntax": String,
    "Basic Syntax Structure": String,
    "Example": String,
    "CSS Comments": String
  });
  
  const CSSSelectorsSchema = new Schema({
    "CSS Selectors": String,
    "Element Selector": String,
    "Class Selector": String,
    "ID Selector": String,
    "Universal Selector": String,
    "Grouping Selector": String,
    "Combinatorial Selectors": String
  });
  
  const CSSColorsSchema = new Schema({
    "CSS Colors": String,
    "Color Names": String,
    "Hexadecimal Colors": String,
    "RGB and RGBA Colors": String,
    "HSL and HSLA Colors": String
  });
  
  const CSSUnitsSchema = new Schema({
    "CSS Units": String,
    "Absolute Units": String,
    "Relative Units": String,
    "When to Use Each Unit": String
  });
  
  const CSSBoxModelSchema = new Schema({
    "CSS Box Model": String,
    "Components of the Box Model": String,
    "Setting Box Dimensions": String,
    "Box-Sizing Property": String
  });
  
  const CSSDisplayPropertySchema = new Schema({
    "CSS Display Property": String,
    "Block Elements": String,
    "Inline Elements": String,
    "Inline-Block Elements": String,
    "Other Display Values": String
  });
  
  // CSS LAYOUT schemas
  const CSSPositionSchema = new Schema({
    "CSS Position": String,
    "Static Positioning": String,
    "Relative Positioning": String,
    "Absolute Positioning": String,
    "Fixed Positioning": String,
    "Sticky Positioning": String,
    "Z-Index Property": String
  });
  
  const CSSFlexboxSchema = new Schema({
    "CSS Flexbox": String,
    "Flex Container Properties": String,
    "Flex Item Properties": String,
    "Common Flexbox Patterns": String
  });
  
  const CSSGridSchema = new Schema({
    "CSS Grid": String,
    "Creating a Grid Container": String,
    "Grid Item Placement": String,
    "FR Unit and Grid Functions": String,
    "Named Grid Areas": String
  });
  
  // CSS Media Queries schema
  const CSSMediaQueriesSchema = new Schema({
    "CSS Media Queries": String,
    "Basic Syntax": String,
    "Responsive Breakpoints": String,
    "Combining Media Features": String
  });
  
  // CSS Float schema
  const CSSFloatSchema = new Schema({
    "CSS Float": String,
    "Basic Float Usage": String,
    "Clearing Floats": String,
    "Modern Alternatives": String
  });
  
  // CSS ADVANCED schemas
  const CSSTransitionsSchema = new Schema({
    "CSS Transitions": String,
    "Basic Transition Syntax": String,
    "Transition Properties": String,
    "Timing Functions": String
  });
  
  const CSSAnimationsSchema = new Schema({
    "CSS Animations": String,
    "Keyframe Declaration": String,
    "Applying Animations": String,
    "Multiple Animations": String
  });
  
  const CSSTransformSchema = new Schema({
    "CSS Transform": String,
    "2D Transforms": String,
    "3D Transforms": String,
    "Transform Origin": String
  });
  
  const CSSVariablesSchema = new Schema({
    "CSS Variables": String,
    "Declaring Variables": String,
    "Using Variables": String,
    "Changing Variables with JavaScript": String,
    "Media Queries with Variables": String
  });
  
  const CSSPreprocessorsSchema = new Schema({
    "CSS Preprocessors": String,
    "Common Preprocessors": String,
    "Key Preprocessor Features": String,
    "SCSS Example": String
  });
  
  // CSS PRACTICAL schemas
  const CSSBestPracticesSchema = new Schema({
    "CSS Best Practices": String,
    "Organization and Structure": String,
    "Selector Efficiency": String,
    "Maintainability": String,
    "Performance Optimization": String
  });
  
  const CSSMethodologiesSchema = new Schema({
    "CSS Methodologies": String,
    "BEM (Block Element Modifier)": String,
    "SMACSS (Scalable and Modular Architecture for CSS)": String,
    "OOCSS (Object Oriented CSS)": String,
    "Atomic CSS / Utility-First CSS": String
  });
  
  const CSSFrameworksSchema = new Schema({
    "CSS Frameworks": String,
    "Popular CSS Frameworks": String,
    "Framework Comparison": String,
    "Using Frameworks Effectively": String
  });
  
  const CSSResponsiveDesignSchema = new Schema({
    "CSS Responsive Design": String,
    "Core Principles": String,
    "Setting Up Responsive Foundations": String,
    "Mobile-First Media Queries": String,
    "Responsive Typography": String
  });
  
  // Main section schemas
  const CSSBasicsSchema = new Schema({
    "CSS Syntax": CSSSyntaxSchema,
    "CSS Selectors": CSSSelectorsSchema,
    "CSS Colors": CSSColorsSchema,
    "CSS Units": CSSUnitsSchema,
    "CSS Box Model": CSSBoxModelSchema,
    "CSS Display Property": CSSDisplayPropertySchema
  });
  
  const CSSLayoutSchema = new Schema({
    "CSS Position": CSSPositionSchema,
    "CSS Flexbox": CSSFlexboxSchema,
    "CSS Grid": CSSGridSchema
  });
  
  const CSSAdvancedSchema = new Schema({
    "CSS Transitions": CSSTransitionsSchema,
    "CSS Animations": CSSAnimationsSchema,
    "CSS Transform": CSSTransformSchema,
    "CSS Variables": CSSVariablesSchema,
    "CSS Preprocessors": CSSPreprocessorsSchema
  });
  
  const CSSPracticalSchema = new Schema({
    "CSS Best Practices": CSSBestPracticesSchema,
    "CSS Methodologies": CSSMethodologiesSchema,
    "CSS Frameworks": CSSFrameworksSchema,
    "CSS Responsive Design": CSSResponsiveDesignSchema
  });
  
  const CSSIntroSchema = new Schema({
    "CSS Introduction": CSSIntroductionSchema,
    "CSS Working": CSSWorkingSchema,
    "CSS Installation": CSSInstallationSchema,
    "CSS Execution": CSSExecutionSchema
  });
  
  // Top-level CSS Schema
  const CSSSchema = new Schema({
    "INTRODUCTION": CSSIntroSchema,
    "CSS BASICS": CSSBasicsSchema,
    "CSS LAYOUT": CSSLayoutSchema,
    "CSS Media Queries": CSSMediaQueriesSchema,
    "CSS Float": CSSFloatSchema,
    "CSS ADVANCED": CSSAdvancedSchema,
    "CSS PRACTICAL": CSSPracticalSchema
  });
  
  // Final Schema
  const CourseContentSchema = new Schema({
    "CSS": CSSSchema
  });


  // JAVASCRIPT INTRODUCTION schemas
const JavaScriptIntroductionSchema = new Schema({
    "What is JavaScript?": {
      type: String,
      required: true
    },
    "Features of JavaScript": {
      type: String,
      required: true
    },
    "Why the Term JavaScript?": {
      type: String,
      required: true
    },
    "History of JavaScript": {
      type: String,
      required: true
    }
  });
  
  const JavaScriptWorkingSchema = new Schema({
    "JavaScript Working": {
      type: String,
      required: true
    },
    "How does JavaScript integrate with HTML?": {
      type: String,
      required: true
    },
    "JavaScript Engines": {
      type: String,
      required: true
    },
    "Three Ways to Insert JavaScript": {
      type: String,
      required: true
    }
  });
  
  const JavaScriptInstallationSchema = new Schema({
    "JavaScript Installation": {
      type: String,
      required: true
    },
    "What are the prerequisites to learning JavaScript?": {
      type: String,
      required: true
    },
    "Tools needed for JavaScript development": {
      type: String,
      required: true
    },
    "Setting up Visual Studio Code for JavaScript": {
      type: String,
      required: true
    }
  });
  
  const JavaScriptExecutionSchema = new Schema({
    "JavaScript Execution": {
      type: String,
      required: true
    },
    "Creating JavaScript Files": {
      type: String,
      required: true
    },
    "Basic HTML Structure": {
      type: String,
      required: true
    },
    "Adding JavaScript": {
      type: String,
      required: true
    },
    "Viewing Your JavaScript in Action": {
      type: String,
      required: true
    }
  });
  
  const IntroductionSchema = new Schema({
    "JavaScript Introduction": JavaScriptIntroductionSchema,
    "JavaScript Working": JavaScriptWorkingSchema,
    "JavaScript Installation": JavaScriptInstallationSchema,
    "JavaScript Execution": JavaScriptExecutionSchema
  });
  
  // JAVASCRIPT VARIABLES schemas
  const VariablesWhatSchema = new Schema({
    "What are Variables?": {
      type: String,
      required: true
    },
    "Declaring Variables": {
      type: String,
      required: true
    },
    "Variable Assignment": {
      type: String,
      required: true
    },
    "Dynamic Typing": {
      type: String,
      required: true
    }
  });
  
  const VariableNamingRulesSchema = new Schema({
    "Variable Naming Rules": {
      type: String,
      required: true
    },
    "Basic Rules": {
      type: String,
      required: true
    },
    "Naming Conventions": {
      type: String,
      required: true
    },
    "Best Practices": {
      type: String,
      required: true
    }
  });
  
  const PrimitivesAndObjectsSchema = new Schema({
    "Primitives and Objects": {
      type: String,
      required: true
    },
    "Primitive Data Types": {
      type: String,
      required: true
    },
    "Reference Data Types (Objects)": {
      type: String,
      required: true
    },
    "Primitive vs Reference Behavior": {
      type: String,
      required: true
    }
  });
  
  const OperatorsAndExpressionsSchema = new Schema({
    "Operators and Expressions": {
      type: String,
      required: true
    },
    "Arithmetic Operators": {
      type: String,
      required: true
    },
    "Assignment Operators": {
      type: String,
      required: true
    },
    "Comparison Operators": {
      type: String,
      required: true
    },
    "Logical Operators": {
      type: String,
      required: true
    },
    "Other Operators": {
      type: String,
      required: true
    }
  });
  
  const VarLetConstSchema = new Schema({
    "var vs let vs const": {
      type: String,
      required: true
    },
    "var": {
      type: String,
      required: true
    },
    "let": {
      type: String,
      required: true
    },
    "const": {
      type: String,
      required: true
    },
    "Best Practices": {
      type: String,
      required: true
    }
  });
  
  const JavaScriptVariablesSchema = new Schema({
    "What are Variables?": VariablesWhatSchema,
    "Variable Naming Rules": VariableNamingRulesSchema,
    "Primitives and Objects": PrimitivesAndObjectsSchema,
    "Operators and Expressions": OperatorsAndExpressionsSchema,
    "var vs let vs const": VarLetConstSchema
  });
  
  // JAVASCRIPT BASICS schemas
  const IfElseConditionalsSchema = new Schema({
    "If else conditionals": {
      type: String,
      required: true
    },
    "Basic if Statement": {
      type: String,
      required: true
    },
    "if...else Statement": {
      type: String,
      required: true
    },
    "Comparison Expressions": {
      type: String,
      required: true
    }
  });
  
  const IfElseLadderSchema = new Schema({
    "If else ladder": {
      type: String,
      required: true
    },
    "Basic if...else if...else Structure": {
      type: String,
      required: true
    },
    "Multiple Conditions": {
      type: String,
      required: true
    },
    "Execution Flow": {
      type: String,
      required: true
    }
  });
  
  const SwitchCaseSchema = new Schema({
    "Switch case": {
      type: String,
      required: true
    },
    "Basic switch Syntax": {
      type: String,
      required: true
    },
    "Break and Fall-Through": {
      type: String,
      required: true
    },
    "Intentional Fall-Through": {
      type: String,
      required: true
    },
    "Switch vs If...Else": {
      type: String,
      required: true
    }
  });
  
//   const LoopsSchema = new Schema({
//     "Loops": {
//       type: String,
//       required: true
//     },
//     "For Loop": {
//       type: String,
//       required: true
//     },
//     "While Loop": {
//       type: String,
//       required: true
//     },
//     "Do...While Loop": {
//       type: String,
//       required: true
//     },
//     "For...Of Loop (ES6)": {
//       type: String,
//       required: true
//     },
//     "For...In Loop": {
//       type: String,
//       required: true
//     },
//     "Break and Continue": {
//       type: String,
//       required: true
//     }
//   });
  
  const FunctionsSchema = new Schema({
    "Functions": {
      type: String,
      required: true
    },
    "Function Declaration": {
      type: String,
      required: true
    },
    "Function Expression": {
      type: String,
      required: true
    },
    "Arrow Functions (ES6)": {
      type: String,
      required: true
    },
    "Parameters and Arguments": {
      type: String,
      required: true
    },
    "Function Scope": {
      type: String,
      required: true
    },
    "Immediately Invoked Function Expression (IIFE)": {
      type: String,
      required: true
    }
  });
  
  const JavaScriptBasicsSchema = new Schema({
    "If else conditionals": IfElseConditionalsSchema,
    "If else ladder": IfElseLadderSchema,
    "Switch case": SwitchCaseSchema,
    "Functions": FunctionsSchema
  });
  
  // JAVASCRIPT OBJECTS schemas
  const ObjectsSchema = new Schema({
    "Definition": {
      type: String,
      required: true
    },
    "Example": {
      type: String,
      required: true
    }
  });
  
  const StringsSchema = new Schema({
    "Definition": {
      type: String,
      required: true
    },
    "Creation": {
      "Single quotes": {
        type: String,
        required: true
      },
      "Double quotes": {
        type: String,
        required: true
      },
      "Template literals": {
        type: String,
        required: true
      }
    },
    "Example": {
      type: String,
      required: true
    },
    "Properties": {
      "length": {
        type: String,
        required: true
      }
    },
    "Methods": {
      "toUpperCase": {
        type: String,
        required: true
      },
      "toLowerCase": {
        type: String,
        required: true
      },
      "charAt": {
        type: String,
        required: true
      },
      "indexOf": {
        type: String,
        required: true
      },
      "includes": {
        type: String,
        required: true
      },
      "slice": {
        type: String,
        required: true
      },
      "split": {
        type: String,
        required: true
      },
      "replace": {
        type: String,
        required: true
      },
      "trim": {
        type: String,
        required: true
      }
    }
  });
  
  const JavaScriptObjectsSchema = new Schema({
    "Objects": ObjectsSchema,
    "Strings": StringsSchema
    // Add other object types as needed (Arrays, Date, Math, etc.)
  });

  const ArraysSchema = new Schema({
    "Definition": {
      type: String,
      required: true
    },
    "Example": {
      type: String,
      required: true
    },
    "Creation": {
      "Array literal": {
        type: String,
        required: true
      },
      "Array constructor": {
        type: String,
        required: true
      },
      "Empty array": {
        type: String,
        required: true
      }
    },
    "Properties": {
      "length": {
        type: String,
        required: true
      }
    },
    "Methods": {
      "push": {
        type: String,
        required: true
      },
      "pop": {
        type: String,
        required: true
      },
      "shift": {
        type: String,
        required: true
      },
      "unshift": {
        type: String,
        required: true
      },
      "concat": {
        type: String,
        required: true
      },
      "slice": {
        type: String,
        required: true
      },
      "splice": {
        type: String,
        required: true
      },
      "indexOf": {
        type: String,
        required: true
      },
      "join": {
        type: String,
        required: true
      },
      "reverse": {
        type: String,
        required: true
      },
      "sort": {
        type: String,
        required: true
      }
    }
  });
  
  // Loops with Arrays Schema
  const LoopsSchema = new Schema({
    "Definition": {
      type: String,
      required: true
    },
    "for loop": {
      type: String,
      required: true
    },
    "for...of loop": {
      type: String,
      required: true
    },
    "forEach method": {
      type: String,
      required: true
    },
    "forEach with arrow function": {
      type: String,
      required: true
    }
  });
  
  // Map, Filter and Reduce Schema
  const MapFilterReduceSchema = new Schema({
    "Map": {
      "Definition": {
        type: String,
        required: true
      },
      "Example": {
        type: String,
        required: true
      }
    },
    "Filter": {
      "Definition": {
        type: String,
        required: true
      },
      "Example": {
        type: String,
        required: true
      }
    },
    "Reduce": {
      "Definition": {
        type: String,
        required: true
      },
      "Example": {
        type: String,
        required: true
      }
    },
    "chaining methods": {
      type: String,
      required: true
    }
  });
  
  // Date Schema
  const DateSchema = new Schema({
    "Definition": {
      type: String,
      required: true
    },
    "Example": {
      type: String,
      required: true
    },
    "Creation": {
      "Current date": {
        type: String,
        required: true
      },
      "Specific date": {
        type: String,
        required: true
      },
      "With arguments": {
        type: String,
        required: true
      }
    },
    "Methods": {
      "getDate": {
        type: String,
        required: true
      },
      "getMonth": {
        type: String,
        required: true
      },
      "getFullYear": {
        type: String,
        required: true
      },
      "getHours": {
        type: String,
        required: true
      },
      "getMinutes": {
        type: String,
        required: true
      },
      "getSeconds": {
        type: String,
        required: true
      },
      "toDateString": {
        type: String,
        required: true
      },
      "toTimeString": {
        type: String,
        required: true
      },
      "toISOString": {
        type: String,
        required: true
      }
    }
  });
  
  // Math Schema
  const MathSchema = new Schema({
    "Definition": {
      type: String,
      required: true
    },
    "Example": {
      "PI": {
        type: String,
        required: true
      },
      "round": {
        type: String,
        required: true
      },
      "random": {
        type: String,
        required: true
      }
    },
    "Properties": {
      "PI": {
        type: String,
        required: true
      },
      "E": {
        type: String,
        required: true
      }
    },
    "Methods": {
      "abs": {
        type: String,
        required: true
      },
      "ceil": {
        type: String,
        required: true
      },
      "floor": {
        type: String,
        required: true
      },
      "round": {
        type: String,
        required: true
      },
      "max": {
        type: String,
        required: true
      },
      "min": {
        type: String,
        required: true
      },
      "pow": {
        type: String,
        required: true
      },
      "sqrt": {
        type: String,
        required: true
      },
      "random": {
        type: String,
        required: true
      },
      "Random integer": {
        type: String,
        required: true
      }
    }
  });
  
  // Number Schema
  const NumberSchema = new Schema({
    "Definition": {
      type: String,
      required: true
    },
    "Creation": {
      "Literals": {
        type: String,
        required: true
      },
      "Constructor": {
        type: String,
        required: true
      }
    },
    "Methods": {
      "toString": {
        type: String,
        required: true
      },
      "toFixed": {
        type: String,
        required: true
      },
      "toPrecision": {
        type: String,
        required: true
      },
      "parseInt": {
        type: String,
        required: true
      },
      "parseFloat": {
        type: String,
        required: true
      },
      "isNaN": {
        type: String,
        required: true
      },
      "isFinite": {
        type: String,
        required: true
      }
    }
  });
  
  // Boolean Schema
  const BooleanSchema = new Schema({
    "Definition": {
      type: String,
      required: true
    },
    "Creation": {
      "Literals": {
        type: String,
        required: true
      },
      "Constructor": {
        type: String,
        required: true
      }
    },
    "Truthy and Falsy": {
      "Falsy values": {
        type: String,
        required: true
      },
      "Truthy values": {
        type: String,
        required: true
      }
    },
    "Boolean conversion": {
      "Boolean function": {
        type: String,
        required: true
      },
      "Double negation": {
        type: String,
        required: true
      }
    }
  });
  
  // DOM & BOM Schema
  const DOMBOMSchema = new Schema({
    "Definition": {
      type: String,
      required: true
    },
    "Window Object": {
      "Properties": {
        "innerHeight": {
          type: String,
          required: true
        },
        "innerWidth": {
          type: String,
          required: true
        },
        "location": {
          type: String,
          required: true
        },
        "document": {
          type: String,
          required: true
        }
      },
      "Methods": {
        "alert": {
          type: String,
          required: true
        },
        "confirm": {
          type: String,
          required: true
        },
        "prompt": {
          type: String,
          required: true
        },
        "setTimeout": {
          type: String,
          required: true
        },
        "setInterval": {
          type: String,
          required: true
        },
        "clearInterval": {
          type: String,
          required: true
        }
      }
    },
    "History Object": {
      "Definition": {
        type: String,
        required: true
      },
      "Properties": {
        "length": {
          type: String,
          required: true
        }
      },
      "Methods": {
        "back": {
          type: String,
          required: true
        },
        "forward": {
          type: String,
          required: true
        },
        "go": {
          type: String,
          required: true
        }
      }
    },
    "Navigator Object": {
      "Definition": {
        type: String,
        required: true
      },
      "Properties": {
        "userAgent": {
          type: String,
          required: true
        },
        "language": {
          type: String,
          required: true
        },
        "cookieEnabled": {
          type: String,
          required: true
        },
        "online": {
          type: String,
          required: true
        }
      },
      "Methods": {
        "geolocation": {
          type: String,
          required: true
        }
      }
    },
    "Screen Object": {
      "Definition": {
        type: String,
        required: true
      },
      "Properties": {
        "width": {
          type: String,
          required: true
        },
        "height": {
          type: String,
          required: true
        },
        "availWidth": {
          type: String,
          required: true
        },
        "availHeight": {
          type: String,
          required: true
        },
        "colorDepth": {
          type: String,
          required: true
        }
      }
    },
    "Document Object": {
      "Definition": {
        type: String,
        required: true
      },
      "Properties": {
        "title": {
          type: String,
          required: true
        },
        "URL": {
          type: String,
          required: true
        },
        "body": {
          type: String,
          required: true
        },
        "head": {
          type: String,
          required: true
        },
        "forms": {
          type: String,
          required: true
        },
        "images": {
          type: String,
          required: true
        }
      },
      "Methods": {
        "createElement": {
          type: String,
          required: true
        },
        "createTextNode": {
          type: String,
          required: true
        },
        "querySelector": {
          type: String,
          required: true
        },
        "querySelectorAll": {
          type: String,
          required: true
        },
        "write": {
          type: String,
          required: true
        }
      }
    },
    "getElementById": {
      "Usage": {
        type: String,
        required: true
      },
      "Example": {
        type: String,
        required: true
      }
    },
    "getElementsByClassName": {
      "Usage": {
        type: String,
        required: true
      },
      "Example": {
        type: String,
        required: true
      }
    },
    "getElementsByName": {
      "Usage": {
        type: String,
        required: true
      },
      "Example": {
        type: String,
        required: true
      }
    },
    "getElementsByTagName": {
      "Usage": {
        type: String,
        required: true
      },
      "Example": {
        type: String,
        required: true
      }
    },
    "innerHTML": {
      "Description": {
        type: String,
        required: true
      },
      "Get": {
        type: String,
        required: true
      },
      "Set": {
        type: String,
        required: true
      },
      "Example": {
        type: String,
        required: true
      }
    },
    "outerHTML": {
      "Description": {
        type: String,
        required: true
      },
      "Get": {
        type: String,
        required: true
      },
      "Set": {
        type: String,
        required: true
      },
      "Example": {
        type: String,
        required: true
      }
    }
  });
  
  // OOP Schema
  const OOPSchema = new Schema({
    "Class": {
      "Definition": {
        type: String,
        required: true
      },
      "Example": {
        type: String,
        required: true
      },
      "Basic class": {
        type: String,
        required: true
      },
      "Creating instance": {
        type: String,
        required: true
      },
      "Using methods": {
        type: String,
        required: true
      }
    },
    "Objects": {
      "Definition": {
        type: String,
        required: true
      },
      "Example": {
        type: String,
        required: true
      },
      "Object literal": {
        type: String,
        required: true
      },
      "Accessing properties": {
        type: String,
        required: true
      },
      "Methods": {
        type: String,
        required: true
      }
    },
    "Constructor": {
      "Definition": {
        type: String,
        required: true
      },
      "Example": {
        type: String,
        required: true
      },
      "Constructor function": {
        type: String,
        required: true
      },
      "Creating instance": {
        type: String,
        required: true
      },
      "Using constructor properties": {
        type: String,
        required: true
      }
    },
    "Static Method": {
      "Definition": {
        type: String,
        required: true
      },
      "Example": {
        type: String,
        required: true
      },
      "Usage": {
        type: String,
        required: true
      }
    },
    "Encapsulation": {
      "Definition": {
        type: String,
        required: true
      },
      "Example": {
        type: String,
        required: true
      },
      "Private fields (ES2022)": {
        type: String,
        required: true
      },
      "Usage": {
        type: String,
        required: true
      }
    },
    "Inheritance": {
      "Definition": {
        type: String,
        required: true
      },
      "Example": {
        type: String,
        required: true
      }
    },
    "Polymorphism": {
      "Definition": {
        type: String,
        required: true
      },
      "Basic inheritance": {
        type: String,
        required: true
      },
      "Creating instance": {
        type: String,
        required: true
      },
      "Using inherited method": {
        type: String,
        required: true
      },
      "Example": {
        type: String,
        required: true
      }
    },
    "Abstraction": {
      "Definition": {
        type: String,
        required: true
      },
      "Abstract class pattern": {
        type: String,
        required: true
      },
      "Usage": {
        type: String,
        required: true
      },
      "Example": {
        type: String,
        required: true
      }
    }
  });
  
  // Main JavaScript Reference Schema that incorporates all the sub-schemas
  const JavaScriptReferenceSchema = new Schema({
    Arrays: ArraysSchema,
    Loops: LoopsSchema,
    MapFilterReduce: MapFilterReduceSchema,
    Date: DateSchema,
    Math: MathSchema,
    Number: NumberSchema,
    Boolean: BooleanSchema,
    DOMBOM: DOMBOMSchema,
    OOP: OOPSchema
  });
  
  // Main JavaScript Schema
  const JavaScriptSchema = new Schema({
    "JAVASCRIPT": {
      "INTRODUCTION": IntroductionSchema,
      "JAVASCRIPT VARIABLES": JavaScriptVariablesSchema,
      "JAVASCRIPT BASICS": JavaScriptBasicsSchema,
      "JAVASCRIPT OBJECTS": JavaScriptObjectsSchema,
      "JAVASCRIPT ADVANCE":JavaScriptReferenceSchema
    }
  });
  
  // Create the model from the schema
  const JavaScript = mongoose.model('JavaScript', JavaScriptSchema);
  
  // module.exports = JavaScript;

  
  // Create the model
  const CourseContent = mongoose.model('CourseContent', CourseContentSchema);
  
  // module.exports = CourseContent;

// Create model from schema
const HTMLDocumentation = mongoose.model('HTMLDocumentation', HTMLDocumentationSchema);

// module.exports = HTMLDocumentation;

// const UsersSchema = mongoose.model('Users',Users)

const usersDb = mongoose.connection.useDb('Users');
const UsersSchema = usersDb.model('users', Users);

module.exports = {UsersSchema,HTMLDocumentation,CourseContent,JavaScript}