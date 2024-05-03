const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const aboutP = entry.target.querySelector('.about p');
        const aboutL = entry.target.querySelector('.aboutLeft');


        if (entry.isIntersecting) {
            aboutL.classList.add('about-l-animation');
            aboutP.classList.add('about-p-animation');
            return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        aboutL.classList.remove('about-l-animation');
        aboutP.classList.remove('about-p-animation');

    });
});

observer.observe(document.querySelector('.about'));