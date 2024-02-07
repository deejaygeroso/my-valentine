import { useState, useEffect, JSX } from 'react';
import * as Styled from './styled';

const MyValentine = (): JSX.Element => {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    // Set the initial position for the "Catch Me!" button relative to the "Yes" button
    const centerPosition = {
      top: (window.innerHeight - 50) / 2, // Center vertically, assuming button height of 50px
      left: window.innerWidth / 2 + 60, // Center horizontally, then offset by half the width of both buttons and a gap
    };
    setPosition(centerPosition);

    // Optional: Adjust if window resizes
    const resizeListener = () => {
      const updatedPosition = {
        top: (window.innerHeight - 50) / 2,
        left: window.innerWidth / 2 + 60,
      };
      setPosition(updatedPosition);
    };
    window.addEventListener('resize', resizeListener);
    return () => window.removeEventListener('resize', resizeListener);
  }, []);

  const moveButton = (): void => {
    const newPosition = {
      top: Math.random() * (window.innerHeight - 50),
      left: Math.random() * (window.innerWidth - 100),
    };
    setPosition(newPosition);
  };

  return (
    <Styled.Container>
      <Styled.Overlay />
      <Styled.YesButton>Yes</Styled.YesButton>
      <Styled.NoButton
        $top={position.top}
        $left={position.left}
        onMouseEnter={moveButton}
        onClick={() => alert('You caught me!')}
      >
        Hell No!
      </Styled.NoButton>
    </Styled.Container>
  );
};

export default MyValentine;
