import styled from 'styled-components';
import { useState } from 'react';

export default function NumberBox ({ onChange, max, min = 1, defaultValue = 1 }) {
    const [number, setNumber] = useState(defaultValue);

    const inc = () => {
        if (number === max) {
            return;
        }

        setNumber(number + 1);
        onChange(number + 1)
    };

    const dec = () => {
        if (number === min) {
            return;
        }

        setNumber(number - 1);
        onChange(number - 1)
    }

    return(
        <Wrapper>
            <SymbolWrapper disabled={number === min} onClick={dec}>
                -
            </SymbolWrapper>
            <NumberWrapper>
                {number}
            </NumberWrapper>
            <SymbolWrapper disabled={number === max} onClick={inc}>
                +
            </SymbolWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    max-width:150px;
    flex:1;
    height:fit-content;
    border:1px solid #BBBCC0;
    display:flex;
    flex-direction:row;
`

const SymbolWrapper = styled.div`
    font-size: 18px;
    font-weight: 500;
    padding: 10px 15px;
    width: 16px;
    cursor: pointer;
    background: ${(props) => !props.disabled ? 'white' : 'none'};
    user-select: none;
    transition: all 0.3s;

    &:hover {
        background: whitesmoke;
    }
`

const NumberWrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    width:100px;
    border-left:1px solid #BBBCC0;
    border-right:1px solid #BBBCC0;
`