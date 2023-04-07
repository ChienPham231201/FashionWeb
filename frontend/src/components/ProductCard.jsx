import Card from 'react-bootstrap/Card';
import '../assets/img';
import StarRatings from 'react-star-ratings';
import '../scss/ProductCard.scss';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import toSlug from '../assets/toSlug';
const ProductCard = ({ listImg, name, salePrice, price, rating, comment }) => {
    const [imgUrl, setImgUrl] = useState(listImg[0]);
    const [active, setActive] = useState(toSlug(name) + '0');
    const handleHover = () => {
        document.querySelector(`#${active}`).classList.add('img_active');
    };
    const changeImg = (i) => {
        document.querySelector(`#${active}`).classList.remove('img_active');
        setActive(toSlug(name) + i);
        setImgUrl(listImg[i]);
    };
    useEffect(() => {
        document.querySelector(`#${active}`).classList.add('img_active');
    });
    return (
        <Card
            className="product_card"
            id={toSlug(name)}
            onMouseEnter={handleHover}
        >
            <Card.Img className="product_card-img" src={imgUrl} />
            <Button className="btn-addToCard" variant="info">
                Thêm vào giỏ
            </Button>
            <Card.Body className="product_card-body">
                <Card.Body className="product_color">
                    {listImg.map((img, index) => (
                        <Card.Img
                            onClick={() => {
                                changeImg(index);
                            }}
                            key={index}
                            id={toSlug(name) + index}
                            className="color_img"
                            src={img}
                        />
                    ))}
                </Card.Body>

                <Card.Title className="product_card-title">{name}</Card.Title>
                <Card.Body className="flex_price">
                    <Card.Text className="product_card-salePrice">
                        {salePrice + ' VNĐ'}
                    </Card.Text>
                    <Card.Text className="product_card-price">
                        {price + 'VNĐ'}
                    </Card.Text>
                </Card.Body>
                <Card.Body className="flex_comment">
                    <StarRatings
                        name="rating"
                        rating={rating}
                        starRatedColor="gold"
                        starDimension="1.1rem"
                        starSpacing="0"
                    />
                    <Card.Text className="text_comment">
                        ({comment.length + ' nhận xét'})
                    </Card.Text>
                </Card.Body>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;
