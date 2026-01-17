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
  const words = currentPuzzle.words;

  // Save puzzle ID to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('currentPuzzleId', currentPuzzleId.toString());
    } catch (error) {
      // Silently fail if localStorage is unavailable
      console.warn('Failed to save puzzle progress:', error);
    }
  }, [currentPuzzleId]);

  // Generate solved state from words
  const solvedState = useMemo(() => generateSolvedBoard(words), [words]);

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
    if (checkWin(board, words)) {
      setIsWon(true);
    }
  }, [board, words]);

  // Detect and track discovered words
  useEffect(() => {
    const currentDiscovered = detectDiscoveredWords(board, words);

    // Store currently positioned words for tile coloring
    setCurrentlyPositioned(currentDiscovered);

    // Update discovery order for new words
    const newOrder = new Map(discoveryOrder);
    let orderCounter = discoveryOrder.size;

    currentDiscovered.forEach(({ word }) => {
      if (!newOrder.has(word)) {
        newOrder.set(word, orderCounter++);
      }
    });

    // Track words that have ever been discovered
    const newEverDiscovered = new Set(everDiscovered);
    currentDiscovered.forEach(({ word }) => {
      newEverDiscovered.add(word);
    });

    setDiscoveryOrder(newOrder);
    setEverDiscovered(newEverDiscovered);

    // Show all words that have ever been discovered
    const persistedDiscovered = words
      .filter(word => newEverDiscovered.has(word))
      .map(word => ({ word, rowIndex: -1 })); // rowIndex not needed for display

    setDiscoveredWords(persistedDiscovered);
  }, [board, words, discoveryOrder, everDiscovered]);

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
    setBoard(shuffleBoard(solvedState));
    setIsWon(false);
    setMoveCount(0);
    setDiscoveredWords([]);
    setCurrentlyPositioned([]);
    setDiscoveryOrder(new Map());
    setEverDiscovered(new Set());
    setHintUsed(false);
  }, [currentPuzzleId, solvedState]);

  const handleNextPuzzle = () => {
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
    words,
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
