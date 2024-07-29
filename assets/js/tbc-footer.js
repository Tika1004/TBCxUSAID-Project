'use strict'
const footerToggles = document.querySelectorAll('.footer__mobile__nav__dropdown__toggle');
const footerLinkContainers = document.querySelectorAll('.footer__mobile__nav__dropdown__links');

document.addEventListener('DOMContentLoaded', () => {
    footerToggles.forEach((toggle) => {
        toggle.addEventListener('click', () => {
            const dropdownLinks = toggle.nextElementSibling;
            const isOpen = dropdownLinks.classList.contains('active');

            footerLinkContainers.forEach((container) => {
                container.classList.remove('active');
                container.style.maxHeight = null;
            });
            if (!isOpen) {
                dropdownLinks.classList.add('active');
                dropdownLinks.style.maxHeight = `${dropdownLinks.scrollHeight}px`;
            }
            toggle.classList.toggle('active', !isOpen);
        });
    });
});
