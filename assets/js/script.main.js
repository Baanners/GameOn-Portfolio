function includeHTML() {
    const elements = document.querySelectorAll('[data-include]');
    elements.forEach(element => {
        const file = element.getAttribute('data-include');
        if (file) {
            fetch(file)
                .then(response => response.text())
                .then(data => {
                    element.innerHTML = data;
                })
                .catch(err => console.error(`Failed to load ${file}: ${err}`));
        }
    });
}

window.onload = includeHTML;
