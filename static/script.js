function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// var infoButtons = document.querySelectorAll(".info-btn");

// // Iterate over each info button and attach click event listener
// infoButtons.forEach(function (button) {
//     button.addEventListener("click", function (event) {
//         // Find the parent container of the clicked info button
//         var container = button.closest(".details-container");
//         if (container) {
//             toggleProjectInfo(container);
//         }
//     });
// });

// function toggleProjectInfo(container) {
//     var projectInfo = container.querySelector(".project-info");
//     var projectImg = container.querySelector(".projects-img");

//     // Toggle visibility of image and text within the same container
//     projectImg.classList.toggle("hide");
//     projectInfo.classList.toggle("show");
// }

// var infoButtons = document.querySelectorAll(".info-btn");
// var closeButton = document.querySelector(".info-btn.hide"); // Select the initially hidden close button

// // Iterate over each info button and attach click event listener
// infoButtons.forEach(function (button) {
//     button.addEventListener("click", function (event) {
//         // Find the parent container of the clicked info button
//         var container = button.closest(".details-container");
//         if (container) {
//             toggleProjectInfo(container);
//         }
//     });
// });

// // Attach click event listener to the close button
// closeButton.addEventListener("click", function (event) {
//     var container = closeButton.closest(".details-container");
//     if (container) {
//         toggleProjectInfo(container);
//     }
// });

// function toggleProjectInfo(container) {
//     var projectInfo = container.querySelector(".project-info");
//     var projectImg = container.querySelector(".projects-img");
//     var closeButton = container.querySelector(".info-btn.hide");
//     var infoButton = container.querySelector(".info-btn.show");

//     // Toggle visibility of image and text within the same container
//     projectImg.classList.toggle("hide");
//     projectInfo.classList.toggle("show");

//     // Toggle visibility of close button
//     closeButton.classList.toggle("show");
//     closeButton.classList.toggle("hide");

//     // Toggle visibility of info button corresponding to the clicked close button
//     infoButton.classList.toggle("hide");
//     infoButton.classList.toggle("show");
// }

// Select all info buttons within article containers
var infoButtons = document.querySelectorAll(".article-container .info-btn");

// Iterate over each info button and attach click event listener
infoButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
        // Find the parent container of the clicked info button
        var container = button.closest(".article-container");
        if (container) {
            toggleProjectInfo(container);
        }
    });
});

function toggleProjectInfo(container) {
    var projectInfo = container.querySelector(".project-info");
    var projectImg = container.querySelector(".projects-img");
    var closeButton = container.querySelector(".info-btn.hide");
    var infoButton = container.querySelector(".info-btn.show");

    // Toggle visibility of image and text within the same container
    projectImg.classList.toggle("hide");
    projectInfo.classList.toggle("show");

    // Toggle visibility of close button
    closeButton.classList.toggle("show");
    closeButton.classList.toggle("hide");

    // Toggle visibility of info button corresponding to the clicked close button
    infoButton.classList.toggle("hide");
    infoButton.classList.toggle("show");
}
