gsap.registerPlugin(ScrollTrigger);

const panels = gsap.utils.toArray(".panel");

// Initialize Timeline
// We use the scroll of the body (driven by .scroll-container height) to scrub this timeline.
// .pinned-container is fixed in CSS, so we don't need to pin it here.

ScrollTrigger.matchMedia({
	// Desktop Animation (Stacking Panels)
	"(min-width: 1025px)": function () {
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".scroll-container",
				start: "top top",
				end: "+=4000", // Total scroll distance
				scrub: 1,
			},
		});

		// Add a small delay/buffer at the start so the user can scroll a bit before the next panel appears
		tl.to({}, { duration: 0.5 });

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
					{ scale: 0, rotation: i % 2 === 0 ? 45 : -45, opacity: 0 },
					{
						scale: 1,
						rotation: 0,
						opacity: 1,
						stagger: 0.1,
						duration: 1,
						ease: "back.out(1.2)",
					},
					"<+=0.3" // Start shortly after panel starts sliding in
				);
			}

			// Granular Animations (Image, Title, Text, Button)
			const contentCard = panel.querySelector(".content-card");
			if (contentCard) {
				const image = contentCard.querySelector(".image-wrapper img");
				const title = contentCard.querySelector("h2");
				const text = contentCard.querySelectorAll("p, ul li");
				const btn = contentCard.querySelector(".btn");

				// 1. Image Pop (Scroll-tied: Smooth fade and scale)
				if (image) {
					tl.fromTo(
						image,
						{
							scale: 0.5,
							opacity: 0,
							rotation: i % 2 === 0 ? 10 : -10,
						},
						{
							scale: 1,
							rotation: 0,
							opacity: 1,
							duration: 0.8,
							ease: "power1.out", // Smooth ease for scrubbing
						},
						"<+=0.5" // Overlap more with the panel slide
					);

					// Continuous Float Animation
					gsap.to(image, {
						y: -15,
						duration: 2.5,
						yoyo: true,
						repeat: -1,
						ease: "sine.inOut",
					});
				}

				// 2. Title Slide Up
				if (title) {
					tl.from(
						title,
						{
							y: 50,
							opacity: 0,
							duration: 0.8,
							ease: "power1.out",
						},
						"<+=0.1"
					);
				}

				// 3. Text Stagger
				if (text.length > 0) {
					tl.from(
						text,
						{
							y: 30,
							opacity: 0,
							stagger: 0.1,
							duration: 0.8,
							ease: "power1.out",
						},
						"<+=0.2"
					);
				}

				// 4. Button Pop
				if (btn) {
					tl.from(
						btn,
						{
							scale: 0.8, // Start slightly smaller, not 0
							opacity: 0,
							duration: 0.6,
							ease: "power1.out",
						},
						"<+=0.3"
					);
				}
			}

			// Add a small pause/gap before the next panel starts
			tl.to({}, { duration: 0.5 });
		});

		// Hero Animation (Fade out as Food slides over)
		// Start this at 0.5 (after the initial buffer) to match the first panel sliding in
		tl.to(
			".hero-content",
			{
				scale: 0.8,
				opacity: 0,
				duration: 0.5,
			},
			0.5
		);
	},
});

// Social Icons Animation (Hero & Bottom Sections)
const socialIcons = document.querySelectorAll(".social-icon"); // Select ALL social icons
const socialContainers = document.querySelectorAll(".social-links"); // Select ALL containers

if (socialIcons.length > 0) {
	// Create a timeline that repeats infinitely
	const iconTl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

	// Animate each icon one by one
	iconTl.to(socialIcons, {
		y: -15,
		duration: 0.3,
		stagger: {
			each: 0.1, // Faster stagger since there are more icons now
			yoyo: true, // Go back down
			repeat: 1, // Repeat once (up then down)
		},
		ease: "power1.out",
	});

	// Pause on hover
	socialContainers.forEach((container) => {
		container.addEventListener("mouseenter", () => {
			iconTl.pause();
			// Reset icons to original position smoothly
			gsap.to(socialIcons, { y: 0, duration: 0.3 });
		});

		container.addEventListener("mouseleave", () => {
			iconTl.resume();
		});
	});
}

// Lively Thumbnail Animations (Floating + Hover)
const allThumbnails = document.querySelectorAll(".thumbnail-card");
allThumbnails.forEach((card) => {
	// 1. Continuous Floating Animation (Randomized)
	gsap.to(card, {
		y: -10,
		duration: 1.5 + Math.random(), // Random duration between 1.5 and 2.5s
		yoyo: true,
		repeat: -1,
		ease: "sine.inOut",
		delay: Math.random(), // Random start delay
	});

	// 2. Interactive Hover Animation
	card.addEventListener("mouseenter", () => {
		gsap.to(card, {
			scale: 1.1,
			rotation: 3,
			boxShadow: "0 20px 40px rgba(230, 57, 70, 0.6)",
			duration: 0.3,
			ease: "power2.out",
		});
	});

	card.addEventListener("mouseleave", () => {
		gsap.to(card, {
			scale: 1,
			rotation: 0,
			boxShadow: "0 10px 20px rgba(230, 57, 70, 0.2)",
			duration: 0.3,
			ease: "power2.out",
		});
	});
});
