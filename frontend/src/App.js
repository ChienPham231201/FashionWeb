import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import NavBar from './components/navbar';
function App() {
    return (
        <div className="App">
            <NavBar />
            <HomePage />
        </div>
    );
}

export default App;
