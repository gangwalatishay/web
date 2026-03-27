import { Link } from "react-router-dom"

export const Logo = () => {
  return (
    <div className="md:flex items-center gap-x-2 hover:cursor-pointer">
      <Link to="/">
        <img
          src="../src/assets/logo.png"
          alt="Logo"
          className="h-20 w-20 flex"
        />
      </Link>
    
    </div>
  )
}