// ==UserScript==
// @name         web eSheep
// @namespace    https://luismayo.com/
// @version      0.1
// @description  Add a sheep on all your pages
// @author       LuisMayo
// @include      http*://*
// @icon         http://esheep.petrucci.ch/favicon.gif
// @grant        GM.xmlHttpRequest
// @connect      adrianotiger.github.io
// @require      https://adrianotiger.github.io/web-esheep/dist/esheep.min.js
// ==/UserScript==

(function() {
    'use strict';
    window.addEventListener("load", function() {
        var sheep = new eSheep({allowPets: 'all'});
        GM.xmlHttpRequest({
            method: "GET",
            url: "https://adrianotiger.github.io/desktopPet/Pets/green_sheep/animations.xml",
            onload: function(response) {
                var reader = new FileReader();
                reader.readAsDataURL(new Blob([response.response]));
                reader.onloadend = function() {
                    var base64data = reader.result;
                    sheep.Start(base64data);
                }
            }
        });
    });
})();
