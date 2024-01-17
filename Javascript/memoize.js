function memoize(fn) {
    let cache={}
    return function(...args) {
        const key= JSON.stringify(args)
        if(cache[key]!==undefined){
            return cache[key]
        }else{
        const result=fn(...args)
        cache[key]=result
        return result
        }
    }
}
