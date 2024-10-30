let faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
    question.addEventListener("click", (event) => {
        event.preventDefault();

        let answer = question.nextElementSibling;
        let toggleSign = question.querySelector(".sign");

        if (answer.style.display === "none" || answer.style.display === "") {
            answer.style.display = "block";
            toggleSign.src = "/assets/images/icon-minus.svg"
        } else {
            answer.style.display = "none";
            toggleSign.src = "/assets/images/icon-plus.svg"
        }
    });
});