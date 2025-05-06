
// import './App.css'
import Login from './Components/Login.jsx';
import SignupPage from './Components/SignUp';


import LandingPage from './LandingPage/Landingpage.jsx';
import { Routes,Route } from 'react-router-dom';
import Home from '../src/Home/Home.jsx';
import CodeEditors from './LearnSyntax/Syntax.jsx'; 
import Puzzels from './LearnGamesndPuzzels/Puzzels.jsx';
import Video from './LearnVideos/Video.jsx';
import AI from './LearnAI/AI.jsx';
import HTML from './LearnSyntax/HTML.jsx';
import CSS from './LearnSyntax/CSS.jsx';
import JavaScript from './LearnSyntax/JavaScript.jsx';
import Reactt from './LearnSyntax/React.jsx';
import Node from './LearnSyntax/Node.jsx';
import Python from './LearnSyntax/Python.jsx';
import JAVA from './LearnSyntax/JAVA.jsx';
import Express from './LearnSyntax/Express.jsx';

// import CodeEditor from './Compailer/CodeEditor.jsx';
// import Syntax from '../src/Syntax/Syntax.jsx';
// import Puzzels from '../src/Puzzels/Puzzels.jsx';
// import Video from '../src/Videos/Video.jsx';
// import AI from '../src/AI/AI.jsx';
// import Compailer from './Compailer/Compailer.jsx'
function App() {  
  return (
    <div >

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/SignUp" element={<SignupPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path='/syntax' element={<CodeEditors />}/>
        <Route path='/puzzels' element={<Puzzels />}/>
        <Route path='/videos' element={<Video />}/>
        <Route path='/AI' element={<AI />}/>  
        <Route path='/html' element={<HTML/>}></Route>
        <Route path='/css' element={<CSS/>}></Route>
        <Route path='/javascript' element={<JavaScript/>}></Route>
        <Route path='/reactjs' element={<Reactt/>}></Route>
        <Route path='/nodejs' element={<Node/>}></Route>
        <Route path='/expressjs' element={<Express/>}></Route>
        <Route path='/python' element={<Python/>}></Route>
        <Route path='/java' element={<JAVA/>}></Route>
        {/* <Route path='/html' element={<HTML/>}></Route> */}
        {/* <Route path='/compailer' element={<Compailer />}/> */}
      </Routes>
      
    </div>
  );
}

export default App;



