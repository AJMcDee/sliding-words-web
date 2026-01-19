import { useState, useEffect, useMemo } from 'react';
import {
  generateSolvedBoard,
  shuffleBoard,
  isValidMove,
  moveTile,
  checkWin,
  detectDiscoveredWords,
} from '../utils/puzzleHelpers';
import { getPuzzleById, getTotalPuzzles } from '../data/puzzles';

function usePuzzleGame(initialPuzzleId = 1) {
  // Load last played puzzle from localStorage, default to initialPuzzleId
  const getInitialPuzzleId = () => {
    try {
      const saved = localStorage.getItem('currentPuzzleId');
      if (saved) {
        const parsedId = parseInt(saved, 10);
        // Validate puzzle ID is within valid range
        if (parsedId >= 1 && parsedId <= getTotalPuzzles()) {
          return parsedId;
        }
      }
    } catch (error) {
      // localStorage may be unavailable in private browsing
      console.warn('localStorage unavailable:', error);
    }
    return initialPuzzleId;
  };

  const [currentPuzzleId, setCurrentPuzzleId] = useState(getInitialPuzzleId);
  const currentPuzzle = useMemo(() => getPuzzleById(currentPuzzleId), [currentPuzzleId]);

  // Save puzzle ID to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('currentPuzzleId', currentPuzzleId.toString());
    } catch (error) {
      // Silently fail if localStorage is unavailable
      console.warn('Failed to save puzzle progress:', error);
    }
  }, [currentPuzzleId]);

  // Generate solved state from current puzzle's words
  const solvedState = useMemo(() => generateSolvedBoard(currentPuzzle.words), [currentPuzzle.words]);

  const [board, setBoard] = useState(() => shuffleBoard(solvedState));
  const [isWon, setIsWon] = useState(false);
  const [moveCount, setMoveCount] = useState(0);
  const [discoveredWords, setDiscoveredWords] = useState([]);
  const [currentlyPositioned, setCurrentlyPositioned] = useState([]); // Words currently in correct positions (for tile coloring)
  const [discoveryOrder, setDiscoveryOrder] = useState(new Map());
  // Track words that have ever been discovered (persists through shuffles)
  const [everDiscovered, setEverDiscovered] = useState(new Set());
  const [hintUsed, setHintUsed] = useState(false);

  const handleHint = () => {
    setHintUsed(true);
  };

  // Check win condition after each move
  useEffect(() => {
    if (checkWin(board, currentPuzzle.words)) {
      setIsWon(true);
    }
  }, [board, currentPuzzle.words]);

  // Detect and track discovered words
  useEffect(() => {
    const currentDiscovered = detectDiscoveredWords(board, currentPuzzle.words);

    // Store currently positioned words for tile coloring
    setCurrentlyPositioned(currentDiscovered);

    // Update discovery order for new words
    setDiscoveryOrder(prev => {
      const newOrder = new Map(prev);
      let orderCounter = prev.size;

      currentDiscovered.forEach(({ word }) => {
        if (!newOrder.has(word)) {
          newOrder.set(word, orderCounter++);
        }
      });

      return newOrder;
    });

    // Track words that have ever been discovered
    setEverDiscovered(prev => {
      const newEverDiscovered = new Set(prev);
      currentDiscovered.forEach(({ word }) => {
        newEverDiscovered.add(word);
      });

      // Show all words that have ever been discovered
      const persistedDiscovered = currentPuzzle.words
        .filter(word => newEverDiscovered.has(word))
        .map(word => ({ word, rowIndex: -1 })); // rowIndex not needed for display

      setDiscoveredWords(persistedDiscovered);

      return newEverDiscovered;
    });
  }, [board, currentPuzzle.words]);

  const handleTileClick = (index) => {
    // Don't allow moves if game is won or move is invalid
    if (isWon || !isValidMove(board, index)) {
      return;
    }

    // Move the tile
    const newBoard = moveTile(board, index);
    setBoard(newBoard);
    setMoveCount(prev => prev + 1);
  };

  const handleShuffle = () => {
    setBoard(shuffleBoard(solvedState));
    setIsWon(false);
    setMoveCount(0);
    // Don't clear discoveredWords, discoveryOrder, or everDiscovered - they persist
  };

  // Reset board when puzzle changes
  useEffect(() => {
    const puzzle = getPuzzleById(currentPuzzleId);
    const puzzleWords = puzzle.words;
    console.log('Puzzle changed! ID:', currentPuzzleId, 'Words:', puzzleWords);
    const newSolvedState = generateSolvedBoard(puzzleWords);
    console.log('New board:', newSolvedState);
    setBoard(shuffleBoard(newSolvedState));
    setIsWon(false);
    setMoveCount(0);
    setDiscoveredWords([]);
    setCurrentlyPositioned([]);
    setDiscoveryOrder(new Map());
    setEverDiscovered(new Set());
    setHintUsed(false);
  }, [currentPuzzleId]);

  const handleNextPuzzle = () => {
    console.log('Next puzzle requested from ID:', currentPuzzleId);
    if (currentPuzzleId < getTotalPuzzles()) {
      setCurrentPuzzleId(prev => prev + 1);
    }
  };

  const handlePreviousPuzzle = () => {
    if (currentPuzzleId > 1) {
      setCurrentPuzzleId(prev => prev - 1);
    }
  };

  return {
    board,
    isWon,
    moveCount,
    handleTileClick,
    handleShuffle,
    words: currentPuzzle.words,
    discoveredWords,
    currentlyPositioned,
    discoveryOrder,
    currentPuzzleId,
    currentPuzzle,
    handleNextPuzzle,
    handlePreviousPuzzle,
    totalPuzzles: getTotalPuzzles(),
    hintUsed,
    handleHint,
  };
}

export default usePuzzleGame;
