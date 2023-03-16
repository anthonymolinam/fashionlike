import styled from "styled-components";

export const BoxContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
`;

export const FormContainer = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const MutedLink = styled.a`
    font-size: 13px;
    color: rgba(170,170, 170, 1);
    font-weight: 600;
    text-decoration: none;
`;

export const BoldLink = styled.a`
    font-size: 13px;
    color: rgb(239,169,174);
    font-weight: 600;
    text-decoration: none;
    margin: 0 4px;
    cursor: pointer;
`;

export const Input = styled.input`
    width: 100%;
    height: 42px;
    border: 3px solid rgba(190,190, 190, 1);
    border-radius: 5px;
    padding: 0px 10px;
    transition: all 200ms ease-in-out;
    font-size: 12px;
    font-weight: 600;

    &::placeholder {
        color: rgba(190, 190, 190, 1);
    }

    &:focus {
        outline: none;
        border: 3px solid rgb(239,169,174);
    }
`;

export const SubmitButton = styled.button`
    width: 100%;
    padding: 11px;
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    border: none;
    border-radius: 100px;
    cursor: pointer;
    transition: all, 240ms ease-in-out;
    background: rgb(239,169,174);
    background: linear-gradient(90deg, rgba(239,169,174,1) 20%, rgba(229,83,129,1) 100%);

    &:hover {
        filter: brightness(1.1);
    }
`;