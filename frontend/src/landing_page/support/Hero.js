import React from 'react';


function Hero() {
    return (  
        <section className='container-fluid' id='supportHero'>
            <div className='p-5' id='supportWrapper'>
                <h4>Support portal</h4>
                <a href=''>Track tickets</a>
            </div>

            <div className='row p-5 m-3'>
                <div className='col-6 p-3'>
                    <h1 className='fs-4'>Search for an answer or browse help topics to create a ticket</h1>
                    <br />
                    <input placeholder='Eg:how do i activate F&O, why is my order getting rejected...' />
                    <br />
                    <br/>
                    <a href='' style={{margin:"25px",lineHeight:"2.5"}}>Track account opening </a>
                    <a href='' style={{margin:"25px",lineHeight:"2.5"}}>Track segment activation </a>
                    <a href='' style={{margin:"25px",lineHeight:"2.5"}}>Intraday margins </a>
                    <a href='' style={{margin:"25px",lineHeight:"2.5"}}>Kite user manual</a>
                </div>
                <div className='col-6 p-3'>
                    <h1 className='fs-4'>Featured</h1>
                    <ol>
                        <li><a href='' style={{lineHeight:"3"}}>BSE StAR mutual fund platform downtime</a></li>
                        <li><a href='' style={{lineHeight:"3"}}>Surveillance measure on scrips - March 2025</a></li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Hero;