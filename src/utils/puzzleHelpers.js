// Core utility functions for the word puzzle game

/**
 * Converts words into a solved board state
 * Words are split into letters and arranged in reading order
 * @param {string[]} words - Array of words (3 four-letter words + 1 three-letter word)
 * @returns {string[]} Array of 16 letters with empty space as ''
 */
export function generateSolvedBoard(words = ['POOL', 'SWIM', 'DIVE', 'SEA']) {
  const letters = words.join('').split('');
  // Add empty space at the end
  letters.push('');
  return letters;
}

/**
 * Generates a solved board state (legacy number version)
 * @returns {number[]} Array of 16 numbers [1,2,3,...,15,0]
 */
export function generateSolvedBoardNumbers() {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];
}

/**
 * Gets valid move indices for the empty space
 * @param {Array} board - Current board state
 * @param {number} emptyIndex - Index of empty space
 * @returns {number[]} Array of valid adjacent indices
 */
export function getValidMoves(board, emptyIndex) {
  const row = Math.floor(emptyIndex / 4);
  const col = emptyIndex % 4;
  const moves = [];

  if (row > 0) moves.push(emptyIndex - 4); // Up
  if (row < 3) moves.push(emptyIndex + 4); // Down
  if (col > 0) moves.push(emptyIndex - 1); // Left
  if (col < 3) moves.push(emptyIndex + 1); // Right

  return moves;
}

/**
 * Shuffles the board using random valid moves (guaranteed solvable)
 * @param {Array} initialBoard - Starting board (usually solved state)
 * @param {number} numMoves - Number of random moves to perform
 * @returns {Array} Shuffled board
 */
export function shuffleBoard(initialBoard, numMoves = 150) {
  let board = [...initialBoard];
  let previousMove = -1;

  for (let i = 0; i < numMoves; i++) {
    const emptyIndex = board.indexOf('');
    const validMoves = getValidMoves(board, emptyIndex);

    // Filter out previous move to avoid immediate reversal
    const filteredMoves = validMoves.filter(move => move !== previousMove);

    // Pick random move
    const randomMove = filteredMoves[Math.floor(Math.random() * filteredMoves.length)];

    // Perform move (swap empty with random adjacent tile)
    [board[emptyIndex], board[randomMove]] = [board[randomMove], board[emptyIndex]];

    // Track previous position for next iteration
    previousMove = emptyIndex;
  }

  return board;
}

/**
 * Checks if a clicked tile can move (is adjacent to empty space)
 * @param {Array} board - Current board state
 * @param {number} clickedIndex - Index of clicked tile
 * @returns {boolean} True if move is valid
 */
export function isValidMove(board, clickedIndex) {
  const emptyIndex = board.indexOf('');
  const emptyRow = Math.floor(emptyIndex / 4);
  const emptyCol = emptyIndex % 4;
  const tileRow = Math.floor(clickedIndex / 4);
  const tileCol = clickedIndex % 4;

  // Check if same row and adjacent column
  const sameRowAdjacent = emptyRow === tileRow && Math.abs(emptyCol - tileCol) === 1;

  // Check if same column and adjacent row
  const sameColAdjacent = emptyCol === tileCol && Math.abs(emptyRow - tileRow) === 1;

  return sameRowAdjacent || sameColAdjacent;
}

/**
 * Moves a tile into the empty space
 * @param {Array} board - Current board state
 * @param {number} clickedIndex - Index of tile to move
 * @returns {Array} New board state after move
 */
export function moveTile(board, clickedIndex) {
  const emptyIndex = board.indexOf('');
  const newBoard = [...board];

  // Swap clicked tile with empty space
  [newBoard[emptyIndex], newBoard[clickedIndex]] =
    [newBoard[clickedIndex], newBoard[emptyIndex]];

  return newBoard;
}

/**
 * Checks if the puzzle is solved
 * Accepts any permutation of the first 3 words (12 letters)
 * The last word (3 letters) must be in the correct position (indices 12-14)
 * @param {Array} board - Current board state
 * @param {string[]} words - Array of words ['WORD1', 'WORD2', 'WORD3', 'WRD']
 * @returns {boolean} True if puzzle is in a valid solved state
 */
export function checkWin(board, words) {
  // Check if empty space is in the last position
  if (board[15] !== '') {
    return false;
  }

  // Extract the last word (3-letter word) from the board (indices 12, 13, 14)
  const lastWordFromBoard = board.slice(12, 15).join('');
  const lastWord = words[3];

  // The last word must be in the correct position
  if (lastWordFromBoard !== lastWord) {
    return false;
  }

  // Extract the first 12 letters from the board
  const first12Letters = board.slice(0, 12).join('');

  // Get the first three 4-letter words
  const first3Words = words.slice(0, 3);

  // Generate all permutations of the first 3 words
  const permutations = getAllPermutations(first3Words);

  // Check if the first 12 letters match any permutation
  return permutations.some(perm => perm.join('') === first12Letters);
}

/**
 * Generates all permutations of an array
 * @param {Array} arr - Array to permute
 * @returns {Array[]} Array of all permutations
 */
function getAllPermutations(arr) {
  if (arr.length <= 1) return [arr];

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
    const remainingPermutations = getAllPermutations(remaining);

    for (const perm of remainingPermutations) {
      result.push([current, ...perm]);
    }
  }

  return result;
}

// Color constants for discovered words
export const DISCOVERY_COLORS = [
  '#ff9999', // Light red - 1st word
  '#ffcc99', // Light orange - 2nd word
  '#99ccff', // Light blue - 3rd word
  '#99ff99', // Light green - 4th word
];

/**
 * Gets the color for a discovered word based on discovery order
 * @param {number} discoveryOrder - Order in which word was discovered (0-3)
 * @returns {string} Hex color code
 */
export function getDiscoveryColor(discoveryOrder) {
  return DISCOVERY_COLORS[discoveryOrder] || '#3498db';
}

/**
 * Detects which words are correctly positioned in rows
 * @param {Array} board - Current board state
 * @param {string[]} words - Array of all 4 words
 * @returns {Object[]} Array of discovered word objects with position info
 */
export function detectDiscoveredWords(board, words) {
  const discovered = [];

  // Check row 1 (indices 0-3)
  const row1 = board.slice(0, 4).join('');
  if (words.slice(0, 3).includes(row1)) {
    discovered.push({ word: row1, rowIndex: 0 });
  }

  // Check row 2 (indices 4-7)
  const row2 = board.slice(4, 8).join('');
  if (words.slice(0, 3).includes(row2)) {
    discovered.push({ word: row2, rowIndex: 1 });
  }

  // Check row 3 (indices 8-11)
  const row3 = board.slice(8, 12).join('');
  if (words.slice(0, 3).includes(row3)) {
    discovered.push({ word: row3, rowIndex: 2 });
  }

  // Check row 4 (indices 12-14) - 3-letter word
  const row4 = board.slice(12, 15).join('');
  if (row4 === words[3]) {
    discovered.push({ word: row4, rowIndex: 3 });
  }

  return discovered;
}
