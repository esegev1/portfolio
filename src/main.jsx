import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Header.css'
import './Intro.css'
import App from './App.jsx'
import Header from './Header.jsx'
import Intro from './Intro.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Intro/>
  </StrictMode>,
)
