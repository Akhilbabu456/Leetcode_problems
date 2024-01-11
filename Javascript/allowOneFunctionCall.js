var once = function(fn) {
    let called=1
    return function(...args){
        if(called==1){
            called++
            let value= fn(args)
            return called,value
        }else{
            return undefined
        }
    }
};
