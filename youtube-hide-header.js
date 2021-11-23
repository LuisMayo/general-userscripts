// ==UserScript==
// @name         Youtube hide header
// @namespace    https://luismayo.com
// @version      0.1
// @description  Hides youtube header when switching to theater mode (pressing t key)
// @author       LuisMayo
// @match        https://www.youtube.com/watch*
// @icon         https://www.google.com/s2/favicons?domain=youtube.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.addEventListener("keydown", (ev) => {
        if (ev.key === 't') {
            setTimeout(() => {
                document.getElementById('masthead-container').style.display =
                    document.getElementById('player-container-inner').childElementCount == 0 ? 'none' : 'block';
            }, 5);
        }
    });
})();
