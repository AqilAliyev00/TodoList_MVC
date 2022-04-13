export default class Model {
  constructor() {
    this.arr = [];
  }

  addTask(newTask) {
    this.arr = [...this.arr, newTask];
    console.log(this.arr);
  }

  deleteTask(selectIndex) {
    this.arr = this.arr.filter((el, index) => index !== selectIndex);
  }

  sortTask() {
    this.arr = this.arr.sort((a, b) =>
      a.toLowerCase() < b.toLowerCase() ? -1 : 1
    );
  }
  sortTaskReverse(el) {
    this.arr = this.arr.sort((a, b) =>
      a.toLowerCase() < b.toLowerCase() ? 1 : -1
    );
  }
}
