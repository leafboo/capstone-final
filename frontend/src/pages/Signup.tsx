import { Link } from "react-router"


function Signup() {


  return (
    <>
      <h1 className="text-green-900 font-bold text-[3rem]">Signup Page</h1>
      <Link to="/login" className="border border-black p-[.5rem]">Sign up</Link>
    </>
  )
}

export default Signup