import React from 'react';


function NotFound() {
    return ( 
        <div className='container mt-5 p-5'>
            <div className='row text-center'>
                <h1 className='fs-2 mt-5'>404! not found</h1>
                <p className='text-muted'>Sorry, the page you are looking for does not exist. </p>
            </div>
        </div>
    );
}

export default NotFound;