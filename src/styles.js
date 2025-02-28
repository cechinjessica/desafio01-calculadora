import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color:rgb(237, 230, 223); 
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    background-color:rgb(220, 220, 220); /* Fundo levemente acinzentado */
    width: 40%;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.2); /* Sombra mais suave */
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Calculator = styled.div`
   // background-color: #ffffff;
    width: 100%;
   
`;
  
export const Row = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;

`;
