gsap.registerPlugin(ScrollTrigger);

// Initialize Timeline
const tl = gsap.timeline({
	scrollTrigger: {
		trigger: ".scroll-container",
		start: "top top",
		end: "bottom bottom",
		scrub: 1,
		pin: ".pinned-container",
		// markers: true // Uncomment for debugging
	},
});

// Animation Sequence

// 1. Hero Exit
tl.to(".hero", {
	opacity: 0,
	scale: 0.8,
	duration: 1,
	ease: "power2.inOut",
})

	// 2. Food Discovery Enter
	.fromTo(
		".food-discovery",
		{ opacity: 0, scale: 1.2, visibility: "hidden" },
		{
			opacity: 1,
			scale: 1,
			visibility: "visible",
			duration: 1,
			ease: "elastic.out(1, 0.75)",
		}
	)
	// Food Discovery Exit
	.to(
		".food-discovery",
		{
			opacity: 0,
			x: -100,
			duration: 1,
			ease: "power2.inOut",
		},
		"+=1"
	) // Hold for a bit

	// 3. Recipes Enter
	.fromTo(
		".recipes",
		{ opacity: 0, x: 100, visibility: "hidden" },
		{
			opacity: 1,
			x: 0,
			visibility: "visible",
			duration: 1,
			ease: "elastic.out(1, 0.75)",
		}
	)
	// Recipes Exit
	.to(
		".recipes",
		{
			opacity: 0,
			y: -100,
			duration: 1,
			ease: "power2.inOut",
		},
		"+=1"
	)

	// 4. Travel Enter
	.fromTo(
		".travel",
		{ opacity: 0, y: 100, visibility: "hidden" },
		{
			opacity: 1,
			y: 0,
			visibility: "visible",
			duration: 1,
			ease: "elastic.out(1, 0.75)",
		}
	)
	// Travel Exit
	.to(
		".travel",
		{
			opacity: 0,
			scale: 1.5,
			duration: 1,
			ease: "power2.inOut",
		},
		"+=1"
	)

	// 5. Socials Enter
	.fromTo(
		".socials",
		{ opacity: 0, scale: 0.5, visibility: "hidden" },
		{
			opacity: 1,
			scale: 1,
			visibility: "visible",
			duration: 1,
			ease: "elastic.out(1, 0.75)",
		}
	);
