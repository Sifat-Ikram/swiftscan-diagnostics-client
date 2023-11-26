import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const PrivateRouter = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return (
            <div>
                <span className="loading loading-dots loading-lg"></span>
            </div>
        );
    }

    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to={"/signIn"}></Navigate>
};

export default PrivateRouter;