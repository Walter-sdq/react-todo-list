const Input = () => {
    const placeholder = "what todo"
    return (
        <div className="input-cont">
            <div className="input-padding">
                <input type="text" className="input" placeholder={placeholder} />
            </div>
        </div>
    );
}

export default Input;