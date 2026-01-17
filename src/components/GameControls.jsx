import {
  ControlsContainer,
  ButtonRow,
  HintButton,
  ShuffleButton,
  MoveCounter,
  WinMessage,
} from '../styles/PuzzleStyles';

function GameControls({ isWon, moveCount, onShuffle, onHint }) {
  return (
    <ControlsContainer>
      <ButtonRow>
        <HintButton onClick={onHint}>
          Hint
        </HintButton>
        <ShuffleButton onClick={onShuffle}>
          {isWon ? 'New Game' : 'Shuffle'}
        </ShuffleButton>
      </ButtonRow>
      <MoveCounter>Moves: {moveCount}</MoveCounter>
      {isWon && <WinMessage>🎉 You Won! 🎉</WinMessage>}
    </ControlsContainer>
  );
}

export default GameControls;
