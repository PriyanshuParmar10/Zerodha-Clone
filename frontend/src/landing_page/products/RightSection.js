import React from 'react';


function RightSection({imageUrl, productName, productDescription, KiteConnect, learnMore}) {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div >
                        <a href={KiteConnect} style={{textDecoration:"none"}}> Kite connect <i class="fa-solid fa-arrow-right"></i></a>
                        <a href={learnMore} style={{textDecoration:"none",marginLeft:"50px"}}>Learn more <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className='col-6'>
                    <img src={imageUrl} />
                </div>
            </div>
        </div>
    );
}

export default RightSection;