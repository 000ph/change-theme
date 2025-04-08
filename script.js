/**
 * 
 * @param {"white" | "dark" | "slate" | "purpleshades"} theme 
 */
function changeTheme() {
    const select = document.getElementById("themeSelect");
    const theme = select.options[select.selectedIndex].value
    const allThemes = ["white", "dark", "slate", "purpleshades"]
    document.body.classList.remove(...allThemes)
    document.body.classList.add(theme) 
}