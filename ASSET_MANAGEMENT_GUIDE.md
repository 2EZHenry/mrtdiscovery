# Asset Management Guide - mrt.DISCOVERY Portfolio

## Overview
This guide helps you manage image assets for the redesigned portfolio, focusing on optimization and showcasing your actual social media content.

---

## Current Asset Audit

### Assets to DELETE (No longer needed)
These files are from the old pinned-scroll design and are no longer used:

**Blurred Background Images** (~2.4MB):
- `assets/bg_food.png`
- `assets/bg_cooking.png`
- `assets/bg_travel.png`
- `assets/bg_socials.png`

**Unused Character/Hero Images**:
- `assets/mrt_cooking_recipe.png` (if exists)
- `assets/mrt_food_discovery.png` (if exists)
- `assets/mrt_hero_background.png` (if exists)
- `assets/mrt_hero_simple.png` (if exists)
- `assets/spritesheet_food.png` (if exists)

**Action:** Delete these files to save ~2.4MB+ in page load

---

### Assets to KEEP

**Essential Brand Assets**:
- ✅ `assets/logo.png` (used in hero and footer)

**Character Illustrations** (Optional):
- ✅ `assets/mrt_char_food.png` (used in About section)
- `assets/mrt_char_cooking.png` (optional, not currently used)
- `assets/mrt_char_travel.png` (optional, not currently used)

**Social Post Thumbnails** (Currently used):
- ✅ `assets/thumbnail1.png` through `thumbnail9.png`

**Note:** The existing thumbnails are placeholder images. You should replace these with actual screenshots from your Instagram/TikTok posts.

---

## Adding New Content (IMPORTANT)

### Social Media Post Screenshots

The portfolio now showcases 9 social posts (you can add more!). Each post needs:

1. **High-quality screenshot** from Instagram/TikTok
2. **Proper aspect ratio**: 4:5 (portrait) or 1:1 (square)
3. **Optimized file size**: Target <150KB per image
4. **Descriptive filename**: e.g., `post-ramen-review.jpg`

### How to Capture Screenshots

**For Instagram:**
1. Open your post on Instagram (mobile or desktop)
2. Take screenshot (or use browser screenshot tool)
3. Crop to remove UI elements (leave only the image/video frame)
4. Save as JPG or PNG

**For TikTok:**
1. Open video on TikTok
2. Pause at an engaging moment
3. Screenshot (crop out UI)
4. Save as JPG or PNG

**For YouTube:**
1. Open video
2. Pause at a compelling frame
3. Screenshot (or download custom thumbnail)
4. Crop to 16:9 or 4:5 aspect ratio

### Recommended Content to Feature

Select your **best-performing posts**:
- ✅ Highest engagement (likes, comments, shares)
- ✅ Visually appealing (bright, clear, appetizing)
- ✅ Mix of content types: Food reviews, recipes, travel
- ✅ Recent content (within last 3-6 months)

**Suggested Mix:**
- 5 Food Discovery posts (restaurant reviews, street food)
- 2 Recipe posts (cooking tutorials)
- 2 Travel posts (vlogs, location highlights)

---

## Image Optimization

### Why Optimize?
- **Faster page load** (better user experience)
- **Better SEO** (Google ranks faster sites higher)
- **Lower bandwidth costs**
- **Improved mobile experience**

### Target Specifications

**For Social Post Images:**
- Format: WebP (with JPG fallback) or optimized JPG
- Dimensions: 600px - 800px width (portrait ratio)
- File Size: <150KB per image
- Quality: 75-85% (still looks great, much smaller file)

**For Logo:**
- Format: PNG (for transparency) or WebP
- Dimensions: 360px - 400px width (2x for retina)
- File Size: <50KB

**For Character Illustrations:**
- Format: PNG or WebP
- Dimensions: 700px - 800px height
- File Size: <200KB

---

## Optimization Tools

### Online Tools (Free, Easy)

1. **TinyPNG** (https://tinypng.com/)
   - Drag and drop images
   - Reduces PNG/JPG by 50-70%
   - Maintains visual quality
   - **Best for:** Quick batch compression

2. **Squoosh** (https://squoosh.app/)
   - By Google
   - WebP conversion
   - Side-by-side comparison
   - **Best for:** Fine-tuning quality vs file size

3. **Compressor.io** (https://compressor.io/)
   - Supports JPG, PNG, GIF, SVG
   - Up to 90% compression
   - **Best for:** Maximum compression

### Desktop Tools

**ImageOptim** (Mac)
- Free
- Drag and drop folder
- Lossless compression
- Strips metadata

**FileOptimizer** (Windows)
- Free
- Batch processing
- Supports 80+ formats

### Bulk Operations (Command Line)

**ImageMagick** (Advanced):
```bash
# Convert and resize all JPGs to 800px width
magick mogrify -resize 800x -quality 80 -format jpg *.jpg

# Convert to WebP
magick mogrify -format webp -quality 80 *.jpg
```

---

## Folder Structure (Recommended)

```
website/assets/
├── logo.png                    (120KB max)
├── mrt_char_food.png          (200KB max)
│
├── posts/                     (NEW - create this folder)
│   ├── food/
│   │   ├── ramen-review.jpg   (150KB)
│   │   ├── ramen-review.webp  (100KB, optional)
│   │   ├── cafe-brunch.jpg
│   │   └── street-food.jpg
│   ├── recipes/
│   │   ├── fried-rice.jpg
│   │   └── noodle-soup.jpg
│   └── travel/
│       ├── tokyo-vlog.jpg
│       └── night-market.jpg
│
└── deprecated/                (Move old files here, delete later)
    ├── bg_food.png
    ├── bg_cooking.png
    └── (old files)
```

---

## Step-by-Step: Replacing Thumbnails

### 1. Gather Your Best Posts (15-20 posts)
- Go through your Instagram/TikTok
- Select top-performing content
- Note the post URLs

### 2. Capture Screenshots
- Use methods above
- Save to a folder on your computer
- Name files descriptively (e.g., `ramen-hidden-gem.jpg`)

### 3. Optimize Images
- Upload to TinyPNG or Squoosh
- Download optimized versions
- Check file sizes (<150KB each)

### 4. Upload to Assets Folder
- Place optimized images in `website/assets/posts/` (create folder if needed)
- Or replace existing `thumbnail1.png` through `thumbnail9.png`

### 5. Update HTML Links
In `index.html`, update the `<img src="">` paths and `<a href="">` links:

```html
<!-- Example: Update Post 1 -->
<a href="https://www.instagram.com/p/YOUR_POST_ID/" class="social-post" data-platform="instagram" target="_blank">
	<img src="assets/posts/food/ramen-review.jpg" alt="Ramen review at hidden gem">
	<div class="post-overlay">
		<i class="fab fa-instagram"></i>
		<p class="post-caption">Discovering the best ramen in the city! 🍜</p>
		<div class="post-stats">
			<span><i class="far fa-heart"></i> 3.5K</span>
			<span><i class="far fa-comment"></i> 142</span>
		</div>
	</div>
</a>
```

### 6. Test Locally
- Open `index.html` in browser
- Check that all images load
- Verify links work
- Test on mobile view

---

## Advanced: Responsive Images

For even better performance, use the `<picture>` element:

```html
<picture>
	<source
		srcset="assets/posts/ramen-review.webp 1x, assets/posts/ramen-review@2x.webp 2x"
		type="image/webp"
	>
	<source
		srcset="assets/posts/ramen-review.jpg 1x, assets/posts/ramen-review@2x.jpg 2x"
		type="image/jpeg"
	>
	<img src="assets/posts/ramen-review.jpg" alt="Ramen review">
</picture>
```

**Benefits:**
- Serves WebP to modern browsers (30% smaller)
- Serves JPG to older browsers
- Serves 2x images to retina displays

---

## Maintenance Schedule

### Weekly
- Add 2-3 new posts to keep content fresh
- Remove oldest posts or low-performing content

### Monthly
- Full content audit
- Check for broken links
- Update engagement stats
- Re-optimize images if needed

### Quarterly
- Review top-performing content
- Consider adding more posts (expand to 15-20)
- Check page load speed (should be <2 seconds)

---

## Performance Checklist

After updating assets, test your site:

### Tools to Use:
1. **Google PageSpeed Insights** (https://pagespeed.web.dev/)
   - Target score: 90+ on mobile and desktop

2. **GTmetrix** (https://gtmetrix.com/)
   - Check total page size (<3MB)
   - Check load time (<2 seconds)

3. **Chrome DevTools Network Tab**
   - See exact file sizes
   - Identify slow-loading assets

### Target Metrics:
- ✅ Total page size: <3MB (down from 9MB)
- ✅ Images: <2MB total
- ✅ Load time: <2 seconds
- ✅ Lighthouse performance score: 90+

---

## Quick Reference Commands

### Delete Unused Assets (Windows/Mac)
```bash
# Navigate to assets folder
cd website/assets/

# Delete background images
rm bg_food.png bg_cooking.png bg_travel.png bg_socials.png

# Or move to deprecated folder (safer)
mkdir deprecated
mv bg_*.png deprecated/
```

### Check File Sizes (Windows)
```cmd
dir assets\*.png
```

### Check File Sizes (Mac/Linux)
```bash
ls -lh assets/*.png
```

---

## Summary

### Immediate Actions:
1. ✅ Delete unused background images (saves 2.4MB)
2. ✅ Capture 9-15 screenshots from your best Instagram/TikTok posts
3. ✅ Optimize images using TinyPNG (target <150KB each)
4. ✅ Update HTML links to point to actual post URLs
5. ✅ Test locally before deploying

### Optional Enhancements:
- Convert images to WebP format (30% smaller)
- Create @2x retina versions for sharp display
- Add lazy loading for images below fold
- Set up CDN for faster global delivery

---

## Need Help?

**Common Issues:**

**Q: Images look blurry after optimization**
A: Increase quality setting (try 85-90% instead of 75%)

**Q: Page still loads slowly**
A: Check Network tab in DevTools - look for files >200KB

**Q: Some posts don't show on mobile**
A: Check responsive CSS - grid should show 2 columns on small screens

**Q: How often should I update content?**
A: Add 2-3 new posts weekly to keep portfolio fresh

---

**Last Updated:** 2025-12-17
**Portfolio Version:** 2.0 (Modern Minimal Redesign)
