class DynamicArray {

  constructor(defaultSize = 4) {
    this.capacity = defaultSize;
    this.length = 0;
    this.data = new Array(defaultSize);
    // Your code here 
  }

  read(index) {

    // Your code here 
    if(index > this.length) return undefined;
    else return this.data[index];
  }

  push(val) {
    // Your code here
    if (this.length === this.capacity) return undefined;
    else {
      this.data[this.length] = val
      this.length++;
    }
  }


  pop() {
    // Your code here 
    if (this.length === 0) return undefined;
    else {
      let temp = this.data[this.length - 1]
      this.data[this.length - 1] = undefined;
      this.length--
      return temp
    }
  }

  shift() {

    // Your code here 
  }

  unshift(val) {

    // Your code here 
  }

  indexOf(val) {

    // Your code here 
  }

  resize() {

    // Your code here 
  }

}


module.exports = DynamicArray;
