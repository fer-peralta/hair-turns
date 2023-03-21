import './Navbar.css'
const Navbar = () => {
    return (
        <nav className="nav_container">
            <ul className="ul_nav">
                <li className="nav_items">
                    <button className="nav_button">About us</button>
                </li>
                <li className="nav_items">
                    <button className="nav_button">Book</button>
                </li>
                <li className="nav_items">
                    <button className="nav_button">Contact</button>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar