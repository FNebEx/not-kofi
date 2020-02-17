import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Male from '../assets/svg/undraw_male_avatar_323b.svg';
import Female from '../assets/svg/undraw_female_avatar_w3jk.svg';

const comments = [
    {
        name: 'Kevin',
        username: 'fnebex',
        image: Male,
        text: 'This was a reallly fun weekend project. I learned a lot about Gatbsy adn React.'
    },
    {
        name: 'Keira',
        username: 'Kare_Rahh',
        image: Female,
        text: 'I have a really cool brother. He is the coolest brother to ever exists in the world of brothers.'
    },
    {
        name: 'Yusef Hmama',
        username: 'JoeMama',
        image: Male,
        text: 'Lol I will never let this joke die!!! Long live Joe Mama! #DownloandMyMixtape'
    },
];

const WPAS = ({name, username, image, text}) => {
    return (
        <section>
            <div className='comment-card'>
                <div className='comment'>
                    <p>"{text}"</p>
                </div>
                <div className='comment-body'>
                    <div className='comment-img'>
                    <img src={image} alt='Male'/> 
                    </div>
                    <div className='comment-info'>
                        <h3>{name}</h3>
                        <p>@{username}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}



const WhatPeopleAreSaying = () => {
    return (
        <section className='mt-5 what-people-are-saying'>
            <h1 className='font-weight-bold' style={{ textAlign: 'center', marginBottom: '50px' }}>What People are Saying</h1>
            <Container>
                <Row>
                    { 
                        comments.map(({name, username, image, text}) => {
                            return (
                                <Col lg='4'>
                                    <WPAS 
                                        name={name} 
                                        username={username} 
                                        image={image} 
                                        text={text}
                                    />
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </section>
    );
}
 
export default WhatPeopleAreSaying;