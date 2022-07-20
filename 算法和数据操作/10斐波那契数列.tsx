// 题目链接 [https://leetcode.cn/problems/fei-bo-na-qi-shu-lie-lcof/]
function fib(n: number): number {

    if(n <2){
        return n
    }
    
    
    let first = 0;
    let second = 1;
    let sum = 0;
    for(let i = 2; i<=n;++i){
     sum =  first + second
    
    sum%=1e9+7
     first = second
     second = sum
    }
    return sum;
    
    
    };