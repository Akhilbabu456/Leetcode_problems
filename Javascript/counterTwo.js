let num
var createCounter = function(init) {
     num=init
   let out= {
      increment: function(){
          num= num+1
          return num
      },
      decrement: function(){
          num=num-1
          return num
      },
      reset: function(){
          num=init
          return num
      }
   }
   return out 
};
