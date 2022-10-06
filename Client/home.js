

let result;

jQuery.ajax({
    type: "POST",
    url: "./Server/server.php",
    dataType: 'json',
    data: {function:'somme' , arguments: [1,2]},
    success: function (obj,textstatus) {
        if ( !('error' in obj) ) {
            result = obj.result;
        } else {
            console.log(obj.error);
        }
    }
}).then(() => {
    console.log(result);
})

