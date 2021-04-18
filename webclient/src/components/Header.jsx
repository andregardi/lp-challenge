import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div>
      <h1>Header</h1>
      <Link to="/">home</Link>
      <Link to="/page2">page2</Link>

    </div>
  )
}

export default Header
