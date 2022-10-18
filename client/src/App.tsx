import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./CommonStyle/style.scss";
import AddTournament from "./Components/AddTournament/AddTournament";
import All from "./Components/AllTournaments/All";
import Entry from "./Components/Entry/Entry";
import Layout from "./Components/Lyout/Layout";
import Main from "./Components/Main/Main";
import Profile from "./Components/Profile/Profile";
import Tournament from "./Components/Tournament/Tournament";
import PrivateRoute from "./hoc/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="entry" element={<Entry />} />
          <Route path="all" element={<All />} />
          <Route
            path="add"
            element={
              <PrivateRoute>
                <AddTournament />
              </PrivateRoute>
            }
          />
          <Route path="tournament/:id" element={<Tournament />} />
          <Route
            path="profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
