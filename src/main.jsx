import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import LandingPage from './LandingPage.jsx'
import './index.css'
import './style.css'

const pathname = window.location.pathname

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {pathname === '/landing' ? <LandingPage /> : <App />}
  </React.StrictMode>,
)