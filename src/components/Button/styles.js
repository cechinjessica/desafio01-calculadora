import styled from 'styled-components';

export const ButtonContainer = styled.button`
    background: #444;
    color: white;
    border: none;
    font-size: 1.5rem;
    padding: 15px;
    flex: 1;
    margin: 5px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);

    &:hover {
        background: #666;
    }

    &:active {
        transform: scale(0.95);
    }

`