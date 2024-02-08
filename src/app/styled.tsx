import styled from 'styled-components';
import { NoButtonProps } from './types';

export const Container = styled.div`
  background: url(/background.webp) no-repeat right center fixed;
  height: 100vh;
  overflow: hidden;
  position: relative;
  text-align: center;
`;

export const Overlay = styled.div`
  background-color: rgba(255, 255, 255, 0.25);
  height: 100%;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const Heading = styled.h1`
  color: #ff2542;
  font-family: 'Pacifico', cursive;
  font-size: 95px;
  margin-top: 40px;
  text-align: center;
  line-height: 1;

  @media (max-width: 768px) {
    // tablet view
    font-size: 60px;
  }

  @media (max-width: 480px) {
    // mobile view
    font-size: 40px;
  }
`;

export const ButtonWrapper = styled.div`
  align-items: center;
  background: red;
  display: flex;
  height: 150px;
  justify-content: center;
  gap: 20px;
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-family: 'Pacifico', cursive;
  font-size: 16px;
  height: 42px;
  width: 120px;
`;

export const YesButton = styled(Button)`
  background: #66bb6a;
`;

export const NoButton = styled(Button)<NoButtonProps>`
  background: #ff5163;

  left: ${(props) => `${props.$left ?? 0}px`};
  top: ${(props) => `${props.$top ?? 0}px`};
  position: ${(props) => props.$position ?? 'relative'};

  transition: top 0.5s, left 0.5s;
`;
