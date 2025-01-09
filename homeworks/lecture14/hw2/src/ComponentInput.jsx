function ComponentInput(props) {
    const { inputValue, handleSelect } = props;

    return (
        <select onChange={e => handleSelect(e.target.value)}>
            {
                inputValue.map((value, index) => {
                    return (
                        <option value={index}>{value}</option>
                    )
                })
            }
        </select>
    );
}

export default ComponentInput;