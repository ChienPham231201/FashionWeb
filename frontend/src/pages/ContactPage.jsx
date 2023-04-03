import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import '../scss/ContactPage.scss';

import { mailIcon, locationIcon, phoneIcon } from '../assets/img';

const ContactPage = () => {
    return (
        <>
            <div className="BackGround">
                <p className="Name">Liên hệ</p>
            </div>
            <Container className="ContactPage">
                <Row className='Contact'>
                    <Col className="Form">
                        <h2>Gửi thư cho chúng tôi</h2>

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email của bạn"
                            className="Input"
                        >
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                            />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingPassword"
                            label="Chúng tôi có thể giúp gì?"
                            className="Input"
                        >
                            <Form.Control
                                as="textarea"
                                placeholder="Ý kiến của bạn"
                            />
                        </FloatingLabel>

                        <Button className="submit">Gửi</Button>
                    </Col>
                    <Col className="Info">
                        <div className="Location Block">
                            <img src={locationIcon} alt="location icon" />
                            <div className='Text'>
                                <h2>Địa chỉ</h2>
                                <p>Trường Đại học công nghệ thông tin</p>
                            </div>
                        </div>
                        <div className="Phone Block">
                            <img src={phoneIcon} alt="location icon" />
                            <div className='Text'>
                                <h2>Hãy gọi cho chúng tôi</h2>
                                <p>+012345678</p>
                            </div>
                        </div>
                        <div className="Mail Block">
                            <img src={mailIcon} alt="mail icon" />
                            <div className='Text'>
                                <h2>Hỗ trợ</h2>
                                <p>example@example.com</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};
export default ContactPage;
