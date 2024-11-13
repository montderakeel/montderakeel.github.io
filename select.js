window.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
      document.body.classList.add('loaded');
    }, 1000);
});

const links = document.querySelectorAll('header nav ul li');
const contents = document.querySelectorAll('.content section');

links.forEach(ele => {
    ele.addEventListener('click', e => {
        links.forEach(otherLink => {
            otherLink.classList.remove('active-link');
        });
        ele.classList.add('active-link');

        contents.forEach(content => {
            if(content.classList.contains(ele.id)) {
                
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });
    });
});

const typed = new Typed('#about', {
    strings: [
        'Hello There :)',
        'I\'m a highly skilled and passionate 28-year-old web full-stack developer with a diverse range of expertise in HTML, CSS, JavaScript, PHP, MySQL, and Laravel. With a proven track record of delivering innovative and high-quality web solutions, I am dedicated to creating user-friendly and efficient applications. My strong problem-solving abilities and collaborative nature make me an asset to any team, and I am always eager to expand my knowledge in the ever-evolving world of web development.',
    ],
    showCursor: true,
    typeSpeed: 10,
    showCursor: false,
    onComplete: (self) => {
        setTimeout(skillFill, 0);
    }
});

const skillFill = _=> {
    const bars = document.querySelectorAll('.bar');
    bars.forEach(bar => {
        bar.style.width = `${bar.dataset.fill}%`;
        let i = 0;
        let percentage = setInterval(_ => {
            bar.firstElementChild.textContent = `${++i}%`;
            if(i == bar.dataset.fill) clearInterval(percentage);
        }, 25);
    });
}

