import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './assets/scss/main.scss'

import "./i18n/index";

createRoot(document.getElementById('root')).render(
  <App />
)
