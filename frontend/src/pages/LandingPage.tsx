import { Link } from "react-router"

function LandingPage() {


  return (
    <>
      <h1 className="text-green-900 font-bold text-[3rem]">Landing page</h1>
      <Link to="/signup" className="border border-black p-[.5rem]">Sign up</Link>
      <Link to="login" className="border border-black p-[.5rem]">Log in</Link>
    </>
  )
}

export default LandingPage