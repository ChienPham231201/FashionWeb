import Card from 'react-bootstrap/Card';
import '../scss/CategoryCard.scss';
const CategoryCard = ({ cardImg, cardTitle, cardText }) => {
    return (
        <Card className="category_card card_hover">
            <Card.Img className="category_card-img" src={cardImg} />
            <Card.Body className="category_card-body card_hover">
                <Card.Title className="category_card-title">
                    {cardTitle}
                </Card.Title>
                <Card.Text className="category_card-text">{cardText}</Card.Text>
            </Card.Body>
            <div className="category_card-transparent"></div>
            <Card.Body className="category_card-footer card_hover">
                <p className="category_card-paynow">Xem ngay</p>
                <div className="category_card-outline"></div>
            </Card.Body>
        </Card>
    );
};

export default CategoryCard;
