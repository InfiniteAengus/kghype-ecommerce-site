import styled from 'styled-components';
import { auth } from '../firebase.js';
import firebase from 'firebase/compat/app';
import { signInWithPopup } from '@firebase/auth';

const rightPanels = [
  {
    icon: <img src='/image/cheap-price.svg' alt='cheap-price' />,
    title: 'Cheap Prices',
    description:
      'With our trusted purchasing team we can purchase items from Taobao, Weidian, and Yupoo for cost effective prices',
  },
  {
    icon: <img src='/image/amazing-support.svg' alt='cheap-price' />,
    title: 'Amazing Support',
    description:
      'We offer the best customer support, no longer will you be ignored or have long reply times, KgHype offers support through email and our discord server',
  },
  {
    icon: <img src='/image/clear-quality.svg' alt='cheap-price' />,
    title: 'Clear Quality inspection',
    description:
      'We offer clear quality check pictures so you know exactly what products look like before shipping.',
  },
  {
    icon: <img src='/image/afford.svg' alt='cheap-price' />,
    title: 'Affordable Shipping',
    description:
      'We offer amazing shipping prices to help you ship consolidate and ship parcels with ease',
  },
];
const SignPageLayout = ({ children, rightIcon }) => {
  const handleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });

    signInWithPopup(auth, provider);
  };

  return (
    <ContentWrapper>
      <FormWrapper>
        {children}
        <div className='hr-line-separator'>
          <h2>
            <span>or</span>
          </h2>
        </div>
        <button className='google-button' onClick={handleSignIn}>
          <div class='google-icon-wrapper'>
            <img
              class='google-icon'
              src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
              alt='google'
            />
          </div>
          <p class='btn-text'>
            <b>Sign in with google</b>
          </p>
        </button>
      </FormWrapper>
      <Wrapper>
        <div className='circle-1'></div>
        <div className='circle-2'></div>
        <div className='circle-3'></div>
        <div className='circle-4'></div>
        {rightIcon ? (
          <div className='right-icon'>
            <img src={rightIcon} alt='icon' />
          </div>
        ) : (
          <div className='service-list'>
            {rightPanels.map((item, index) => (
              <div className='service-item' key={`service-item-${index}`}>
                <div>{item.icon}</div>
                <div>
                  <span>{item.title}</span>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </Wrapper>
    </ContentWrapper>
  );
};

export default SignPageLayout;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;

  height: 900px;
  overflow: hidden;
  background: linear-gradient(180deg, #072a48 0%, #093963 100%);
  padding: 50px;

  * {
    box-sizing: border-box;
  }

  .hr-line-separator {
    h2 {
      border-bottom: 1px solid #e1e3eb;
      line-height: 0.1em;
      text-align: center;
    }
    span {
      background: #fff;
      padding: 0 19px;
      font-size: 16px;
      font-weight: 400;
      color: #546285;
    }
  }

  .google-button {
    margin: 0px auto 0 auto;
    width: 184px;
    height: 42px;
    border-radius: 2px;
    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
    background-color: #4285f4;
    position: relative;

    font-size: 13px;
    font-weight: 600;
    color: #072a48;

    border: none;
    outline: none;
    cursor: pointer;

    .google-icon-wrapper {
      position: absolute;
      left: 1px;
      top: 1px;
      width: 40px;
      height: 40px;
      border-radius: 2px;
      background-color: white;

      display: flex;
      justify-content: center;
      align-items: center;
    }
    .google-icon {
      width: 18px;
      height: 18px;
    }

    .btn-text {
      margin-left: 40px;
      color: white;
    }

    &:hover {
      box-shadow: 0 0 6px #4285f4;
    }
    &:active {
      background: #1669f2;
    }
  }

  h1 {
    color: black;
    margin: 0;
    font-size: 32px;
  }

  h5 {
    color: #4b5563;
    font-size: 16px;
    margin: 0;
    font-weight: 400;
    line-height: 28px;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 30px;

    .submit-button {
      padding: 25px;
      border-radius: 6px;
      background-color: #072a48;

      color: white;
      text-align: center;
      font-size: 16px;
      font-weight: bold;

      border: none;
      outline: none;
      cursor: pointer;

      &:hover {
        opacity: 0.96;
      }
    }

    .supporter {
      text-align: center;
      color: #4b5563;
      font-size: 14px;

      a {
        color: #4b5563;
        text-decoration: none;
        font-weight: bold;
        padding-left: 4px;
      }
    }
  }
`;

const FormWrapper = styled.div`
  width: 50%;
  max-width: 600px;
  box-sizing: border-box;
  padding: 90px 60px;
  background: white;
  border-radius: 15px;

  position: relative;
  z-index: 10;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  .space-1 {
    height: 35px;
  }
  .space-2 {
    height: 25px;
  }

  @media screen and (max-width: 1390px) {
    padding: 60px 40px;
  }

  @media screen and (max-width: 1200px) {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const Wrapper = styled.div`
  flex: 1;

  padding: 30px 80px;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1200px) {
    display: none;
  }

  .right-icon {
    display: flex;
    justify-content: center;
    align-items: center;

    margin: auto auto;

    width: 80%;
    max-width: 600px;
    // height: 350px;

    background: linear-gradient(
      180deg,
      rgba(7, 42, 72, 0.4) 0%,
      rgba(79, 70, 229, 0) 100%
    );
    border-radius: 16px;

    img {
      width: 100%;
    }
  }

  .service-list {
    display: flex;
    flex-direction: column;
    gap: 60px;
  }

  .service-item {
    display: flex;
    align-items: center;
    gap: 30px;

    color: white;
    span {
      font-weight: 700;
      font-size: 36px;
    }

    p {
      font-weight: 700;
      font-size: 16px;
      line-height: 14px;
      margin: 0;
    }
  }

  .label {
    position: absolute;
    bottom: 150px;
    left: 100px;

    color: white;

    p {
      margin: 0;
      opacity: 0.6;
    }

    h2 {
      font-size: 28px;
      font-weight: 400;
      margin: 10px 0 0 0;
    }
  }

  .circle-1 {
    position: absolute;
    width: 1090px;
    height: 1090px;
    left: -249px;
    top: -73px;
    border-radius: 50%;

    background: linear-gradient(
      140.4deg,
      rgba(255, 255, 255, 0.03) 16.29%,
      rgba(255, 255, 255, 0) 63.17%
    );
  }

  .circle-2 {
    position: absolute;
    width: 935px;
    height: 935px;
    left: -134px;
    top: 66px;
    border-radius: 50%;

    background: linear-gradient(
      140.4deg,
      rgba(255, 255, 255, 0.02) 16.29%,
      rgba(255, 255, 255, 0) 63.17%
    );
  }

  .circle-3 {
    position: absolute;
    width: 935px;
    height: 935px;
    left: 74px;
    top: 250px;
    border-radius: 50%;

    background: linear-gradient(
      163.92deg,
      rgba(255, 255, 255, 0.012) 16.01%,
      rgba(255, 255, 255, 0) 57.64%
    );
  }

  .circle-4 {
    position: absolute;
    width: 700px;
    height: 700px;
    left: 282px;
    top: 434px;
    border-radius: 50%;

    background: linear-gradient(
      140.4deg,
      rgba(255, 255, 255, 0.01) 16.29%,
      rgba(255, 255, 255, 0) 63.17%
    );
  }
`;
