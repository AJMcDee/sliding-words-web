import { DiscoveredPanel, DiscoveredTitle, DiscoveredList, DiscoveredWordItem } from '../styles/PuzzleStyles';
import { getDiscoveryColor } from '../utils/puzzleHelpers';

function DiscoveredWordsPanel({ discoveredWords, discoveryOrder, isWon, theme }) {
  if (discoveredWords.length === 0) return null;

  return (
    <DiscoveredPanel>
      <DiscoveredTitle>{isWon ? theme : 'Discovered Words'}</DiscoveredTitle>
      <DiscoveredList>
        {discoveredWords.map(({ word, rowIndex }) => {
          const order = discoveryOrder.get(word);
          const color = getDiscoveryColor(order);

          return (
            <DiscoveredWordItem key={`${word}-${rowIndex}`} $color={color}>
              {word}
            </DiscoveredWordItem>
          );
        })}
      </DiscoveredList>
    </DiscoveredPanel>
  );
}

export default DiscoveredWordsPanel;
