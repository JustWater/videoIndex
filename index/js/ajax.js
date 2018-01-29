jQuery.ajaxPost = function (url, data, successfn, isLoadingShow) {
    $.ajax({
        url: url,
        contentType: "application/json; charset=utf-8",
        type: 'POST',
        data: data,
        success: function (d) {
            //called when successful
            successfn(d);
            console.log(data);
        },
        error: function (e) {
            //called when there is an error
            //console.log(e.message);
            console.log(4);
        },
        beforeSend: function (jqXHR, settings) {
            if (isLoadingShow == undefined || isLoadingShow) {
                // $('#loading').show();
                // $('#loading_gif').show();
                console.log(1)
            }
        },
        complete: function (jqXHR, status) {
            if (isLoadingShow == undefined || isLoadingShow) {
                // $('#loading').hide();
                // $('#loading_gif').hide();
                console.log(2)
            }
        },

    });
};