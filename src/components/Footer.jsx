function Footer(){
    return(
        <footer>
          <div class="container-fluid">
            <div className="row footerparts justify-content-center ms-5">
              <hr className="mb-4" />
              <div className="col-sm-12 col-md-4 col-lg-4">
                <h5 className="ms-4">Features</h5>
                <ul>
                  <li><a href="#">Cool Stuff</a></li>
                  <li><a href="#">Random Feature</a></li>
                  <li><a href="#">Team Feature</a></li>
               </ul>
              </div>

             <div className="col-sm-12 col-md-4 col-lg-4">
             <h5 className="ms-4">Resources</h5>
                <ul>
                  <li><a href="#">Resource</a></li>
                  <li><a href="#">Resource name</a></li>
                  <li><a href="#">FeedBack</a></li>
               </ul>
             </div>

             <div className="col-sm-12 col-md-4 col-lg-4">
             <h5 className="ms-4">About</h5>
                <ul>
                  <li><a href="#">Team</a></li>
                  <li><a href="#">Locations</a></li>
                  <li><a href="#">Address</a></li>
               </ul>
             </div>
            
           </div>
          </div>
        </footer>
    );
}

export default Footer