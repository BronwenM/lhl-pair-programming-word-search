const wordSearch = (letters, word) => {
    
    const horizontalJoin = letters.map(ls => ls.join(''))
    const verticalJoin = [];
    const backwardsHorizontalJoin = letters.map(ls => ls.toReversed().join(''));

    //vertical join based on transpose matrix
    for (let row = 0; row < letters.length - 1; row++) {
        verticalJoin[row] = [];
        for (let col = 0; col < letters[row].length + 1; col++) {
            verticalJoin[row].push(letters[col][row]);
        }
    }

    const joinedVerticalJoin = verticalJoin.map(ls => ls.join(''));
    const backwardsVerticalJoin = verticalJoin.map(ls => ls.reverse().join(''));

    //Diagonal Join
    const diagonalJoin = [];

    //FOR EACH ITEM IN ROW
    //LOG ITEM [ROW][COL]
    //LOG ITEM [ROW + 1][COL -1] UNTIL ROW = intiCOL && COL = initROW

    //first half of array
    for (let col = 0; col < letters[0].length; col++) {
        let i = 0;
        let j = col;
        let diagonal = [];
        while (i < letters.length && j >= 0) {
            diagonal.push(letters[i][j]);
            j--;
            i++;
        }
        diagonalJoin.push(diagonal.join(''));
    }

    //second half
    for (let row = 0; row < letters.length; row++) {
        let i = row;
        let j = letters[row].length - 1;
        let diagonal = [];
        while (i < letters.length && j >= 0) {
            diagonal.push(letters[i][j]);
            j--;
            i++;
        }
        diagonalJoin.push(diagonal.join(''));
    } 

    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }

    for (v of joinedVerticalJoin) {
        if (v.includes(word)) return true
    }

    for (bH of backwardsHorizontalJoin) {
        if (bH.includes(word)) return true
    }

    for (bV of backwardsVerticalJoin) {
        if (bV.includes(word)) return true
    }

    for (diag of diagonalJoin) {
        if (diag.includes(word)) return true
    }

    //if all else fails the word isn't here so return false
    return false
}

/* 

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

    SEINFELD PASSES
    FRANK DOES NOT

*/

module.exports = wordSearch