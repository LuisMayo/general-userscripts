// ==UserScript==
// @name         Elevator everwhere
// @namespace    https://luismayo.com/
// @version      0.1
// @description  Add Elevator.js to any page
// @author       LuisMayo
// @include      http*://*
// @require      https://raw.githubusercontent.com/tholman/elevator.js/master/elevator.min.js
// @grant        GM_addStyle
// @connect      raw.githubusercontent.com
// ==/UserScript==

(function() {
    'use strict';
    GM_addStyle(`.elevator-container {
      background-color: beige;
      position: fixed;
      bottom: 15px;
      right: 15px;
      width: 89px;
    }

    .elevator {
      text-align: center;
      cursor: pointer;
      margin: auto;
    }

    .elevator:hover {
      opacity: 0.7;
    }

    .elevator svg {
      width: 40px;
      height: 40px;
      display: block;
      margin: auto;
      margin-bottom: 5px;
    }
`)
    window.addEventListener("load", () => {
        const container = document.createElement('div');
        container.classList.add('elevator-container');
        container.innerHTML = `
            <div class="do-the-thing">
                <div class="elevator">
                    <svg class="sweet-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve" height="100px" width="100px">
                        <path d="M70,47.5H30c-1.4,0-2.5,1.1-2.5,2.5v40c0,1.4,1.1,2.5,2.5,2.5h40c1.4,0,2.5-1.1,2.5-2.5V50C72.5,48.6,71.4,47.5,70,47.5z   M47.5,87.5h-5v-25h5V87.5z M57.5,87.5h-5v-25h5V87.5z M67.5,87.5h-5V60c0-1.4-1.1-2.5-2.5-2.5H40c-1.4,0-2.5,1.1-2.5,2.5v27.5h-5  v-35h35V87.5z"/>
                        <path d="M50,42.5c1.4,0,2.5-1.1,2.5-2.5V16l5.7,5.7c0.5,0.5,1.1,0.7,1.8,0.7s1.3-0.2,1.8-0.7c1-1,1-2.6,0-3.5l-10-10  c-1-1-2.6-1-3.5,0l-10,10c-1,1-1,2.6,0,3.5c1,1,2.6,1,3.5,0l5.7-5.7v24C47.5,41.4,48.6,42.5,50,42.5z"/>
                    </svg>
                    Back to Top
                </div>
            </div>`
        document.body.appendChild(container);
        var elevator = new Elevator({
            element: document.querySelector('.elevator-container'),
            mainAudio: 'https://raw.githubusercontent.com/tholman/elevator.js/master/demo/music/elevator.mp3',
            endAudio: 'https://raw.githubusercontent.com/tholman/elevator.js/master/demo/music/ding.mp3'
        });
    });
})();
