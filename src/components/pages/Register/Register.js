import { GoogleAuthProvider, updateProfile } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Register = () => {
    useTitle('Register')
    const { signUp, googleSignIn } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()
    const handleFormSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photoUrl.value;
        signUp(email, password)
            .then(result => {
                const user = result.user
                updateProfile(user, {
                    displayName: name,
                    photoURL: photo,
                }).then(() => {
                    console.log(user)
                }).catch((error) => {
                    const errorMessage = error.message;
                    console.log(errorMessage)
                });

            })
            .catch((error) => {

            });

        form.reset()


    }

    const handlegoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user)
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });

    }
    return (
        <section className="h-screen mb-28">
            <div className="px-6 h-full text-gray-800">
                <h1 className='font-bold text-5xl underline text-orange-600'>Register</h1>
                <div
                    className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
                >
                    <div
                        className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
                    >
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="w-full"
                            alt="Sample"
                        />
                    </div>
                    <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12">
                        <button
                            onClick={handlegoogleSignIn}
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            className="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                        >
                            Sign in with Google
                        </button>
                        <form onSubmit={handleFormSubmit}>
                            <div
                                className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                            >
                                <p className="text-center font-semibold mx-4 mb-0">Or</p>
                            </div>

                            {/* Name input  */}
                            <div className="mb-6">
                                <input
                                    type="text" name="name"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="registerName"
                                    placeholder="Full Name"
                                />
                            </div>
                            {/* PhotoURL input  */}
                            <div className="mb-6">
                                <input
                                    type="text" name="photoUrl"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="registerPhoto"
                                    placeholder="PhotoUrl"
                                />
                            </div>
                            {/* Email input  */}
                            <div className="mb-6">
                                <input
                                    type="email" name="email"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="registerEmail"
                                    placeholder="Email address"
                                />
                            </div>

                            {/* Password input --> */}
                            <div className="mb-6">
                                <input
                                    type="password" name="password"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="registerPassword"
                                    placeholder="Password"
                                />
                            </div>

                            <div className="flex justify-between items-center mb-6">
                                <div className="form-group form-check">
                                </div>
                                <Link to="#!" className="text-gray-800">Forgot password?</Link>
                            </div>

                            <div className="text-center lg:text-left">
                                <button
                                    type="submit"
                                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                >
                                    Register
                                </button>
                                <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                                    Already have an account?
                                    <Link
                                        to="/login"
                                        className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                                    >Login</Link
                                    >
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;