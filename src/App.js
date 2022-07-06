import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import DinesDirectoryPage from './pages/DinesDirectoryPage';
import DineDetailPage from './pages/DineDetailPage';
import AboutPage from './pages/AboutPage';
import { fetchDines } from './features/dines/dinesSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDines())
  }, [dispatch])

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='dining' element={<DinesDirectoryPage />} />
        <Route
          path='dining/:dineId'
          element={<DineDetailPage />}
        />
        <Route path='about' element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
