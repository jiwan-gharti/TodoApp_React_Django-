
import './App.css';
import Header from './components/Header';
import NotesListPage from './pages/NotesListPage';
import React from "react";
import {
  Route,
  Routes
} from "react-router-dom";
import NotePage from './pages/NotePage'



function App() {
  return (
      <div className="container dark">
        <div className="app">
          <Header />
          {/* <NotesListPage />
          <NotePage /> */}


          <Routes>
            <Route
              exact
              path="/"
              element = {<NotesListPage />}
            />

            <Route
              exact
              path="/note/:noteId"
              element={<NotePage />}
            />
          </Routes>

        </div>
      </div>
  );
}

export default App;
