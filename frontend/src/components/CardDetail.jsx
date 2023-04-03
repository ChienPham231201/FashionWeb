import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StarRatings from 'react-star-ratings';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Product1, Product2, Product3 } from '../assets/img';
import '../scss/CardDetail.scss';
const CardDetail = () => {
    return (
        <div>
            <Container className="product_detail">
                <Row className="row">
                    <Col lg={5} className="col">
                        <Image className="detail_img" src={Product1} />
                    </Col>
                    <Col lg={7} className="col">
                        <div className="detail_content">
                            <h2>Áo khoác nam U1sdhfsdfhdsfhdfh</h2>
                            <div className="price_info">
                                <span className="sale_price">500.000 VNĐ</span>
                                <span className="original_price">
                                    600.000 VNĐ
                                </span>
                                <span className="discount">Giảm giá -10%</span>
                            </div>
                            <div className="star_info">
                                <StarRatings
                                    name="rating"
                                    rating={4}
                                    starRatedColor="gold"
                                    starDimension="1.5rem"
                                    starSpacing="0"
                                />
                                <span>(1 nhận xét)</span>
                            </div>
                            <div className="color">
                                <h4>Màu sắc:</h4>
                                <div className="color_img">
                                    <img src={Product2} alt="ok" />
                                    <img src={Product3} alt="ok" />
                                </div>
                            </div>
                            <div className="size">
                                <h4>Kích cỡ:</h4>
                                <div className="size_list">
                                    <span>X</span>
                                    <span>M</span>
                                </div>
                            </div>
                            <div className="quantity_info">
                                <h4>Số lượng:</h4>
                                <InputGroup className="count_group">
                                    <Button variant="outline-secondary">
                                        -
                                    </Button>
                                    <Form.Control
                                        className="quantity"
                                        value={5}
                                    />
                                    <Button variant="outline-secondary">
                                        +
                                    </Button>
                                </InputGroup>
                            </div>
                            <InputGroup className="btn_buy">
                                <Button className="add_card">
                                    Thêm giỏ hàng
                                </Button>
                                <Button className="buy_now">Mua ngay</Button>
                            </InputGroup>
                            <div className="tag">
                                <span>Danh mục: </span>
                                <span className="tag_name">dồ nam</span>
                                <span className="tag_name">áo sơ mi</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className="tab_detail">
                <Tabs defaultActiveKey="info">
                    <Tab eventKey="info" title="Thông tin chi tiết">
                        <div className="info_content">ok</div>
                    </Tab>
                    <Tab eventKey="comment" title="Đánh giá">
                        12
                    </Tab>
                </Tabs>
            </Container>
        </div>
    );
};

export default CardDetail;
