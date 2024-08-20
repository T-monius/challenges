# Circular Buffer

# Problem

## Understanding:

- Circular Buffer/Ring Buffer
- Single fixed buffer
  > As if connected end-to-end
- Starts empty
  > Pre-defined length
  > Starting position doesn't matter
  > Elements added one 'after' another, sequentially
  > Elements removed oldest to newest
    + From opposite end of addition point
- When full
  > Alert thrown upon attempt to add
  > Forced write
    + Overwrites oldest elements
    + These elements added become newest

Input
- `CircularBuffer::new` takes an integer
  > Represents the buffer length
- `CircularBuffer#read`
  > Removes an element from the buffer
  > Oldest
- `CircularBuffer#write`
  > Adds an element to the buffer
    + Two adding conditions
      = Buffer empty
      = Buffer already has objects but is not full
  > Throws an error if the buffer is full
- `CircularBuffer#write!`
  > Adds an element to the buffer
  > Overwrites oldest element if buffer is full

## Examples/Test Cases

```js
/*
const max = 1;
['2']
*/
const buffer = new CircularBuffer(1);
buffer.write('1');
buffer.write('2');
//=> throws error { message: "Can't write to a full buffer" }
buffer.forceWrite('2');
buffer.read();
//=> '2'
buffer.read();
//=> throws error { message: "Can't read from an empty buffer" }
```

## Data Structures

- Array/queue

## Algorithm

_functional abstractions_

- Interrogation

_steps_

1. Define `constructor`
  - Assign argument value to `max` attribute
  - Assign an empty array to `buffer` attribute

1. Define `read`
  - Guard clause for empty buffer
  - Unshift value from buffer and return

1. Define `write`
  - Guard clause for max buffer
  - Push to `buffer` (and return?)

1. Define `forceWrite`
  - Conditionally read from buffer if full
  - `write`
