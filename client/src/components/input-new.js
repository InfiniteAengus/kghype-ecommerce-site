import { TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
      <div className='input-container'>
        {inputs.map((e, ind) => (
          <>
            <TextField
              placeholder={e.placeholder}
              name={e.name}
              value={e.value}
              id={e.id}
              type={e.type}
              error={e.error}
              onChange={onChange}
              onFocus={onFocus}
              key={ind}
              fullWidth
            />
          </>
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
