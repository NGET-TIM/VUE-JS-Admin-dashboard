'use strict';

/* ===== Enable Bootstrap Popover (on element  ====== */

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function(popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
})

/* ==== Enable Bootstrap Alert ====== */
var alertList = document.querySelectorAll('.alert')
alertList.forEach(function(alert) {
    new bootstrap.Alert(alert)
});

$(document).ready(function() {
    /* ===== Responsive Sidepanel ====== */
    const sidePanelToggler = $('#sidepanel-toggler');
    const sidePanel = $('#app-sidepanel');
    const sidePanelDrop = $('#sidepanel-drop');
    const sidePanelClose = $('#sidepanel-close');

    window.addEventListener('load', function() {
        responsiveSidePanel();
    });

    window.addEventListener('resize', function() {
        responsiveSidePanel();
    });


    function responsiveSidePanel() {
        let w = window.innerWidth;
        if (w >= 1200) {
            // if larger 
            //console.log('larger');
            $('#app-sidepanel').removeClass('sidepanel-hidden');
            $('#app-sidepanel').addClass('sidepanel-visible');

        } else {
            // if smaller
            //console.log('smaller');
            $('#app-sidepanel').removeClass('sidepanel-visible');
            $('#app-sidepanel').addClass('sidepanel-hidden');
        }
    };

    $('#sidepanel-toggler').click(function() {
        if ($(sidePanel).hasClass('sidepanel-visible')) {
            $('#app-sidepanel').removeClass('sidepanel-visible');
            $('#app-sidepanel').addClass('sidepanel-hidden');

        } else {
            $('#app-sidepanel').removeClass('sidepanel-hidden');
            $('#app-sidepanel').addClass('sidepanel-visible');
        }
    });
    $('#sidepanel-close').click(function(e) {
        e.preventDefault();
        $('#sidepanel-toggler').click();
    });

    $(sidePanelDrop).on('click', (e) => {
        $('#sidepanel-toggler').click();
    });



    /* ====== Mobile search ======= */
    const searchMobileTrigger = document.querySelector('.search-mobile-trigger');
    const searchBox = document.querySelector('.app-search-box');

    searchMobileTrigger.addEventListener('click', () => {

        searchBox.classList.toggle('is-visible');

        let searchMobileTriggerIcon = document.querySelector('.search-mobile-trigger-icon');

        if (searchMobileTriggerIcon.classList.contains('fa-search')) {
            searchMobileTriggerIcon.classList.remove('fa-search');
            searchMobileTriggerIcon.classList.add('fa-times');
        } else {
            searchMobileTriggerIcon.classList.remove('fa-times');
            searchMobileTriggerIcon.classList.add('fa-search');
        }



    });

});