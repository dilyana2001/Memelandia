import React from "react";
import { Link } from 'react-router-dom';

import '../MainPages/MainPage.css';

class ErrorBoundary extends React.Component { 
    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log(`Error: ${error}`);
    }


    render() {
        if (this.state.hasError) {
            return (
                <div className="main-container">
                    <div className=" error-boundary">
                        <img src="https://img-16.ccm2.net/_SqzzXVDSG50FWb_UBrCl3XwV78=/440x/1685e17045e747a899925aa16189c7c6/ccm-encyclopedia/99776312_s.jpg" alt="" />
                        <Link to='/'>Go to Home</Link>
                    </div>

                </div >
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundary;