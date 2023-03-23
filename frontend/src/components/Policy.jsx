import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BiTransferAlt, BiPhoneCall } from 'react-icons/bi';
import { AiOutlineSafetyCertificate } from 'react-icons/ai';
import { TbDiscount2 } from 'react-icons/tb';
import '../scss/Policy.scss';
const Policy = () => {
    return (
        <Container className="policy">
            <Row>
                <Col lg={3} md={6} xs={6}>
                    <div className="policy_card">
                        <BiTransferAlt fontSize={40} className="icon" />
                        <div className="policy_card-content">
                            <h4>Đổi hàng 30 ngày</h4>
                            <p>Thời gian đổi sản phẩm lên đến 30 ngày</p>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={6} xs={6}>
                    <div className="policy_card">
                        <AiOutlineSafetyCertificate
                            fontSize={40}
                            className="icon"
                        />
                        <div className="policy_card-content">
                            <h4>Bảo hành 90 ngày</h4>
                            <p>Hỗ trợ bảo hành miễn phí lên đến 90 ngày</p>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={6} xs={6}>
                    <div className="policy_card">
                        <BiPhoneCall fontSize={40} className="icon" />
                        <div className="policy_card-content">
                            <h4>5 ngày hoàn tiền</h4>
                            <p>
                                Thời gian hoàn tiền không lý do lên đến 5 ngày
                            </p>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={6} xs={6}>
                    <div className="policy_card">
                        <TbDiscount2 fontSize={40} className="icon" />
                        <div className="policy_card-content">
                            <h4>Ưu đãi lên đến 15%</h4>
                            <p>Ưu đãi cho Vip Member lên đến 15%</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Policy;
