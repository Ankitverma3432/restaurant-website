import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// As here our state will get changed so we have to use class component instead of functional component
// We can say that forms can only be implemented with Class based Components

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: ''

        }
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                        </ol>
                    </nav>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>


                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send Us Your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <div className="mb-3 row">
                            <label htmlFor="firstname" className="col-sm-2 col-form-label">First Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="firstname" name='firstname' value={this.state.firstname} placeholder='First Name' />
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label htmlFor="lastname" className="col-sm-2 col-form-label">Last Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="lastname" name='lastname' value={this.state.lastname} placeholder='Last Name' />
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label htmlFor="telnum" className="col-sm-2 col-form-label">Contact No.</label>
                            <div className="col-sm-10">
                                <input type="tel" className="form-control" id="telnum" name='telnum' value={this.state.telnum} placeholder='Mobile Number' />
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" id="email" name='email' value={this.state.email} placeholder='Enter Email Here' />
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-sm-2"></div>
                            <div class="col-sm-10">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="gridCheck1" />
                                    <label class="form-check-label" for="gridCheck1">
                                        <strong>May we contact you?</strong>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="mb-3 row">
                        <div class="col-sm-2"><label htmlFor="message" className="col-sm-2 col-form-label">Your Feedback</label></div>
                        <div class="col-sm-10">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="gridCheck1" />
                                    <label class="form-check-label" for="gridCheck1">
                                    <textarea id="message" name="message"
                                rows="12" cols='33' value={this.state.message}></textarea>
                                    </label>
                                </div>
                            </div>

                            
                        </div>

                        <input class="btn btn-primary" type="submit" value="Send Feedback" />
                    </div>
                </div>
            </div>
        );
    }

}

export default Contact;