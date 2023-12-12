import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/Header';
/*import Passion from '../passion/Passion';
import WhyChooseUs from '../whyChooseUs/WhyChooseUs';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Home from '../home/Home';*/
const Signup = () => {
  return (
    <div>
    <Header/>
    <div className='container' >
          <form className='w-50 mx-auto mt-5 border bg-dark border-danger rounded'>
            <div className="m-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" name='name'/>
            </div>
            <div className="m-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" name='email' />
            </div>
            <div className="m-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" name='password' />
            </div>
            <button type="submit" className="m-3 btn btn-success">Submit</button>
            <Link to="/login" className="m-3 mx-1 btn btn-danger">Already a user</Link>
          </form>
        </div>
    </div>
  );
}

export default Signup;
