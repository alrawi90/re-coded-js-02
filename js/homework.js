var obj={
    decode:()=>{

        var secret=$('body').html().match(/(<span)\s(hidden="">)[\w\W\D\d](<\/span>)/gi)
        secret=secret.join("").replace(/hidden=""/g,'')
        $('body').html(secret)
    },
    encode:(str)=>{
     var salt="/.,mnbvcxzasdfghjkl;'][poiuytrewq1234567890-=+_)(*&^%$#@!~?&".split("")
     str=str.split('');
     var encoded =str.map(s=>{
      var random=()=>{
        var r="";
        for(var i=0 ;i<100;i++){
            r+=`<span>${salt[Math.floor(Math.random()*salt.length)]}</span>`
            }
            return r;
         }
      return `<span hidden="">${s}</span>${random()}`
       });
     // console.log(encoded.join(""))
      $('body').html(encoded.join(""))

      }
     }
$(function () {

obj.decode()
})