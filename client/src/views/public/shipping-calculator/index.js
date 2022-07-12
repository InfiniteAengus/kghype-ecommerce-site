import styled from 'styled-components';
import { Container } from "components/container"
import { Heading } from "components/heading"
import Input from "components/input"
import Button from "components/button";
import { Countries, ISOAlpha2Countries } from 'constants/countries';
import ImageWrapper from 'components/image-wrapper';

import Calc from 'assets/image/kghype_calc.png';

import Fedex from 'assets/image/kghype_fedex.png';
import UPS from 'assets/image/kghype_ups.png';
import EMS from 'assets/image/kghype_ems.png';

import { useEffect, useRef, useState } from 'react';

const HeadingStyle = {
    textAlign: "center",
    fontWeight: 500,
    fontSize: "48px",
    textTransform: "uppercase",
    color: "rgb(102, 102, 102)"
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

function CountryDropdown({ searchText, isSearching, open, toggle, onChange }) {
    const [tab, setTab] = useState("ABC");
    const [country, setCountry] = useState("");
    const [options, setOptions] = useState([]);

    const setCurrentOptions = (tab) => {
        if (tab === "Search") {
            setOptions(Countries.filter(country => country.toLowerCase().includes(searchText.toLowerCase())));
            return;
        }

        const tabCountries = Countries.filter(country => {
            for (let char of tab) {
                if (country.toLowerCase().startsWith(char.toLowerCase())) {
                    return true;
                }
            }

            return false;
        });

        setOptions(tabCountries);
    }

    const onTabClick = (tab) => {
        setTab(tab);
        setCurrentOptions(tab)
    };

    const onCountryClick = (country) => {
        setCountry(country);
        onChange(country);
        toggle(false);
    }

    useEffect(() => {
        setCurrentOptions("ABC");
    }, []);

    useEffect(() => {
        if (searchText !== "") {
            onTabClick("Search");
        }
    }, [searchText]);

    return (
        <DropdownContainer open={open}>
            <DropdownTabs>
                <DropdownTab onClick={() => onTabClick("Search")} active={tab === "Search"}>Search</DropdownTab>
                <DropdownTab onClick={() => onTabClick("ABC")} active={tab === "ABC"}>ABC</DropdownTab>
                <DropdownTab onClick={() => onTabClick("DEF")} active={tab === "DEF"}>DEF</DropdownTab>
                <DropdownTab onClick={() => onTabClick("GHI")} active={tab === "GHI"}>GHI</DropdownTab>
                <DropdownTab onClick={() => onTabClick("JKL")} active={tab === "JKL"}>JKL</DropdownTab>
                <DropdownTab onClick={() => onTabClick("MNO")} active={tab === "MNO"}>MNO</DropdownTab>
                <DropdownTab onClick={() => onTabClick("PQR")} active={tab === "PQR"}>PQR</DropdownTab>
                <DropdownTab onClick={() => onTabClick("STU")} active={tab === "STU"}>STU</DropdownTab>
                <DropdownTab onClick={() => onTabClick("VWYZ")} active={tab === "VWYZ"}>VWYZ</DropdownTab>
            </DropdownTabs>

            <hr />

            <DropdownContent>
                {options.map(option => <DropdownOption active={country === option} onClick={() => onCountryClick(option)}>{option}</DropdownOption>)}
            </DropdownContent>
        </DropdownContainer>
    )
}

export default function ShippingCalculator() {
    const [searched, setSearched] = useState(false);

    const [isSearching, setIsSearching] = useState(false);
    const [destination, setDestination] = useState("");
    const [isCountryDropdownOpen, setCountryDropdownOpen] = useState(false);
    const toggle = (set) => setCountryDropdownOpen(set !== undefined ? set : !isCountryDropdownOpen);

    const [weight, setWeight] = useState(0);
    const [total, setTotal] = useState(0);
    
    const onCalculateClick = (event) => {
        event.preventDefault();
        setSearched(true);

        const fiveHundreds = Math.max(0, weight - 500) / 500;
        setTotal(240 + (fiveHundreds * 80));
    }

    const onCountryChange = (country) => {
        toggle(false);
        document.querySelector('#dest-input').value = country;
    }

    return (
        <Container>
            <Heading style={HeadingStyle}>Shipping Fee Calculator</Heading>

            <ImageWrapper style={{ position: 'absolute', width: '800px', top: '150px', left: '150px', zIndex: '-1' }} src={Calc} alt="calc" />
            <ContentWrapper>
                <SearchForm>
                    <Flex>
                        <div style={{ position: 'relative' }}>
                            <Input id={"dest-input"} required onChange={(event) => setDestination(event.target.value)} onFocus={() => toggle(true)} label='Destination' placeholder='Destination' />
                            <CountryDropdown searchText={destination} isSearching={true} open={isCountryDropdownOpen} toggle={toggle} onChange={onCountryChange} />
                        </div>
                        <Input onChange={(e) => setWeight(e.target.value)} required label='Weight' placeholder='Please enter weight' append="(g)" />
                        <Input required label='Warehouse' placeholder='Huizhou-1' />
                    </Flex>

                    <Flex>
                        <Input label='Length' type='number'  placeholder="Length" append="(cm)" />
                        <Input label='Width'  type='number' placeholder="Width" append="(cm)" />
                        <Input label='Height' type='number' placeholder="Height" append="(cm)" />
                        <div>
                            <label>
                                <Heading style={FontStyle}>
                                    MAIL RESTRICTION
                                </Heading>
                            </label>
                            <SelectDropdown name="mail-restriction" id="mail-restriction">
                                <option value="h-1">Brand</option>
                                <option value="h-1">International Brand</option>
                                <option value="h-1">International Brand Bag</option>
                                <option value="h-1">Glasses</option>
                                <option value="h-1">Sensitive Products</option>
                                <option value="h-1">Special Commodity</option>
                                <option value="h-1">Electronic Product</option>
                                <option value="h-1">Electric Appliances</option>
                                <option value="h-1">Batteried Items</option>
                                <option value="h-1">Battery (1 Piece)</option>
                                <option value="h-1">Power Bank (Portable Charger)</option>
                                <option value="h-1">Paste and cosmetic powders and liquids below 10ML</option>
                                <option value="h-1">Liquid/Powder</option>
                                <option value="h-1">Medicine</option>
                                <option value="h-1">Non-Meat Food</option>
                                <option value="h-1">Adult Products</option>
                                <option value="h-1">Meat</option>
                                <option value="h-1">Books/CD</option>
                                <option value="h-1">Customized Logistics</option>
                                <option value="h-1">Express Delivery Unavailable</option>
                                <option value="h-1">Restricted</option>
                                <option value="h-1">TBC</option>
                            </SelectDropdown>
                        </div>
                    </Flex>

                    <Divider />

                    <Flex>
                        {searched && <Heading>Total Price: {total} ¥ (YUAN)</Heading>}
                        <div style={{ textAlign: 'right' }}>
                            <Button onClick={onCalculateClick} style={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: 700 }} text={"Calculate"} />
                        </div>
                    </Flex>
                </SearchForm>

                {searched && <>
                    <ResultBox>
                        <div>
                            <Heading style={ResultHeadingStyle}>Fedex</Heading>
                            <ImageWrapper style={{ width: '72px', marginTop: '12px' }} src={Fedex} alt="fedex" />
                        </div>
                        <div>
                            <Heading style={ResultHeadingStyle}>Shipping Fee</Heading>
                            <div style={{ display: 'flex', flexDirection: 'row', }}>
                                <Heading style={{ color: '#072A48', }}>{total} ¥ &nbsp;</Heading>
                                <Heading style={{ color: '#72727E', textDecoration: 'line-through', margin: 0 }}>{total + 80} ¥</Heading>
                            </div>
                            <Button style={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: 700, padding: '10px', cursor: 'auto' }} text={"10% Off"} />
                        </div>
                        <div>
                            <Heading style={ResultHeadingStyle}>Transit Time</Heading>
                            <Heading style={{ color: '#072A48', }}>16-18 Days</Heading>
                        </div>
                        <div>
                            <Heading style={ResultHeadingStyle}>Warehouse</Heading>
                            <Heading style={{ color: '#072A48', }}>Huizhoui-1</Heading>
                            <Button style={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: 700, padding: '10px' }} text={"View Info"} />
                        </div>
                    </ResultBox>
                    
                    <ResultBox>
                        <div>
                            <Heading style={ResultHeadingStyle}>UPS</Heading>
                            <ImageWrapper style={{ width: '72px', marginTop: '12px' }} src={UPS} alt="ups" />
                        </div>
                        <div>
                            <Heading style={ResultHeadingStyle}>Shipping Fee</Heading>
                            <div style={{ display: 'flex', flexDirection: 'row', }}>
                                <Heading style={{ color: '#072A48', }}>{total} ¥ &nbsp;</Heading>
                                <Heading style={{ color: '#72727E', textDecoration: 'line-through', margin: 0 }}>{total + 80} ¥</Heading>
                            </div>
                            <Button style={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: 700, padding: '10px', cursor: 'auto' }} text={"10% Off"} />
                        </div>
                        <div>
                            <Heading style={ResultHeadingStyle}>Transit Time</Heading>
                            <Heading style={{ color: '#072A48', }}>16-18 Days</Heading>
                        </div>
                        <div>
                            <Heading style={ResultHeadingStyle}>Warehouse</Heading>
                            <Heading style={{ color: '#072A48', }}>Huizhoui-1</Heading>
                            <Button style={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: 700, padding: '10px' }} text={"View Info"} />
                        </div>
                    </ResultBox>
                    
                    <ResultBox>
                        <div>
                            <Heading style={ResultHeadingStyle}>EMS</Heading>
                            <ImageWrapper style={{ width: '72px', marginTop: '12px' }} src={EMS} alt="ems" />
                        </div>
                        <div>
                            <Heading style={ResultHeadingStyle}>Shipping Fee</Heading>
                            <div style={{ display: 'flex', flexDirection: 'row', }}>
                                <Heading style={{ color: '#072A48', }}>{total} ¥ &nbsp;</Heading>
                                <Heading style={{ color: '#72727E', textDecoration: 'line-through', margin: 0 }}>{total + 80} ¥</Heading>
                            </div>
                            <Button style={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: 700, padding: '10px', cursor: 'auto' }} text={"10% Off"} />
                        </div>
                        <div>
                            <Heading style={ResultHeadingStyle}>Transit Time</Heading>
                            <Heading style={{ color: '#072A48', }}>16-18 Days</Heading>
                        </div>
                        <div>
                            <Heading style={ResultHeadingStyle}>Warehouse</Heading>
                            <Heading style={{ color: '#072A48', }}>Huizhoui-1</Heading>
                            <Button style={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: 700, padding: '10px' }} text={"View Info"} />
                        </div>
                    </ResultBox>
                </>}
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

    @media (max-width: 768px) {
        padding-bottom: 100px;
    }
`

const SearchForm = styled.form`
    width: 50%;
    max-width: 800px;
    padding: 32px 64px;
    background-color: white;
    border: 1px solid rgb(218, 217, 217);
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

const Divider = styled.hr`
    color: rgb(131, 140, 140);
    margin-top: 60px;
    margin-bottom: 30px;
`;

const ResultBox = styled.div`
    display: flex;
    width: 50%;
    max-width: 800px;
    background-color: white;
    padding: 32px 64px;
    border: 1px solid rgb(218, 217, 217);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    margin-top: 32px;

    div {
        flex-grow: 1;
        margin-right: 12px;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
`;

const SelectDropdown = styled.select`
    border:none;
    background-color:#EEF2F5;
    height:50px;
    width:100%;
    flex-grow: 1;
    outline:none;
    text-indent:12px;
    font-family:Open Sans;
`;

const DropdownContainer = styled.div`
    position: absolute;
    top: 100px;
    background-color: white;
    min-width: 100px;
    border: 1px solid #d3d3d3;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    display: ${props => (props.open ? 'block' : 'none')};

    hr {
        margin: 0;
        border-width: 2px;
    }
`;

const DropdownTabs = styled.div`
    display: flex;
    margin-top: 12px;
    padding: 0 12px;
    gap: 12px;
    @media (max-width: 900px) {
        flex-direction: column;
    }
`;

const DropdownTab = styled.div`
    font-size: 16px;
    font-weight: 700;
    flex-grow: revert !important;
    cursor: pointer;
    color: ${(props) => (props.active ? 'green' : 'auto')};
    border-bottom: ${(props) => (props.active ? '2px solid green' : 'none')};
    padding-bottom: 12px;
    transition: color 0.3s;

    &:hover {
        color: green;
    }
`;

const DropdownContent = styled.div`
    max-height: 300px;
    overflow-y: scroll;
    overflow-x: none;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    min-width: 600px;
    gap: 10px;
    grid-auto-columns: 100px;
    grid-auto-rows: 50px;
    margin-right: 0 !important;
    padding: 10px;

    @media (max-width: 900px) {
        min-width: 300px !important;
        grid-template-columns: repeat(1, 1fr);
    }
`;

const DropdownOption = styled.div`
    cursor: pointer;
    color: ${(props) => (props.active ? 'green' : 'auto')};

    &:hover {
        color: green;
    }
`;
