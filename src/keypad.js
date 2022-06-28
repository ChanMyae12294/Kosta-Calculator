function Keypad(props){
    return(
        <div className = "keypadbody">
            <button onClick = { () => props.HitClick("(") } > ( </button>
            <button onClick = { () => props.HitClick(")") } > ) </button>
            <button onClick = { () => props.HitClick("CE") } >CE</button>
            <button onClick = { () => props.HitClick("C") } >C</button> <br />

            <button onClick = { () => props.HitClick("1") } >1</button>
            <button onClick = { () => props.HitClick("2") } >2</button>
            <button onClick = { () => props.HitClick("3") } >3</button>
            <button onClick = { () => props.HitClick("4") } >4</button> <br />

            <button onClick = { () => props.HitClick("5") } >5</button>
            <button onClick = { () => props.HitClick("6") } >6</button>
            <button onClick = { () => props.HitClick("7") } >7</button>
            <button onClick = { () => props.HitClick("8") } >8</button> <br />

            <button onClick = { () => props.HitClick("9") } >9</button>
            <button onClick = { () => props.HitClick("0") } >0</button>
            <button onClick = { () => props.HitClick(".") } >.</button>
            <button onClick = { () => props.HitClick("+") } >+</button> <br />

            <button onClick = { () => props.HitClick("-") } >-</button>
            <button onClick = { () => props.HitClick("x") } >x</button>
            <button onClick = { () => props.HitClick("/") } >/</button>
            <button onClick = { () => props.HitClick("=") } >=</button> <br />
        </div>
    );
}

export default Keypad;