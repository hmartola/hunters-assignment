import styled from 'styled-components'

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

  &:hover {
    opacity: 0.5;
    transition: .5s ease;
  }
`;

export const PopupImage = styled.img`
  width: 60%;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
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

export const Background = styled.div`
  position: fixed;
  background: #00000050;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
`;

export const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40%;
  background: white; 
  border-radius: 4px;
  padding: 10px;
  border: 1px solid #999;
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

export const Description = styled.p`
  color: #191919;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0.65px;
  font-family: "Montserrat";

`;