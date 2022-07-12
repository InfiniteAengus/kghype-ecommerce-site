import styled from 'styled-components';
import { Heading } from "components/heading";
import { SharedImage } from "constants/image-constant"
import ImageWrapper from 'components/image-wrapper';
import { NotifySuccess } from 'utilities'

import Image from 'assets/image/kghype_afilliate_p.png';
const { Profile } = SharedImage;

const HeadingStyle = {
    textAlign: "left"
}

export default function AfilliatePage() {
    return (
        <Container>
            <ImageWrapper src={Image} />
            <Heading style={HeadingStyle}>Earn Money with Referring</Heading>

            <AfilliateCode onClick={() => NotifySuccess("Copied!")}>MIR20220320</AfilliateCode>

            <AfilliateDetails>
                <ImageWrapper style={{ marginRight: '20px' }} src={Profile} alt="profile" />

                <div style={{ marginLeft: '4rem' }}>
                    <UserName>Username 123</UserName>
                    <AfilliateBadge>Bronze Afilliate</AfilliateBadge>
                </div>

                <div style={{ marginLeft: '4rem' }}>
                    <Heading>Available Bonus</Heading>
                    <Heading style={{ color: '#607E48' }}>CNY 221.51</Heading>

                    <Heading>Last Month Bonus</Heading>
                    <Heading style={{ color: '#903E3E' }}>CNY 131.51</Heading>
                </div>
                
                <div style={{ marginLeft: '4rem' }}>
                    <Heading style={{ color: '#1966A9', fontWeight: 400 }}>View Transactions</Heading>
                    <Heading style={{ color: '#1966A9', fontWeight: 400 }}>Withdraw Bonus</Heading>

                    <Heading>Current Month Estimate</Heading>
                    <Heading style={{ color: '#607E48' }}>CNY 523.51</Heading>
                </div>
            </AfilliateDetails>

            <InviteWrapper>
                <Heading>Invite a friend</Heading>

                <InviteFriend>
                    <InviteFriendDetails>
                        <ImageWrapper style={{ marginRight: '12px', width: '48px', height: '48px' }} src={Profile} alt="profile" />

                        <div style={{ display: 'block' }}>
                            <InviteFriendName>Tongukan Lee</InviteFriendName>
                            <InviteFriendPlatform>Facebook</InviteFriendPlatform>
                        </div>
                    </InviteFriendDetails>
                    <InviteFriendStatus status={"Joined"}>Joined</InviteFriendStatus>
                </InviteFriend>
                <InviteFriend>
                    <InviteFriendDetails>
                        <ImageWrapper style={{ marginRight: '12px', width: '48px', height: '48px' }} src={Profile} alt="profile" />

                        <div style={{ display: 'block' }}>
                            <InviteFriendName>Tongukan Lee</InviteFriendName>
                            <InviteFriendPlatform>Facebook</InviteFriendPlatform>
                        </div>
                    </InviteFriendDetails>
                    <InviteFriendStatus status={"Joined"}>Joined</InviteFriendStatus>
                </InviteFriend>
                <InviteFriend>
                    <InviteFriendDetails>
                        <ImageWrapper style={{ marginRight: '12px', width: '48px', height: '48px' }} src={Profile} alt="profile" />

                        <div style={{ display: 'block' }}>
                            <InviteFriendName>Lee Chan</InviteFriendName>
                            <InviteFriendPlatform>Nike</InviteFriendPlatform>
                        </div>
                    </InviteFriendDetails>
                    <InviteFriendStatus status={"Pending"}>Pending</InviteFriendStatus>
                </InviteFriend>
                <InviteFriend>
                    <InviteFriendDetails>
                        <ImageWrapper style={{ marginRight: '12px', width: '48px', height: '48px' }} src={Profile} alt="profile" />

                        <div style={{ display: 'block' }}>
                            <InviteFriendName>Fazur Nalim</InviteFriendName>
                            <InviteFriendPlatform>Twitter</InviteFriendPlatform>
                        </div>
                    </InviteFriendDetails>
                    <InviteFriendStatus status={"Joined"}>Joined</InviteFriendStatus>
                </InviteFriend>
            </InviteWrapper>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const AfilliateCode = styled.div`
    background: #072A48;
    border-radius: 20px;
    padding: 1rem 3rem;
    margin: 2rem 0;
    color: white;
    font-weight: bold;
    cursor: pointer;
`;

const AfilliateDetails = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 6rem;
    background: #FAFAFA;
    border: 1px solid rgba(7, 42, 72, 0.15);
    border-radius: 12px;
`;

const UserName = styled.div`
    font-size: 32px;
    font-weight: 500;
    color: #000;
`;

const AfilliateBadge = styled.div`
    background: #CD7F32;
    border-radius: 20px;
    color: white;
    padding: 6px 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 14px;
    margin-top: 12px;
`;

const InviteWrapper = styled.div`
    padding: 2rem;
    border-radius: 16px;
    border: 1px solid rgba(0, 0, 0, 0.25);
    margin: 5rem 0;
    width: 100%;
`;

const InviteFriend = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 16px;
`;

const InviteFriendDetails = styled.div`
    display: flex;
    width: 100%;
`;

const InviteFriendName = styled.div`
    color: #051532;
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 4px;
`;

const InviteFriendPlatform = styled.span`
    font-size: 14px;
    font-weight: light;
`;

const InviteFriendStatus = styled.div`
    padding: 8px 16px;
    background: ${(props) => props.status === "Joined" ? "#072A48" : "rgba(241, 0, 134, 0.05)"};
    color: ${(props) => props.status === "Joined" ? "white" : "rgba(5, 21, 50, 0.5)"};
    border-radius: 6px;
    font-size: 16px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
`;
