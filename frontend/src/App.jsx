import { HashRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import AppRoutes from './routes/AppRoutes'
import './styles/theme.css'
import './styles/globals.css'

function App() {
  return (
    <AuthProvider>
      <HashRouter>
        <div className="app">
          <Header />
          <main className="main-content">
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </HashRouter>
    </AuthProvider>
  )
}

export default App
