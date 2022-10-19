// current time

var today = moment();
$('#currentDay').text(today.format("MMMM Do YYYY, h:mm:ss a"));

var timeBlockEl = document.querySelector('.container');
var saveBtn = document.querySelectorAll('saveBtn')

function blockColor() {
    var currentHour = moment().hours();

    $('.row').each(function () {
        var hour = parseInt($(this).attr("class").split(' ')[1]);
      
        var key = $(this)[0].classList[1]
        var saveNote = JSON.parse(localStorage.getItem(key))
        
        $(this)[0].children[1].value = saveNote

        if (currentHour < hour) {
            $(this).addClass('future');
        } else if (currentHour === hour) {
            $(this).addClass('present')
        } else {
            $(this).addClass('past')
        }
    })
};
blockColor();



// storing the data into the local storage
function storedTask() {
    $('.saveBtn').each(function () {
        $(this).on('click', function () {
            var value = $(this)[0].parentElement.children[1].value
            var key = $(this)[0].parentElement.classList[1]
            console.log($(this))
            localStorage.setItem(key,value);
        })
    })

}
storedTask();