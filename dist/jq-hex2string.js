(function($) {

  function h2s(hex){
    try{
      if(typeof hex !== 'string'){
        return 'input must be a valid string'
      }
      let str = '';
      for (var i = 0; i < hex.length; i += 2) {
        let v = parseInt(hex.substr(i, 2), 16);
        if (v) str += String.fromCharCode(v);
      }
      return str;
    } catch(err){
      if(err){return console.log(err)}
    }
  }

  function s2h(str){
    try{
      if(typeof str !== 'string'){
        return 'input must be a valid string'
      }
      let hex = '';
      for(var i=0;i<str.length;i++) {
        hex += '' + str.charCodeAt(i).toString(16);
      }
      return hex;
    }catch(err){
       if(err){return console.log(err)}
    }
  }

  //string to hex
  $.str2hex = function(str, cb){
    cb(s2h(str));
  }
  // hex to string
  $.hex2str = function(hex, cb){
    cb(h2s(hex));
  };
  //string to hex sync
  $.str2hexSync = function(str){
    return s2h(str);
  }
  // hex to string sync
  $.hex2strSync = function(hex){
    return h2s(hex);
  };

}(jQuery));
