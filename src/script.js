function navigation(linksSelector, elem1Selector, elem2Selector, elem3Selector, elem4Selector) {
    const links = document.querySelectorAll(linksSelector),
        elem1 = document.querySelector(elem1Selector),
        elem2 = document.querySelector(elem2Selector),
        elem3 = document.querySelector(elem3Selector),
        elem4 = document.querySelector(elem4Selector);

    let elems = [elem1, elem2, elem3, elem4];

    function scrollTo(section) {
        window.scroll({
            left: 0,
            top: section.offsetTop,
            behavior: 'smooth'
        });
    }

    links.forEach((link, i) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            scrollTo(elems[i]);
        })
    });

}

navigation('.nav-link', 'header', '#about', '#projects', 'footer');