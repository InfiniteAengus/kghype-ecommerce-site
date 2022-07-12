import styled from 'styled-components';
import { UpperCase } from 'utilities';
import { Heading } from './heading';
import { Text } from './text';

const fontStyle = {
    fontSize: "14px",
    color: "#72727E",
    textAlign: "left"
}

export default function Input({ label = null, style, placeholder = "", onChange, onFocus, onBlur, name, type = "text", value, id, append, required, ref }) {
    return (
      <div>
        <label>
          <Heading style={fontStyle}>
            {UpperCase(label)} {required && <Text style={{ display: 'inline-block', color: 'red' }}>*</Text>}
          </Heading>
        </label>
        <Flex>
          <InputWrapper ref={ref ?? null} style={style} id={id} placeholder={placeholder} type={type} onChange={onChange} onFocus={onFocus} onBlur={onBlur} name={name} value={value} />
          {append && <AppendText>{UpperCase(append)}</AppendText>}
        </Flex>
      </div>
    );
}

const Flex = styled.div`
    display: flex
`;

const AppendText = styled.div`
    background-color: #ecf0f1;
    height: 52px;
    font-family: Open Sans;
    display: flex;
    justify-content:center;
    align-items: center;
    font-weight: 600;
    font-size: 13px;
    padding: 0 6px;
`;

const InputWrapper = styled.input`
    border:none;
    background-color:#EEF2F5;
    height:50px;
    width:100%;
    outline:none;
    text-indent:12px;
    font-family:Open Sans;
    ${props => props.style}
`;

