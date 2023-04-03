import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Data from '../assets/Data/Filter.json';
import '../scss/Filter.scss'

const Filter = () => {
    return (
        <Container fluid className="Filter">
            <Row>
                {Data.map((data,i) => 
                (
                    <Col md sm>
                    <h1 key={i}>{data.Name}</h1>
                    <ul key={i}>
                        {data.Array.map((data1 , j) => (
                                <li key={j}>{data1}</li>
                        ))}
                    </ul>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
export default Filter;