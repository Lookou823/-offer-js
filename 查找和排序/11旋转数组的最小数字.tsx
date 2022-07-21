// 题目 [https://leetcode.cn/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/]
// 注意js的除法，很坑
// 要考虑多种情况，由第一层想到第三层
function minArray(numbers: number[]): number {

    let start = 0;
    let end = numbers.length-1;
    let mid = start
    while(numbers[start] >=numbers[end]){
        if(end - start === 1)
        {
            mid = end
            break;
        }
        mid =Math.trunc((start+end)/2);
          if(numbers[start] == numbers[end]&&numbers[start] == numbers[mid])  {
    
             return findMin(start,end,numbers)
        }
        if(numbers[mid]>=numbers[start]){
            start = mid
        }
        else if(numbers[mid]<=numbers[end]){
            end = mid
        }
      
    
    }
    return numbers[mid]
    
    };
    
    
    const findMin = (start:number,end:number,numbers:number[])=>{
     let min = numbers[start]
     for(let i = start ; i<=end;i++){
    if(min >= numbers[i]){
      min = numbers[i]
    }
     }
    
     return min
    }