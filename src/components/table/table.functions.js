import { range } from '@core/utils';

export const shouldResize = (event) => event.target.dataset.resize;
export const isACell = (event) => event.target.dataset.type === 'cell';
export const selectGroup = (event) => event.shiftKey;
export const matrix = ($target, $current) => {
  const target = $target.id(true);
  const current = $current.id(true);
  // eslint-disable-next-line no-use-before-define
  const cols = range(target.col, current.col);
  // eslint-disable-next-line no-use-before-define
  const rows = range(target.row, current.row);
  return cols.reduce((acc, col) => {
    rows.forEach((row) => acc.push(`${row}:${col}`));
    return acc;
  }, []);
};
export function nextSelector(key, { col, row }) {
  const MIN_VALUE = 0;
  let newRow = row;
  let newCol = col;
  // eslint-disable-next-line default-case
  switch (key) {
    case 'ArrowDown':
    case 'Enter':
      newRow = row + 1;
      break;
    case 'Tab':
    case 'ArrowRight':
      newCol = col + 1;
      break;
    case 'ArrowLeft':
      newCol = col - 1 < MIN_VALUE ? MIN_VALUE : row - 1;
      break;
    case 'ArrowUp':
      newRow = row - 1 < MIN_VALUE ? MIN_VALUE : row - 1;
      break;
  }
  return `[data-id="${newRow}:${newCol}"]`;
}
