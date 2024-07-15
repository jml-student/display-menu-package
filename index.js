export function displayMenu(button, menu) {
    button.addEventListener('click', () => {
        if (menu.style.visibility === 'hidden') {
            menu.style.visibility = 'visible';
        } else if (menu.style.visibility === 'visible') {
            menu.style.visibility = 'hidden';
        }
    });
}
