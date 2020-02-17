import React from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebookF} from '@fortawesome/free-brands-svg-icons';

const StartYourPage = () => {
    return (
        <section className='SYP'>
            <h1>Start Your Page</h1>
            <div className='buttons'>
                <Button color='primary' className='mr-3'>Start a Free Page</Button>
                <Button outline color='primary'>Learn More</Button>
            </div>
            <div className='buttons'>
                <Button 
                    color='primary' 
                    className='mr-3' 
                    style={{ backgroundColor: '#4285f4', border: '1px solid #4285f4'}}>
                        <FontAwesomeIcon icon={faGoogle} className='mr-2'/>
                        Start With Google
                </Button>
                <Button 
                    color='primary' 
                    style={{ backgroundColor: '#3B5998', border: '1px solid #3B5998'}}>
                        <FontAwesomeIcon icon={faFacebookF} className='mr-2'/>
                        Start With Facebook
                    </Button>
            </div>
        </section>
    );
}
 
export default StartYourPage;