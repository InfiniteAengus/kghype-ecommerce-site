import Input from 'components/input-new';
import { Link } from 'react-router-dom';
import SignPageLayout from 'layouts/sign-page-layout';
import { useState } from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from 'firebase.js';
import { db } from 'firebase.js';
import CountrySelect from 'components/country-select';

import countryList from './countryList.js';

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
  });

  const [step, setStep] = useState(1);

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        data.mail,
        data.password
      );

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
    setData(newData);
    console.log(newData);
  };

  const handleNext = () => {
    if (
      data.fName !== '' &&
      data.lName !== '' &&
      data.mail !== '' &&
      data.password.length > 6
    ) {
      setStep(2);
    }
  };

  return (
    <SignPageLayout
      rightIcon={'/image/3595867.png'}
      placeholderText='Placeholder text'
      label='Register on our Service!'
    >
      <div className='space-1'></div>
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

          <div className='supporter'>
            By register you agree on our
            <Link to='\'>Terms of Service and Privacy Policy</Link>
          </div>

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

          <div className='supporter'>
            By register you agree on our
            <Link to='\'>Terms of Service and Privacy Policy</Link>
          </div>

          <button className='submit-button' onClick={register}>
            SUBMIT
          </button>
        </div>
      )}
    </SignPageLayout>
  );
};

export default SignUpPage;
