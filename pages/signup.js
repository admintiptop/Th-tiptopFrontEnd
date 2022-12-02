import { BsEnvelope } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { FaRegIdCard } from 'react-icons/fa';
import { RiKey2Fill } from 'react-icons/ri';


const Signup = () => {
    return ( 
        <>
        <div>
        <header>
      <div class="container">
        <div class="logo">
          <img src="/logo-white.svg" alt="" />
        </div>
        <div class="links">
          <a href="#" class="active">HOME</a>
          <a href="#">legal notice contest</a>
        </div>
        <a href="#"><button>Login</button></a>
      </div>
    </header>
    <main>
      <div class="container">
        <form action="#" class="sign">
          <h1>Signup</h1>
          <div class="fild">
          <div className="i"><AiOutlineUser /></div>
            <input type="text" placeholder="Name" />
          </div>
          <div class="fild">
          <div className="i"><BsEnvelope /></div>
            <input type="email" placeholder="Email" />
          </div>
          <div class="fild">
          <div className="i"><FaRegIdCard /></div>
            <input type="number" placeholder="Passport number" />
          </div>
          <div class="fild">
          <div className="i"><RiKey2Fill /></div>
            <input type="password" placeholder="Password" />
          </div>
          <button class="submit">Signup</button>
          <div class="social">
            <button><img src="/google.svg" alt="" /> Google</button>
            <button><img src="/fb.svg" alt="" /> Facebook</button>
          </div>
          <p class="ask">
            Already have an account? <a href="login.html">Login</a>
          </p>
        </form>
      </div>
    </main>
    <footer>
      <div class="container"></div>
    </footer>
        </div>
        </>
     );
}
 
export default Signup;