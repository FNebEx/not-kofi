import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import KofiCard from './KofiCard';
import Transfer from '../assets/svg/undraw_transfer_money_rywa.svg';
import CreditCard from '../assets/svg/undraw_Credit_card_3ed6.svg';
import Design from '../assets/svg/undraw_icon_design_qvdf.svg';

const PaidToCreators = () => {
    return (
        <div className='PTC'>
            <section className='PTC-header'>
                <h1 className='font-weight-bold'>$22 Million Paid to Creators!</h1>
                <p style={{ fontSize: '20px'}}>Join 600K creators getting <span className='font-weight-bold'>instant</span>, <span className='font-weight-bold'>direct</span> payments from fans. <span className='font-weight-bold'>No platform fees!</span></p>
            </section>

            <Container>
                <Row>
                    <Col lg='4'>
                        <KofiCard 
                            image={Transfer} 
                            title='Get Paid Instantly' 
                            paragraph='Receive donations, make subscription income and sell commissions.'
                        />
                    </Col>
                    <Col lg='4'>
                        <KofiCard 
                            image={Design} 
                            title='Create When You Want' 
                            paragraph='No commitment. No schedules to keep and supporters tip when they can.'
                        />
                    </Col>
                    <Col lg='4'>
                        <KofiCard 
                            image={CreditCard} 
                            title='0% Platform Fee' 
                            paragraph='Get paid directly from fans. No platform fees. No ads.'
                        />
                    </Col>
                </Row>
            </Container>
            <section className ='PTD-buttons'>
                <div className='mx-auto mt-3'>
                    <Button color='primary' className='mr-2'>Start a Page</Button>
                    <Button outline color='primary'>Find Out More</Button>
                </div>
            </section>
        </div>
    );
}
 
export default PaidToCreators;