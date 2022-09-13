const submitButton = document.querySelector(".submit");
const thankYouSection = document.querySelector(".thank-you");
const ratingSection = document.querySelector(".rating");
const selectionText = document.querySelector(".selection");
const buttons = document.querySelectorAll("button.number");



submitButton.addEventListener('click', () => {
    thankYouSection.classList.remove("hide");
    ratingSection.classList.add("hide");
});

buttons.forEach(button => {
    button.addEventListener("click", e => {
        let selection = e.target.value;
        return selectionText.innerText = `You selected ${selection} out of 5`;
        
    });
});


