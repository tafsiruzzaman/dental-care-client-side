import React from 'react';
import useAuth from '../../../hooks/useAuth';

const SignIn = () => {
    const {singInUsingGoogle} = useAuth();
    return (
        <div>
            <button onClick={singInUsingGoogle}>google sign in</button>
        </div>
    );
};

export default SignIn;