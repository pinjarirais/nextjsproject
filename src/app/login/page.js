import Link from "next/link";


const Login = () => {
  return (
    <div className="w-full flex flex-col justify-center pt-4">
      <h1>Login Page</h1>
      <Link className="pb-2" href="/">Go to Home page</Link>
    </div>
  )
}

export default Login;
