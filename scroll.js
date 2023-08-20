// scroll-highlight.js
document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll(".menu-item");
    const sections = document.querySelectorAll("section");
    
    function highlightMenuItem(index) {
        menuItems.forEach(item => item.classList.remove("highlighted"));
        menuItems[index].classList.add("highlighted");
    }
    
    function getCurrentSectionIndex() {
        const scrollPosition = window.scrollY;
        for (let i = 0; i < sections.length; i++) {
            const section = sections[i];
            const sectionTop = section.offsetTop - 100; // Adjust the offset as needed
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                return i;
            }
        }
        return 0;
    }
    
    window.addEventListener("scroll", function() {
        const currentSectionIndex = getCurrentSectionIndex();
        highlightMenuItem(currentSectionIndex);
    });
    
    // Initial highlight on page load
    highlightMenuItem(0);
});
