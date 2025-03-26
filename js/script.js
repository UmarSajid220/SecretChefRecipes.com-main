document.addEventListener('DOMContentLoaded', function() {
    // Get preview image element
    const previewImage = document.querySelector('.preview-image');
    const chefThumbnail = document.querySelector('.chef-thumbnail');
    
    // Mobile menu functionality
    const menuButton = document.querySelector('.menu');
    const nav = document.querySelector('nav ul');
    const headerIcons = document.querySelector('.headerIcons');
    
    // Function to close menu
    const closeMenu = () => {
        nav.classList.remove('show');
        headerIcons.classList.remove('show');
    };
    
    // Toggle menu when clicking the menu button
    menuButton.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent event from bubbling up
        nav.classList.toggle('show');
        headerIcons.classList.toggle('show');
    });
    
    // Prevent menu from closing when clicking inside the menu
    nav.addEventListener('click', function(e) {
        e.stopPropagation();
    });
    
    // Prevent menu from closing when clicking inside the header icons
    headerIcons.addEventListener('click', function(e) {
        e.stopPropagation();
    });
    
    // Close menu when clicking anywhere else on the document
    document.addEventListener('click', closeMenu);
    
    // Add hover event to thumbnail
    chefThumbnail.addEventListener('mousemove', function(e) {
        // Show the preview image
        previewImage.style.display = 'block';
        previewImage.style.opacity = '1';
        
        // Position the preview image relative to cursor with an offset
        const offsetX = 10;  // Offset from cursor X position
        const offsetY = 10;  // Offset from cursor Y position
        
        // Get cursor position
        let mouseX = e.clientX;
        let mouseY = e.clientY;
        
        // Set image position
        previewImage.style.left = mouseX + offsetX + 'px';
        previewImage.style.top = mouseY + offsetY + 'px';
    });
    
    // Hide image when not hovering
    chefThumbnail.addEventListener('mouseleave', function() {
        previewImage.style.opacity = '0';
        previewImage.style.display = 'none';
    });
});
