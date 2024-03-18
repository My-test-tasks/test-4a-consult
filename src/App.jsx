import { useState } from "react";
import { Header } from "./components/Header";
import { Title } from "./components/Title";
import { Content } from "./components/Content";
import "./App.css";

function App() {
  const [isTimeOut, setIsTimeOut] = useState(false);

  return (
    <div className="app">
      <Header setIsTimeOut={setIsTimeOut} />
      <Title />
      <Content isTimeOut={isTimeOut} />
    </div>
  );
}

export default App;
