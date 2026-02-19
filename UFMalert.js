// mGeek.in Copyright (c) 2024. All rights reserved.

function initializeUFMMonitoring() {

    let isAlertActive = false;
    let lastTriggerTime = 0;
    const COOLDOWN = 2000; // 2 seconds

    function triggerUFM(actionType) {
        const now = Date.now();

        // Prevent infinite loop & rapid retrigger
        if (isAlertActive || (now - lastTriggerTime < COOLDOWN)) {
            return;
        }

        isAlertActive = true;
        lastTriggerTime = now;

        const ufmMessage = `Your action is recorded under UFM.
Action Detected: ${actionType}
Avoid:
- Tab switching
- Text selection
- Copy/Paste
- Right click`;

        console.log("UFM Triggered:", actionType);

        alert(ufmMessage);

        // Release lock after alert closes
        setTimeout(() => {
            isAlertActive = false;
        }, 500);
    }

    // Disable text selection
    document.body.style.userSelect = 'none';

    // Allow only in form inputs
    document.querySelectorAll('input, textarea, select')
        .forEach(el => el.style.userSelect = 'text');

    // Better than blur (more stable)
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            triggerUFM('Tab Switch / Minimized');
        }
    });

    // Text selection
    document.addEventListener('mouseup', (event) => {
        if (!event.target.matches('input, textarea, select')) {
            const selected = window.getSelection().toString().trim();
            if (selected.length > 0) {
                triggerUFM('Text Selection');
            }
        }
    });

    // Copy
    document.addEventListener('copy', (event) => {
        if (!event.target.matches('input, textarea, select')) {
            triggerUFM('Copy');
        }
    });

    // Paste
    document.addEventListener('paste', (event) => {
        if (!event.target.matches('input, textarea, select')) {
            triggerUFM('Paste');
        }
    });

    // Disable right click
    document.addEventListener('contextmenu', (event) => {
        event.preventDefault();
        triggerUFM('Right Click');
    });
}

initializeUFMMonitoring();