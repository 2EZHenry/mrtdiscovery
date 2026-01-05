// ===========================
// FADE-IN ANIMATION ON SCROLL
// ===========================
const observerOptions = {
	threshold: 0.1,
	rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('visible');
			// Optionally stop observing after animation
			observer.unobserve(entry.target);
		}
	});
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
	observer.observe(el);
});

// ===========================
// PLATFORM FILTER TABS
// ===========================
const tabs = document.querySelectorAll('.tab');
const posts = document.querySelectorAll('.social-post');

tabs.forEach(tab => {
	tab.addEventListener('click', () => {
		const platform = tab.dataset.platform;

		// Update active tab
		tabs.forEach(t => t.classList.remove('active'));
		tab.classList.add('active');

		// Filter posts
		posts.forEach(post => {
			const postPlatform = post.dataset.platform;

			if (platform === 'all') {
				post.style.display = 'block';
			} else if (postPlatform === platform) {
				post.style.display = 'block';
			} else {
				post.style.display = 'none';
			}
		});
	});
});

// ===========================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		const href = this.getAttribute('href');

		// Ignore if href is just "#"
		if (href === '#') return;

		e.preventDefault();

		const target = document.querySelector(href);
		if (target) {
			target.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		}
	});
});
