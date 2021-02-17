import React from 'react'
import Grid from '@material-ui/core/Grid';

const Download = () => {
    return (
        <div>
            <section className="section-3 container-fluid p-0 text-center">
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <h1>Download Our App for all Platform</h1>
          <p>
          Download the latest from Windows, Windows Apps, Office, Xbox, Skype, Windows 10, Lumia phone, Edge & Internet Explorer, Dev Tools & more.
          </p>
        </div>
      </div>
      <div className="platform row " xs="12">
        <Grid className="col-md-6 col-sm-12 text-right" xs="6">
          <div className="desktop shadow-lg">
            <div className="d-flex flex-row justify-content-center">
              <i className="fas fa-desktop fa-3x py-2 pr-3"></i>
              <div className="text text-left" >
                <h3 className="pt-1 m-0">Desktop</h3>
                <p className="p-0 m-0">On website</p>
              </div>
            </div>
          </div>
        </Grid>
        <Grid className="col-md-6 col-sm-12 text-left" xs="6">
          <div className="desktop shadow-lg">
            <div className="d-flex flex-row justify-content-center">
              <i className="fas fa-mobile-alt fa-3x py-2 pr-3"></i>
              <div className="text text-left">
                <h3 className="pt-1 m-0">On Mobile</h3>
                <p className="p-0 m-0">On Play Store</p>
              </div>
            </div>
          </div>
        </Grid>
      </div>
    </section>
        </div>
    )
}

export default Download
