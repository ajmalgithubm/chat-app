import ChatPage from "./Pages/ChatPage/ChatPage";
import SiginPage from "./Pages/SiginPage/SiginPage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {auth} from './Firebase';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/sigin" element={<SiginPage />} />
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
