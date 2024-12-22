const choiceArray = document.querySelectorAll(".choice");

choiceArray.forEach((card) => {
    card.addEventListener("click", () => {
        if (card.classList.contains("expand")) {
            card.classList.remove("expand");
            card.classList.add("unset");

            choiceArray.forEach((element) => {
                if (element !== card) {
                    element.classList.remove("small");
                    element.classList.add("unset");
                }
            });
        } else {
            choiceArray.forEach((element) => {
                element.classList.remove("expand", "unset");
                element.classList.add("small");
            });

            card.classList.remove("small");
            card.classList.add("expand");
        }
    });
});

function toggleExpand(card) {
    document.querySelectorAll('.card').forEach((c) => {
        if (c !== card) c.classList.remove('clicked');
    });

    card.classList.toggle('clicked');
}
