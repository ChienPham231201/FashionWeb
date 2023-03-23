import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import CategoryCard from '../components/CategoryCard';
import '../scss/HomePage.scss';
import { CategoryImg1, CategoryImg2, CategoryImg3 } from '../assets/img';
import Carousels from '../components/Carousels';
import ProductCard from '../components/ProductCard';
import Policy from '../components/Policy';
const HomePage = () => {
    return (
        <div className="home_layout">
            <Carousels />
            <h2 className="tag_category">Danh mục sản phẩm</h2>
            <Container>
                <Row className="home_layout-row">
                    <Col xs={12} lg={4} md={6} className="home_layout-col">
                        <CategoryCard
                            cardImg={CategoryImg1}
                            cardTitle="Đồ nam"
                            cardText="Trang phục mới hấp dẫn"
                        />
                    </Col>
                    <Col xs={12} lg={4} md={6} className="home_layout-col">
                        <CategoryCard
                            cardImg={CategoryImg2}
                            cardTitle="Đồ nữ"
                            cardText="Trang phục mới hấp dẫn"
                        />
                    </Col>
                    <Col xs={12} lg={4} md={6} className="home_layout-col">
                        <CategoryCard
                            cardImg={CategoryImg3}
                            cardTitle="Phụ kiện"
                            cardText="Phụ kiện xu hướng mới"
                        />
                    </Col>
                </Row>
                <h2 className="tag_product">Sản phẩm nổi bật</h2>
                <div className="btn_category">
                    <Button variant="outline-primary">Đồ nam</Button>{' '}
                    <Button variant="outline-primary">Đồ nữ</Button>{' '}
                    <Button variant="outline-primary">Phụ kiện</Button>{' '}
                </div>
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
                <div className="load_more">
                    <Button className="btn_load-more">Xem tất cả</Button>
                </div>
            </Container>
            <Policy />
        </div>
    );
};

export default HomePage;
