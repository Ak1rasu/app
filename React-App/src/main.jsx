import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './top10/App.jsx'
import CookieClicker from './cookie_clicker/Cookie'
import Pokemon from './pokemon/pokemon.jsx'
import './index.css'
function Main() {
  const [page, setPage] = useState('home')

  let content = null
  if (page === 'home') content = <App />
  else if (page === 'cookie') content = <CookieClicker />
  else if (page === 'pokemon') content = <Pokemon />

  return (
    <StrictMode>
      <nav>
        <button 
          className={page === 'home' ? 'active' : ''}
          onClick={() => setPage('home')}
        >
          Home
        </button>

        <button 
          className={page === 'cookie' ? 'active' : ''}
          onClick={() => setPage('cookie')}
        >
          Cookie Clicker
        </button>

        <button 
          className={page === 'pokemon' ? 'active' : ''}
          onClick={() => setPage('pokemon')}
        >
          Pokemon
        </button>
      </nav>

      {content}
    </StrictMode>
  )
}
createRoot(document.getElementById('root')).render(<Main />)
