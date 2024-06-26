import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './store.jsx'
import { Provider } from 'react-redux'
import { SelectedBlogsProvider } from './context/SelectedBlogsContext.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <SelectedBlogsProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </SelectedBlogsProvider>
  // </React.StrictMode> 
)
