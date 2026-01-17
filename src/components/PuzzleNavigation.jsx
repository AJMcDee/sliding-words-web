import { PuzzleNavContainer, NavButton, PuzzleInfo, ThemeLabel } from '../styles/PuzzleStyles';

function PuzzleNavigation({
  currentPuzzleId,
  totalPuzzles,
  theme,
  onPrevious,
  onNext,
}) {
  return (
    <PuzzleNavContainer>
      <NavButton
        onClick={onPrevious}
        disabled={currentPuzzleId === 1}
      >
        ← Previous
      </NavButton>

      <PuzzleInfo>
        <div>Puzzle {currentPuzzleId} / {totalPuzzles}</div>
        <ThemeLabel>{theme}</ThemeLabel>
      </PuzzleInfo>

      <NavButton
        onClick={onNext}
        disabled={currentPuzzleId === totalPuzzles}
      >
        Next →
      </NavButton>
    </PuzzleNavContainer>
  );
}

export default PuzzleNavigation;
