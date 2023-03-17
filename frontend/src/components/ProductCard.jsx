import Card from 'react-bootstrap/Card';
import '../assets/img';
import StarRatings from 'react-star-ratings';
import { Product1, Product2, Product3 } from '../assets/img';
import '../scss/ProductCard.scss';
const ProductCard = () => {
    return (
        <Card className="product_card">
            <Card.Img className="product_card-img" src={Product1} />
            <Card.Body className="product_card-body">
                <Card.Body className="product_color">
                    <Card.Img className="color_img" src={Product1} />
                    <Card.Img className="color_img" src={Product2} />
                    <Card.Img className="color_img" src={Product3} />
                </Card.Body>
                <Card.Title className="product_card-title">
                    Áo khoác nam U1sdhfsdfhdsfhdfh
                </Card.Title>
                <Card.Body className="flex_price">
                    <Card.Text className="product_card-salePrice">
                        150.000 VNĐ
                    </Card.Text>
                    <Card.Text className="product_card-price">
                        200.000 VNĐ
                    </Card.Text>
                </Card.Body>
                <Card.Body className="flex_comment">
                    <StarRatings
                        name="rating"
                        rating={4}
                        starRatedColor="gold"
                        starDimension="1rem"
                        starSpacing="0"
                    />
                    <Card.Text className="text_comment">(0 nhận xét)</Card.Text>
                </Card.Body>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;
