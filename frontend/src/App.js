import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Loading from './components/Loading';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import CardDetail from './components/CardDetail';

const ShopPage = lazy(() => import('./pages/ShopPage'));

function App() {
    return (
        <>
            <NavBar />
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/shop" element={<ShopPage />} />
                    <Route path="/detail" element={<CardDetail />} />
                </Routes>
            </Suspense>
            <Footer />
        </>
    );
}

export default App;
