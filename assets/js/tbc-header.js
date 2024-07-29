'use strict';

const menuItemToggle = document.getElementById('menuToggle');
const headerMob = document.querySelector('.header__mobile');
const dropdownToggle = document.querySelectorAll('.header__mobile__nav__dropdown__toggle');
const dropdownLinkContainers = document.querySelectorAll('.header__mobile__nav__dropdown__links');
const dropdowns = document.querySelectorAll('.header__desktop__nav__dropdown');
const dropdownBackground = document.querySelector('.header__dropdown__bg');

document.addEventListener('DOMContentLoaded', () => {
    menuItemToggle.addEventListener('click', () => {
        menuItemToggle.classList.toggle('active');
        headerMob.classList.toggle('active');
    });

    dropdownToggle.forEach((toggle) => {
        toggle.addEventListener('click', () => {
            const dropdownLinks = toggle.nextElementSibling;
            const isOpen = dropdownLinks.classList.contains('active');

            dropdownLinkContainers.forEach((container) => {
                if (container !== dropdownLinks) {
                    container.classList.remove('active');
                    container.style.maxHeight = null;
                }
            });

            dropdownLinks.classList.toggle('active', !isOpen);
            toggle.classList.toggle('active', !isOpen);
            dropdownLinks.style.maxHeight = isOpen ? null : `${dropdownLinks.scrollHeight}px`;
        });
    });

    dropdowns.forEach((dropdown) => {
        dropdown.addEventListener('click', (event) => {
            event.stopPropagation();

            dropdowns.forEach((otherDropdown) => {
                if (otherDropdown !== dropdown) {
                    const otherDropdownContent = otherDropdown.querySelector('.dropdown-content');
                    const otherDropdownLine = otherDropdown.querySelector('.header__desktop__dropdown__nav__line');
                    otherDropdownContent.style.display = 'none';
                    otherDropdownLine.classList.remove('active');
                }
            });

            const dropdownContent = dropdown.querySelector('.dropdown-content');
            const dropdownLine = dropdown.querySelector('.header__desktop__dropdown__nav__line');
            const dropDownVisibility = dropdownContent.style.display === 'flex';

            dropdownContent.style.display = dropDownVisibility ? 'none' : 'flex';
            dropdownLine.classList.toggle('active', !dropDownVisibility);

            dropdownBackground.style.display = dropDownVisibility ? 'none' : 'block';
        });
    });

    document.addEventListener('click', () => {
        dropdowns.forEach((dropdown) => {
            dropdown.querySelector('.dropdown-content').style.display = 'none';
            dropdown.querySelector('.header__desktop__dropdown__nav__line').classList.remove('active');
        });

        dropdownBackground.style.display = 'none';
    });
});
Z