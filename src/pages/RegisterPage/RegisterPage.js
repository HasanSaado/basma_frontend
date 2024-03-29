// Libraries
import React, { useState, useEffect } from 'react';
import { useHistory, Link, Route } from 'react-router-dom';

// Components
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// Api calls
import { customersApi } from '../../api';
import { loginsApi } from '../../api';

// Style
import './RegisterPage.scss';

function RegisterPage() {
  const history = useHistory();
  // State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')) {
      history.push('/dashboard');
    }
  }, [])

  /**
   *
   */
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    let result = await customersApi.customerRegister({
      name: name,
      email: email,
      password: password,
      password_confirmation: passwordConfirmation
    });

    console.log(result)
    if ('User created successfully' === result.message) {
      setEmail('');
      setName('');
      setPassword('');
      setPasswordConfirmation('');
      alert('User created successfully');
    } else {
      alert('Error');
    }
  }

  /**
   *
   */
  return (
    <div className="container login-form">
      <div className="py-5">
        <img
          src="/logo.svg"
          className="login-logo"
          alt="logo"
        />
      </div>
      <Form
        onSubmit={handleSubmit}
        className="w-50"
      >
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            value={password}
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            required
            value={passwordConfirmation}
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </Form.Group>

        <Button
          variant="danger"
          type="submit"
          disabled={!validateForm()}
        >
          Submit
        </Button>
      </Form>
      <p className="mt-3">Already have an account? <Link to="/">Sign In</Link></p>
    </div>
  );
}

export default RegisterPage;
