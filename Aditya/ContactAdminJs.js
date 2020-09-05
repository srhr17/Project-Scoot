function validate(){ 
   
    var num = document.getElementById('mobile').value;  
    var email = document.getElementById('email').value;  
    var atposition=email.indexOf("@");  
    var dotposition=email.lastIndexOf("."); 
   
    if (isNaN(num)){  
      alert("Enter numeric");  
    }

    else if(num.length!=10){  
      alert("Invalid number");
    }  
    
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length){  
       alert("Please enter a valid e-mail address");  
    }  

}