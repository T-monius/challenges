class CircularBuffer {
  constructor(max) {
    this.max = max;
    this.buffer = [];
  }

  read() {
    if( this.buffer.length === 0 ) { throw Error("Can't read from an empty buffer.")}

    const val = this.buffer.shift(); 
    return val;
  }

  write(val) {
    if( val == null ) { return }
    if( this.buffer.length === this.max ) { throw Error("Can't write to a full buffer") }

    this.buffer.push(val);
  }

  forceWrite(val) {
    if( val == null ) { return }
    if( this.buffer.length === this.max ) { this.read() }

    this.write(val);
  }
}

export { CircularBuffer };