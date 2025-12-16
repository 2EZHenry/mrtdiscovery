gsap.registerPlugin(ScrollTrigger);

const panels = gsap.utils.toArray(".panel");

// Initialize Timeline
// We use the scroll of the body (driven by .scroll-container height) to scrub this timeline.
// .pinned-container is fixed in CSS, so we don't need to pin it here.
let tl = gsap.timeline({
	scrollTrigger: {
		trigger: ".scroll-container",
		start: "top top",
		end: "+=4000", // Total scroll distance
		scrub: 1,
		// pin: true // REMOVED: .pinned-container is fixed in CSS
	},
});

// Helper to animate thumbnails
function getThumbnails(panel) {
	return panel.querySelectorAll(".thumbnail-card");
}

// Animate panels
panels.forEach((panel, i) => {
	if (i === 0) return; // Skip hero, it's already visible

	// Slide in the panel from the bottom
	// We ensure autoAlpha is 1 so it becomes visible
	tl.fromTo(
		panel,
		{ yPercent: 100, autoAlpha: 1 },
		{ yPercent: 0, autoAlpha: 1, ease: "none", duration: 1 }
	);

	// Animate content inside AFTER the panel arrives

	// Thumbnails "Rotate In"
	const thumbnails = getThumbnails(panel);
	if (thumbnails.length > 0) {
		tl.fromTo(
			thumbnails,
			{ scale: 0, rotation: -45, opacity: 0 },
			{
				scale: 1,
				rotation: 0,
				opacity: 1,
				stagger: 0.1,
				duration: 0.5,
				ease: "back.out(1.7)",
			},
			"<+=0.2" // Start shortly after panel starts sliding in
		);
	}

	// Text and Image "Pop"
	const content = panel.querySelector(".content-card");
	if (content) {
		tl.from(content, { scale: 0.9, opacity: 0.5, duration: 0.5 }, "<");
	}

	// Add a small pause/gap before the next panel starts
	tl.to({}, { duration: 0.5 });
});

// Hero Animation (Fade out as Food slides over)
tl.to(
	".hero-content",
	{
		scale: 0.8,
		opacity: 0,
		duration: 0.5,
	},
	0
); // Start at absolute 0
