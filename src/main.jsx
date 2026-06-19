import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Main from './pages/Main.jsx'
import FirstPage from './pages/FirstPage.jsx'
import SecondPage from './pages/SecondPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Main />} />
          <Route path="invisible-mannequin" element={<FirstPage />} />
          <Route path="photo-360" element={<SecondPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
