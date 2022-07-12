import styled from 'styled-components';
import { SharedImage } from 'constants/image-constant';
import ImageWrapper from './image-wrapper';

const { SearchIconGray } = SharedImage;

export default function SearchBox({ defaultValue = "", onChange, loading, onClick, name = "search" }) {
    const onKeyDown = (event) => {
        if (event.key === 'Enter') {
            // Fake function to prevent undefined error
            onClick({ preventDefault: function () {} });
        }
    }

    return (
        <InputWrapper>
            <IconWrapper>
                <ImageWrapper src={SearchIconGray} alt="search-icon-gray" />
            </IconWrapper>
            <SearchInput defaultValue={defaultValue} onKeyDown={onKeyDown} onChange={onChange} name={name} type="text" placeholder='Buy Anything From Weidian,Taobao And 1688' />
            <SearchBtn onClick={onClick}>
                {loading && <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-loader" width="30" height="30" viewBox="0 0 24 24" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3a9 9 0 1 0 9 9"></path></svg>}
                {!loading && 'Search'}
            </SearchBtn>
        </InputWrapper>
    )
}

const InputWrapper = styled.div` 
    background-color:white;
    height:80px;
    width:100%;
    max-width:1200px;
    display:flex;
    flex-direction:row;
    align-items:center;
    border-radius:99999px;
`

const IconWrapper = styled.div`
    max-width:30px;
    transform:translateY(2px);
    margin-left:10px;
`

const SearchInput = styled.input`
    height:95%;
    border:none;
    outline:none;
    width:100%;
    border-radius:99999px;
    text-indent:10px;
    font-size:25px;
`

const SearchBtn = styled.button`
    height:80%;
    border-radius:9999px;
    width:100%;
    max-width:120px;
    border:none;
    background-color:#02BEE4;
    color:white;
    margin-right:10px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
`