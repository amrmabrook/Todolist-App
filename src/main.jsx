import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import ContextConfig from './store/ContextConfig.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<ContextConfig>
  <App/>
</ContextConfig>
    
  </StrictMode>,
)
