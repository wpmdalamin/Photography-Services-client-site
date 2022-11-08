import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';



const Register = () => {
    const {registerUser} = useContext(AuthContext);
    const handelregister = (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name, email, password);

        registerUser(email, password)
        .then(res => {
            const user = res.user;
            console.log(user)
        })
        .catch(error => console.log(error))
    }
    return (
        <div>
            <h3 className='text-5xl text-center'>Register</h3>

            <div className='w-1/2 m-auto'>
                <form onSubmit={handelregister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>

                <p>Allredy have an account? <Link to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;