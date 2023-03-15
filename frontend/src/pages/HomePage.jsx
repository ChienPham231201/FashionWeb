import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CategoryCard from '../components/CategoryCard';
import '../scss/HomePage.scss';
import { CategoryImg1, CategoryImg2, CategoryImg3 } from '../assets/img';
import Carousels from '../components/Carousels';
import ProductCard from '../components/ProductCard';
const HomePage = () => {
    return (
        <div>
            <Carousels />
            <Container className="home_layout">
                <Row className="home_layout-row">
                    <Col lg={4} md={6} className="home_layout-col">
                        <CategoryCard
                            cardImg={CategoryImg1}
                            cardTitle="Đồ nam"
                            cardText="Trang phục mới hấp dẫn"
                        />
                    </Col>
                    <Col lg={4} md={6} className="home_layout-col">
                        <CategoryCard
                            cardImg={CategoryImg2}
                            cardTitle="Đồ nữ"
                            cardText="Trang phục mới hấp dẫn"
                        />
                    </Col>
                    <Col lg={4} md={6} className="home_layout-col">
                        <CategoryCard
                            cardImg={CategoryImg3}
                            cardTitle="Phụ kiện"
                            cardText="Phụ kiện xu hướng mới"
                        />
                    </Col>
                </Row>
                <Row className="home_layout-row">
                    <Col lg={3} md={4} className="home_layout-col">
                        <ProductCard />
                    </Col>
                    <Col lg={3} md={4} className="home_layout-col">
                        <ProductCard />
                    </Col>
                    <Col lg={3} md={4} className="home_layout-col">
                        <ProductCard />
                    </Col>
                    <Col lg={3} md={4} className="home_layout-col">
                        <ProductCard />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomePage;
