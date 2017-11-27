(function () {
    'use strict';

    angular
        .module('manulifeTestApp')
        .config(materialDesignConfig);

    function materialDesignConfig() {
        // Initialize material design
        $.material.init();
    }
})();
