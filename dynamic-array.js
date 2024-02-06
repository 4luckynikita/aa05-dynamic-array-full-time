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
    if (this.length === this.capacity) this.resize();
      this.data[this.length] = val
      this.length++;
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
    if (this.length === 0) return undefined;
    else{
      const shift = this.data[0]
      for (let i = 0; i < this.length - 1; i++) {
        this.data[i] = this.data[i + 1]
        
      }
      this.length--
      return shift
    }
  }

  unshift(val) {
    if(this.length === this.capacity) this.resize();
      for(let i = this.length; i>0; i--){
        this.data[i] = this.data[i-1];
        
      }
      
      this.data[0]=val;
      this.length++;

    // Your code here 
  }

  indexOf(val) {
    // Your code here 
    for (let i = 0; i < this.length; i++) {
      if(this.data[i] === val) return i;

      
    }
    return -1
  }

  resize() {
    // Your code here
    this.capacity *= 2;
    // this.length *= 2;
    for (let i = 0; i < this.length; i++){
      this.data[this.length + i] = undefined
      
    }
    // this.length *= 2
  }

}


module.exports = DynamicArray;
