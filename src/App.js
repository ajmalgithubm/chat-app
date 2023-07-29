import MessageList from "./Components/MessageList/MessageList";
import NavBar from "./Components/NavBar/NavBar";
import SendMessage from "./Components/SendMessage/SendMessage";
import Sigin from "./Components/Sigin/Sigin";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MessageList/>
    </div>
  );
}

export default App;
