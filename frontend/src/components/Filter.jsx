import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Data from '../assets/Data/Filter.json';
import '../scss/Filter.scss'

const Filter = () => {
    return (
        <Container fluid className="Filter">
            <Row>
                {Data.map((data) => 
                (
                    <Col sm>
                    <h1>{data.Name}</h1>
                    <ul>
                        {data.Array.map((data1) => (
                                <li>{data1}</li>
                        ))}
                    </ul>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
export default Filter;