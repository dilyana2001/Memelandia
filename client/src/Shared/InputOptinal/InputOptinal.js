import './InputOptinal.css';

const InputOptinal = ({ children }) => {
    if (!children) { return null }

    return (
        <div className="input-optinal">{children}</div>
    );
}

export default InputOptinal;