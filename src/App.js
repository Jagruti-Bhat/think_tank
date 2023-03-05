import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Participant, Profile , Firstpage,Wrong,Exit,Correct,Rankings, Library } from './components';
import {Home,Creator,Game,Join,Instructions, GetReady, Login} from "./pages"
function App() {
  return (
    <div className="App">
     <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/game" element={<Game />} />
          <Route path="/join" element={<Join />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path= "/getReady" element={<GetReady />} />
          <Route path='/Participant' element={<Participant/>}/>
          <Route path="/Wrong" element={<Wrong/>} />
          <Route path="/Correct" element = {<Correct/>}/>
          <Route path="/Rankings" element = {<Rankings/>}/>
          <Route path="/library" element={<Library/>} />
        </Routes>
        <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/creator" element={<Creator />} />
        <Route path="/Firstpage" element={<Firstpage/>}/>
        <Route path="/Exit" element={<Exit/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        </Routes>
     </Router>
    </div>
  );
}

export default App;
