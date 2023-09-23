const close = document.querySelector(".close");
const open = document.querySelector(".ham");
const menu = document.querySelector(".menu");
close.addEventListener("click", () => {
    menu.style.visibility = "hidden";
});
open.addEventListener("click", () => {
    menu.style.visibility = "visible";
});
var app = angular.module('Product', []);



app.controller('ProductController', function ProductController($scope, $rootScope, $http, $document) {
    $scope.productItem = [{
        itemid: 18,
        productName: "Women Clothes",
        price: "1800",
        photo: "Women1.jpg",
        info: "Wedding Wear Designer Silk Saree."

    },
    {
        itemid:1,
        productName: "Women Clothes",
        price: "800",
        photo: "Women2.jpeg"
    },

        {
            itemid: 2,
        productName: "Women Clothes",
        price: "1200",
        photo: "women3.jpg",
        info: "Wedding Wear Designer Silk Saree."

    },
    {
        itemid: 3,
        productName: "Women Clothes",
        price: "2200",
        photo: "women4.jpg",
        info: "Wedding Wear Designer Silk Saree."

    },
    {
        itemid: 4,
        productName: "Women Clothes",
        price: "3000",
        photo: "women8.jpg",
        info: "Wedding Wear Designer Silk Saree."

    },
    {
        itemid: 5,
        productName: "Women Clothes",
        price: "2500",
        photo: "women9.jpeg",
        info: "Wedding Wear Designer Silk Saree."
    },

    //Mens CLothes
    {
        itemid: 6,
        productName: "Mens CLothes",
        price: "1000",
        photo: "Boy1.jpeg",
        info: "Boys Plain Jeans Fasiionable"

    },
    {
        itemid: 7,
        productName: "Mens CLothes",
        price: "1200",
        photo: "boy2.jpeg",
        info: "Boys Plain Jeans Fasiionable"

    },
    {
        itemid: 8,
        productName: "Mens CLothes",
        price: "1500",
        photo: "boy3.jpg",
        info: "Boys Plain Jeans Fasiionable"

    },
    {
        itemid: 9,
        productName: "Mens CLothes",
        price: "2500",
        photo: "boy4.jpg",
        info: "Boys Plain Jeans Fasiionable"

    },
    {
        itemid: 10,
        productName: "Mens CLothes",
        price: "2200",
        photo: "boy5.jpeg",
        info: "Boys Plain Jeans Fasiionable"

    },
    {
        itemid: 11,
        productName: "Mens CLothes",
        price: "2600",
        photo: "boy6.jpeg",
        info: "Boys Plain Jeans Fasiionable"

    },

    //Kids CLothes
    {
        itemid: 12,
        productName: "Kids CLothes",
        price: "500",
        photo: "Boy1.jpeg",
        info:"Boys Formal Suits. Classic Fit Blazer"
    },
    {
        itemid: 13,
        productName: "Kids CLothes",
        price: "600",
        photo: "boy2.jpeg",
        info: "Boys Formal Suits. Classic Fit Blazer"
    },
    {
        itemid: 14,
        productName: "Kids CLothes",
        price: "800",
        photo: "boy3.jpg",
        info: "Boys Formal Suits. Classic Fit Blazer"
    },
    {
        itemid: 15,
        productName: "Kids CLothes",
        price: "1200",
        photo: "boy4.jpg",
        info: "Boys Formal Suits. Classic Fit Blazer"
    },
    {
        itemid: 16,
        productName: "Kids CLothes",
        price: "500",
        photo: "boy5.jpeg",
        info: "Boys Formal Suits. Classic Fit Blazer"
    },
    {
        itemid: 17,
        productName: "Kids CLothes",
        price: "1000",
        photo: "boy6.jpeg",
        info: "Boys Formal Suits. Classic Fit Blazer"
    }

    ];
    $scope.addeditems = [];


    $scope.addtocart = function (itemid,name, price) {
        var checkitem = ($scope.addeditems.find(x => x.itemid == itemid));
        if (checkitem == null) {
            var item = { itemid: itemid, name: name, price: price, quantity: 1, totalamount: price };

        }
        else {

        }

        var item = { itemid: itemid, name: name, price: price, quantity: 1, totalamount: price };
        $scope.addeditems.push(item);
        //var totalamount = $scope.addeditems.reduce((n, { totalamount }) => n + totalamount, 0)
        //alert(totalamount);
    };

    $scope.removeitem = function (itemid) {
        $scope.addeditems.splice($scope.addeditems.indexOf($scope.addeditems.find(id => id.itemid == itemid)), 1);
    }

 

});


