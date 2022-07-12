import styled from "styled-components";
import { auth } from "../firebase.js";
import firebase from "firebase/compat/app";
import { signInWithPopup, onAuthStateChanged } from "@firebase/auth";

const SignPageLayout = ({ children, rightIcon, placeholderText, label }) => {
  const handleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });

    signInWithPopup(auth, provider);
  };

  return (
    <ContentWrapper>
      <FormWrapper>
        <button className="google-button" onClick={handleSignIn}>
          G
        </button>
        {children}
      </FormWrapper>
      <Wrapper>
        <div className="circle-1"></div>
        <div className="circle-2"></div>
        <div className="circle-3"></div>
        <div className="circle-4"></div>
        {rightIcon && (
          <div className="right-icon">
            <img src={rightIcon} alt="icon" />
          </div>
        )}
        <div className="label">
          <p>{placeholderText}</p>
          <h2>{label}</h2>
        </div>
      </Wrapper>
    </ContentWrapper>
  );
};

export default SignPageLayout;

const ContentWrapper = styled.div`
  width: 90%;
  max-width: 1440px;
  margin: 90px auto;
  display: flex;

  height: 900px;
  overflow: hidden;

  * {
    box-sizing: border-box;
  }

  .google-button {
    width: 60px;
    height: 60px;
    border-radius: 12px;
    background-color: #eef2ff;
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 28px;
    font-weight: 600;
    color: #072a48;

    border: none;
    outline: none;
    cursor: pointer;

    &:hover {
      background-color: #e2eef9;
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
  box-sizing: border-box;
  padding: 90px 140px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  .space-1 {
    height: 35px;
  }
  .space-2 {
    height: 25px;
  }

  @media screen and (max-width: 1390px) {
    padding: 60px 90px;
  }

  @media screen and (max-width: 1200px) {
    width: 100%;
    max-width:600px;
    margin: 0 auto;
  }
`;

const Wrapper = styled.div`
  width: 50%;
  background: linear-gradient(180deg, #072a48 0%, #093963 100%);
  position: relative;

  overflow: hidden;

  @media screen and (max-width: 1200px) {
    display: none;
  }

  .right-icon {
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 180px auto 0 auto;

    width: 242px;
    height: 242px;

    background: linear-gradient(
      180deg,
      rgba(7, 42, 72, 0.4) 0%,
      rgba(79, 70, 229, 0) 100%
    );
    border-radius: 16px;

    img {
      width: 160px;
      opacity: 0.8;
    }
  }

  .label {
    position: absolute;
    bottom: 250px;
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