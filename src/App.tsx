import React from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";

import "./scss/app.scss";
import {HomePage} from "./pages/HomePage";
import {Header} from "./components/Header";

const App: React.FC = () => {
  return (
      <BrowserRouter>
          <Header/>
          <Routes>
              {/*<Route path="/" element={<Header/>}/>*/}
                  <Route path="" element={<HomePage/>}/>
                  {/*<Route path="/cart" element={*/}
                  {/*    // <Suspense fallback={<div>Загрузка корзины...</div>}>*/}
                  {/*    //     <Cart/>*/}
                  {/*    // </Suspense>*/}
                  {/*}*/}
                  {/*/>*/}
                  {/*<Route path="*" element={*/}
                  {/*    // <Suspense fallback={<div>Загрузка...</div>}>*/}
                  {/*    //     <NotFound/>*/}
                  {/*    // </Suspense>*/}
                  {/*}*/}
                  {/*/>*/}
          </Routes>

      </BrowserRouter>

  );
}

export default App;
