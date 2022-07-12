import Input from 'components/input-new';
import { Link } from 'react-router-dom';
import { PUBLIC_PREFIX, LOGIN_PREFIX, SIGNUP_PREFIX } from 'configs/app-config';

//Firebase
import SignPageLayout from 'layouts/sign-page-layout';
import { useState } from 'react';

function ResetPasswordPage(props) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <SignPageLayout
      placeholderText='Placeholder Text'
      label='Reset your password'
    >
      <h1>Password Reset</h1>
      <h5>
        Enter your new password twice to change password of assosiated account
      </h5>
      <div className='space-2'></div>
      <div className='form'>
        <Input
          label='Your new password'
          inputs={[
            {
              name: 'password',
              value: password,
              id: 'password',
              placeholder: 'Password',
              type: 'password',
            },
          ]}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          label='Confirm your new password'
          inputs={[
            {
              name: 'password',
              value: confirmPassword,
              id: 'password',
              placeholder: 'Password',
              type: 'password',
            },
          ]}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {/* <Link to={PUBLIC_PREFIX + SIGNUP_PREFIX}>Sign up</Link> */}
        <button className='submit-button' onClick={() => {}}>
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

export default ResetPasswordPage;
