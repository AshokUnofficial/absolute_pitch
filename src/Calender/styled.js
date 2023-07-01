import styled from "styled-components";

export const Wrapper = styled.div`
width:100%;
height:100vh;

`;
export const CalenderHead = styled.div`
width:100%;
display:flex;
justify-content:space-around;
align-item:center;
font-size:24px;
`;
export const SavenColGrid = styled.div`
width:100%;
display:grid;
grid-template-columns: repeat(7, lfr);

height:27px;
`;
export const HeadDay = styled.span`
text-align:center;
background:darkkhaki;
font-size:1.2rem;
`;
export const CalenderBody = styled.div`
height:calc(100% - 27px);
display:grid;
grid-template-columns: repeat(7, 1fr);
grid-template-rows: repeat(5, 1fr);
`;
export const StyledDay = styled.span`
border: 1px solid;
`;