import 'bootstrap/dist/css/bootstrap.min.css';
import { Suspense } from 'react';
import Loading from './components/Loading';
import HomePage from './pages/HomePage';
import NavBar from './components/navbar';
import Footer from './components/Footer';
function App() {
    return (
        <div className="App">
            <NavBar />
            <Suspense fallback={<Loading />}>
                <HomePage />
            </Suspense>
            <Footer/>
        </div>
    );
}

export default App;
