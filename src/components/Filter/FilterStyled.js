import styled from 'styled-components';

export const FilterStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  input {
    border: none;
    padding: 10px;
    border-radius: 15px;
    background: #e8e8e8;
    box-shadow: 20px 20px 30px #c5c5c5, -20px -20px 60px #ffffff;
    transition: 0.3s;
  }

  input:focus {
    outline-color: #e8e8e8;
    background: #e8e8e8;
    box-shadow: inset 20px 20px 60px #c5c5c5, inset -20px -20px 60px #ffffff;
    transition: 0.3s;
  }

  label {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 8px;
  }
`;
