import ProductCard from '../components/ProductCard';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import "../scss/ShopPage.scss"

const ShopPage = () => {
    return (
        <Container fluid className='ShopPage'>
            <Row className="home_layout-row">
                    <Col lg={3} md={6} className="home_layout-col">
                        <ProductCard />
                    </Col>
                    <Col lg={3} md={6} className="home_layout-col">
                        <ProductCard />
                    </Col>
                    <Col lg={3} md={6} className="home_layout-col">
                        <ProductCard />
                    </Col>
                    <Col lg={3} md={6} className="home_layout-col">
                        <ProductCard />
                    </Col>
                </Row>
        </Container>
    );
};
export default ShopPage;
