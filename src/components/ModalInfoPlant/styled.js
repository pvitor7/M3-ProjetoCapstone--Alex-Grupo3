/* eslint-disable */

import styled from "styled-components";

export const ModalInfo = styled.div`
  @media (min-width: 320px) {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.4);
    width: 100vw;
    height: 102vh;
    right: 0;
    left: 0;
    bottom: 0;
    top: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .info--page {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: 90%;
      max-width: 400px;
      height: 80%;
      border-radius: 15px;
      background-color: white;
      font-family: "Nunito", sans-serif;
    }

    .div--image {
      height: 30%;
      width: 100%;
      display: flex;
      flex-direction: row-reverse;
    }

    .button--CloseModal {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #ffffff;
      border: none;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      box-shadow: 0px 3px 5px gray;
      color: #56b297;
      font-size: 30px;
      font-weight: bold;
      margin: 5px;
    }

    .info--image {
      width: 100%;
      border-radius: 15px 15px 0 0;
      object-fit: cover;
    }

    .div--descriptions {
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 10px;
      border: solid 2px #56b297;
      margin: 4px 2px;
      height: 67%;
      width: 90%;
      align-items: center;
    }

    label {
      display: flex;
      background-color: #56b297;
      width: 60%;
      height: 20px;
      border-radius: 3px;
      justify-content: center;
      color: white;
      font-size: 100%;
    }

    .div--name {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 15%;
      color: #b7d251;
      margin-top: 10px;
    }

    p{
        height: 10px;
        font-size: 18px;
        margin: 10px;
    }

    .p--info {
      height: 80%;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .div--scientificName {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 15%;
      width: 100%;
      color: #b7d251;
    }

    .div--information {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 80%;
      max-height: 55%;
      text-align: center;
      color: #b7d251;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .div--basicCare {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      color: #b7d251;
      margin-bottom: 10px;
      height: 15%;
    }
  }
`;
