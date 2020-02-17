import React from 'react';
import Male from '../assets/svg/undraw_male_avatar_323b.svg';
import Female from '../assets/svg/undraw_female_avatar_w3jk.svg';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button,
    Container, Row, Col
} from 'reactstrap';

const people = [
    {
        name: 'Kevin',
        description: 'I make beats and draw pokemon sometimes.',
        imageUrl: Male
    },
    {
        name: 'Keira',
        description: 'AKA and NC A&T alumni. Go Aggies!',
        imageUrl: Female
    },
    {
        name: 'Candce',
        description: 'Cheffin Since \'99',
        imageUrl: Female
    },
]

const WhosOnKofi = () => {
    return (
        <div className='whos-on-kofi-container'>
            <section style={{ textAlign: 'center', marginBottom: '50px' }}>
                <h1 className='font-weight-bold'>Who's on Ko-fi</h1>
                <p 
                    style={{ 
                        width: '450px',
                        textAlign: 'center',
                        fontSize: '20px',
                        margin: 'auto'
                    }}
                >
                    Ko-fi is helping all kinds of creators, including Artists, YouTubers, Bloggers, Developers, Podcasters, and more.
                </p>
            </section>

            {/* the cards */}
            <Container>
                <Row>
                    {
                        people.map(({name, description, imageUrl}) => {
                            return (
                                <Col lg='4' md='4'>
                                    <Card>
                                        <CardImg 
                                            className='mx-auto mt-2'
                                            width='100%' 
                                            src={imageUrl} 
                                            alt={description} 
                                            style={{ 
                                                width: '50%', 
                                                height: '50%',

                                            }}/>
                                        <CardBody>
                                            <CardTitle className='font-weight-bold' style={{ textAlign: 'center'}}>{name}</CardTitle>
                                            <CardText style={{ textAlign: 'center'}}>{description}</CardText>
                                            <Button color="primary">View Profile</Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    );
}
 
export default WhosOnKofi;