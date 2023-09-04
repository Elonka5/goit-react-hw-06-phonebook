import { SectionStyled } from './SectionStyled';

export const Section = ({ title, children }) => {
  return (
    <SectionStyled>
      {title && <h2>{title}</h2>}
      {children}
    </SectionStyled>
  );
};
