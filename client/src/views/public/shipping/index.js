import styled from 'styled-components';
import { Container } from "components/container"
import { Heading } from "components/heading"
import { Text } from "components/text"
import Input from "components/input"
import Button from "components/button";
import { useState } from 'react';
import NumberBox from 'components/number-box';
import ImageWrapper from 'components/image-wrapper';

import Fedex from 'assets/image/kghype_fedex.png';
import UPS from 'assets/image/kghype_ups.png';
import EMS from 'assets/image/kghype_ems.png';


function Products({ next }) {
    return <>
        <Heading style={{ fontSize: '36px' }}>Product List</Heading>

        <div>
            <Heading style={{ textAlign: 'left' }}>Products</Heading>

            <div>
                <div>
                    1 item(s)
                </div>

                <hr />

                <Product>
                    <img style={{ width: '180px', borderRadius: '12px' }} src="https://cdn.shopify.com/s/files/1/0255/9429/8467/products/air-jordan-1-retro-high-white-university-blue-555088-134_1_gdxkyn_1800x1800.jpg?v=1615473630" />

                    <div>
                        <h3>New Balance "574"</h3>

                        <span>Size: 42</span>
                        
                        <br />

                        <span>Color: Black</span>
                    </div>
                    
                    <div>
                        <h3>Qty</h3>

                        <span>1</span>
                    </div>
                    
                    <div>
                        <h3>Weight</h3>

                        <span>850g</span>
                    </div>
                    
                    <div>
                        <h3>Actions</h3>

                        <Checkbox type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                        <span>Remove Tags</span>

                        <br />
                        
                        <Checkbox type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                        <span>Remove Packaging</span>
                    </div>
                    
                    <div>
                        <NumberBox />

                        <br />
                        
                        <Heading>$70</Heading>
                    </div>
                </Product>

                <hr />

                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px' }}>
                        <div>Subtotal</div>
                        <div>$70.00</div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px' }}>
                        <div>Tax</div>
                        <div>$2.40</div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px' }}>
                        <div>Packaging etc.</div>
                        <div>$2.40</div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px' }}>
                        <div style={{ fontWeight: 'bold' }}>Total</div>
                        <div style={{ fontWeight: 'bold' }}>$74.80</div>
                    </div>
                </div>

                <hr />

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    Packing Details

                    <div>
                        <Checkbox type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                        <span>Strech Film</span>
                        
                        <Checkbox type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                        <span>Moisture Bag</span>
                        
                        <br />

                        <Checkbox type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                        <span>Vaccuum Packing</span>
                        
                        <Checkbox type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                        <span>Simple Packing</span>
                    </div>
                </div>

                <textarea rows="8" placeholder="Please leave a note here if you have other requirements" style={{ width: '100%', marginTop: '24px', resize: 'none' }} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'end', }}>
                <Button style={{ borderRadius: '10px', fontSize: '18px', padding: '16px 8px', margin: '24px 0', textTransform: 'uppercase', fontWeight: 'bold' }} text="Next" onClick={next} />
            </div>
        </div>
    </>;
}

const ResultHeadingStyle = {
    color: '#72727E',
    fontSize: '16px'
};


function ShippingMethod({ next }) {
    const [selected, setSelected] = useState(null);

    return <>
        <Heading style={{ fontSize: '36px' }}>Shipping Method</Heading>

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Heading style={{ textAlign: 'left' }}>Select your shipping method</Heading>

            <ResultBox>
                <div>
                    <Heading style={ResultHeadingStyle}>Fedex</Heading>
                    <ImageWrapper style={{ width: '72px', marginTop: '12px' }} src={Fedex} alt="fedex" />
                </div>
                <div>
                    <Heading style={ResultHeadingStyle}>Shipping Fee</Heading>
                    <div style={{ display: 'flex', flexDirection: 'row', }}>
                        <Heading style={{ color: '#072A48', }}>{240} ¥ &nbsp;</Heading>
                        <Heading style={{ color: '#72727E', textDecoration: 'line-through', margin: 0 }}>{240 + 80} ¥</Heading>
                    </div>
                    <Button style={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: 700, padding: '10px', cursor: 'auto' }} text={"10% Off"} />
                </div>
                <div>
                    <Heading style={ResultHeadingStyle}>Transit Time</Heading>
                    <Heading style={{ color: '#072A48', }}>16-18 Days</Heading>
                </div>
                <div>
                    <Heading style={ResultHeadingStyle}>About Carrier</Heading>
                    <p style={{ color: '#072A48', }}>Long detailed text about carrier</p>
                    <Button onClick={() => setSelected("FED")} style={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: 700, padding: '10px' }} text={selected === "FED" ? "Selected" : "Select"} />
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
                        <Heading style={{ color: '#072A48', }}>{240} ¥ &nbsp;</Heading>
                        <Heading style={{ color: '#72727E', textDecoration: 'line-through', margin: 0 }}>{240 + 80} ¥</Heading>
                    </div>
                    <Button style={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: 700, padding: '10px', cursor: 'auto' }} text={"10% Off"} />
                </div>
                <div>
                    <Heading style={ResultHeadingStyle}>Transit Time</Heading>
                    <Heading style={{ color: '#072A48', }}>16-18 Days</Heading>
                </div>
                <div>
                    <Heading style={ResultHeadingStyle}>About Carrier</Heading>
                    <p style={{ color: '#072A48', }}>Long detailed text about carrier</p>
                    <Button onClick={() => setSelected("UPS")} style={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: 700, padding: '10px' }} text={selected === "UPS" ? "Selected" : "Select"} />
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
                        <Heading style={{ color: '#072A48', }}>{240} ¥ &nbsp;</Heading>
                        <Heading style={{ color: '#72727E', textDecoration: 'line-through', margin: 0 }}>{240 + 80} ¥</Heading>
                    </div>
                    <Button style={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: 700, padding: '10px', cursor: 'auto' }} text={"10% Off"} />
                </div>
                <div>
                    <Heading style={ResultHeadingStyle}>Transit Time</Heading>
                    <Heading style={{ color: '#072A48', }}>16-18 Days</Heading>
                </div>
                <div>
                    <Heading style={ResultHeadingStyle}>About Carrier</Heading>
                    <p style={{ color: '#072A48', }}>Long detailed text about carrier</p>
                    <Button onClick={() => setSelected("EMS")} style={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: 700, padding: '10px' }} text={selected === "EMS" ? "Selected" : "Select"} />
                </div>
            </ResultBox>

            <div style={{ display: 'flex', justifyContent: 'end', }}>
                <Button style={{ borderRadius: '10px', fontSize: '18px', padding: '16px 8px', margin: '24px 0', textTransform: 'uppercase', fontWeight: 'bold' }} text="Next" onClick={next} />
            </div>
        </div>
    </>;
}

const FontStyle = {
    fontSize: '14px',
    color: '#72727E',
    textAlign: 'left',
};


function ParcelDeclare({ next }) {
    return <>
        <Heading style={{ fontSize: '36px' }}>Parcel Declare</Heading>

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Heading style={{ textAlign: 'left' }}>You selected FEDEX as your shipment method</Heading>

            <ResultBox>
                <div>
                    <Heading style={ResultHeadingStyle}>Fedex</Heading>
                    <ImageWrapper style={{ width: '72px', marginTop: '12px' }} src={Fedex} alt="fedex" />
                </div>
                <div>
                    <Heading style={ResultHeadingStyle}>Shipping Fee</Heading>
                    <div style={{ display: 'flex', flexDirection: 'row', }}>
                        <Heading style={{ color: '#072A48', }}>{240} ¥ &nbsp;</Heading>
                        <Heading style={{ color: '#72727E', textDecoration: 'line-through', margin: 0 }}>{240 + 80} ¥</Heading>
                    </div>
                    <Button style={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: 700, padding: '10px', cursor: 'auto' }} text={"10% Off"} />
                </div>
                <div>
                    <Heading style={ResultHeadingStyle}>Transit Time</Heading>
                    <Heading style={{ color: '#072A48', }}>16-18 Days</Heading>
                </div>
                <div>
                    <Heading style={ResultHeadingStyle}>About Carrier</Heading>
                    <p style={{ color: '#072A48', }}>Long detailed text about carrier</p>
                </div>
            </ResultBox>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: '100%', maxWidth: '900px', marginTop: '32px' }}>
                <div>
                    <label>
                        <Heading style={FontStyle}>
                            Tax Payment Method
                        </Heading>
                    </label>
                    <SelectDropdown name="warehouses" id="warehouses">
                        <option value="h-1">Recipiant</option>
                    </SelectDropdown>
                </div>

                <Text style={{ marginTop: '16px' }}>When package arrives at destination, you need to pay taxes; allow the local authorities and co-operate with them.</Text>
        
                <div style={{ display: 'flex' }}>
                    <div style={{ width: '49%', marginRight: '2%' }}>
                        <label>
                            <Heading style={FontStyle}>
                                Declare Method
                            </Heading>
                        </label>
                        <SelectDropdown name="warehouses" id="warehouses">
                            <option value="h-1">Personalized Declare</option>
                        </SelectDropdown>
                    </div>
                    <div style={{ width: '49%' }}>
                        <label>
                            <Heading style={FontStyle}>
                                Declared Currency
                            </Heading>
                        </label>
                        <SelectDropdown name="warehouses" id="warehouses">
                            <option value="h-1">USD</option>
                        </SelectDropdown>
                    </div>
                </div>

                <WarningBox>
                    Logicstics disclaimer - reminder

                    When package are procceding customes clearance of the destination country, i If you recieved a tax notice please actively assist in customs clearance
                    When package are procceding customes clearance of the destination country, i If you recieved a tax notice please actively assist in customs clearance
                </WarningBox>
            
                <Heading style={{ fontSize: '36px' }}>Value Added Services</Heading>

                <span style={{ fontWeight: 'bold' }}>Parcel Declarement</span>
                        
                <Checkbox type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                <span>Custom Declare</span>

                <WarningBox>
                    Declarment Tips

                    When package are procceding customes clearance of the destination country, i If you recieved a tax notice please actively assist in customs clearance
                    When package are procceding customes clearance of the destination country, i If you recieved a tax notice please actively assist in customs clearance
                </WarningBox>

                <TableHeading>
                    <TableHeadingColumn>Platform Service Fee</TableHeadingColumn>
                    <TableHeadingColumn>Freight</TableHeadingColumn>
                    <TableHeadingColumn>Freight Discount</TableHeadingColumn>
                    <TableHeadingColumn>Packaging Fee</TableHeadingColumn>
                    <TableHeadingColumn>Vaccuum Packaging</TableHeadingColumn>
                    <TableHeadingColumn>Reinforced Box</TableHeadingColumn>
                    <TableHeadingColumn>Shockproof Packaging</TableHeadingColumn>
                    <TableHeadingColumn>Parcel Photo</TableHeadingColumn>
                    <TableHeadingColumn>Shoebox Removal</TableHeadingColumn>
                    <TableHeadingColumn>Total</TableHeadingColumn>
                </TableHeading>
                
                <TableRow>
                    <TableHeadingColumn>0.00Y</TableHeadingColumn>
                    <TableHeadingColumn>240.00Y</TableHeadingColumn>
                    <TableHeadingColumn>0.00Y</TableHeadingColumn>
                    <TableHeadingColumn>0.00Y</TableHeadingColumn>
                    <TableHeadingColumn>0.00Y</TableHeadingColumn>
                    <TableHeadingColumn>0.00Y</TableHeadingColumn>
                    <TableHeadingColumn>0.00Y</TableHeadingColumn>
                    <TableHeadingColumn>0.00Y</TableHeadingColumn>
                    <TableHeadingColumn>0.00Y</TableHeadingColumn>
                    <TableHeadingColumn>240.00Y</TableHeadingColumn>
                </TableRow>

                <div style={{ display: 'flex', justifyContent: 'end' }}>
                    <div>
                        <Checkbox type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                        <span>Packaging Fee (Fee 8Y)</span>
                        <br />
                        <Checkbox type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                        <span>Vaccuum Packaging (Fee 26Y)</span>
                        <br />
                        <Checkbox type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                        <span>Reinforcment for Box (Fee 20Y)</span>
                        <br />
                        <Checkbox type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                        <span>Shockproof Packaging (Fee 20Y)</span>
                        <br />
                        <Checkbox type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                        <span>Waterproof Packaging (Fee 10Y)</span>
                        <br />
                        <Checkbox type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                        <span>Palet Photo (Fee 0Y)</span>
                        <br />
                        <Checkbox type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                        <span>Shoebox Removal (Fee 0Y)</span>
                    </div>
                </div>

                <ConfirmBox>
                    <ConfirmDetails>
                        Estimated parcel Weight :  4367g
                        <br />
                        Parcel estimated Volume : 5338.67g
                    </ConfirmDetails>

                    <Button style={{ fontSize: '18px', fontWeight: 'bold', borderRadius: '10px' }} text="Submit Parcel" />
                </ConfirmBox>
            </div>
        </div>
    </>;
}

export default function Shipping() {
    const [stage, setStage] = useState(1);

    return (
        <Container>
            <StageStatus>
                <StageStatusNumber completed>1</StageStatusNumber>
                <StageStatusLine completed={stage >= 2}></StageStatusLine>
                <StageStatusNumber completed={stage >= 2}>2</StageStatusNumber>
                <StageStatusLine completed={stage >= 3}></StageStatusLine>
                <StageStatusNumber completed={stage >= 3}>3</StageStatusNumber>
                <StageStatusLine></StageStatusLine>
            </StageStatus>

            {stage === 1 && <Products next={() => setStage(stage + 1)} />}
            {stage === 2 && <ShippingMethod next={() => setStage(stage + 1)} />}
            {stage === 3 && <ParcelDeclare next={() => {}} />}
        </Container>
    );
}

const StageStatus = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StageStatusNumber = styled.div`
    height: 36px;
    width: 36px;
    background: ${(props) => props.completed ? '#072a48' : 'white'};
    border: ${(props) => !props.completed ? '2px solid #D1D5DB' : 'none'};
    color: ${(props) => props.completed ? 'white' : 'black'};;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
`;

const StageStatusLine = styled.div`
    width: 37px;
    height: 2px;

    background: ${(props) => props.completed ? '#072a48' : '#D1D5DB'};
    transition: all 0.3s;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Checkbox = styled.input`
    accent-color: #00FF29;
    border-radius: 4px;
`;

const ResultBox = styled.div`
    display: flex;
    width: 50%;
    max-width: 800px;
    background-color: white;
    padding: 32px 56px;
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
    outline:none;
    text-indent:12px;
    font-family:Open Sans;
`;

const WarningBox = styled.div`
    background: #F3EFD3;
    border-radius: 6px;
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 16px;

    color: #AF0404;
    padding: 8px;
    width: 98%;
    margin-top: 12px;
`;

const TableHeading = styled.div`
    background: #F1F1F1;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    padding: 6px;
    margin-top: 16px;
`;

const TableRow = styled.div`
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    padding: 6px;
    margin-top: 8px;
`;

const TableHeadingColumn = styled.div`
    padding: 4px;
    text-align: left;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
`;

const ConfirmBox = styled.div`
    background: #F7F7F7;
    border: 1px solid rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    display: flex;
    justify-content: space-between;
    padding: 16px;
    margin: 24px 0px;
`;

const ConfirmDetails = styled.div`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.5);
`;