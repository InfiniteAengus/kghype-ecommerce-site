import styled from 'styled-components';
import { UpperCase } from 'utilities';
import { Heading } from './heading';

const fontStyle = {
    fontSize:"14px",
    color:"#72727E",
    textAlign:"left"
}

export default function Input({ label=null, style, placeholder = "", onChange, name, type="text", value, id, ref }) {
    return (
        <div>
            <label>
                <Heading style={fontStyle}>
                    {UpperCase(label)}
                </Heading>
            </label>
            <InputWrapper style={style} id={id} placeholder={placeholder} type={type} onChange={onChange} name={name} value={value}/>
        </div>
    )
}

const InputWrapper = styled.input`
    border:none;
    background-color:#EEF2F5;
    height:50px;
    width:100%;
    outline:none;
    text-indent:10px;
    font-family:Open Sans;
    ${props => props.style}
`