import { GameContainer, Title, PuzzleGrid } from '../styles/PuzzleStyles';
import Tile from './Tile';
import GameControls from './GameControls';
import DiscoveredWordsPanel from './DiscoveredWordsPanel';
import HowToPlay from './HowToPlay';
import PuzzleNavigation from './PuzzleNavigation';
import usePuzzleGame from '../hooks/usePuzzleGame';
import { getDiscoveryColor } from '../utils/puzzleHelpers';

function SlidingPuzzle() {
  const {
    board,
    isWon,
    moveCount,
    handleTileClick,
    handleShuffle,
    discoveredWords,
    currentlyPositioned,
    discoveryOrder,
    currentPuzzleId,
    currentPuzzle,
    handleNextPuzzle,
    handlePreviousPuzzle,
    totalPuzzles,
    hintUsed,
    handleHint,
  } = usePuzzleGame(1); // Start at puzzle 1

  // Find empty space position
  const emptyIndex = board.indexOf('');

  // Determine if a tile is clickable (adjacent to empty space)
  const isClickable = (index) => {
    const emptyRow = Math.floor(emptyIndex / 4);
    const emptyCol = emptyIndex % 4;
    const tileRow = Math.floor(index / 4);
    const tileCol = index % 4;

    // Same row, adjacent column
    const sameRowAdjacent = emptyRow === tileRow && Math.abs(emptyCol - tileCol) === 1;
    // Same column, adjacent row
    const sameColAdjacent = emptyCol === tileCol && Math.abs(emptyRow - tileRow) === 1;

    return sameRowAdjacent || sameColAdjacent;
  };

  // Calculate tile color based on currently positioned words
  const getTileColor = (index) => {
    const rowIndex = Math.floor(index / 4);
    const discovered = currentlyPositioned.find(d => d.rowIndex === rowIndex);

    if (discovered) {
      const order = discoveryOrder.get(discovered.word);
      return getDiscoveryColor(order);
    }

    return null; // Default color
  };

  return (
    <GameContainer>
      <HowToPlay />
      <Title>Word Puzzle</Title>
      {hintUsed && <Title style={{ fontSize: '1.5rem', marginTop: '-1rem' }}>Theme: {currentPuzzle.theme}</Title>}
      <PuzzleGrid>
        {board.map((value, index) => (
          <Tile
            key={index}
            value={value}
            isEmpty={value === ''}
            isClickable={isClickable(index)}
            onClick={() => handleTileClick(index)}
            color={getTileColor(index)}
          />
        ))}
      </PuzzleGrid>
      <DiscoveredWordsPanel
        discoveredWords={discoveredWords}
        discoveryOrder={discoveryOrder}
        isWon={isWon}
        theme={currentPuzzle.theme}
      />
      <GameControls
        isWon={isWon}
        moveCount={moveCount}
        onShuffle={handleShuffle}
        onHint={handleHint}
      />
      <PuzzleNavigation
        currentPuzzleId={currentPuzzleId}
        totalPuzzles={totalPuzzles}
        theme={currentPuzzle.theme}
        onPrevious={handlePreviousPuzzle}
        onNext={handleNextPuzzle}
      />
    </GameContainer>
  );
}

export default SlidingPuzzle;
