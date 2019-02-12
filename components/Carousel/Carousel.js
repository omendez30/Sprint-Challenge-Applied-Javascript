// class Carousel {
  constructor(carousel) {
    this.carousel = carousel;
    this.left = carousel.querySelector(".left-button");
    this.right = carousel.querySelector(".right-button");
    this.images = carousel.querySelectorAll("img");
    this.currentIndex = 0;

    this.images.forEach((img, curr) => {
      if (current === this.currentIndex) {
        img.style.display = "flex";
      } else {
        img.style.display = "none";
      }
    });
    this.left.addEventListener("click", () =>
      this.displayImage((this.currentIndex = this.currentIndex - 1))
    );
    this.right.addEventListener("click", () =>
      this.displayImage((this.currentIndex = this.currentIndex + 1))
    );
  }

  displayImage() {
    if (this.currentIndex < 0) {
      this.currentIndex = this.images.length - 1;
    }

    if (this.currentIndex > this.images.length - 1) {
      this.currentIndex = 0;
    }

    this.images.forEach((img, curr) => {
      if (current === this.currentIndex) {
        img.style.display = "flex";
      } else {
        img.style.display = "none";
      }
    });
  }
// }

let carousel = document.querySelectorAll(".carousel").forEach(carousel => new Carousel(carousel));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
