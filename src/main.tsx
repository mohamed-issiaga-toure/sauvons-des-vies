import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import LanguageProvider from './context/LanguageProvider'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* LanguageProvider enveloppe TOUTE l'application, pour que
        useLanguage() fonctionne dans n'importe quel composant */}
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
)