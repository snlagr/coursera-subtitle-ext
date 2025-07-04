document.addEventListener('keydown', function(event) {
    // Check if the 'c' key was pressed without Ctrl/Cmd and we are not typing in an input field.
    if (event.key.toLowerCase() === 'c' && !event.ctrlKey && !event.metaKey && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {

        // Prevent any default browser action for the 'c' key
        event.preventDefault();

        // Find the main button that opens the subtitles/captions menu.
        const captionsButton = document.querySelector('.vjs-subs-caps-button .vjs-button');

        if (!captionsButton) {
            console.error("Could not find the captions button.");
            return;
        }

        // Click the button to open the menu.
        captionsButton.click();

        // Find the menu item for 'English' and the one for 'captions off'.
        const menuItems = document.querySelectorAll('.vjs-subs-caps-button .vjs-menu-item');
        const englishOption = Array.from(menuItems).find(item => item.innerText.includes('English'));
        const offOption = Array.from(menuItems).find(item => item.innerText.includes('captions off'));

        if (!englishOption || !offOption) {
            console.error("Could not find subtitle language options.");
            // Click again to close the menu if it's still open
            if (!document.querySelector('.vjs-subs-caps-button .vjs-menu.vjs-hidden')) {
                captionsButton.click();
            }
            return;
        }

        // Find out which option is currently selected.
        const selectedOption = document.querySelector('.vjs-subs-caps-button .vjs-menu-item.vjs-selected');

        // If English is not currently selected, click it. Otherwise, turn captions off.
        if (selectedOption && selectedOption.innerText.includes('English')) {
            offOption.click();
            console.log("Subtitles Off");
        } else {
            englishOption.click();
            console.log("Subtitles On (English)");
        }

    }
});
