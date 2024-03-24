function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Function to toggle project info when clicking on project image
// Function to toggle project info when clicking on project image
// Add click event listener to document body for event delegation
// Add click event listener to document body for event delegation
// Select all info buttons
var infoButtons = document.querySelectorAll(".info-btn");

// Iterate over each info button and attach click event listener
infoButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
        // Find the parent container of the clicked info button
        var container = button.closest(".details-container");
        if (container) {
            toggleProjectInfo(container);
        }
    });
});

function toggleProjectInfo(container) {
    var projectInfo = container.querySelector(".project-info");
    var projectImg = container.querySelector(".projects-img");

    // Toggle visibility of image and text within the same container
    projectImg.classList.toggle("hide");
    projectInfo.classList.toggle("show");
}
