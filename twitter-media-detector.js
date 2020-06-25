// ==UserScript==
// @name         Twitter media Warning
// @namespace    https://github.com/LuisMayo/general-userscripts
// @version      0.1
// @description  Add media Warning to Twitter
// @author       You
// @match        https://twitter.com/*
// @grant        GM.xmlHttpRequest
// ==/UserScript==

(function() {
    'use strict';

    function main() {
        const videos = document.getElementsByTagName('video');
        for (const video of videos) {
            // Go up to the nearest antecessor and get links
            const links = Array.from(video.closest('article').getElementsByTagName('a'));
            if (links && links.length > 0) {
                const link = links.find(item => item.href.includes('status'));
                const id = link.href.match(/\/\d+/)[0].substring(1)
                const request = GM.xmlHttpRequest({method: "GET", url: 'https://mediadetector.ddns.net/tweet/' + id, onload: (response) => {
                    const arr = JSON.parse(response.responseText);
                    if (arr && arr.length > 0) {
                        alert('DETECTADO');
                    }
                }});
            }
        }
    }
    document.addEventListener('scroll', main);
})();
