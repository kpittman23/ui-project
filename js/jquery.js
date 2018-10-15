$(document).ready(function () {
    $(".nav-tabs a").click(function () {
        $('.nav-tabs a').removeClass('active');
        $(this).addClass('active');
        $(this).tab('show');
    });
});



$(document).ready(function () {
    $('#managerId').focusout(function () {
        var value = $("#managerId").val();
        if (value.length == 4 && Math.floor(value) == value && $.isNumeric(value)) {
            $("#managerId").addClass('is-valid');
            $("#managerId").removeClass('is-invalid');
        } else {
            $("#managerId").removeClass('is-valid');
            $("#managerId").addClass('is-invalid');
        }
    });
});

$(document).ready(function () {
    $('#username').focusout(function () {
        var value = $("#username").val();
        if (value.length >= 5 && value.length <= 15) {
            $("#username").addClass('is-valid');
            $("#username").removeClass('is-invalid');
        } else {
            $("#username").removeClass('is-valid');
            $("#username").addClass('is-invalid');
        }
    });
});

$(document).ready(function () {
    $('#email').focusout(function () {
        var value = $("#email").val();
        if (value.includes('@')) {
            $("#email").addClass('is-valid');
            $("#email").removeClass('is-invalid');
        } else {
            $("#email").removeClass('is-valid');
            $("#email").addClass('is-invalid');
        }
    });
});