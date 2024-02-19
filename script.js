<script>
    // Function to slide the bottom shoes card
    function slideBottomShoesCard(direction) {
        const bottomShoesCard = document.querySelector('.bottom_shoes_card');
        const cardWidth = bottomShoesCard.offsetWidth;
        const offset = direction === 'left' ? cardWidth : -cardWidth;

        gsap.to(bottomShoesCard, { x: "+=" + offset, duration: 0.5, ease: "power2.out" });
    }

    // Event listener for left arrow button
    document.querySelector('.slider_btn.left').addEventListener('click', () => {
        slideBottomShoesCard('left');
    });

    // Event listener for right arrow button
    document.querySelector('.slider_btn.right').addEventListener('click', () => {
        slideBottomShoesCard('right');
    });

    // Your existing GSAP animations and JavaScript code...
</script>
