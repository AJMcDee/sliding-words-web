import { useState } from 'react';
import { InfoIcon, InfoPopover, PopoverContent, PopoverTitle, PopoverText } from '../styles/PuzzleStyles';

function HowToPlay() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <InfoIcon
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        ℹ️
      </InfoIcon>
      {isOpen && (
        <InfoPopover>
          <PopoverContent>
            <PopoverTitle>How to Play</PopoverTitle>
            <PopoverText>
              <strong>Goal:</strong> Slide the letters around to find four related words.
            </PopoverText>
            <PopoverText>
              • Three 4-letter words
              <br />
              • One 3-letter word (must be in the last row)
            </PopoverText>
            <PopoverText>
              <strong>Rules:</strong>
              <br />
              • The 4-letter words can appear in any of the first three rows
              <br />
              • The 3-letter word must be in the last row
              <br />
              • Click on tiles adjacent to the empty space to move them
            </PopoverText>
            <PopoverText>
              <strong>Hints:</strong>
              <br />
              When you place a word in a correct row, it will change color and appear in the "Discovered Words" section!
            </PopoverText>
            <PopoverText>
              <strong>Puzzles:</strong>
              <br />
              There are 100 themed puzzles to solve! Use the Previous and Next buttons to navigate between puzzles. Your progress is automatically saved.
            </PopoverText>
          </PopoverContent>
        </InfoPopover>
      )}
    </>
  );
}

export default HowToPlay;
