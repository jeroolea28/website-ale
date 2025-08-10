import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
//import AboutPage from '../pages/AboutPage/AboutPage'
//import HobbiesPage from '../pages/HobbiesPage/HobbiesPage'
//import ContactPage from '../pages/ContactPage/ContactPage'
//import AwardsPage from '../pages/AwardsPage/AwardsPage'

const AppRoutes = () =>{

    return (
        <Routes>
            
            <Route path='/' element={<HomePage/>}/>
        </Routes>
    )
}

export default AppRoutes