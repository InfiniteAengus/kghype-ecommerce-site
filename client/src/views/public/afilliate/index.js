import styled from 'styled-components';
import ImageWrapper from 'components/image-wrapper';

import HeroStats from 'assets/image/kghype_afilliate.png';

import Feature1Image from 'assets/image/kghype_afilliate_f1.png';
import Feature2Image from 'assets/image/kghype_afilliate_f2.png';
import Feature3Image from 'assets/image/kghype_afilliate_f3.png';

import Info1Image from 'assets/image/kghype_afilliate_i1.png';
import Info1Stats from 'assets/image/kghype_afilliate_i1s.png';

import Info2Image from 'assets/image/kghype_afilliate_i2.png';
import Info2Stats from 'assets/image/kghype_afilliate_i2s.png';


export default function Affiliate() {
    return (
        <div style={{ display: 'block', width: '100%' }}>
            <HeroWrapper>
                <HeroContainer>
                    <HeroText>
                        <HeroHeaderText>JOIN OUR ADVANCED<br />AFFILIATE PROGRAM</HeroHeaderText>
                        <HeroHeaderSubtext>Who are KGHYPE Affiliates?<br/> Individuals and business customers who<br />promote through the KGHYPE Affiliates<br /> marketing system.</HeroHeaderSubtext>

                        <HeroButtons>
                            <HeroPrimaryButton>JOIN NOW</HeroPrimaryButton>
                            <HeroSecondaryButton>Explore</HeroSecondaryButton>
                        </HeroButtons>
                    </HeroText>
                    <HeroImage>
                        <ImageWrapper src={HeroStats} alt="hero-stats" />
                    </HeroImage>
                </HeroContainer>
            </HeroWrapper>

            <FeaturesWrapper>
                <FeaturesHeadText>Our Affiliate Program</FeaturesHeadText>
                <FeaturesHeader>Features we offer to our affiliates</FeaturesHeader>

                <Features>
                    <Feature>
                        <FeatureImage>
                            <ImageWrapper src={Feature1Image} />
                        </FeatureImage>
                        <FeatureTitle>Good Payouts</FeatureTitle>
                        <FeatureDesc>Learning curve network effects <br /> return on investment.</FeatureDesc>
                        <FeatureButton>Explore</FeatureButton>
                    </Feature>
                    <Feature>
                        <FeatureImage>
                            <ImageWrapper src={Feature2Image} />
                        </FeatureImage>
                        <FeatureTitle>Instant Withdrawals</FeatureTitle>
                        <FeatureDesc>Learning curve network effects <br /> return on investment.</FeatureDesc>
                        <FeatureButton>Explore</FeatureButton>
                    </Feature>
                    <Feature>
                        <FeatureImage>
                            <ImageWrapper src={Feature3Image} />
                        </FeatureImage>
                        <FeatureTitle>Advanced Statistics</FeatureTitle>
                        <FeatureDesc>Learning curve network effects <br /> return on investment.</FeatureDesc>
                        <FeatureButton>Explore</FeatureButton>
                    </Feature>
                </Features>
            </FeaturesWrapper>

            <InfosWrapper>
                <InfoWrapper>
                    <InfoImage>
                        <ImageWrapper src={Info1Image} />
                        <InfoStatsImage src={Info1Stats} />
                    </InfoImage>

                    <InfoText>
                        <InfoHeader>
                            We connect our customers<br /> with the best, and help them<br /> keep up-and stay open.
                        </InfoHeader>

                        <InfoList>
                            <InfoListItem>Free Participation to Our Affiliate Alliance</InfoListItem>
                            <InfoListItem>Compensation Guarantee</InfoListItem>
                            <InfoListItem>Zero Service Fee Promise</InfoListItem>
                        </InfoList>

                        <FeatureButton>Start Now</FeatureButton>
                    </InfoText>
                </InfoWrapper>
                
                <InfoWrapper>
                    <InfoText>
                        <InfoHeader>We connect our customers with the best,<br /> and help them keep up-and stay open.</InfoHeader>

                        <InfoListBox>
                            1. Feature Details
                        </InfoListBox>
                        <InfoListBox>
                            2. Feature Details
                        </InfoListBox>
                        <InfoListBox>
                            3. Feature Details
                        </InfoListBox>
                    </InfoText>

                    <InfoImage>
                        <ImageWrapper src={Info2Image} />
                        <InfoStatsImage src={Info2Stats} />
                    </InfoImage>
                </InfoWrapper>
            </InfosWrapper>
        </div>
    )
}

const HeroWrapper = styled.div`
    width: 100%;
    height: 872px;
    background: #0A2640;
    display: flex;
    justify-content: center;
`;

const HeroContainer = styled.div`
    width: 100%;
    max-width: 75%;
    display: flex;
    justify-content: space-between;
    text-align: left;
    padding-top: 25vh;
`;

const HeroText = styled.div`
    color: white;
`;

const HeroHeaderText = styled.div`
    font-weight: 400;
    font-size: 58px;
    color: #FFFFFF;
    margin-bottom: 16px;
`;

const HeroHeaderSubtext = styled.div`
    font-family: 'Open Sans';
    font-weight: 400;
    font-size: 20px;
    color: #F1F1F1;
    margin-bottom: 32px;
`;

const HeroButtons = styled.div`
    display: flex;
`;

const HeroPrimaryButton = styled.button`
    background: #65E4A3;
    border: 2px solid #69E6A6;
    border-radius: 36px;
    padding: 12px 48px;
    color: #0A2640;
    cursor: pointer;
    font-family: 'Open Sans';
    font-weight: 700;
    font-size: 20px;
    margin-right: 24px;
`;

const HeroSecondaryButton = styled.button`
    border: 2px solid white;
    border-radius: 36px;
    padding: 12px 48px;
    color: white;
    cursor: pointer;
    font-family: 'Open Sans';
    font-weight: 700;
    font-size: 20px;
    background: #0A2640;
`;

const HeroImage = styled.div``;

const FeaturesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5rem 0;
`;

const FeaturesHeadText = styled.div`
    font-family: 'Open Sans';
    font-weight: 400;
    font-size: 16px;
    color: #777777;
`;

const FeaturesHeader = styled.div`
    font-weight: 400;
    font-size: 48px;
    color: #000000;
    margin-top: 24px;
`;

const Features = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 3rem;
`;

const Feature = styled.div`
    margin: 1rem 3rem;
`;

const FeatureImage = styled.div``;

const FeatureTitle = styled.div`
    font-family: 'Open Sans';
    font-weight: 400;
    font-size: 24px;
    color: #000000;
    margin: 12px 0;
`;

const FeatureDesc = styled.div`
    font-family: 'Open Sans';
    font-size: 20px;
    color: #777777;
    margin: 12px 0;
`;

const FeatureButton = styled.button`
    border-radius: 16px;
    padding: 16px 36px;
    margin-top: 6px;
    background: #0A2640;
    color: white;
    border: none;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
`;

const InfosWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const InfoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 75%;
    margin: 5rem 0;
`;

const InfoImage = styled.div`
    position: relative;
`;

const InfoStatsImage = styled.img`
    position: absolute;
    right: 50px;
    width: 50%;
    bottom: -6rem;
`;

const InfoText = styled.div`
    padding: 3rem;
`;

const InfoHeader = styled.div`
    font-weight: 400;
    font-size: 36px;
    color: #000000;
`;

const InfoList = styled.ul`
    padding: 0;
    list-style-type: none;
`;

const InfoListItem = styled.li`
    font-family: 'Open Sans';
    font-weight: 400;
    font-size: 20px;
    color: #000000;
    margin-top: 12px;
`;

const InfoListBox = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    margin-top: 2rem;
    padding: 1.5rem;
`;
