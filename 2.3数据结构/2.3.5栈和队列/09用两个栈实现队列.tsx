// 题目链接 [https://leetcode.cn/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/]
class CQueue {
    stack1:(number|null|undefined)[]
    stack2:(number|null|undefined)[]
    constructor() {
      this.stack2 = []
      this.stack1 = []
    }

    appendTail(value: number): void {
     this.stack1.push(value)

    }

    deleteHead(): (number|undefined|null) {
        if(this.stack2?.length){
            return this.stack2.pop()
        }
        else if(this.stack1?.length){
            while(this.stack1?.length){
            this.stack2.push(this.stack1.pop())

            }
            return this.stack2.pop()
        }
        else{
            return -1
        }

    }
}

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */