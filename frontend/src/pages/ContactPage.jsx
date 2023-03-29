import { Button } from 'bootstrap';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import '../scss/ContactPage.scss';

const ContactPage = () => {
    return (
        <>
            <div className="BackGround">
                <p className="Name">Liên hệ</p>
            </div>
            <Container>
                <Row>
                    <Col>
                    <h2>Gui thu cho chung toi</h2>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </>
    );
};
export default ContactPage;
