window.onload = function () {
    mainModel = new MainModel();
}

$(".vehicleButton").on("click", function () {
    $(this).parent().parent().parent().find("tr").removeClass('inverse');
    $(this).parent().parent().addClass("inverse");
})

var toggleMobile = false;

function displayTires(tyresHtml, that ) {

    var htmlContent = tyresHtml;
    $(".tyres-table .table-content").html("");

    if (window.matchMedia("(min-width: 700px)").matches) {
        /* the viewport is at least 700 pixels wide */
        $(".vehicles-table").parent().addClass("wrapper");
        $(".vehicles-table").animate({
            width: "50%",
            duration: 100
        }, {
                complete: function ( ) {
                    
                    
                   
                    if (tyresHtml.length > 2) {
                        $(".tyres-table").css({ "display": "inline-block", "width": "50%" }).hide();

                       
                        $(".tyres-table .table-content").append(htmlContent);
                        $(".tyres-table").fadeIn("slow");
                    } else {
                        $(".tyres-table .table-content")
                            .append('<table class="inverse table h-100"><tbody><tr><td colspan="10" class="text-center align-middle">No coresponding tyres available for seletced car</td></tr></tbody></table>')
                            .fadeIn("slow")
                            .css("height", "100%");
                        $(".tyres-table").css("padding-bottom", "16px");
                    }
                }
        });
   

    } else {
        /* the viewport is less than 700 pixels wide */
        toggleMobile = !toggleMobile;

        if (toggleMobile) {

            $div = $('<div class="mobile-wrap"></div>');
            $tr = $('<tr class="table-row"></tr>');
            $td = $('<td colspan="12" style="padding-top: 0;"></td>');
            $(".table-row").html("");
            $div.append(htmlContent);
            $td.append($div);
            $tr.append($td);

            if (tyresHtml.length > 2) {


                $(that).parent().parent().after($tr);


                $(".mobile-wrap").hide();

                $(".mobile-wrap").slideDown(2000);


            } else {
                $(".tyres-table .table-content").append('<span class="inverse">No tyres are available for this car</span>');
            }
        } else {
            $(".mobile-wrap").slideUp(2000);
           
        }       

    } 
   

}

$(document).on("click", "#back-button", function () {

    if (window.matchMedia("(min-width: 700px)").matches) {

        $(".tyres-table").fadeOut("fast", function () {
            $(".vehicles-table tr").removeClass('inverse');
            $(".vehicles-table").parent().removeClass("wrapper");
            $(".vehicles-table").animate({
                width: "100%",
                duration: 100
            });
        });
    }
   
});

function updateCartCount() {
    if (basketModel.basketItems.length) {
        $(".cart-button").html('<i class="fa fa-shopping-cart"></i>' + "(" + basketModel.basketItems.length + ")");
    } else {
        $(".cart-button").html('<i class="fa fa-shopping-cart"></i>' + "(" + basketModel.basketItems.length + ")");
    }
}   

   