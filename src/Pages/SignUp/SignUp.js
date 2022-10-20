import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';


const SignUp = () => {
    const [error, setError] = useState('')
    const [accepted, setAccepted] = useState(false)
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext)

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                setError('')
                form.reset();
                handleUpdateUserProfile(name, photoURL)
                handleEmailVerification()
                toast.success('Please verify your email')
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    }

    const handleUpdateUserProfile = (name, photoURl) => {
        const profile = {
            displayName: name,
            photoURL: photoURl
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.log(error))
    }


    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const handleAccepted = (event) => {
        setAccepted(event.target.checked);
    }


    return (
        <div>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Youre Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name='photoURL' type="text" placeholder="Photo URL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={handleAccepted}
                        type="checkbox"
                        label={<>I Accept <Link to='/terms' > Terms and conditions</Link> </>}

                    />
                </Form.Group>

                <Button variant="primary" type="submit" disabled={!accepted} >
                    Sign Up
                </Button>
                <Form.Text className="text-danger">
                    {
                        error
                    }
                </Form.Text>
            </Form>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default SignUp;