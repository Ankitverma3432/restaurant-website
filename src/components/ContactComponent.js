import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// As here our state will get changed so we have to use class component instead of functional component
// We can also implement forms using Functional component using useState() Hooks

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            message: ''

        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

    }

    handleInputChange(event){
        
        this.setState({
            [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value
        })

    }

    handleSubmit(event){
        console.log("Current State is: " + JSON.stringify(this.state));
        alert("Current State is: " + JSON.stringify(this.state));
        event.preventDefault(); // prevent our page from getting reload on submit the form 
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


                <form onSubmit={this.handleSubmit}>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send Us Your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <div className="mb-3 row">
                            <label htmlFor="firstname" className="col-sm-2 col-form-label">First Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="firstname" name='firstname' value={this.state.firstname} placeholder='First Name' onChange={this.handleInputChange}  />
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label htmlFor="lastname" className="col-sm-2 col-form-label">Last Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="lastname" name='lastname' value={this.state.lastname} placeholder='Last Name' onChange={this.handleInputChange}  />
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label htmlFor="telnum" className="col-sm-2 col-form-label">Contact No.</label>
                            <div className="col-sm-10">
                                <input type="tel" className="form-control" id="telnum" name='telnum' value={this.state.telnum} placeholder='Mobile Number' onChange={this.handleInputChange}/>
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" id="email" name='email' value={this.state.email} placeholder='Enter Email Here' 
                                onChange={this.handleInputChange} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-10">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="gridCheck1" name="agree" checked={this.state.agree} onChange={this.handleInputChange} />{' '}
                                    <label className="form-check-label" htmlFor="gridCheck1">
                                        <strong>May we contact you?</strong>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <div className="form-group">
                                <label for="message">Your Feedback</label>
                                <textarea className="form-control" id="message" name="message" rows="12" value={this.state.message} onChange={this.handleInputChange} ></textarea>
                            </div>


                        </div>
                        <input className="btn btn-primary" type="submit" value="Send Feedback" />
                    </div>
                </div>
              {/* 'submit' button should be just above the closing form tag </form> */}
                </form>
            </div>
        );
    }

}

export default Contact;