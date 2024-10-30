// JavaScript to toggle between light and dark modes
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme in local storage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    toggleButton.textContent = savedTheme === 'dark-mode' ? '🌞' : '🌙';
}

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Update button icon
    const isDarkMode = body.classList.contains('dark-mode');
    toggleButton.textContent = isDarkMode ? '🌞' : '🌙';
    
    // Save the selected theme to local storage
    localStorage.setItem('theme', isDarkMode ? 'dark-mode' : 'light-mode');
});
