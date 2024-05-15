import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./Components/search/Search";
import { store } from "./redux/store";
import Todos from "./Components/todoList/Todos";
import Page404 from "./pages/misc/Page404";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/">
              <Route
                index
                element={
                  <>
                    <Search />
                    <Todos />
                  </>
                }
              />
            </Route>
            <Route path="*" element={<Page404 />} />{" "}
            {/* Catch-all for unmatched routes */}
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
