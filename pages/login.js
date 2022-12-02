import Image from "next/image";
import Link from "next/link";
import { BsEnvelope } from 'react-icons/bs';
import { RiKey2Fill } from 'react-icons/ri';


const Login = () => {
    return ( 
    <>
    <div>
    <header>
      <div className="container">
        <div className="logo">
          <img src="logo-white.svg" alt="" />
        </div>
        <div className="links">
          <Link href="#" className="active">HOME</Link>
          <Link href="#">legal notice contest</Link>
        </div>
        <Link href="#"><button>Login</button></Link>
      </div>
    </header>
    <main>
      <div className="container">
        <form action="#" className="sign">
          <h1>Login</h1>
          <div className="fild">
            <div className="i"><BsEnvelope /></div>
            <input type="email" placeholder="Email" autoComplete="off"/>
          </div>
          <div className="fild">
          <div className="i"><RiKey2Fill /></div>
            <input type="password" placeholder="Password" autoComplete="off"/>
          </div>
          <button className="submit">Login</button>
          <div className="social">
            <button><img src="/google.svg" /> Google</button>
            <button><img src="/fb.svg"/> Facebook</button>
          </div>
          <p className="ask">
            Don't have an account? 
          </p>
        </form>
      </div>
    </main>
    <footer>
      <div className="container"></div>
    </footer>
  </div>
  </>
     );
}
 
export default Login;