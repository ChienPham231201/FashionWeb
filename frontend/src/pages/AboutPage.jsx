import '../scss/AboutPage.scss';
import { about1, about2 } from '../assets/img';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

const AboutPage = () => {
    return (
        <>
            <div className="BackGround">
                <p className="Name">Về chúng tôi</p>
            </div>
            <Container fluid >
                <Row className='AboutPage'>
                    <Col>
                        <h1>Câu Chuyện</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Sit eligendi sunt veritatis facere, repellat
                            qui magnam, commodi, sint repellendus expedita sed
                            tempora ratione earum dolorem! Necessitatibus at
                            laborum inventore similique.
                        </p>
                    </Col>
                    <Col xs="0" md="4">
                        <img src={about1} alt="cc"></img>
                    </Col>
                </Row>
                <Row className='AboutPage'>
                    <Col md="4" xs="0">
                        <img src={about2} alt="cc"></img>
                    </Col>
                    <Col>
                        <h1>Nhiệm Vụ</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Sit eligendi sunt veritatis facere, repellat
                            qui magnam, commodi, sint repellendus expedita sed
                            tempora ratione earum dolorem! Necessitatibus at
                            laborum inventore similique.
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    );
};
export default AboutPage;
