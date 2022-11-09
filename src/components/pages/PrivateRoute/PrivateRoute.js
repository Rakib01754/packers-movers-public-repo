import React, { useContext } from 'react';
import { Grid } from 'react-loader-spinner';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    let location = useLocation();
    console.log(location)

    if (loading) {
        return <div className="w-28 h-28 mx-auto my-60">
            <Grid
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="grid-loading"
                radius="12.5"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    }

    if (user && user.uid) {
        return children;
    }
    else {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
};

export default PrivateRoute;