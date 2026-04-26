import type { ChangeEvent, ReactNode } from "react"
import type React from "react"

import "./InputForm.css"

type ValueState = string | number | boolean
type InputType = "text" | "email" | "tel" | "checkbox" | "textarea"

interface InputData{
    id_tag: string,
    children: ReactNode,
    type: InputType,
    value_state: ValueState,
    value_set: React.Dispatch<React.SetStateAction<any>>
}

const InputForm = ({id_tag, children, type, value_state, value_set}:InputData) => {


    switch (type) {
        case "tel":
            return(
                <div className="form__input-content">   
                    <label htmlFor={id_tag}>{children}</label>
                    <div>
                        <span>+</span>
                        <input 
                            id={id_tag}
                            type={type}
                            value={value_state as number}
                            onChange={
                                (e: ChangeEvent<HTMLInputElement>)=>value_set(e.target.value)
                            }
                            placeholder="79000000000"
                        />
                    </div>
                </div>
            )
        case "checkbox":
            return(
                <div>
                    <input 
                        id={id_tag}
                        type={type}
                        checked={value_state as boolean}
                        onChange={(e)=>value_set(e.target.checked)}
                    />
                    <label htmlFor={id_tag}>{children}</label>
                </div>
            )
        case "textarea":
            return (
                <div className="form__input-content">
                    <label htmlFor={id_tag}>{children}</label>
                    <textarea
                        id={id_tag}
                        value={value_state as string}
                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => value_set(e.target.value)}
                        rows={5}
                    />
                </div>
            )
        default:
            return (
                <div className="form__input-content">
                    <label htmlFor={id_tag}>{children}</label>
                    <input 
                        id={id_tag}
                        type={type}
                        value={value_state as string}
                        onChange={(e)=>value_set(e.target.value)}
                        required
                    />
                </div>
            )
    }
  
}

export default InputForm;