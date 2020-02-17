import React from "react";
import Layout from '../components/Layout';
import ClaimYourPage from '../components/ClaimYourPage';
import WhosOnKofi from '../components/WhosOnKofi';
import PaidToCreators from '../components/PaidToCreators';
import WhatPeopleAreSaying from '../components/WhatPeopleAreSaying';
import DSC from '../components/DSC';
import StartYourPage from '../components/StartYourPage';

const Index = () => {
    return (
        <Layout>
            <ClaimYourPage />
            <WhosOnKofi />
            <PaidToCreators />
            <WhatPeopleAreSaying />
            <DSC />
            <StartYourPage />
        </Layout>
    );
}
 
export default Index;
