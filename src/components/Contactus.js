import React from 'react'
import Button from '@material-ui/core/Button';
import { Icon } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';



const Contactus = () => {
    return (
        <div>
            <section  className="contact" id="contact" >
                <div className="title">
                <div className="center mb-40">
                <h1 className="heading">Contact Us</h1>
                </div>
                    <p>Have a question about your plan? Contact us 24 hours a day 7 days a week for the best customer service! </p>
                </div>
                <div className="contactForm animate" >
                    <h3>Send Message</h3>
                    <Grid className="inputBox" xs="11" >
                        <input type="text" placeholder="Name"></input>
                        <input type="text" placeholder="Email"></input>
                    </Grid>
                    <Grid className="inputBox" xs="12">
                        <textarea  placeholder="Message"></textarea>
                    </Grid>
                    <Button
                    variant="contained"
                    color="secondary"
                    // className={classes.Button} 
                    >Send
                    </Button>
                </div>
            </section>
        </div>
    )
}

export default Contactus
