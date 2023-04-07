import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import CategoryCard from '../components/CategoryCard';
import { BiFilter } from 'react-icons/bi';
import '../scss/HomePage.scss';
import TagCategory from '../assets/Data/TagCategory.json';
import Carousels from '../components/Carousels';
import ProductCard from '../components/ProductCard';
import Policy from '../components/Policy';
import Filter from '../components/Filter';
import { useRef } from 'react';
import Data from '../assets/Data/ProductData.json';
const HomePage = () => {
    const displayFilter = useRef();
    const handleFilter = () => {
        displayFilter.current.classList.toggle('filter_display');
        document
            .querySelector('.btn-filter')
            .classList.toggle('btn-filter_active');
    };
    return (
        <div className="home_layout">
            <Carousels />
            <Policy />
            <h2 className="tag_category">Danh mục sản phẩm</h2>
            <Container>
                <Row className="home_layout-row">
                    {TagCategory.map((category, i) => (
                        <Col
                            xs={12}
                            lg={4}
                            md={6}
                            className="home_layout-col"
                            key={i}
                        >
                            <CategoryCard
                                cardImg={category.img}
                                cardTitle={category.title}
                                cardText={category.text}
                            />
                        </Col>
                    ))}
                </Row>
                <h2 className="tag_product">Sản phẩm nổi bật</h2>
                <div className="btn-group">
                    <Button
                        onClick={handleFilter}
                        variant="light"
                        className="btn-filter"
                    >
                        <BiFilter /> Bộ lọc
                    </Button>
                </div>
                <Filter displayFilter={displayFilter} />
                <Row className="home_layout-row">
                    {Data.map((data, i) => (
                        <Col key={i} lg={3} md={6} className="home_layout-col">
                            <ProductCard
                                listImg={data.image}
                                name={data.name}
                                price={data.price}
                                salePrice={data.salePrice}
                                rating={data.rating}
                                comment={data.comment}
                            />
                        </Col>
                    ))}
                </Row>

                <div className="load_more">
                    <Button className="btn_load-more">Xem tất cả</Button>
                </div>
            </Container>
        </div>
    );
};

export default HomePage;
