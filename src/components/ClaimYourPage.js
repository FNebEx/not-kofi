import React from 'react';

/**
 * 2/16/20 TODO
 * Convert this to a class component and 
 * add functionality for submitting
 * the form
 */

const ClaimYourPage = () => {
    return (
        <section className='mt-4 claim-you-page-wrapper'>
            <div className="form-group  claim-your-page-form">
                <h3 className='font-weight-bold'>Claim Your Page</h3>
                <form>
                    <div class="form-group">
                        <div className="input-group mb-3">
                            <span className='mr-2 font-weight-bold' style={{ fontSize: '20px'}}>ko-fi/</span>
                            <input type="email" class="form-control"/>
                            <div className="input-group-append">
                                <button className='btn btn-primary'>Claim</button>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </section>
    );
}
 
export default ClaimYourPage;