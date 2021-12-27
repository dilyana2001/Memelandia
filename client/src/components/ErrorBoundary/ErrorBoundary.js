import React from "react";
import { NavLink } from 'react-router-dom';

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
                    <div className="flex flex-col">
                        <img className="max-w-lg mx-24" src="https://img-16.ccm2.net/_SqzzXVDSG50FWb_UBrCl3XwV78=/440x/1685e17045e747a899925aa16189c7c6/ccm-encyclopedia/99776312_s.jpg" alt="error" />
                        <NavLink className="color-white underline mx-24" to='/'>Go to Home</NavLink>
                    </div>
                </div>
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundary;