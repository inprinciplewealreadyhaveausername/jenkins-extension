(function() {
    function addConsoleTextButton() {
        const consoleTask = document.querySelector('a[href$="/console"]');
        if (consoleTask && !document.querySelector('.console-text-task')) {
            const taskDiv = document.createElement('div');
            taskDiv.className = 'task console-text-task';
            const currentUrl = consoleTask.getAttribute('href');
            const consoleTextUrl = currentUrl.replace('/console', '/consoleText');
            taskDiv.innerHTML = `
                <span class="task-link-wrapper">
                    <a data-task-success="Erledigt." 
                       data-task-post="" 
                       href="${consoleTextUrl}" 
                       class="task-link task-link-no-confirm">
                        <span class="task-icon-link">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 512 512">
                                <rect fill="none" height="416" rx="48" ry="48" stroke="currentColor" stroke-linejoin="round" stroke-width="32" width="448" x="32" y="48"></rect>
                                <path d="M96 112l80 64-80 64M192 240h160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path>
                            </svg>
                        </span>
                        <span class="task-link-text">Console Text</span>
                    </a>
                </span>`;
            consoleTask.closest('.task').after(taskDiv);
        }
    }
    document.addEventListener('DOMContentLoaded', addConsoleTextButton);
    document.addEventListener('jenkins:loaded', addConsoleTextButton);
})();
