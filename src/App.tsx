import React, {Suspense} from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";

import "./scss/app.scss";
import {HomePage} from "./pages/HomePage";
import {Header} from "./components/Header";
import FullVacancyPage from "./pages/FullVacancyPage";
import Favourites from "./pages/Favourites";
import NotFoundPage from "./pages/NotFoundPage";


const App: React.FC = () => {
  return (
      <BrowserRouter>
          <Header/>
          <Routes>
                  <Route path="" element={<HomePage/>}/>
                  <Route path="/favourites" element={
                      <Suspense fallback={<div>Загрузка корзины...</div>}>
                          <Favourites/>
                      </Suspense>
                  }/>
              <Route path="/vacancy/:id" element={<FullVacancyPage/>}/>
                  <Route path="*" element={
                       <Suspense fallback={<div>Загрузка...</div>}>
                           <NotFoundPage/>
                       </Suspense>
                  }/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
