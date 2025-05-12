
// import './App.css'
import Login from './Components/Login.jsx';
import SignUp from './Components/SignUp';


import LandingPage from './LandingPage/Landingpage.jsx';
import { Routes,Route } from 'react-router-dom';
import Home from '../src/Home/Home.jsx';
import CodeEditors from './LearnSyntax/Syntax.jsx'; 
import Puzzels from './LearnGamesndPuzzels/Puzzels.jsx';
import Video from './LearnVideos/Video.jsx';
import AI from './LearnAI/AI.jsx';
import CodeEditor from './Compailer/CodeEditor.jsx';
// import Syntax from '../src/Syntax/Syntax.jsx';
// import Puzzels from '../src/Puzzels/Puzzels.jsx';
// import Video from '../src/Videos/Video.jsx';
// import AI from '../src/AI/AI.jsx';
function App() {  
  return (
    <div >
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path='/syntax' element={<CodeEditors />}/>
        <Route path='/puzzels' element={<Puzzels />}/>
        <Route path='/videos' element={<Video />}/>
        <Route path='/AI' element={<AI />}/>  
        <Route path='/compailer' element={<CodeEditor />}/>
      </Routes>
      
    </div>
  );
}

export default App;



