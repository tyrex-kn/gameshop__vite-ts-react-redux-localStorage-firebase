import type { ReactNode } from "react";

import "./ButtonForm.css"

interface ButtonFormProperty{
    children: ReactNode;
    state?: boolean;
}

const ButtonForm = ({children, state = true}:ButtonFormProperty) => {
  
  const btnStyleState = !state ? "btn--secondary" : "btn--primary"   

  return (
    <button 
        type="submit"
        className={`btn ${btnStyleState}`}
        disabled={!state}
    >
        {children}
    </button>
  )
}

export default ButtonForm