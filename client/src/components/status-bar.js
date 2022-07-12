import { useEffect } from 'react';
import styled from 'styled-components';
import { Container } from './container';
import { Text } from './status-text';
import { useState } from 'react';

const ContainerStyle = {
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    padding:"5px 20px"
}

function padZero(value) {
  return `${value <= 9 ? '0' : ''}${value}`;
}

function beijingDate(date) {
    const offset = date.getTimezoneOffset()

    if (offset !== -480) {
        const diff = -480 - offset

        date.setMinutes(date.getMinutes() - diff)
    }

    const year = padZero(date.getFullYear())
    const month = padZero(date.getMonth() + 1)
    const day = padZero(date.getDate())
    const weekday = date.getDay()
    const hour = padZero(date.getHours())
    const minute = padZero(date.getMinutes())
    const second = padZero(date.getSeconds())
    const millisecond = date.getMilliseconds()

    return {
        year,
        month,
        day,
        hour,
        minute,
        second,
        millisecond,
        weekday,
    }
}

export default function StatusBar() {
    const [dateString, setDateString] = useState();

    useEffect(() => {
        const interval = setInterval(() => {
            const date = beijingDate(new Date());
            setDateString(`${date.year}/${date.month}/${date.day} ${date.hour}:${date.minute}:${date.second}`);
        }, 1000);

        return () => clearTimeout(interval);
    }, []);

    return(
        <Wrapper>
            <Container style={ContainerStyle}>
                <Text>Beijing Time &mdash; {dateString}</Text>
                <Text>English / USD</Text>
            </Container>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    background-color: #072A48;
    color:white;
    font-size:12px;
`