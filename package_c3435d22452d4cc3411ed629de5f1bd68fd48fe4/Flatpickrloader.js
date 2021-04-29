﻿(function () {
    const head = document.getElementsByTagName("head")[0];

    // Load Flatpickr CSS from CDN
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://npmcdn.com/flatpickr/dist/themes/material_blue.css";
    head.appendChild(link);
})();