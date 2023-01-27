import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AlbumAppProvider from './context/AlbumContext';
import ArtistAppProvider from './context/ArtistContext';
import SongAppProvider from "./context/SongContext";
ReactDOM.render(
  <React.StrictMode>
      <ArtistAppProvider>
          <AlbumAppProvider>
              <SongAppProvider>
      <App />
          </SongAppProvider>
      </AlbumAppProvider>
  </ArtistAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
