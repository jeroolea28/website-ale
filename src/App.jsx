import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import AppRoutes from './routes/AppRoutes'

export default function App() {
  return (
    <div className='App'>
      <Navbar/>
      <AppRoutes/>
      <Footer/>
    </div>
  )
}
