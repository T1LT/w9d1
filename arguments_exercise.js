function sum(){
    let arr = [].slice.call(arguments);
    return arr.reduce((acc, ele)=> acc+ele)
}

function sum2(...args){
    return args.reduce((acc, ele)=> acc+ele)
}
console.log(sum(1,2,3,4))
console.log(sum2(1,2,3,4))

Function.prototype.myBind = function(context, ...bindArgs){
    let that = this
    return function(...callArgs){
        return that.apply(context,[...bindArgs,...callArgs])
    }
}