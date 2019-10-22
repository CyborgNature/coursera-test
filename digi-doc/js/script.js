$(function () { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });

  // In Firefox and Safari, the click event doesn't retain the focus
  // on the clicked button. Therefore, the blur event will not fire on
  // user clicking somewhere else in the page and the blur event handler
  // which is set up above will not be called.
  // Refer to issue #28 in the repo.
  // Solution: force focus on the element that the click event fired on
  $("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });

//document.getElementById("demo").innerHTML = document.forms[0].length;

});


// HEADACHE SECTION
  function HEAD() {
  var boxes = document.forms[0];
  var i;
  var j=0;
  var input = [1,0];
  for (i = 0; i < boxes.length-1; i++) {
    if (boxes[i].checked) {
      input[i+1] =1;
      j++;
    }
    else{
      input[i+1]=0;
    }
  }

  if(j==0){
  document.getElementById("demo").innerHTML = "Please First Select the Symptoms";  
  }
  
  else{
  //document.getElementById("order").value = "You ordered a coffee with: " + txt;
  document.getElementById("demo").innerHTML = input;
   
   var theta1=[];
   var theta2=[];
   var theta3=[];
   var theta4=[];
   
   var arr1 = [-0.63312892, 0.96080747,  0.5420075 ,  0.24668125, -0.21266846, -0.56541507,
        -0.33368245, -0.1560094 , -0.56541507, -0.33368245, -0.1560094 ,
        -0.46310626];
   var arr2 = [-0.6331289,-0.56541507, -0.33368245, -0.1560094 , -0.21266846,  0.96080747,
         0.5420075 ,  0.24668125, -0.56541507, -0.33368245, -0.1560094 ,
        -0.46310626];
   var arr3 = [-0.63312892,-0.56541507, -0.33368245, -0.1560094 , -0.21266846, -0.56541507,
        -0.33368245, -0.1560094 ,  0.96080747,  0.5420075 ,  0.24668125,
        -0.46310626];
   var arr4 = [-0.74773717,-0.53393912, -0.31667747, -0.14842566,  0.38064264, -0.53393912,
        -0.31667747, -0.14842566, -0.53393912, -0.31667747, -0.14842566,
         0.85408018];               

theta1.push(arr1);
theta2.push(arr2);
theta3.push(arr3);
theta4.push(arr4);

   


          function mult(input,theta){

           var z=0;

           for(var j=0;j<theta[0].length;j++){ // 31 


                   z=z+input[j]*theta[0][j];
                  // console.log("input["+j+"]: "+input[j]+" ,theta[0]["+j+"]:  "+theta[0][j])
             
               }
                      console.log(z);
               return z;
        
          }
     

     function sigmoid(z){
     
      return 1 / (1 + Math.pow(2.71828182846,-z))
    
    }


    function Predict(X,theta, threshold=0.5){
    if (sigmoid(mult(input,theta)) >= threshold){
        
        return 1;
      }
    else{
        return 0;
        
      }
    
    }

var predictions = [1,1,1,1];
    
     predictions[0] = mult(input,theta1);
     predictions[1] = mult(input,theta2);
     predictions[2] = mult(input,theta3);
     predictions[3] = mult(input,theta4);

  // document.getElementById("demo").innerHTML = predictions[0] +","+predictions[1]+","+predictions[2]+","+predictions[3];
 //  document.getElementById("demo").innerHTML =input;
    console.log("theta1 rows: "+theta1.length+" theta1 coloumn : "+theta1[0].length)
    console.log(" inputs  r: "+input.length+" input coloumn :"+ input[0].length)
  
  function getMaxValue(numbers){
       var a=0;
       var maxValue = numbers[0];
       var index=0;
       for(var i=0;i < numbers.length;i++){
           if(numbers[i] > maxValue){
               maxValue=numbers[i];
               index = i;
           }
       }
       return index;
   }
    
if(getMaxValue(predictions)==0){
    document.getElementById("demo").innerHTML = "SINUS HEADACHE";
  }
  else if (getMaxValue(predictions)==1) {
    document.getElementById("demo").innerHTML = "TENSION HEADACHE";
  }
  
  else if (getMaxValue(predictions)==2) {
    document.getElementById("demo").innerHTML = "MIGRANE";
  } 
            
  else if (getMaxValue(predictions)==3) {
     document.getElementById("demo").innerHTML = "CLUSTER HEADACHE";
  } 
           
     
   }
}

// DIABETES SECTION 
  function diabetes() {
  var boxes = document.forms[0];
  var i;
  var j=0;
  var input = [1,0];
  for (i = 0; i < boxes.length-1; i++) {
    if (boxes[i].value == 0.0) {
      input[i+1]=0;
    }
    else{
      
      input[i+1] =boxes[i].value;
      j=1;
    }
  }

  if(j==0){
  document.getElementById("demo").innerHTML = "Please First Select the Symptoms";  
  }
  
  else{
  
  document.getElementById("demo").innerHTML = input;
   

var theta  = [];

   var arr1 = [-5.41436225,1.18450696e-01,  2.47320538e-02, -1.53429081e-02,
         1.51117936e-03, -6.62914504e-04,  5.11633354e-02,
         8.44271243e-01,  9.90713205e-03];

theta.push(arr1);

var z=0.0;
   


          function mult(input,theta){
           for(var j=0;j<theta[0].length;j++){ // 31 


                   z=z+input[j]*theta[0][j];
                  // console.log("input["+j+"]: "+input[j]+" ,theta[0]["+j+"]:  "+theta[0][j])
             
               }
               return z;
          }


     function sigmoid(z){
     
      return 1 / (1 + Math.pow(2.71828182846,-z))
    
    }


    function Predict(X,theta, threshold=0.5){
    if (sigmoid(mult(input,theta)) >= threshold){
        return "Tested Positive";
      }
    else{
        return "Tested Negative";
      }
    
    }


   document.getElementById("demo").innerHTML = Predict(input,theta);
  
  }
}


// CARDIO SECTION
  function cardio() {
  var boxes = document.forms[0];
  var i;
  var j=0;
  var input = [1,0];
  for (i = 0; i < boxes.length-1; i++) {
    if (boxes[i].value == 0.0) {
      input[i+1]=0;
    }
    else{
      
      input[i+1] =boxes[i].value;
      j=1;
    }
  }

  if(j==0){
  document.getElementById("demo").innerHTML = "Please First Select the Symptoms";  
  }
  
  else{
  
  document.getElementById("demo").innerHTML = input;
   

var theta  = [];

   var arr1 = [-0.64327324,-0.04500116,  0.84545767,  0.61887153,  0.01239062,  0.00729528,
        -0.32546143,  0.46331741, -0.04488874,  0.46464082,  0.28301019,
         0.02284987,  0.89067244,  0.41165937];

theta.push(arr1);

var z=0.0;
   


          function mult(input,theta){
           for(var j=0;j<theta[0].length;j++){ // 31 


                   z=z+input[j]*theta[0][j];
                  // console.log("input["+j+"]: "+input[j]+" ,theta[0]["+j+"]:  "+theta[0][j])
             
               }
               return z;
          }


     function sigmoid(z){
     
      return 1 / (1 + Math.pow(2.71828182846,-z))
    
    }


    function Predict(X,theta, threshold=0.5){
    if (sigmoid(mult(input,theta)) >= threshold){
        return "Presence of Heart Disease";
      }
    else{
        return "Absence of Heart Disease";
      }
    
    }


   document.getElementById("demo").innerHTML = Predict(input,theta);
  
  }
}


// cancer SECTION
  function cancer() {
  var boxes = document.forms[0];
  var i;
  var j=0;
  var input = [1,0];
  for (i = 0; i < boxes.length-1; i++) {
    if (boxes[i].value == 0.0) {
      input[i+1]=0;
    }
    else{
      
      input[i+1] =boxes[i].value;
      j=1;
    }
  }

  if(j==0){
  document.getElementById("demo").innerHTML = "Please First Select the Symptoms";  
  }
  
  else{
  
  document.getElementById("demo").innerHTML = input;
   

var theta  = [];

   var arr1 = [0.35463393, 1.72216635,  0.08980484,  0.10598519, -0.00713449, -0.12840932,
        -0.33350116, -0.4993638 , -0.26508065, -0.26760721, -0.02149529,
         0.03647296,  0.98655322,  0.11708827, -0.10871711, -0.00796626,
         0.01056064, -0.02918783, -0.02818291, -0.0343139 ,  0.00856785,
         1.35833542, -0.2890393 , -0.24983343, -0.02012424, -0.2169652 ,
        -1.02747458, -1.44796574, -0.5337783 , -0.64856372, -0.10913524];

theta.push(arr1);

var z=0.0;
   


          function mult(input,theta){
           for(var j=0;j<theta[0].length;j++){ // 31 


                   z=z+input[j]*theta[0][j];
                  // console.log("input["+j+"]: "+input[j]+" ,theta[0]["+j+"]:  "+theta[0][j])
             
               }
               return z;
          }


     function sigmoid(z){
     
      return 1 / (1 + Math.pow(2.71828182846,-z))
    
    }


    function Predict(X,theta, threshold=0.5){
    if (sigmoid(mult(input,theta)) >= threshold){
        return "Benign";
      }
    else{
        return "Malginant";
      }
    
    }


   document.getElementById("demo").innerHTML = Predict(input,theta);
  
  }
}
