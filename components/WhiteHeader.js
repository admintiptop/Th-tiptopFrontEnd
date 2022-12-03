const WhiteHeader = () => {
    return ( 
        <header>
        <div className="container">
          <div className="logo">
            <img src="/logo.svg" alt="" />
          </div>
          <div className="links">
            <a href="#" className="active">HOME</a>
            <a href="#">legal notice contest</a>
          </div>
          <div className="dd">
            <button><i className="uil uil-user"></i> user name</button>
            <i className="uil uil-align-center-alt menu"></i>
          </div>
        </div>
      </header>
     );
}
 
export default WhiteHeader;