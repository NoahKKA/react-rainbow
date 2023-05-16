import React, {useState} from "react";

function ColorForm({addColor}){
    let [input, setInput] = useState('')

    const onSubmitForm = (e) => {
        e.preventDefault();
        addColor(input)
        setInput('')
    }

    return (
        <div>
            <form onSubmit={onSubmitForm}>
                <input type="text" onChange={(e) => setInput (e.target.value)} value={input}/>
                <button type="submit">Submit!</button>
            </form>
        </div>
    )
}

export default ColorForm