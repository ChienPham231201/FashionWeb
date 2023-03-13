import Card from 'react-bootstrap/Card';
import '../assets/img';
import { Product1 } from '../assets/img';
import '../scss/ProductCard.scss';
const ProductCard = () => {
    return (
        <Card className="product_card">
            <Card.Img className="product_card-img" src={Product1} />
        </Card>
    );
};

export default ProductCard;
