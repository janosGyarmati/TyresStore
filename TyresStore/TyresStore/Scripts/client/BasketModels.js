function BasketModel() {
    var _self = this;
    this.basketItems = [];

    this.addItem = function (tyreid, description, price) {
        $.ajax({
            url: "Home/AddTyreToBasket",
            type: "post",
            data: { tyreId: tyreid, description: description, price: price },
            success: function (response) {
                if (!response.exists) {
                    _self.basketItems.push(tyreid);
                    updateCartCount();
                }
                else
                    alert("Tyre already added");
            }
        });
    }

    this.getItems = function () {
        $.ajax({
            url: "Home/GetBasketItems",
            type: "get",
            success: function (response) {
                _self.basketItems = response;

                updateCartCount();
            }

        })

    }

    this.getBasketHtml = function () {
        $.ajax({
            url: "Home/GetBasketHtml",
            type: "get",
            success: function (response) {
                if (response) {
                    $.colorbox({
                        html: response,
                        open: true,
                        iframe: false,
                        width: "70%",
                        height: "80%",
                        onComplete: function () {
                            $('html').css("overflow", "hidden");
                        },

                    });
                }
            }

        })
    }

    this.deleteItem = function (itemId) {
        $.ajax({
            url: "Home/RemoveItemFromBasket",
            type: "get",
            data: { itemId: itemId },
            success: function (response) {
                if (response.length >2) {
                    $("#cboxContent").find('.table').html(response);

                } else {
                    $.colorbox.close();
                }
                _self.basketItems.pop();
                updateCartCount();
            }

        })
    }



}