window.onload = function () {
    mainModel = new MainModel();
}

function displayTires(tyresHtml) {
    console.log("s-a ape;at");
    $(".vehicles-table").addClass("w40");
    $(".tyres-table").addClass("w40");
    $(".right-icon").addClass("visible");

    $(".tyres-table .table-content").html("");
    var htmlContent = tyresHtml;

    if (tyresHtml.length > 0) {
        $(".tyres-table .table-content").append(htmlContent);
    } else {
        $(".tyres-table .table-content").append('<span class="no-data-message">No tyres are available for this car</span>');
    }



}
