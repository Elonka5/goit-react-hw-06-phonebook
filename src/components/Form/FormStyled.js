import styled from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;

  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 16px;
  }

  label:not(:last-child) {
    margin-bottom: 16px;
  }

  input {
    border: none;
    padding: 10px;
    border-radius: 15px;
    background: #e8e8e8;
    box-shadow: 20px 20px 30px #c5c5c5, -20px -20px 60px #ffffff;
    transition: 0.3s;
    width: 360px;
  }

  input:focus {
    outline-color: #e8e8e8;
    background: #e8e8e8;
    box-shadow: inset 20px 20px 60px #c5c5c5, inset -20px -20px 60px #ffffff;
    transition: 0.3s;
  }
`;
export const Buttons = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  cursor: pointer;
  width: 110px;
  height: 30px;
  background-image: linear-gradient(to top, #d8d9db 0%, #fff 80%, #fdfdfd 100%);
  border-radius: 30px;
  border: 1px solid #8f9092;
  transition: all 0.2s ease;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #606060;
  text-shadow: 0 1px #fff;

  button:hover {
    box-shadow: 0 4px 3px 1px #fcfcfc, 0 6px 8px #d6d7d9, 0 -4px 4px #cecfd1,
      0 -6px 4px #fefefe, inset 0 0 3px 3px #cecfd1;
  }

  button:active {
    box-shadow: 0 4px 3px 1px #fcfcfc, 0 6px 8px #d6d7d9, 0 -4px 4px #cecfd1,
      0 -6px 4px #fefefe, inset 0 0 5px 3px #999, inset 0 0 30px #aaa;
  }

  button:focus {
    box-shadow: 0 4px 3px 1px #fcfcfc, 0 6px 8px #d6d7d9, 0 -4px 4px #cecfd1,
      0 -6px 4px #fefefe, inset 0 0 5px 3px #999, inset 0 0 30px #aaa;
  }
`;
