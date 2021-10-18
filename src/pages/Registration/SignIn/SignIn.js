import React from 'react';
import useFirebase from '../../../hooks/useFirebase';

const SignIn = () => {
    const {singInUsingGoogle} = useFirebase();
    return (
        <div>
            <button onClick={singInUsingGoogle}>google sign in</button>
        </div>
    );
};

export default SignIn;