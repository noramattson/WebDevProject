function showDescription(descript){
    $("#description").html("Description: "+ descript);
}
function hideDescription(){
    $("#description").html("")
}

function validate(){
    var inputDOB = $("#birthday").val();
    var dob = new Date(inputDOB);
    if(dob >= new Date()){
        alert("Date of Birth is not valid. Date has to be before today.");
        return false;
    }
    var phone = $("#phone").val()
    if(isNaN(phone) || phone.length != 10){
        alert("Phone number is not valid or not in valid format.");
        return false;
    }
}
