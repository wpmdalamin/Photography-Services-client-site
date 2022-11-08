import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';


const provider = new GoogleAuthProvider();


const Login = () => {
    const [error, setError] = useState('')

    const {login, googleSignup} = useContext(AuthContext);
    const handellogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        login(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => setError(error.message))
        
        event.target.reset()

    }
    const handelGoogleSignUp = () => {
        googleSignup(provider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => setError(error.message))
    }
    return (
        <div>
            <h3 className='text-5xl text-center'>Login</h3>
            <div className='w-1/2 m-auto'>
                <form onSubmit={handellogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' required placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" required placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <div className='text-danger'>
                    <p>{error}</p>
                </div>
                <div>
                    <button onClick={handelGoogleSignUp} className='btn btn-gost'>Google</button>
                </div>

                <p>Don't have an account? <Link to="/register">Sign Up</Link></p>
            </div>
        </div >
    );
};

export default Login;