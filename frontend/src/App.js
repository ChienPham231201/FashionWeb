import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,Routes } from 'react-router-dom';
import { Suspense } from 'react';
import Loading from './components/Loading';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
function App() {
    return (
        <>
        <NavBar />
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
            </Routes>
        </Suspense>
        <Footer/>
        </>
    );
}

export default App;
