export const shouldResize = (event) => event.target.dataset.resize;
export const isACell = (event) => event.target.dataset.type === 'cell';
export const selectGroup = (event) => event.shiftKey;
