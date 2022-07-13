import Input from 'components/input-new';
// import { Link } from 'react-router-dom';
import SignPageLayout from 'layouts/sign-page-layout';
import { useMemo, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  // onAuthStateChanged,
} from 'firebase/auth';
import { auth } from 'firebase.js';
import { db } from 'firebase.js';
import CountrySelect from 'components/country-select';
import CheckBox from 'components/checkbox';
import countryList from './countryList.js';
import { isValidEmail } from 'utilities/validator.js';

const SignUpPage = () => {
  const [data, setData] = useState({
    mail: '',
    password: '',
    confirmPassword: '',
    fName: '',
    lName: '',
    phoneNum: '',
    country: '',
    username: '',
    agreement: false,
  });

  const [step, setStep] = useState(1);

  const validationEmail = useMemo(() => {
    return data.mail === '' || isValidEmail(data.mail);
  }, [data.mail]);

  const register = async () => {
    try {
      await createUserWithEmailAndPassword(auth, data.mail, data.password);

      const usersRef = db.ref('users');
      const newUserRef = usersRef.push();
      newUserRef
        .set({
          mail: data.mail,
          password: data.password,
          confirmPassword: data.confirmPassword,
          fName: data.fName,
          lName: data.lName,
          phoneNum: data.phoneNum,
          country: data.country,
        })
        .then(() => {
          window.location = '/p/profile';
        });
    } catch (error) {
      console.log(error);
    }
  };

  //Values

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    if (e.target.id === 'agreement') {
      newData[e.target.id] = e.target.checked;
    }
    setData(newData);
    console.log(newData);
  };

  const handleNext = () => {
    if (
      data.fName !== '' &&
      data.lName !== '' &&
      data.mail !== '' &&
      data.password.length > 6 &&
      data.agreement
    ) {
      setStep(2);
    }
  };

  return (
    <SignPageLayout
      rightIcon={'/image/3595867.png'}
      placeholderText="If you don't have an account, please register here. By registering you agree to our terms of services."
      label='Register on our Service!'
    >
      <h1>Register here</h1>
      <h5>
        If you dont have account on our service,please register here. By
        registering you agree to our terms of services.
      </h5>
      <div className='space-2'></div>

      {step === 1 && (
        <div className='form'>
          <Input
            label='First and Last Name'
            inputs={[
              {
                name: 'firstname',
                value: data.fName,
                id: 'fName',
                placeholder: 'First Name',
              },
              {
                name: 'lastname',
                value: data.lName,
                id: 'lName',
                placeholder: 'Last Name',
              },
            ]}
            onChange={handleSubmit}
          />

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
            onChange={handleSubmit}
          />

          <Input
            label='Password'
            inputs={[
              {
                name: 'password',
                value: data.password,
                id: 'password',
                placeholder: 'Password',
                type: 'password',
              },
            ]}
            onChange={handleSubmit}
          />

          <CheckBox
            name='agreement'
            label='By register you agree on our Terms of Service and Privacy Policy'
            value={data.agreement}
            onChange={handleSubmit}
            id='agreement'
          />

          <button className='submit-button' onClick={handleNext}>
            NEXT
          </button>
        </div>
      )}

      {step === 2 && (
        <div className='form'>
          <Input
            label='Username'
            inputs={[
              {
                name: 'username',
                value: data.username,
                id: 'username',
                placeholder: 'Username',
              },
            ]}
            onChange={handleSubmit}
          />

          <Input
            label='Phone'
            inputs={[
              {
                name: 'phoneNum',
                value: data.phoneNum,
                id: 'phoneNum',
                placeholder: '+0 000 000 0000',
              },
            ]}
            onChange={handleSubmit}
          />

          <CountrySelect
            name='country'
            id='country'
            label='Country'
            onChange={handleSubmit}
            countryList={countryList}
          />

          <CheckBox
            name='agreement'
            label='By register you agree on our Terms of Service and Privacy Policy'
            value={data.agreement}
            onChange={handleSubmit}
            id='agreement'
          />

          <button className='submit-button' onClick={register}>
            SUBMIT
          </button>
        </div>
      )}
    </SignPageLayout>
  );
};

export default SignUpPage;
