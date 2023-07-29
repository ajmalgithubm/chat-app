import ChatPage from "./Pages/ChatPage/ChatPage";
import SiginPage from "./Pages/SiginPage/SiginPage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { auth } from './Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { createContext, useEffect } from "react";
const userContext = createContext();
function App() {
  const [user] = useAuthState(auth);
  useEffect(() => {
    console.log(user);
  },[user])
  return (
    <userContext.Provider value={{user:user}}>
      <BrowserRouter>
        <div className="App">
          {
            (user ? <ChatPage /> : <SiginPage />)
          }
        </div>
      </BrowserRouter>
    </userContext.Provider>
  );
}
export {userContext};
export default App;
