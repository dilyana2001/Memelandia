import React from "react";

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

    componentDidCatch(error) {
        console.log(`Error ${error}`);
    }


    render() {
        if (this.state.hasError) {
            return (
                <img src="https://img-16.ccm2.net/_SqzzXVDSG50FWb_UBrCl3XwV78=/440x/1685e17045e747a899925aa16189c7c6/ccm-encyclopedia/99776312_s.jpg" alt="" />
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundary;