import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import CategoryCard from '../components/CategoryCard';
import '../scss/HomePage.scss';
import TagCategory from '../assets/Data/TagCategory.json';
import Carousels from '../components/Carousels';
import ProductCard from '../components/ProductCard';
import Policy from '../components/Policy';
import Filter from '../components/Filter'
const HomePage = () => {
    return (
        <div className="home_layout">
            <Carousels />
            <Policy />
            <h2 className="tag_category">Danh mục sản phẩm</h2>
            <Container>
                <Row className="home_layout-row">
                    {TagCategory.map((category) => (
                        <Col xs={12} lg={4} md={6} className="home_layout-col">
                            <CategoryCard
                                cardImg={category.img}
                                cardTitle={category.title}
                                cardText={category.text}
                            />
                        </Col>
                    ))}
                </Row>
                <h2 className="tag_product">Sản phẩm nổi bật</h2>
                <Filter/>
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

        </div>
    );
};

export default HomePage;
