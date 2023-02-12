import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import type { AppProps } from 'next/app';
import { Provider } from "react-redux";
import store from "../store";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </React.StrictMode>
  )
}
