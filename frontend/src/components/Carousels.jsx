import Carousel from 'react-bootstrap/Carousel';
import '../scss/Carousel.scss';
import Data from '../assets/Data/Carousel.json';

function Carousels() {
    return (
        <Carousel>
            {Data.map((data) => (
                <Carousel.Item interval={2000}>
                    <img className="d-block w-100" src={data} alt="Slide" />
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default Carousels;
