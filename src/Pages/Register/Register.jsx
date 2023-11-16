import { useContext } from 'react';
// import { useForm, SubmitHandler } from 'react-hook-form';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom'
const Register = () => {

    const { createuser } = useContext(AuthContext)
    // const { register, handleSubmit, watch, formState: { errors } } = useForm()
    // const onSubmit = (data) => console.log(data)

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        createuser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(err => console.log(err.message))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col  md:flex-row lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 md:w-1/2 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Register"></input>
                        </div>
                    </form>
                    <p className='p-8'>Already Have a account? <Link className='text-blue-500' to='/login'>login</Link></p>

                </div>
            </div>
        </div>
    );
};

export default Register;