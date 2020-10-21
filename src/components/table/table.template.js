const CODS = {
  A: 65,
  Z: 90,
};

function createCell() {
  return '<div class="cell" contenteditable></div>';
}

function toColumn(column) {
  return `
    <div class="column">
      ${column}
    </div>
  `;
}

function createRow(content, index) {
  return `
    <div class="row">
      <div class="row-info">${index || ''}</div>
      <div class="row-data">${content}</div>
    </div>
  `;
}

function toChar(_, index) {
  return String.fromCharCode(CODS.A + index);
}

export function createTable() {
  const colsCount = CODS.Z - CODS.A + 1;
  const rows = [];
  const cols = new Array(colsCount)
    .fill()
    .map(toChar)
    .map(toColumn)
    .join('');

  const cells = new Array(colsCount)
    .fill()
    .map(createCell)
    .join('');

  rows.push(createRow(cols));
  for (let i = 0; i < colsCount; i++) {
    rows.push(createRow(cells, i + 1));
  }

  return rows.join('');
}
