import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../scss/Footer.scss';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import Data from '../assets/Data/Footer.json';
import { paypal, visa, mastercard, momo } from '../assets/img';

const Footer = () => {
    return (
        <Container fluid className="Footer">
            <Row>
                <Col>
                    <h1> Phân Loại</h1>
                    <ul>
                        {Data.map((data) => (
                            <li>{data}</li>
                        ))}
                    </ul>
                </Col>
                <Col>
                    <h1>Hỗ Trợ</h1>
                    <ul>
                        <li>Theo dõi hàng</li>
                        <li>Trả hàng</li>
                        <li>Giao hàng</li>
                        <li>FAQs</li>
                    </ul>
                </Col>
                <Col>
                    <h1>Liên Hệ</h1>
                    <ul>
                        <li>Bất kỳ câu hỏi?</li>
                        <li>Để chúng tôi biết: </li>
                        <li>Địa chỉ:</li>
                        <li>SDT:</li>
                        <div className="social-network">
                            <FaFacebookF size={18}/>
                            <FaInstagram size={18}/>
                            <FaTwitter size={18}/>
                        </div>
                    </ul>
                </Col>
            </Row>
            <Row>
                <img src={paypal} alt="Paypal" />
                <img src={visa} alt="Visa" />
                <img src={mastercard} alt="Mastercard" />
                <img className="Momo" src={momo} alt="Momo" />
            </Row>
            <Row className="Copyright">
                Copyright ©2023 All rights reserved | This template is made with
                love by Bảo and Chiến
            </Row>
        </Container>
    );
};
export default Footer;
