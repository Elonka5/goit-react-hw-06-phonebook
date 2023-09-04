import styled from 'styled-components';

export const SectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  margin-top: 20px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: inset rgba(0, 0, 0, 0.25) 0px 14px 28px,
    inset rgba(0, 0, 0, 0.22) 0px 10px 10px;
  & h2 {
    font-size: 24px;
    margin: 15px 0;
    letter-spacing: 5px;
    text-shadow: 0px 11px 10px rgba(81, 67, 21, 0.8);
  }
`;
