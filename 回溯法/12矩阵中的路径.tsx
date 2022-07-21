// 题目 [https://leetcode.cn/problems/ju-zhen-zhong-de-lu-jing-lcof/]
function exist(board: string[][], word: string): boolean {

    if (!board?.length || !word?.length) {
        return false
    }
    const visited: boolean[][] = board.map(item => item.map(item2 => false))
    let pathLength = 0;
    let rowLength = board.length;
    let columnLength = board[0].length;



    for (let row = 0; row < rowLength; row++) {
        for (let column = 0; column < columnLength; column++) {

            if (hasPathCore(row, column, rowLength, columnLength, pathLength, word, board, visited)) {
                return true
            }


        }
    }
    return false;

};

const hasPathCore = (row: number, column: number, rowLength: number, columnLength: number, pathLength: number, word: string, board: string[][], visited: boolean[][]): boolean => {

    let hasPath = false;
    if (pathLength === word.length) {
        return true
    }
    if (row >= 0 && row < rowLength && column >= 0 && column < columnLength && board[row][column] == word[pathLength] && visited[row][column] === false) {
        visited[row][column] = true;
        pathLength++;

        hasPath = hasPathCore(row, column - 1, rowLength, columnLength, pathLength, word, board, visited) ||
            hasPathCore(row - 1, column, rowLength, columnLength, pathLength, word, board, visited) ||
            hasPathCore(row, column + 1, rowLength, columnLength, pathLength, word, board, visited) ||
            hasPathCore(row + 1, column, rowLength, columnLength, pathLength, word, board, visited)
        if (!hasPath) {
            visited[row][column] = false;
            pathLength--;
        }

    }

    return hasPath

}