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
            <Container>
                <Row>
                    <Col className='Form'>
                        <h2>Gửi thư cho chúng tôi</h2>

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email của bạn"
                            className="mb-3"
                        >
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                            />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingPassword"
                            label="Password"
                        >
                            <Form.Control
                                as="textarea"
                                placeholder="Ý kiến của bạn"
                            />
                        </FloatingLabel>

                        <Button className="submit">Gửi</Button>
                    </Col>
                    <Col>
                        <div className='Location'>
                            <img src={locationIcon} alt="location icon" />
                            <h2>Địa chỉ</h2>
                        </div>

                        <p>Trường Đại học công nghệ thông tin</p>

                        <div className='Phone'>
                            <img src={phoneIcon} alt="location icon" />
                            <h2>Hãy gọi cho chúng tôi</h2>
                        </div>
                        <p>+012345678</p>
                        <div className='Mail'>
                            <img src={mailIcon} alt="mail icon" />
                            <h2>Hỗ trợ</h2>
                        </div>
                        <p>example@example.com</p>
                    </Col>
                </Row>
            </Container>
        </>
    );
};
export default ContactPage;
