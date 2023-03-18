import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import NavBar from './components/navbar';
import Footer from './components/Footer';
function App() {
    return (
        <div className="App">
            <NavBar />
            <HomePage />
            <Footer/>
        </div>
    );
}

export default App;
