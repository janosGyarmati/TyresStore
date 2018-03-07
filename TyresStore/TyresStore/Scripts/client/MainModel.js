var mainModel = null;
var basketModel = null;

function MainModel() {
    var _self = this;

    this.showLoadingTyres = false;
    basketModel = new BasketModel();
   basketModel.getItems();

    this.loadTyres = function (vehicleID, element ) {
        $.ajax({
            url: "Home/GetTyres",
            type: "get",
            data: { vehicleId: vehicleID },
            success: function (response) {
                displayTires(response, element );
            }
        })
    }

    this.updateCart = function(tyreId, description = "", price) {
        basketModel.addItem(tyreId, description, price);
    }
}