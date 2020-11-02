class TableSelection {
  static className = 'selected';

  constructor() {
    this.group = [];
    this.current = null;
  }

  select($el) {
    this.clear();
    this.current = $el;
    this.group.push($el);
    $el.addClass(TableSelection.className);
  }

  clear() {
    this.group.forEach((cell) => cell.removeClass(TableSelection.className));
    this.group = [];
  }

  selectGroup($el) {
    this.group.push($el);
    this.group.forEach((cell) => cell.addClass(TableSelection.className));
  }
}

export default TableSelection;
