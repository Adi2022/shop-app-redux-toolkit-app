import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { store } from "./store/store.jsx";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
   
  <App />
    
   
  </Provider>
);
