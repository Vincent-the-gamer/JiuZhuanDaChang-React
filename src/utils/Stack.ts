/**
 * 栈
 */
export default class Stack<T>{
    item: T[];
    constructor(){
        this.item = [];
    }

    setStack(contentArr: T[]){
        this.item = contentArr;
    }

    push(val: T){
        this.item.push(val);
    }

    pop(): T{
        const deleted: T = this.item[this.item.length - 1];
        this.item = this.item.slice(0, -1);
        return deleted;
    }

    size(): number{
        return this.item.length;
    }

    isEmpty(): boolean{
        return this.item.length < 1;
    }
}