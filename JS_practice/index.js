
        function Generate(){
            var names=document.getElementById('name').value;
        
                var randName = names[Math.floor(Math.random() * names.length)];
        
                document.getElementById("result").innerHTML=names[randName];
           }

