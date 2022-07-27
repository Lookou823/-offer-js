// 题目链接 [https://leetcode.cn/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/submissions/]
function findNumberIn2DArray(matrix: number[][], target: number): boolean {

    if(!matrix?.length){
        return false;
    
    }
    let rowLength = matrix.length
    let columnLength  = matrix[0].length
    let row = 0;
    let column = columnLength - 1;
    while(row <rowLength &&column>= 0){
        if(matrix[row][column] === target){
            return true
        }
        if(matrix[row][column]>target){
            column -=1;
        }
        else{
            row+=1
        }
    }
    return false
    };