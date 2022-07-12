import Input from 'components/input-new';
import { Link } from 'react-router-dom';
import { PUBLIC_PREFIX, LOGIN_PREFIX, SIGNUP_PREFIX } from 'configs/app-config';

//Firebase
import SignPageLayout from 'layouts/sign-page-layout';
import { useMemo, useState } from 'react';
import { isValidEmail } from 'utilities/validator';

function ForgotPasswordPage(props) {
  const [email, setEmail] = useState('');

  const validationEmail = useMemo(() => {
    return email === '' || isValidEmail(email);
  }, [email]);

  return (
    <SignPageLayout
      placeholderText='Placeholder Text'
      label='Forgot your password?'
    >
      <div className='space-1'></div>
      <h1>Forgot Your Password?</h1>
      <h5>Enter your email to reset password assosiated with your account</h5>
      <div className='space-2'></div>
      <div className='form'>
        <Input
          label='Email'
          inputs={[
            {
              name: 'email',
              value: email,
              id: 'mail',
              error: !validationEmail,
              placeholder: 'Email',
            },
          ]}
          onChange={(e) => setEmail(e.target.value)}
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

export default ForgotPasswordPage;
