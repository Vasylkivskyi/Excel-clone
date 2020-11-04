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

  selectGroup(group = []) {
    this.clear();
    this.group = group;
    this.group.forEach((cell) => cell.addClass(TableSelection.className));
  }

  clear() {
    this.group.forEach((cell) => cell.removeClass(TableSelection.className));
    this.group = [];
  }
}

export default TableSelection;
