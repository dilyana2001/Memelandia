const InputError = ({ children }) => {
    if (!children)  return null;

    return (
        <div className="text-red-700 text-sm italic">{children}</div>
    );
}

export default InputError;