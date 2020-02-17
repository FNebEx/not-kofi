import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Contemplating from '../assets/svg/undraw_conversation_h12g.svg'


const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col lg='3'>
                        <img src={Contemplating} alt=''Contemplating/>
                    </Col>
                    <Col lg='3'>
                        <section>
                            <p>Products</p>
                            <a href='.'>Explore</a>
                            <a href='.'>About Ko-fi</a>
                            <a href='.'>Gold</a>
                            <a href='.'>Brand Assets</a>
                            <a href='.'>Blog</a>
                        </section>
                    </Col>
                    <Col lg='3'>
                        <section>                            
                            <p>Help & Support</p>
                            <a href='.'>Help</a>
                            <a href='.'>Terms</a>
                            <a href='.'>Privacy</a>
                            <a href='.'>Affiliates</a>
                        </section>
                    </Col>
                    <Col lg='3'>
                        <FontAwesomeIcon icon={faTwitter} className='mr-3'/>
                        <FontAwesomeIcon icon={faInstagram}/>
                    </Col>
                </Row>
                <span>Created by fnebex</span>
            </Container>
        </footer>
    );
}
 
export default Footer;