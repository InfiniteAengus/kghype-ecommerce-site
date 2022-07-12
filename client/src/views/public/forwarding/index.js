import styled from 'styled-components';
import { Container } from "components/container"
import { Heading } from "components/heading"
import Input from "components/input"
import Button from "components/button";
import ImageWrapper from 'components/image-wrapper';

import Cargo from 'assets/image/kghype_forwarding.png';

import { useState } from 'react';

const HeadingStyle = {
    textAlign: "left",
    fontWeight: "bold",
    fontSize: "20px",
    color: '#072A48'
}

const ResultHeadingStyle = {
    color: '#72727E',
    fontSize: '16px'
};

const FontStyle = {
  fontSize: '14px',
  color: '#72727E',
  textAlign: 'left',
};

export default function Forwarding() {
    const [searched, setSearched] = useState(false);

    const [weight, setWeight] = useState(0);
    const [total, setTotal] = useState(0);
    
    const onCalculateClick = (event) => {
        event.preventDefault();
        setSearched(true);

        const fiveHundreds = Math.max(0, weight - 500) / 500;
        setTotal(240 + (fiveHundreds * 80));
    }

    return (
        <Container>
            <ImageWrapper style={{ position: 'absolute', width: '80%', top: '150px', left: '150px', zIndex: '-1' }} src={Cargo} alt="cargo" />
            <ContentWrapper>
                <SearchForm>
                    <Heading style={HeadingStyle}>Select the warehouse to ship your forwarding items</Heading>

                    <div style={{ marginBottom: '12px' }}>
                        <label>
                            <Heading style={FontStyle}>
                                Warehouse
                            </Heading>
                        </label>
                        <SelectDropdown name="warehouses" id="warehouses">
                            <option value="h-1">HUIZHOU-1</option>
                        </SelectDropdown>
                    </div>

                    <WarehouseDetails>
                        <div>
                            <Heading style={ResultHeadingStyle}>Cell Phone</Heading>
                            <Heading style={{ color: '#072A48', }}>***** *****</Heading>
                        </div>
                        <div>
                            <Heading style={ResultHeadingStyle}>Telephone</Heading>
                            <Heading style={{ color: '#072A48', }}>***** *****</Heading>
                        </div>
                        <div>
                            <Heading style={ResultHeadingStyle}>Zip Code</Heading>
                            <Heading style={{ color: '#072A48', }}>***** *****</Heading>
                        </div>
                        <div>
                            <Heading style={ResultHeadingStyle}>Address</Heading>
                            <Heading style={{ color: '#072A48', }}>***** *****</Heading>
                        </div>
                    </WarehouseDetails>

                    <Divider />

                    <div style={{ textAlign: 'right' }}>
                        <Flex>
                            <Button style={{ background: 'rgba(124, 130, 155, 0.1)', color: 'black', textTransform: 'uppercase', fontSize: '16px', fontWeight: 700 }} text={"Cancel"} />
                            <Button onClick={onCalculateClick} style={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: 700 }} text={"Forward"} />
                        </Flex>
                    </div>
                </SearchForm>

                <SearchForm style={{ marginTop: '32px' }}>
                    <Heading style={HeadingStyle}>Fill in the forward express information</Heading>

                   <Flex>
                        <div>
                            <label>
                                <Heading style={FontStyle}>
                                    WAREHOUSE
                                </Heading>
                            </label>
                            <SelectDropdown name="warehouses" id="warehouses">
                                <option value="h-1">HUIZHOU-1</option>
                            </SelectDropdown>
                        </div>
                        <Input required label='Tracking Number' placeholder='Tracking Number' />
                    </Flex>

                    <Divider />

                    <div style={{ textAlign: 'right' }}>
                        <Flex>
                            <Button style={{ background: 'rgba(124, 130, 155, 0.1)', color: 'black', textTransform: 'uppercase', fontSize: '16px', fontWeight: 700 }} text={"Cancel"} />
                            <Button onClick={onCalculateClick} style={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: 700 }} text={"Forward"} />
                        </Flex>
                    </div>
                </SearchForm>
                
                <SearchForm style={{ marginTop: '32px' }}>
                    <Heading style={HeadingStyle}>Forward item information</Heading>

                   <Flex>
                        <Input required label='Item Name' placeholder='Item Name' />
                        <div>
                            <label>
                                <Heading style={FontStyle}>
                                    CATEGORY
                                </Heading>
                            </label>
                            <SelectDropdown name="categories" id="categories">
                                <optgroup label="Clothing">
                                    <option>Shirt</option>
                                    <option>Coat</option>
                                    <option>Dress</option>
                                    <option>Short</option>
                                    <option>Skirt</option>
                                    <option>Underwear</option>
                                    <option>Jeans</option>
                                    <option>Casual pants</option>
                                    <option>Shorts</option>
                                    <option>Socks</option>
                                    <option>Sweater</option>
                                    <option>Homewear</option>
                                    <option>Pet Clothing</option>
                                </optgroup>
                                <optgroup label="Bags">
                                    <option>Handbag</option>
                                    <option>Backpack</option>
                                    <option>Bags/Cases</option>
                                    <option>Business Bag</option>
                                    <option>Wallet</option>
                                    <option>Waist Bag</option>
                                    <option>Messenger Bag</option>
                                </optgroup>
                                <optgroup label="Shoes">
                                    <option>Sports Shoes</option>
                                    <option>Casual Shoes</option>
                                    <option>Plimsolls</option>
                                    <option>Business Shoes</option>
                                    <option>Boots</option>
                                </optgroup>
                                <optgroup label="Books">
                                    <option>Sciences Book</option>
                                    <option>Education Book</option>
                                    <option>Literature Book</option>
                                    <option>Financial Book</option>
                                    <option>Leisure Book</option>
                                    <option>Childrens Book</option>
                                    <option>Philosiphy Book</option>
                                    <option>NoteBook</option>
                                </optgroup>
                                <optgroup label="Decorative Accessories">
                                    <option>Belt</option>
                                    <option>Scarf</option>
                                    <option>Gloves</option>
                                    <option>Hat</option>
                                    <option>Jewelry</option>
                                    <option>Headdress</option>
                                    <option>Tabletop decoration</option>
                                    <option>Glasses</option>
                                    <option>Sewing</option>
                                    <option>DIY Material</option>
                                    <option>Beauty Tools</option>
                                    <option>Hair Tools</option>
                                </optgroup> 
                                <option>Pantyhose</option>
                                <option>Jeans</option>
                                <option>CD</option>
                                <option>Watch</option>
                                <option>Garage Kits</option>
                                <option>Cup</option>
                                <option>Fake flowers</option>
                                <option>Wig</option>
                                <option>Mobile cases</option>
                                <option>Cross stitch kits</option>
                                <option>Bathtowel</option>
                                <option>Storage Organizer</option>
                                <option>Bedding</option>
                                <option>Computer Peripherals</option>
                                <option>Curtain</option>
                                <option>Health Care Products</option>
                                <option>Furniture and tableware</option>
                                <option>Home lighting</option>
                                <option>Umbrella</option>
                                <option>Selfie-stick</option>
                                <option>Digital products</option>
                                <option>Household electrical appliances</option>
                                <option>Food and drug</option>
                                <option>Fitness equipment</option>
                                <option>Adult Products</option>
                                <option>Auto Accessories</option>
                                <option>Contact lenses</option>
                                <option>Daily chemical product</option>
                                <option>Other</option>
                            </SelectDropdown>
                        </div>
                        <Input label='Units' type='number' placeholder="Units" />
                        <Input required label='Unit Price' placeholder='Unit Price' />
                        <Input required label='Extra Info' placeholder='Extra Info' />
                    </Flex>

                    <Divider />

                    <div style={{ textAlign: 'right' }}>
                        <Flex>
                            <Button style={{ background: 'rgba(124, 130, 155, 0.1)', color: 'black', textTransform: 'uppercase', fontSize: '16px', fontWeight: 700 }} text={"Cancel"} />
                            <Button onClick={onCalculateClick} style={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: 700 }} text={"Forward"} />
                        </Flex>
                    </div>
                </SearchForm>
            </ContentWrapper>
        </Container>
    )
}


const ContentWrapper = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 450px;
    padding-top: 100px;
    z-index: 1000;
`

const SearchForm = styled.form`
    width: 50%;
    max-width: 800px;
    padding: 32px 64px;
    background-color: white;
    border: 1px solid rgb(218, 217, 217);

    @media (max-width: 768px) {
        padding: 8px 16px;
        width: 90%;
    }
`;

const Flex = styled.div`
    display: flex;
    margin-bottom: 10px;
    align-items: center;

    div {
        flex-grow: 1;
        margin-right: 12px;
    }

    div input {
        width: 100%;
    }

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const WarehouseDetails = styled.div`
    display: flex;
    margin-bottom: 10px;
    align-items: center;

    div {
        flex-grow: 1;
        margin-right: 12px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const Divider = styled.hr`
    color: rgb(131, 140, 140);
    margin-bottom: 30px;
`;

const SelectDropdown = styled.select`
    border:none;
    background-color:#EEF2F5;
    height:50px;
    width:100%;
    outline:none;
    text-indent:12px;
    font-family:Open Sans;
`;