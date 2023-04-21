import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Pursuit</span>
        <div className="navItems">
          <button className="navButton">Explore</button>
          <button className="navButton">My Account</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar