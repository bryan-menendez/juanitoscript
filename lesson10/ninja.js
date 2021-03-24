$(document).ready(function () {
    var request = new XMLHttpRequest();
    request.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
    request.onload = function(){
        var data = JSON.parse(request.responseText);
        console.log(data);
    }
    request.send();
});

function submitForm(form){
    var url = form.attr("action");
    var formData = {};
    $(form).find("input[name]").each(function (index, node) {
        formData[node.name] = node.value;
    });
    $.post(url, formData).done(function (data) {
        alert(data);
    });
}



var async_function = async function () {
    console.log('async function called');

    const first_promise = await first_function();
    console.log("After awaiting for 2 seconds," +
        "the promise returned from first function is:");
    console.log(first_promise);

    const second_promise = await second_function();
    console.log("After awaiting for 4 seconds, the" +
        "promise returned from second function is:");
    console.log(second_promise);
}
