import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { CookiesProvider } from 'react-cookie';
import reportWebVitals from './reportWebVitals';

import './index.css';
import './fonts/Font.css';
import MainPage from './components/main_page/MainPage';
import OwnerPage from "./components/owner_page/OwnerPage";
import PizzaPage from './components/pizza/Pizza';
import ShoppingBasket from "./components/shopping_basket/ShoppingBasket";
import Review from './components/review/Review';
import InfoModify from './components/my_page/info_modify/InfoModify';
import MyPage from "./components/my_page/MyPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <BrowserRouter>
          <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/myPage" element={<MyPage />} />
          <Route path="/ownerPage" element={<OwnerPage />} />
          <Route path="/pizzaPage" element={<PizzaPage />} />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
