import React from 'react'
import Grid from '@material-ui/core/Grid';

const Footer = () => {
    return (
        <div>
            <footer>
    <div className="container-fluid p-0">
      <div className="row text-left" >
        <Grid className="col-md-5 col-sm-5" xs="4">
          <h4 className="text-light">About us</h4>
          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum maxime ea similique illum corrupti</p>
          <p className="pt-4 text-muted">Copyright ©2019 All rights reserved | This template is made with by
            <span> Daily Tuition</span>
          </p>
        </Grid>
        <Grid className="col-md-5 col-sm-12" xs="4">
          <h4 className="text-light">Newsletter</h4>
          <p className="text-muted">Stay Updated</p>
          <form className="form-inline">
            <div className="col pl-0">
              <div className="input-group pr-5">
                <input type="text" class="form-control bg-dark text-white" id="inlineFormInputGroupUsername2" placeholder="@gmail.com" />
                <div className="input-group-prepend">
                  {/* <div className="input-group-text">
                    <i className="fas fa-arrow-right"></i>
                  </div> */}
                </div>
              </div>
            </div>
          </form>
        </Grid>
        <Grid className="col-md-2 col-sm-12" xs="4">
          <h4 className="text-light">Follow Us</h4>
          <p className="text-muted">Let us be social</p>
          <div className="column text-light">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </Grid>
      </div>
    </div>
  </footer>
        </div>
    )
}

export default Footer
