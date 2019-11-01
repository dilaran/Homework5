$(document).ready(function () {
var dateString = moment().format("dddd, MMMM Do YYYY, h:mm a");
$("#currentDay").html(dateString);
var scheduledHours = [];
for (var hour = 6; hour < 24; hour++) {
    scheduledHours.push(moment({
       hour
    }).format('h  a'));
   $('.container').append(`<div class="row time-block" data-time=${hour}> 
    
         <div class="col-sm col-md-2 hour" data-time=${hour}> 
           <p class=dayHour>${moment({hour}).format('h  a')}</p>
         </div> 
    
          <div class="col-sm col-md-8 d-flex description" data-time=${hour}> 
           <textarea class=textArea></textarea> 
        </div> 
      
           <div class="col-sm col-md-2 saveBtn" data-time=${hour}>
           <i class="far fa-save fa-2x" id=icon></i>  
           </div>`);
}


//Check the hour to the hour represented in the HTML  
var m = moment();
$.each($(".time-block"), function (index, value) {
    let dateHour = $(value).attr("data-time");
    if (Number(dateHour) === m.hour()) {
        $(this).find("textarea").addClass('nastoyashee');
    } else if (Number(dateHour) < m.hour()) {
        $(this).find("textarea").addClass('proshlo');
    } else {
        $(this).find("textarea").addClass('budushee');
    }
});

var timeObject = {};
  if (localStorage.getItem('timeObject')) {
      timeObject = JSON.parse(localStorage.getItem('timeObject'));
  }else{
    timeObject = {
      '6': { time: "6", value: ""},
      '7': { time: "7", value: ""},
      '8': { time: "8", value: ""},
      '9': { time: "9", value: ""},
      '10':{ time: "10", value: ""},
      '11':{ time: "11", value: ""},
      '12':{ time: "12", value: ""},
      '13':{ time: "13", value: ""},
      '14':{ time: "14", value: ""},
      '15':{ time: "15", value: ""},
      '16':{ time: "16", value: ""},
      '17':{ time: "17", value: ""},
      '18':{ time: "18", value: ""},
      '19':{ time: "19", value: ""},
      '20':{ time: "20", value: ""},
      '21':{ time: "21", value: ""},
      '22':{ time: "22", value: ""},
      '23':{ time: "23", value: ""}

    };
  }

//set value of timeObject to equal the user input for each row 
$(".description").each(function(){
   $(this).find(".textArea").val(timeObject[$(this).attr("data-time")].value);

  });

 //save value to local storage on click
 $(document).on('click', '.saveBtn', function(event){
   var data = $(this).attr("data-time") 
   

     //set timeObject time attribute
     var timeValue = $(this).attr("data-time");

    //set timeObject value attribute
     var textValue = $(".time-block").find(".textArea").val();
     timeObject[timeValue].value = textValue;

  //save user input in each object to local storage
     localStorage.setItem('timeObject', JSON.stringify(timeObject));
 });
});