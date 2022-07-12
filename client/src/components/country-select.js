import styled from "styled-components";

export default function CountrySelect({
  label = null,
  onChange,
  countryList,
  name,
  id,
}) {
  return (
    <Wrapper>
      <label>
        <div>{label}</div>
      </label>
      <SelectWrapper name={name} id={id} onChange={onChange}>
        {countryList.map((ct) => (
          <option key={ct} value={ct}>{ct}</option>
        ))}
      </SelectWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  label {
    display: flex;
    justify-content: space-between;
    font-size: 16px;

    div {
      font-weight: bold;
      color: black;
    }

    a {
      text-decoration: none;
      color: #072a48;
      font-weight: bold;
    }
  }

  .input-container {
    display: flex;
    gap: 10px;
  }
`;

const SelectWrapper = styled.select`
  padding: 20px 40px;
  background-color: #f3f4f6;
  border: none;
  outline: none;
  border-radius: 8px;

  width: 100%;
  flex-grow: 1;
`;
