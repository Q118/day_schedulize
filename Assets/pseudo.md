# Work Day Schedule

    WHEN I open the planner
    THEN the current day is displayed at the top of the calendar
        use moment.js to display date/time 
        include moment js cdn 
        on page load date displayed with moment js 
        var current time 
        var PresentBlock


  WHEN I click the save button for that timeblock
    THEN the text for that event is saved in local storage
        click event on save button - trigger to add to local storage
             on saveBtn event listener store the description
            var storeDescription
            localStorage setItem storeDescription
// local storage getItem 
$(function() {
    $(".saveBtn").on("click", function(){
      var value = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id")
      localStorage.setItem(time, value);
    }) ; 
  });


  WHEN I scroll down
    THEN I am presented with timeblocks for standard business hours
        already in the html code


 
    WHEN I view the timeblocks for that day
    THEN each timeblock is color coded to indicate whether it is in the past, present, or future
        adding a css class, past present 0r future based on the time 0f day (moment.js)
        html has all on past to start so will update the present and future



    WHEN I click into a timeblock
    THEN I can enter an event
        click event on the timeblock variable 


    WHEN I refresh the page
    THEN the saved events persist
        probably wiht local storage or Ajax

        the approach i followed was, have a seperate function to retrive 
        and display value of my local storage. and i called this function 
        as my first step in the script. so when ever my page loads and 
        th script is called the function executes first and displays value

        //inside script after code to display the current date
        onLoad();
        function onLoad() {
            //code to retrive from local storage and display on the page
            }

            There is a function called "each" in jQuery which works like a for loop on elements with common attribute. I used that to loop through to get id of the element which is our key to local variable. Once you get the id, using localStorage.getItem(id); you can retrieve the value stored for that time stamp in local storage. This is how i approached the scenario. But I am sure there can be other ways too.