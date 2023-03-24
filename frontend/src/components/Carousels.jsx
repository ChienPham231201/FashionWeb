import Carousel from 'react-bootstrap/Carousel';
import '../scss/Carousel.scss';
import Data from '../assets/Data/Carousel.json';

function Carousels() {
    return (
        <Carousel>
            {Data.map((data,i) => (
                <Carousel.Item key={i} interval={2500}>
                    <img className="d-block w-100" src={data} alt="Slide" />
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default Carousels;
