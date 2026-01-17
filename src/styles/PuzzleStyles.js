import styled from 'styled-components';

// Main container - centers everything on the page
export const GameContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
`;

// Title styling
export const Title = styled.h1`
  color: white;
  font-size: 3rem;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

// 4x4 grid container
export const PuzzleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: repeat(4, 100px);
  gap: 4px;
  background: #34495e;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  margin-bottom: 2rem;
`;

// Individual tile button
export const TileButton = styled.button`
  width: 100px;
  height: 100px;
  font-size: 28px;
  font-weight: bold;
  background: ${props => {
    if (props.$isEmpty) return 'transparent';
    if (props.$color) return props.$color;
    return '#3498db';
  }};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: ${props => props.$isClickable ? 'pointer' : 'default'};
  transition: all 0.2s ease;
  box-shadow: ${props => props.$isEmpty ? 'none' : '0 4px 6px rgba(0, 0, 0, 0.2)'};
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;

  &:hover {
    background: ${props => {
      if (props.$isClickable && !props.$isEmpty) {
        // Slightly darken the color on hover
        if (props.$color) return props.$color;
        return '#2980b9';
      }
      return '';
    }};
    transform: ${props => props.$isClickable && !props.$isEmpty ? 'scale(1.05)' : 'none'};
  }

  &:active {
    transform: ${props => props.$isClickable && !props.$isEmpty ? 'scale(0.98)' : 'none'};
  }
`;

// Controls container
export const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

// Button container for Hint and Shuffle
export const ButtonRow = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

// Hint button
export const HintButton = styled.button`
  padding: 12px 32px;
  font-size: 18px;
  font-weight: 600;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);

  &:hover {
    background: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

// Shuffle button
export const ShuffleButton = styled.button`
  padding: 12px 32px;
  font-size: 18px;
  font-weight: 600;
  background: #2ecc71;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);

  &:hover {
    background: #27ae60;
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

// Move counter display
export const MoveCounter = styled.div`
  color: white;
  font-size: 20px;
  font-weight: 500;
  padding: 8px 16px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
`;

// Win message
export const WinMessage = styled.div`
  color: #f39c12;
  font-size: 24px;
  font-weight: bold;
  padding: 16px 32px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  animation: pulse 0.6s ease-in-out;

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }
`;

// Discovered words panel container
export const DiscoveredPanel = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
  padding: 20px;
  margin-top: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  min-width: 300px;
`;

// Panel title
export const DiscoveredTitle = styled.h2`
  color: #34495e;
  font-size: 1.5rem;
  margin: 0 0 1rem 0;
  text-align: center;
`;

// List of discovered words
export const DiscoveredList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
`;

// Individual discovered word item
export const DiscoveredWordItem = styled.div`
  background: ${props => props.$color};
  color: #2c3e50;
  padding: 8px 20px;
  border-radius: 6px;
  font-size: 1.2rem;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

// Info icon
export const InfoIcon = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;
  z-index: 10;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
`;

// Info popover
export const InfoPopover = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  background: white;
  border-radius: 10px;
  padding: 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  min-width: 320px;
  max-width: 400px;
  z-index: 20;
  animation: fadeIn 0.2s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

// Popover content
export const PopoverContent = styled.div`
  padding: 20px;
`;

// Popover title
export const PopoverTitle = styled.h3`
  color: #34495e;
  font-size: 1.3rem;
  margin: 0 0 1rem 0;
  text-align: center;
`;

// Popover text
export const PopoverText = styled.p`
  color: #2c3e50;
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0.5rem 0;

  strong {
    color: #34495e;
  }
`;

// Puzzle navigation container
export const PuzzleNavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 2rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  min-width: 400px;
`;

// Navigation buttons
export const NavButton = styled.button`
  padding: 10px 24px;
  font-size: 16px;
  font-weight: 600;
  background: ${props => props.disabled ? '#95a5a6' : '#3498db'};
  color: white;
  border: none;
  border-radius: 8px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.2s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  opacity: ${props => props.disabled ? 0.5 : 1};

  &:hover {
    background: ${props => props.disabled ? '#95a5a6' : '#2980b9'};
    transform: ${props => props.disabled ? 'none' : 'translateY(-2px)'};
    box-shadow: ${props => props.disabled ? '0 4px 6px rgba(0, 0, 0, 0.2)' : '0 6px 8px rgba(0, 0, 0, 0.3)'};
  }

  &:active {
    transform: ${props => props.disabled ? 'none' : 'translateY(0)'};
  }
`;

// Puzzle info display
export const PuzzleInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: white;
  font-size: 18px;
  font-weight: 500;
`;

// Theme label
export const ThemeLabel = styled.div`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.9);
  font-style: italic;
  display: none;
`;
