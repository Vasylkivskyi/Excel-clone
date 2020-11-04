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
