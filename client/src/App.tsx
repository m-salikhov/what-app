import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./CommonStyle/style.scss";
import AddTournament from "./Components/AddTournament/AddTournament";
import Entry from "./Components/Entry/Entry";

import Header from "./Components/Headers/Header";
import Main from "./Components/Main/Main";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/entry" element={<Entry />} />
        <Route path="/add" element={<AddTournament />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
