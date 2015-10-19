function Book(){
    var name = '';
    Object.defineProperties(this, 'name', {
      get: function() {

      }  ,
        set: function(val){
            console.log(val);
            name = val;
        }
    });
}