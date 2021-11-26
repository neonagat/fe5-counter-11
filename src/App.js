import {useState} from "react";
import ListItem from "./ListItem";

function App() {

    const [list, setList] = useState([1, 2, 3, 4]);

    const plusCounter = (index) => {
        const arrPlus = list.map((el, i) => {
            if (index === i) {
                return el + 1
            }
            return el
        })
        setList(arrPlus)
    }

    const minusCounter = (index) => {
        const arrMinus = list.map((el, i) => {
            if (index === i) {
                return el - 1
            }
            return el
        })
        setList(arrMinus)
    }

    return (
        <div>
            {list.map((el, index) => <ListItem plusCounter={plusCounter}
                                               minusCounter={minusCounter}
                                               el={el}
                                               index={index}
                                               key={Math.random()}/>)}
        </div>
    );
}

export default App;
