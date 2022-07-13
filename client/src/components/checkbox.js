import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import check from '../assets/image/check.svg';

export default function CheckBox({ name, value, label, id, onChange }) {
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    setFlag(value);
  }, [value]);
  
  const ref = useRef();

  const handleClick = () => {
    ref.current.checked = !flag;
    ref.current.value = !flag;
    setFlag((prev) => !prev);
    onChange({
      target: ref.current,
      preventDefault: () => {},
    });
  };

  return (
    <div>
      <input
        style={{ display: 'none' }}
        id={id}
        name={name}
        ref={ref}
        type='checkbox'
        checked={value}
      />
      <InputWrapper onClick={handleClick}>
        <div className='checker'>{flag && <img src={check} alt='check' />}</div>
        <div>{label}</div>
      </InputWrapper>
    </div>
  );
}

const InputWrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;

  cursor: pointer;

  .checker {
    background-color: #f3f4f6;
    width: 25px;
    height: 25px;
    border-radius: 3px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  > div {
    color: black;
    font-size: 16px;
  }
`;
