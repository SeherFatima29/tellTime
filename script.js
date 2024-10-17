// let Day= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

// let dayNow=new Date()
// console.log(Day[dayNow.getDay()]);


// function telltime(){
//    let time=new Date()
//    // alert("time: " + theHr + ":" + theMin) 
//    alert(time.getTime)
// // console.log(time);

// }
// let date=new Date()
// console.log(date.getDay());

// let day=date.getTime()
// // console.log(day.getTime());
// console.log(day);


// let date=new Date()
// console.log(date.getHours());

// function tellTime() {
//    let millsSince = date.getTime();
//    console.log(millsSince);
      
// }



function tellTime() {   
     var now = new Date();
     var theHr = now.getHours();
     var theMin = now.getMinutes();
     alert("Current time: "+ theHr + ":" + theMin);
    }
    