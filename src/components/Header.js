import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Fun from '../assets/svg/undraw_having_fun_iais.svg';

const Header = () => {
    return (
        <header>
            <Container style={{ height: '100%'}}>
                <Row style={{ height: '100%'}}>
                    <Col 
                        lg='6' 
                        style={{ 
                            // border: '1px solid black'
                        }}>
                        <div className='header-info'>
                            <h1>Fund Your Passions</h1>
                            <p>The friendly way for fans to support your work for the price of a coffee.</p>

                            <div className='header-buttons'>
                                <Button color="primary">Start a Free Page</Button>{' '}
                                <Button outline color="primary">What is Ko-fi?</Button>{' '}
                            </div>
                        </div>
                    </Col>
                    <Col lg='6'>
                        <img src={Fun} alt='having fun' className='img-fluid'/>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}
 
export default Header;