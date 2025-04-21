    // https://vincentgarreau.com/particles.js/ [1]
    // https://particles.js.org/ [2]
    // https://marcbruederlin.github.io/particles.js/ [3]
    document.addEventListener('DOMContentLoaded', function() {
    // Terminal typing effect
    const terminalLines = document.querySelectorAll('.terminal-line');

    function typeWriter(element, text, i, cb) {
    if (i < text.length) {
    element.textContent += text.charAt(i);
    i++;
    setTimeout(function() {
    typeWriter(element, text, i, cb);
}, 30);
} else if (cb) {
    setTimeout(cb, 500);
}
}

    function startTyping(index) {
    if (index < terminalLines.length - 1) {
    const line = terminalLines[index];
    const text = line.getAttribute('data-text');
    line.style.width = '100%';
    line.textContent = '';

    typeWriter(line, text, 0, function() {
    startTyping(index + 1);
});
} else if (index === terminalLines.length - 1) {
    const line = terminalLines[index];
    line.style.display = 'inline-block';
}
}

    // Start the typing animation
    setTimeout(function() {
    startTyping(0);
}, 1000);

    // Animate progress bar
    setTimeout(function() {
    document.querySelector('.progress-bar-fill').style.width = '100%';
}, 500);

    // Animate skill tags on scroll
    const skillTags = document.querySelectorAll('.skill-tag');
    const animateSkills = function() {
    const triggerBottom = window.innerHeight * 0.8;

    skillTags.forEach((tag, index) => {
    const tagTop = tag.getBoundingClientRect().top;

    if (tagTop < triggerBottom) {
    setTimeout(() => {
    tag.style.opacity = '1';
    tag.style.transform = 'translateY(0)';
}, index * 50);
}
});
};

    // Set initial state for skill tags
    skillTags.forEach(tag => {
    tag.style.opacity = '0';
    tag.style.transform = 'translateY(20px)';
    tag.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

    window.addEventListener('scroll', animateSkills);
    // Trigger once on load
    animateSkills();

    // Initialize particles.js
    particlesJS('particles-js', { // [1] [2] [3]
    "particles": {
    "number": {
    "value": 80,
    "density": {
    "enable": true,
    "value_area": 800
}
},
    "color": {
    "value": "#00e5ff"
},
    "shape": {
    "type": "circle",
    "stroke": {
    "width": 0,
    "color": "#000000"
},
    "polygon": {
    "nb_sides": 5
}
},
    "opacity": {
    "value": 0.3,
    "random": true,
    "anim": {
    "enable": false,
    "speed": 1,
    "opacity_min": 0.1,
    "sync": false
}
},
    "size": {
    "value": 3,
    "random": true,
    "anim": {
    "enable": false,
    "speed": 40,
    "size_min": 0.1,
    "sync": false
}
},
    "line_linked": {
    "enable": true,
    "distance": 150,
    "color": "#7b00ff",
    "opacity": 0.2,
    "width": 1
},
    "move": {
    "enable": true,
    "speed": 2,
    "direction": "none",
    "random": true,
    "straight": false,
    "out_mode": "bounce",
    "bounce": false,
    "attract": {
    "enable": false,
    "rotateX": 600,
    "rotateY": 1200
}
}
},
    "interactivity": {
    "detect_on": "canvas",
    "events": {
    "onhover": {
    "enable": true,
    "mode": "grab"
},
    "onclick": {
    "enable": true,
    "mode": "push"
},
    "resize": true
},
    "modes": {
    "grab": {
    "distance": 140,
    "line_linked": {
    "opacity": 0.5
}
},
    "bubble": {
    "distance": 400,
    "size": 40,
    "duration": 2,
    "opacity": 8,
    "speed": 3
},
    "repulse": {
    "distance": 200,
    "duration": 0.4
},
    "push": {
    "particles_nb": 4
},
    "remove": {
    "particles_nb": 2
}
}
},
    "retina_detect": true
});

    // Glitch effect on hover
    const nameTitle = document.querySelector('.name-title');
    nameTitle.addEventListener('mouseover', function() {
    this.classList.add('glitch-effect');
});
    nameTitle.addEventListener('mouseout', function() {
    this.classList.remove('glitch-effect');
});

    // Random "data processing" animation for experience items
    const experienceItems = document.querySelectorAll('.experience-item');
    experienceItems.forEach(item => {
    item.addEventListener('mouseover', function() {
    const randomDelay = Math.floor(Math.random() * 500) + 100;
    setTimeout(() => {
    this.style.borderColor = 'var(--secondary)';
    setTimeout(() => {
    this.style.borderColor = 'var(--primary)';
}, 300);
}, randomDelay);
});
});
});