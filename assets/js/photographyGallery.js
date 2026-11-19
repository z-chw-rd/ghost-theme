export default function photographyGallery() {
    const dialog = document.querySelector(".gh-photo-lightbox");
    const triggers = Array.from(document.querySelectorAll(".gh-photo-gallery-trigger"));

    if (!dialog || triggers.length === 0) {
        return;
    }

    const image = dialog.querySelector(".gh-photo-lightbox-image");
    const caption = dialog.querySelector(".gh-photo-lightbox-caption");
    const closeButton = dialog.querySelector(".gh-photo-lightbox-close");
    const previousButton = dialog.querySelector(".gh-photo-lightbox-previous");
    const nextButton = dialog.querySelector(".gh-photo-lightbox-next");
    let activeIndex = 0;

    const showImage = (index) => {
        activeIndex = index;
        const trigger = triggers[activeIndex];

        image.src = trigger.dataset.gallerySrc;
        image.alt = trigger.dataset.galleryAlt;
        caption.textContent = trigger.dataset.galleryCaption;
        previousButton.disabled = activeIndex === 0;
        nextButton.disabled = activeIndex === triggers.length - 1;
    };

    triggers.forEach((trigger, index) => {
        trigger.addEventListener("click", () => {
            showImage(index);
            dialog.showModal();
            closeButton.focus();
        });
    });

    closeButton.addEventListener("click", () => dialog.close());
    previousButton.addEventListener("click", () => showImage(activeIndex - 1));
    nextButton.addEventListener("click", () => showImage(activeIndex + 1));

    dialog.addEventListener("click", (event) => {
        if (event.target === dialog) {
            dialog.close();
        }
    });

    dialog.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft" && activeIndex > 0) {
            showImage(activeIndex - 1);
        } else if (event.key === "ArrowRight" && activeIndex < triggers.length - 1) {
            showImage(activeIndex + 1);
        }
    });
}