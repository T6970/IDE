const snippetButton = document.getElementById('snippetButton');
const snippet = document.getElementById('snippets');

snippet.style.display = 'none';

snippetButton.addEventListener('click', () => {
    if (snippet.style.display === 'none' || snippet.style.display === '') {
        snippet.style.display = 'block';
        snippetButton.textContent = 'Hide Snippet';
    } else {
        snippet.style.display = 'none';
        snippetButton.textContent = 'Show Snippet';
    }
});