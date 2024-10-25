function Navigate(){
    return(
        <header>
         <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 col-lg-4 ">
               <p className="pt-2">Company Name</p>
            </div>
            <div className="col-md-8 col-lg-8 d-flex justify-content-end ">
             <div className="menu p-2">
             <ul>
                <li><a href="#" className="pe-2">Home</a></li>
                <li><a href="#" className="pe-2">Enterprise</a></li>
                <li><a href="#" className="pe-2">Support</a></li>
                <li><a href="#">Features</a></li>
             </ul>
            </div>
          </div>
        </div>
      </div>
          <hr />
      </header>
    );
}

export default Navigate