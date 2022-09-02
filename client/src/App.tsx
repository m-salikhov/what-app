import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./CommonStyle/style.scss";

import Header from "./Components/Headers/Header";
import Main from "./Components/Main/Main";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
