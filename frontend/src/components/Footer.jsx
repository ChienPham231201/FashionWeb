import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../scss/Footer.scss';
import {FaFacebookF,FaInstagram,FaTwitter} from 'react-icons/fa'
import Data from '../assets/Data/Footer.json';

const Footer = () => {
    return (
        <Container fluid className='Footer'>
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
                        <div>
                        <FaFacebookF/>
                        <FaInstagram/>
                        <FaTwitter/>
                        </div>
                    </ul>
                </Col>
            </Row>
            <Row>
                <img src="Images/Icons/paypal.png" alt="Paypal" />
                <img src="Images/Icons/visa.png" alt="Visa" />
                <img src="Images/Icons/mastercard.png" alt="Mastercard" />
                <img className='Momo' src="Images/Icons/momo.png" alt="Momo" />
            </Row>
            <Row>Copyright ©2023 All rights reserved | This template is made with love by Colorlib</Row>
        </Container>
    );
};
export default Footer;