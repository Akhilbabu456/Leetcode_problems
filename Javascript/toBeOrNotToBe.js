var value
var expect = function(val) {
    value=val
    let out={
        toBe: function(val){
            if(value===val){
                return true
            }else{
                throw new Error("Not Equal")
            }
        },
        notToBe: function(val){
             if(value!==val){
                return true
            }else{
                throw new Error("Equal")
            }
        }

    }
    return out
};
