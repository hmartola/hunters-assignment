import styled from 'styled-components';

export const HeroContainer = styled.div`
  max-width: 600px;
  border-style: solid;
  border-color: #001147;
  padding: 5px 30px;
  margin: 0px 2px 0px 2px;;

  &:hover {
    border-width: thick;
  }
`;

export const Container = styled.section`
  width: 100%;
`;

export const HeroImage = styled.img`
  width: 100%;
  heigth: auto;
  display: block;

  &:hover {
    opacity: 0.5;
    transition: .5s ease;
    cursor: pointer;
  }
`;

export const Overlay = styled.div`
  background-color: black;
  color: white;
`;

export const HiddenText = styled.span`
  position: relative;  
  margin-top: 50vh;
  margin-left: 40%;
`;

export const Button = styled.button`
  background-color: red;
  color: white;
  border-radius: 5px;
  float: right;
  display: inline;
  font-size: 24px;

  &:hover {
    font-weight: bold;
  }
`;

export const HeroTableHeader = styled.th`
  padding: 10px;
  font-size: 18px;
`;

export const HeroTableData = styled.td`
  padding: 10px;
`;

export const HeroTable = styled.table`
  table-layout: fixed;
  width: 100%;
  text-align: center;
  padding: 20px 0px 20px 0px;
  border-style: solid none solid none;
  border-color: #001147;
  font-family: "Montserrat";
`;

export const AttributeHeader = styled.h3`
  font-family: "Montserrat";
  display: flex;
  align-items: center;
  justify-content: space-between;

`;

export const AttributeSpan = styled.span`
  background-color: #001147;
  border-style: solid;
  border-radius: 10px;
  color: white;
  padding: 10px;
`;

export const AttributeSpanHP = styled.span`
  background-color: red;
  border-style: solid;
  border-radius: 10px;
  color: white;
  padding: 10px;
`; 

export const Description = styled.p`
  color: #191919;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0.65px;
  font-family: "Montserrat";

`;