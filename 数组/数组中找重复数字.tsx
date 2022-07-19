// 1.解法一，时间复杂度 O(N) 空间复杂度 O(1)
function findRepeatNumber(nums: number[]): number {
    if(!nums?.length){
        return;
    }
    for(let i = 0 ; i <nums.length;i++){
         let index = nums[i]
        if(i !==index){
            let temp = nums[index]
             nums[index] = nums[i]
            nums[i] = temp
        }
      
    }
    for(let j = 0 ; j<nums.length;j++){
        if(j!==nums[nums[j]]){
            return nums[j]
        }
    }
    
    
    
    };


//2.解法2 排序后扫描数字，排序算法 时间复杂度 O(NlogN) ,总的时间复杂度 O(NlogN) + O(N) 空间复杂度 O(N)
function findRepeatNumber2(nums: number[]): number {
    if(!nums?.length){
        return;
    }
    let sortedNums = nums.sort()
    
    for(let i = 0 ; i <sortedNums.length;i++){
       if(sortedNums[i] === sortedNums[i+1]){
           return sortedNums[i]
       }
      
    }
    
    
    };

//3.解法3 哈希表 时间复杂度 O(N) 空间复杂度 O(N)

function findRepeatNumber3(nums: number[]): number {
    if(!nums?.length){
        return;
    }
    let hash = {}
    
    for(let i = 0 ; i <nums.length;i++){ 
    
        if(hash[nums[i]]===1){
            return nums[i]
        }
        else{
            hash[nums[i]]  =1
        }
      
    }
    
    
    };