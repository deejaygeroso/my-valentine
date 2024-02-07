import styled from 'styled-components';
import { NoButtonProps } from './types';

export const Container = styled.div`
  background: url(/background.webp) no-repeat center center fixed;
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

export const YesButton = styled.button`
  background: #66bb6a;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  height: 50px;
  left: 50%;
  position: absolute;
  top: 49%;
  transform: translate(-50%, -50%);
  width: 120px;
`;

export const NoButton = styled.button<NoButtonProps>`
  background: #f44336;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-size: 10px;
  height: 25px;
  left: ${(props) => `${props.$left}px`};
  position: absolute;
  top: ${(props) => `${props.$top}px`};
  transition: top 0.5s, left 0.5s;
  width: 60px;
`;
