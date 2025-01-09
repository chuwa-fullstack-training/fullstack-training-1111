function ColorInput(props) {
    const { handleSelect } = props;
    const colors = ["default", "aqua", "black", "blue", "fuchsia", "gray", "green", "lime", "maroon", "navy", "olive", "purple", "red", "silver", "teal", "white", "yellow"];

    return (
        <select onChange={e => handleSelect(e.target.value)}>
            {
                colors.map((value) => {
                    return (
                        <option value={value}>{value}</option>
                    )
                })
            }
        </select>
    );
    
}

export default ColorInput;