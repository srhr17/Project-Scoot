function myFunction() {

    const fd = document.getElementById('fromDate').value; 
    const td = document.getElementById('toDate').value; 

    const ft = document.getElementById('fromTime').value; 
    const tt = document.getElementById('toTime').value; 

    var y = new String(ft);
    var y1 = new String(tt);
    
    if (fd == td){
      if(y > y1){
        alert("Invalid TO TIME");
       }           
     }

    else if (new Date(fd).toJSON().slice(0,10) > (new Date(td).toJSON().slice(0,10))){
      alert("Invalid TO DATE");
    }

  }


function Filevalidation() { 
    const fi = document.getElementById('file'); 
    if (fi.files.length > 0) { 
        for (const i = 0; i <= (fi.files.length - 1); i++) { 

            const fsize = fi.files.item(i).size; 
            const file = Math.round((fsize / 1024)); 
            if (file >= 4096) { 
                alert( 
                  "Large file size, please select a file less than 4mb");
                   fi.value = '';
            }  
        } 
    } 
} 


