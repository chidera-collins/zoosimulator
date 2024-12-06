import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Zoo from './Zoo'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Zoo/>
  </StrictMode>,
)
