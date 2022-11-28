function sum(){
    let arr = [].slice.call(arguments);
    return arr.reduce((acc, ele)=> acc+ele)
}

function sum2(...args){
    return args.reduce((acc, ele)=> acc+ele)
}


Function.prototype.myBind = function(context, ...bindArgs){
    let that = this
    return function(...callArgs){
        return that.apply(context,[...bindArgs,...callArgs])
    }
}


function curriedSum(numArgs) {
    let nums =[];
    return function _curriedSum(ele){
        nums.push(ele);

        if(nums.length < numArgs){
            return _curriedSum
        }else{
            return nums.reduce((acc, ele) => acc + ele)
        }
    }
}



Function.prototype.curry = function(numArgs){
        let that = this;
        let num = [];
        return function _curry(ele){
            num.push(ele);
            if (num.length < numArgs){
                return _curry;
            }else{
                return that(...num)
            }
        }
}