const CODS = {
  A: 65,
  Z: 90,
};

function toCell() {
  return '<div class="cell" contenteditable></div>';
}

function toColumn(column) {
  return `
    <div class="column">
      ${column}
      <div class="col-resize" data-resize="col"></div>
    </div>
  `;
}

function createRow(index, content) {
  const resize = index ? '<div class="row-resize" data-resize="row"></div>' : '';
  return `
    <div class="row">
      <div class="row-info">
        ${index || ''}
        ${resize}
      </div>
      <div class="row-data">${content}</div>
    </div>
  `;
}

function toChar(_, index) {
  return String.fromCharCode(CODS.A + index);
}

export function createTable(rowsCount = 20) {
  const colsCount = CODS.Z - CODS.A + 1;
  const rows = [];
  const cols = new Array(colsCount)
    .fill()
    .map(toChar)
    .map(toColumn)
    .join('');

  rows.push(createRow(null, cols));
  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCount)
      .fill()
      .map(toCell)
      .join('');
    rows.push(createRow(i + 1, cells));
  }

  return rows.join('');
}
