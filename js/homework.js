var globalCounter;
var obj={
        decode:()=>{
            try {
              $('body').html($('body').html().match(/(<span)\s(hidden="">)[\w\W\D\d](<\/span>)/gi).join("").replace(/hidden=""/g,''))
            }
            catch(err) {
                console.log("Are you trying to decode unencoded text ?")
            }
        },
        encode:(str)=>{
            globalCounter=1
            var salt="/.,mnbvcxzasdfghjkl;'][poiuytrewq1234567890-=+_)(*&^%$#@!~?&".split("")
            str=str.split('');
            
            var encoded =str.map(s=>{
                var random=()=>{
                    var r=""; 
                    var rand=Math.floor((Math.floor(Math.random() * 100) + 25))
                    for(var i=1 ;i <= rand ;i++)
                        {    
                            r+=`<span>${salt[Math.floor(Math.random()*salt.length)]}</span>`
                            globalCounter % 100===0 ? r+="<br>": null
                            globalCounter++
                        }            
                    return r;
                    }   
                return `<span hidden="">${s}</span>${random()}`        
            });    
            $('body').html(encoded.join(""))
        }
    }
$(function () {
    console.log("Use `obj.encode('your secret message')` to encode and `obj.decode()` to decode.")
    obj.decode()
})

