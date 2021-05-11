$(document).ready(function () {
    $('#hideDiv').click(function () { 
        $('#coloredDiv').hide();
    });
    $('#showDiv').click(function () { 
        $('#coloredDiv').show();
    });
    $('#changeColorDiv').click(function () { 
        $('#coloredDiv').css('background-color','yellow');
    });
    $('#backColor').click(function () { 
        $('#coloredDiv').css('background-color' , '#622bc9');
    });
    $('#height').click(function () { 
        $('#coloredDiv').css('height' , '70px').toggle();
    });
}); 