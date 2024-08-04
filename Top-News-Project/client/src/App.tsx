import { Routes, Route } from 'react-router-dom';

import ScrollToTop from './components/scrollToTop';

import Navigation from './components/Navigation/Navigation';
import SecondNavigation from './components/SecondNavigation/SecondNavigation';

import MainPage from './components/Main/MainPage/MainPage';
import Post from './components/Post/Post';
import CategoriesPage from './components/Main/CategoriesPage/CategoriesPage';

import Register from './components/Auth/Register';
import Login from './components/Auth/Login';

import Footer from './components/Footer/Footer';

import './App.css';

function App() {

  return (
    <>
    <ScrollToTop/>
      <div className="page-container-wrapper">
        <div className="page-container">
          <Navigation />
          <SecondNavigation />
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/post/:id' element={<Post/>} />
            <Route path='/categories/:category' element={<CategoriesPage/>} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
