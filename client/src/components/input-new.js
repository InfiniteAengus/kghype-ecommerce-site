import { Link } from "react-router-dom";
import styled from "styled-components";

const fontStyle = {
  fontFamily: "Inter",
  fontSize: "16px",
  color: "#000000",
  textAlign: "left",
};

export default function Input({
  label = null,
  onChange,
  onFocus,
  append,
  inputs,
}) {
  return (
    <Wrapper>
      <label>
        <div>{label}</div>
        {append && <Link to={append.to}>{append.text}</Link>}
      </label>
      <div className="input-container">
        {inputs.map((e, ind) => (
          <InputWrapper
            placeholder={e.placeholder}
            name={e.name}
            value={e.value}
            id={e.id}
            type={e.type}
            onChange={onChange}
            onFocus={onFocus}
            key={ind}
          />
        ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  label {
    display: flex;
    justify-content: space-between;
    font-size: 16px;

    div {
      font-weight: bold;
      color: black;
    }

    a {
      text-decoration: none;
      color: #072a48;
      font-weight: bold;
    }
  }

  .input-container {
    display: flex;
    gap: 10px;
  }
`;

const InputWrapper = styled.input`
  padding: 20px 40px;
  background-color: #f3f4f6;
  border: none;
  outline: none;
  border-radius: 8px;

  width: 40%;
  flex-grow: 1;
`;
