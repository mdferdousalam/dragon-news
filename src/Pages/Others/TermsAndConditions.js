import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h3>here is our terms and conditions</h3>
            <p>go back to <Link to='/signup' >sign up</Link> </p>
        </div>
    );
};

export default TermsAndConditions;