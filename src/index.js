import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";
import reportWebVitals from "./reportWebVitals";

//dev-2-2bd02u.us.auth0.com
//3elZxB2KcAZNvC6ze5xRntKQ4ZF6EA4b
ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-2-2bd02u.us.auth0.com"
      clientId="3elZxB2KcAZNvC6ze5xRntKQ4ZF6EA4b"
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <UserProvider>
        <ProductsProvider>
          <FilterProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </FilterProvider>
        </ProductsProvider>
      </UserProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
