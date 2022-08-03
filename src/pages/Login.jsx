import React, {useRef} from 'react';

const Login = () => {

  const form = useRef(null);

  const hanbleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(form.current);
    const data = {
      username: formData.get('email'),
      password: formData.get('password')
    };
    console.log(data)
  }

  return (
    <div className="login">
      <div className="form-container">
        <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />

        <form action="/" className="form" ref={form}>
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            type="text"
            name="email"
            className="input input-email"
          />

          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="input input-password"
          />

          <button
            onClick={hanbleSubmit}
            type="submit"
            className="primary-button login-button"
          >Log In</button>
          <a href="/">Forgot my password</a>
        </form>

        <button className="secondary-button signup-button">Sign up</button>
      </div>
    </div>
  );
};

export { Login };
