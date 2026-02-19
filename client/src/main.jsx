import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import{Routes} from "./router/CreatingRoutes.jsx"
import { QueryWrapper } from './router/queryWrapper.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryWrapper>
      <Routes>
      </Routes>
    </QueryWrapper>
  </StrictMode>,
)
