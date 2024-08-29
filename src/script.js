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

    progressBars.forEach((bar) => {
        const percent = parseInt(bar.getAttribute('data-percent'), 10);

        // Reset the width before animation
        bar.style.width = '0%';

        setTimeout(() => {
            bar.style.transition = 'width 2s ease-in-out'; // Smooth transition
            bar.style.width = `${percent}%`; // Animate to the target width
        }, 100); // Slight delay to allow reset to take effect
    });

    // Circular progress bars logic remains the same
    const circles = document.querySelectorAll('.circle-progress');
    circles.forEach((circleProgress) => {
        const value = circleProgress.getAttribute('data-progress');
        const circle = circleProgress.querySelector('.circle');
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;

        const offset = circumference - (value / 100) * circumference;
        circle.style.strokeDasharray = `${circumference}`;
        circle.style.strokeDashoffset = `${circumference}`;

        setTimeout(() => {
            circle.style.strokeDashoffset = offset;
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
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function onScroll() {
    const skillsSection = document.getElementById('skills');
    if (isInViewport(skillsSection)) {
        animateProgressBars();
        window.removeEventListener('scroll', onScroll);
    }
}

window.addEventListener('scroll', onScroll);



