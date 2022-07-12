import Slider from "react-slick";
import { settings } from 'configs/app-config';
import ImageWrapper from "components/image-wrapper";
import styled from 'styled-components';
import { SharedImage } from "constants/image-constant"


const { Product } = SharedImage;


export default function Carousel ({data}) {
    console.log("items", data);
    return(
        <SliderWrapper>
        <Slider style={{
            textAlign: "center"
        }} {...settings}>
            {
                data.map((item, key) => {
                    console.log(item);
                    return(
                        <SliderProductWrapper>
                            <ImageWrapper src={"https:"+item.url} alt="product" key={key} />
                        </SliderProductWrapper>
                    )
                })
            }
        </Slider>
    </SliderWrapper>
    )
}


const SliderWrapper = styled.div`
    padding-top:100px;
    width:100%;
    @media screen and (max-width:1740px) {
        width:1200px;
    }
    @media screen and (max-width:1260px) {
        width:720px;
    }
    @media screen and (max-width:770px) {
        width:320px;
    }
    @media screen and (max-width:370px) {
        width:250px;
    }
`

const SliderProductWrapper = styled.div`
    max-width:300px;
    height:auto;
`