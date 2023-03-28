import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Loading from './components/Loading';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';

const ShopPage = lazy(() => import('./pages/ShopPage'));

function App() {
    return (
        <>
            <NavBar />
            <Suspense fallback={<Loading/>}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/shop" element={<ShopPage />}/>
                    <Route path="/about" element={<AboutPage />}/>
                    <Route path="/contact" element={<ContactPage />}/>

                </Routes>
            </Suspense>
            <Footer />
        </>
    );
}

export default App;
