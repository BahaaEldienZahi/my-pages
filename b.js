// document.querySelector("#fcc_foldout_toggler_background").style.background="#fcc";
// function surveyed(e){
//   console.log("submitting...");
//   document.querySelector("main").classList.add("main-submitted");
//   let improvement=[];
//   document.querySelectorAll("input[type='checkbox']:checked").forEach((elem)=>{
//     improvement.push(elem.value);
//   });
//   let data={
//     name:document.querySelector("#name").value,
//     email:document.querySelector("#email").value,
//     age:document.querySelector("#number").value,
//     source:document.querySelector("#dropdown").value,
//     recommend:document.querySelector("input[type='radio']:checked").value,
//     improvement:improvement,
//     suggestions:document.querySelector("#suggestions").value
//   };
//   document.querySelector("main").innerHTML="<h1 aria-live='polite'>Submitting....</h1>";
//   console.log(data);
//   $ajax("POST","https://poll-in.herokuapp.com/survey",data,(response)=>{
//     document.querySelector("main").innerHTML="<h1 aria-live='polite'>"+response+"</h1>";
//   },()=>{
//     document.querySelector("main").innerHTML="<h1 aria-live='polite'>Error</h1>";
//   })
//   return false;
// }

// function $ajax(method,url,data,callback1,callback2){
//     let xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//     callback1(this.responseText);
//     }
//     else if(this.readyState==4&&this.status!=200){
//     callback2();
//     }
//   };
//   xhttp.open(method, url, true);
//   if(method.toUpperCase()=="POST"){
//     xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//     let dataToSend="";
//     for (var key in data) {
//         if (data.hasOwnProperty(key)) {
//             dataToSend+=key+"="+data[key]+"&";
//         }
//     }
//     dataToSend=dataToSend.substr(0,dataToSend.length-1);
//     console.log(dataToSend);
//     xhttp.send(dataToSend);
// }
// else if(method.toUpperCase()=="GET"){
//     xhttp.send();
// }
// }