import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Data from '../assets/Data/Filter.json';
import '../scss/Filter.scss';
import { useEffect, useState } from 'react';

const Filter = ({ displayFilter }) => {
    const [category, setCategory] = useState('default-category');
    const [price, setPrice] = useState('default-price');
    const [tag, setTag] = useState('default-tag');
    const handleFilter = (data, filterData) => {
        if (data === 'category') {
            setCategory(filterData);
            if (category !== filterData) {
                const activeCategory = document.querySelector(`#${category}`);
                activeCategory.classList.remove('active');
            }
        }
        if (data === 'price') {
            setPrice(filterData);
            if (price !== filterData) {
                const activePrice = document.querySelector(`#${price}`);
                activePrice.classList.remove('active');
            }
        }
        if (data === 'tag') {
            setTag(filterData);
            if (tag !== filterData) {
                const activeTag = document.querySelector(`#${tag}`);
                activeTag.classList.remove('active');
            }
        }
    };
    useEffect(() => {
        const activeCategory = document.querySelector(`#${category}`);
        activeCategory.classList.add('active');
        const activePrice = document.querySelector(`#${price}`);
        activePrice.classList.add('active');
        if (tag !== '') {
            const activeTag = document.querySelector(`#${tag}`);
            activeTag.classList.add('active');
        }
    });
    return (
        <Container fluid className="Filter " ref={displayFilter}>
            <Row>
                {Data.map((data, i) => (
                    <Col md sm key={i}>
                        <h1>{data.show}</h1>
                        <ul key={data.name}>
                            {data.Object.map((filterData) => (
                                <li
                                    key={filterData.name}
                                    id={filterData.name}
                                    onClick={() =>
                                        handleFilter(data.name, filterData.name)
                                    }
                                >
                                    {filterData.show}
                                </li>
                            ))}
                        </ul>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};
export default Filter;
