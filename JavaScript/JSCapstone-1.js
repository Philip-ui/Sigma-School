function missingLetter(str) {   
    let begin = str.charCodeAt(0) + 1;
    let lost = ''; 
    for(var i = 1; i < str.length; i++){
          if(str.charCodeAt(i) !== begin){
        lost += String.fromCharCode(begin);
        begin++; 
      }
      begin ++;
    }
    if(lost == ''){
      lost = undefined;
    }    
    return lost;
  }
  
  console.log(missingLetter("abce"));
  console.log(missingLetter("abcdefghjklmno"));
  console.log(missingLetter("abcdefghijklmnopqrstuvwxyz"));
  console.log(missingLetter("stvwx"));
  console.log(missingLetter("bcdf"));