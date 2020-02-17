import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import KofiCard from './KofiCard';
import Wallet from '../assets/svg/undraw_wallet_aym5.svg';
import Conversation from '../assets/svg/undraw_conversation_h12g.svg';
import Time from '../assets/svg/undraw_time_management_30iu.svg';

const DSC = () => {
    return (
        <section className='DSC'>
            <h1>Donations, Subscriptions and Commissions</h1>
            <p>Keep creative freedom and make money however suits you. No schedules to keep and you will always own your content.</p>

            <Container className='mt-5'>
                <Row>
                    <Col lg='4'>
                        <KofiCard 
                            title='Donations' 
                            paragraph='Receive donations instantly from your fans. No platform fees!' 
                            image={Wallet}    
                        />
                    </Col>
                    <Col lg='4'>
                        <KofiCard 
                            title='Commissions' 
                            paragraph='Let fans buy unique, original work just for them.' 
                            image={Conversation}    
                        />
                    </Col>
                    <Col lg='4'>
                        <KofiCard 
                            title='Subscriptions' 
                            paragraph='Make monthly income and reward subscribers with exclusive content.' 
                            image={Time}    
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
 
export default DSC;