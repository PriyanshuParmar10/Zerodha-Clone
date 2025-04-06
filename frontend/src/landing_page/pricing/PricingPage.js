import React from 'react';
import BorkeRage from './Brokerage';
import Hero from './Hero';

import OpenAccount from '../OpenAccount';



function PricingPage() {
    return ( 
        <>
            <Hero />
            <OpenAccount />
            <BorkeRage />
        </>
     );
}

export default PricingPage;