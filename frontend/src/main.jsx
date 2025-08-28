import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../public/css/header.css'
import '../public/css/index.css'
import '../public/css/footer.css'
import '../public/css/home.css'
import '../public/css/getQuote.css'
import '../public/css/contact.css'
import App from './Components/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
