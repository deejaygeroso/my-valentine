import { useState, useEffect, JSX, useRef } from 'react';
import * as Styled from './styled';

const MyValentine = (): JSX.Element => {
  const [position, setPosition] = useState({
    top: 0,
    left: 0,
    position: 'relative',
  });
  const noButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (noButtonRef.current) {
      const rect = noButtonRef.current.getBoundingClientRect();
      setPosition({
        top: rect.top,
        left: rect.left + 55,
        position: 'absolute',
      });
      console.log(rect.top, rect.left); // Logs the top and left position
    }

    // Optional: Adjust if window resizes
    const resizeListener = () => {
      const updatedPosition = {
        top: (window.innerHeight - 50) / 2,
        left: window.innerWidth / 2 + 60,
        position: 'relative',
      };
      setPosition(updatedPosition);
    };
    window.addEventListener('resize', resizeListener);
    return () => window.removeEventListener('resize', resizeListener);
  }, [noButtonRef]);

  const moveButton = (): void => {
    const newPosition = {
      top: Math.random() * (window.innerHeight - 50),
      left: Math.random() * (window.innerWidth - 100),
      position: 'absolute',
    };
    setPosition(newPosition);
  };

  const visitProfile = (): void => {
    const url = new URL(window.location.href);
    const pathName = url.pathname;
    const value = pathName.substring(1);

    if (value) {
      window.open(`https://www.tiktok.com/${value}`, '_blank');
    } else {
      window.open('https://www.tiktok.com/@deejaygeroso', '_blank');
    }
  };

  return (
    <Styled.Container>
      <Styled.Overlay />
      <Styled.Heading>Will You Be </Styled.Heading>
      <Styled.Heading>My Valentine?</Styled.Heading>
      <Styled.ButtonWrapper>
        <Styled.YesButton onClick={visitProfile}>Yes</Styled.YesButton>
        <Styled.NoButton
          $top={position.top}
          $left={position.left}
          $position={position.position}
          onMouseEnter={moveButton}
          onClick={moveButton}
          ref={noButtonRef}
        >
          No
        </Styled.NoButton>
      </Styled.ButtonWrapper>
    </Styled.Container>
  );
};

export default MyValentine;
