const terminal = document.getElementById('terminal');

const commands = {
    help: "Available commands: help, fetch, dom, event, js, joke, clear, exit",
    fetch: "Used to make HTTP requests from JS (e.g., fetch('url'))",
    dom: "DOM = Document Object Model. JS can modify your HTML/CSS using it.",
    event: "JS uses `addEventListener` to handle user actions like clicks or keypresses.",
    js: "JavaScript adds interactivity to websites. Runs in the browser.",
    joke: "Why don't programmers like nature? It has too many bugs ",
    clear: "clear",
    exit: "Type in 'sudo leave' to exit the terminal.",
};

function createNewInput() {
    const line = document.createElement('div');
    line.className = 'line';

    const prompt = document.createElement('span');
    prompt.className = 'prompt';
    prompt.innerText = '>';

    const input = document.createElement('input');
    input.type = 'text';
    input.autofocus = true;

    line.appendChild(prompt);
    line.appendChild(input);
    terminal.appendChild(line);
    input.focus();

    input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            const cmd = input.value.trim();
            input.disabled = true;

            if (cmd === 'clear') {
                terminal.innerHTML = '';
                createNewInput();
                return;
            }

            if (cmd === 'sudo leave') {
                terminal.innerHTML = '';
                window.location.href = "../../home.html";
                return;
            }

            if (commands[cmd]) {
                const response = document.createElement('div');
                response.className = 'response';
                response.innerText = commands[cmd];
                terminal.appendChild(response);
            } else {
                const response  = document.createElement('div');
                response.className = 'response';
                response.innerText = `"${cmd}" is not recognized. Type 'help' for options.`;
                terminal.appendChild(response);
            }

            createNewInput();
            terminal.scrollTop = terminal.scrollHeight;
        }
    });
}

createNewInput();