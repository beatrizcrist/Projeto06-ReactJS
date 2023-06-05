import React, {useState} from "react";

export default function Form(){
    const [value, setValue] = useState("")

    return(
        <>
            <form>
                <input type="text"  placeholder="Digite algo" onChange={(e) => setValue(e.target.value)} />
                <div>{value}</div>
            </form>
        </>
    )
}
