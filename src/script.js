const toggleButton = document.getElementById('theme-toggle');
const toggleText = document.getElementById('theme-toggle-text');
const html = document.documentElement;

toggleButton.addEventListener('click', () => {
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        toggleText.textContent = 'Dark Mode';
    } else {
        html.classList.add('dark');
        toggleText.textContent = 'Light Mode';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const welcomePage = document.getElementById('welcome-page');
    const mainContent = document.getElementById('main-content');

    // Set a timeout for the welcome page to fade out
    setTimeout(() => {
        welcomePage.classList.add('fade-out');

        // After the animation ends, hide the welcome page and show the main content
        welcomePage.addEventListener('animationend', () => {
            welcomePage.style.display = 'none';
            mainContent.classList.remove('hidden');
        });
    }, 2500); // 2-second delay before the fade out begins
});

document.getElementById('read-more-btn').addEventListener('click', function () {
    const moreTextWrapper = document.getElementById('more-text-wrapper');
    const dropdownIcon = document.getElementById('dropdown-icon');

    if (moreTextWrapper.classList.contains('max-h-0')) {
        moreTextWrapper.classList.remove('max-h-0');
        moreTextWrapper.classList.add('max-h-[1000px]'); // Increase this value if content is longer
        this.textContent = 'Read Less';
        this.appendChild(dropdownIcon);
        dropdownIcon.classList.add('rotate-180');
    } else {
        moreTextWrapper.classList.remove('max-h-[1000px]');
        moreTextWrapper.classList.add('max-h-0');
        this.textContent = 'Read More';
        this.appendChild(dropdownIcon);
        dropdownIcon.classList.remove('rotate-180');
    }
});

function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    console.log(`Found ${progressBars.length} progress bars.`);

    progressBars.forEach((bar, index) => {
        const percent = parseInt(bar.getAttribute('data-percent'), 10);
        console.log(`Animating Progress Bar ${index + 1}: Target = ${percent}%`);

        // Reset the width before animation
        bar.style.width = '0%';

        setTimeout(() => {
            bar.style.transition = 'width 2s ease-in-out'; // Smooth transition
            bar.style.width = `${percent}%`; // Animate to the target width
            console.log(`Progress Bar ${index + 1} animation started.`);
        }, 100); // Slight delay to allow reset to take effect
    });

    // Circular progress bars logic remains the same
    const circles = document.querySelectorAll('.circle-progress');
    circles.forEach((circleProgress, index) => {
        const value = circleProgress.getAttribute('data-progress');
        console.log(`Animating Circle Progress Bar ${index + 1}: Target = ${value}%`);
        const circle = circleProgress.querySelector('.circle');
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;

        const offset = circumference - (value / 100) * circumference;
        circle.style.strokeDasharray = `${circumference}`;
        circle.style.strokeDashoffset = `${circumference}`;

        setTimeout(() => {
            circle.style.strokeDashoffset = offset;
            console.log(`Circle Progress Bar ${index + 1} animation started.`);
        }, 100);

        let count = 0;
        const interval = setInterval(() => {
            if (count <= parseInt(value, 10)) {
                circleProgress.querySelector('span').textContent = `${count}%`;
                count++;
            } else {
                clearInterval(interval);
            }
        }, 20); // Adjust the speed here
    });
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= -100 && // Allow some leniency above the viewport
        rect.left >= -100 && // Allow some leniency to the left
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 100 && // Allow some leniency below the viewport
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) + 100 // Allow some leniency to the right
    );
}


function onScroll() {
    const skillsSection = document.getElementById('skills');
    const triggerHeight = window.innerHeight * 0.8; // Trigger when 80% of the viewport is scrolled
    const skillsPosition = skillsSection.getBoundingClientRect().top;

    if (skillsPosition < triggerHeight) {
        console.log('Skills section is in or near the viewport. Animating progress bars...');
        animateProgressBars();
        window.removeEventListener('scroll', onScroll);
    }
}

window.addEventListener('scroll', onScroll);





//contact start

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Hide the form
    document.getElementById('contact-form').style.display = 'none';

    // Display the thank you message in the blank div
    const responseDiv = document.getElementById('response-message');
    responseDiv.textContent = "Thank you for contacting me. I'll get in touch with you soon.";
});

// contact end


// navigations

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('#home, #about, #projects, #skills, #certifications, #contact');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});

