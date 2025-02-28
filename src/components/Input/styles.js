import styled from 'styled-components';

export const InputContainer = styled.div`
    height: 80px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 10px;
    border-radius: 8px;
    box-shadow: inset 3px 3px 8px rgba(0, 0, 0, 0.1), 
                inset -3px -3px 8px rgba(255, 255, 255, 0.7);
  
    input {
        width: 100%;
        height: 100%;
        border: none;
        padding: 0 15px;
        font-size: 32px;
        font-family: 'Arial', sans-serif;
        color: #333;
        text-align: right;
        background: transparent;
        outline: none;
    }
`;
