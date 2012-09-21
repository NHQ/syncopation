var sync = module.exports = function(every, forHowLong, offbeat){
  var e = every
    , l = forHowLong || e / 4
    , offbeat = offbeat || 0
    , fn = function(t,i){
        if(t % e < l) return true
        return false  
      }
    , Switch = true
    ;

  if(offbeat){
    if(typeof offbeat == 'number'){
      fn = function(t, i){
        var x = t % e;
        if(x >= offbeat && x < offbeat + l) return true
        return false
      }
    }
    if(Array.isArray(offbeat)){
      fn = function(t, i){
        var x = t % e , y = 0;
        if(x  >= offbeat[0] + y && x < offbeat[0] + l + y) return Switch = true;
        if(x > (offbeat[0] + y) && Switch){
	  var z = offbeat.shift();
	  y += z;
	  offbeat.push(z);
	  Switch = false;
	  return false;
	};
        return false
      }
    }
  }

  return fn
}
