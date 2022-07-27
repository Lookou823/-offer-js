// 题目 [https://leetcode.cn/problems/ti-huan-kong-ge-lcof/submissions/]
// 时间复杂度 O(n)
function replaceSpace(s: string): string {


    if(!s){
        return ''
    }
    let alterS:string[] = []
    for(let i = 0; i<s.length;i++){
        if(s[i]!==' '){
            alterS.push(s[i])
        }
        else{
                    alterS.push('%20')
    
        }
    }
    return alterS.join('')
    
    };