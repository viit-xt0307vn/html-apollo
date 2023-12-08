const apolloAccordiones = document.querySelectorAll(".apollo-accordion");
const apolloVisiones = document.querySelectorAll(".apollo-vision");

apolloAccordiones.forEach((e) => {
    e.addEventListener("click", function () {
        // console.log(e.dataset.index);
        apolloAccordiones.forEach((e) => {
            e.querySelector(".apollo-accordion-content").style.height =
                0 + "px";
            e.querySelector(".apollo-accordion-content").style.padding =
                "0 8px";
        });
        this.querySelector(".apollo-accordion-content").style.height =
            this.querySelector(".apollo-accordiontext-bg").offsetHeight +
            47 +
            "px";
        this.querySelector(".apollo-accordion-content").style.padding =
            "8px 8px 39px 8px";

        // apolloVisiones[e.dataset.index + 1].classList.add(
        //     "apollo-vision-active"
        // );
        console.log(apolloVisiones[parseInt(e.dataset.index) - 1]);
        apolloVisiones.forEach((vision) => {
            vision.classList.remove("apollo-vision-active");
        });
        apolloVisiones[parseInt(e.dataset.index) - 1].classList.add(
            "apollo-vision-active"
        );
    });
});
