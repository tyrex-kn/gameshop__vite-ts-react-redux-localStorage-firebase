import { Link } from "react-router-dom"

import { CartBlock } from "../../block"

import "./header.css"

const Header = () => {
  return (
    <div className="header">
        <div className="wrapper">
           
            <Link to="/" className="header__store-title">
                Game Store
            </Link>
        </div>
        <div className="header__links">
            <Link to="/create-game">Create Game</Link>
            <Link to="/order-list">Order List</Link>
            <CartBlock />
        </div>
    </div>
  )
}

export default Header;