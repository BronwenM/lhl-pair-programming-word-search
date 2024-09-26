const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')

    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });

  //Vertical Test
  it("should return true if FLOWER is present vertically", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'L', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'O', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'W', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'E', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'R', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FLOWER')

    assert.isTrue(result);
  });

  
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'L', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'O', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'W', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'E', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'R', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FLOUR')

    assert.isFalse(result);
  });

  //Backwards Horizontal Test
  it("should return true if CAKE is present backwards horizontally", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'L', 'J', 'E', 'K', 'A', 'C', 'G'],
      ['W', 'O', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'W', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'E', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'R', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'CAKE')

    assert.isTrue(result);
  });

  
  it("should return false if CROAK is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'L', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'O', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'W', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'E', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'R', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'CROAK')

    assert.isFalse(result);
  });


  //Backwards Vertical Test
  it("should return true if PRETTY is present backwards vertically", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'Y'],
      ['H', 'L', 'J', 'E', 'K', 'A', 'C', 'T'],
      ['W', 'O', 'C', 'S', 'Y', 'E', 'R', 'T'],
      ['B', 'W', 'R', 'E', 'N', 'E', 'Y', 'E'],
      ['U', 'E', 'T', 'W', 'A', 'P', 'A', 'R'],
      ['O', 'R', 'C', 'A', 'K', 'U', 'A', 'P'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'PRETTY')

    assert.isTrue(result);
  });

  
  it("should return false if OCEAN is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'L', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'O', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'W', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'E', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'R', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'OCEAN')

    assert.isFalse(result);
  });

  //Diagonal Test
  it("should return true if OCEAN is present diagonally", function() {
    const result = wordSearch([
      ['O', 'W', 'C', 'F', 'O', 'U', 'A', 'L'],
      ['S', 'C', 'I', 'C', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'E', 'F', 'Q', 'U', 'A', 'Y'],
      ['H', 'A', 'J', 'A', 'K', 'A', 'C', 'T'],
      ['N', 'O', 'C', 'S', 'N', 'E', 'R', 'T'],
      ['B', 'W', 'R', 'E', 'N', 'E', 'Y', 'E'],
      ['U', 'E', 'T', 'W', 'A', 'P', 'A', 'R'],
      ['O', 'R', 'C', 'A', 'K', 'U', 'A', 'P'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'OCEAN')

    assert.isTrue(result);
  });

  
  it("should return false if OCEAN is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'L', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'O', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'W', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'E', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'R', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'OCEAN')

    assert.isFalse(result);
  });
});
