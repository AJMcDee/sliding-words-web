import { TileButton } from '../styles/PuzzleStyles';

function Tile({ value, isEmpty, isClickable, onClick, color }) {
  return (
    <TileButton
      $isEmpty={isEmpty}
      $isClickable={isClickable}
      $color={color}
      onClick={isClickable ? onClick : undefined}
    >
      {!isEmpty && value}
    </TileButton>
  );
}

export default Tile;
