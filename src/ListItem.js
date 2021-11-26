function ListItem(props) {

    const counter = props.el;

    const buttonPlus = () => {
        props.plusCounter(props.index);
    }

    const buttonMinus = () => {
        props.minusCounter(props.index);
    }

    return (
        <div>
            <button onClick={buttonPlus}>+</button>
            {counter}
            <button onClick={buttonMinus}>-</button>
        </div>
    );
}

export default ListItem;
