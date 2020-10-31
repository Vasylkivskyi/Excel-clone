export const resize = ($root, event) => {
  const $resizer = $(event.target);
  const type = $resizer.data.resize;
  const sizeProp = type === 'col' ? 'bottom' : 'right';
  let value;
  $resizer.css({
    opacity: 1,
    [sizeProp]: `${-5000}px`,
  });
  const $parent = $resizer.closest('[data-type="resizable"]');
  const coordinates = $parent.getCoordinates();
  document.onmousemove = (e) => {
    if (type === 'col') {
      const delta = e.pageX - coordinates.right;
      value = coordinates.width + delta;
      $resizer.css({ right: `${-delta}px` });
    } else {
      const delta = e.pageY - coordinates.bottom;
      value = coordinates.height + delta;
      $resizer.css({ bottom: `${-delta}px` });
    }
  };
  document.onmouseup = () => {
    document.onmousemove = null;
    document.onmouseup = null;
    $resizer.css({
      opacity: 0,
      bottom: 0,
      right: 0,
    });
    if (type === 'col') {
      $parent.css({ width: `${value}px` });
      $root.findAll(`[data-col="${$parent.data.col}"]`)
        .forEach((el) => {
          // eslint-disable-next-line no-param-reassign
          el.style.width = `${value}px`;
        });
    } else {
      $parent.css({ height: `${value}px` });
    }
  };
};
