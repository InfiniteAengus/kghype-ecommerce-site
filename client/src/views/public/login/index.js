import styled from 'styled-components';
import Input from 'components/input-new';
import { Link } from 'react-router-dom';
import {
  PUBLIC_PREFIX,
  SIGNUP_PREFIX,
  FORGOT_PASSWORD_PREFIX,
} from 'configs/app-config';
import { useMemo, useState } from 'react';
import { signed } from 'store/actions/actions';
import { connect } from 'react-redux';

//Firebase

import { auth } from 'firebase.js';
import { db } from 'firebase.js';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import SignPageLayout from 'layouts/sign-page-layout';
import CheckBox from 'components/checkbox';
import { isValidEmail } from 'utilities/validator';

function LoginPage(props) {
  const [data, setData] = useState({
    mail: '',
    password: '',
    remember: false,
  });

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) window.location = '/p/profile';
  });

  const validationEmail = useMemo(() => {
    return data.mail === '' || isValidEmail(data.mail);
  }, [data.mail]);
  //Values

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      if (validationEmail) {
        const user = await signInWithEmailAndPassword(
          auth,
          data.mail,
          data.password
        );
      }

      window.location = '/p/profile';
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SignPageLayout placeholderText='Placeholder text' label='Login'>
      <div className='space-1'></div>
      <h1>Enter your Credentials</h1>
      <h5>Login to our service</h5>
      <div className='space-2'></div>
      <div className='form'>
        <Input
          label='Email'
          inputs={[
            {
              name: 'email',
              value: data.mail,
              id: 'mail',
              error: !validationEmail,
              placeholder: 'Email',
            },
          ]}
          onChange={(e) => handleSubmit(e)}
        />
        <Input
          label='Password'
          inputs={[
            {
              type: 'password',
              name: 'password',
              value: data.password,
              id: 'password',
            },
          ]}
          append={{
            to: PUBLIC_PREFIX + FORGOT_PASSWORD_PREFIX,
            text: 'Forgot your password?',
          }}
          onChange={(e) => handleSubmit(e)}
        />

        <CheckBox
          name='remember'
          label='Remember Me'
          value={data.remember}
          onChange={handleSubmit}
          id='remember'
        />

        <button className='submit-button' onClick={login}>
          SUBMIT
        </button>
        <div className='supporter' style={{ marginTop: 25 }}>
          Don't have an account?
          <Link to={PUBLIC_PREFIX + SIGNUP_PREFIX}>Register here.</Link>
        </div>
      </div>
    </SignPageLayout>
  );
}

const mapStateToProps = (state) => {
  return {
    user__state: state.userState.user__state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userSigned: () => dispatch(signed()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
