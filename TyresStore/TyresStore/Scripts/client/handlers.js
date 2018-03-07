window.onload = function () {
    mainModel = new MainModel();
}

$(".vehicleButton").focusin( function () {
    $(this).parent().parent().addClass("inverse");
})

$(".vehicleButton").focusout(function () {
    $(this).parent().parent().removeClass("inverse");
})

function displayTires(tyresHtml, that ) {

    var htmlContent = tyresHtml;

    if (window.matchMedia("(min-width: 700px)").matches) {
        /* the viewport is at least 700 pixels wide */
        $(".vehicles-table").addClass("w50");
        $(".vehicles-table").parent().addClass("wrapper");

        $(".tyres-table").addClass("w50");
        $(".tyres-table").css("display", "inline-block");

        $(".tyres-table .table-content").html("");
      

        if (tyresHtml.length > 2) {
            $(".tyres-table .table-content").append(htmlContent);
        } else {
            $(".tyres-table .table-content").append('<span class="inverse">No tyres are available for this car</span>');
        }


    } else {
        /* the viewport is less than 700 pixels wide */
        var tr = $('<tr></tr>');
        var td = $('<td></td>');

        td.append(htmlContent);

        tr.append(td);

        if (tyresHtml.length > 2) {

            
                $(that).parent().parent().after(tr);
           
        } else {
            $(".tyres-table .table-content").append('<span class="inverse">No tyres are available for this car</span>');
        }

        

    } 
   

}

$(document).on("click", "#back-button", function () {


    $(".vehicles-table").removeClass("w50");
    $(".vehicles-table").parent().removeClass("wrapper");

    $(".tyres-table").css("display", "none");
});

function updateCartCount() {
    $(".cart-button").html('<i class="fa fa-shopping-cart"></i>'+"(" + basketModel.basketItems.length + ")");
}

   