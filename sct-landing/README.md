# SNOMED International - Confluence Migration Landing Page

This is a static HTML landing page designed to redirect users from the old Confluence site (https://confluence.ihtsdotools.org) to new services after migration.

## Features

- **SNOMED International Branding**: Official logo and color scheme
- **Triple Search Functionality**:
  - SNOMED CT Documentation search (redirects to https://docs.snomed.org/?q=)
  - SNOMED Spaces search (redirects to https://snomed.atlassian.net/wiki/search?text=)
  - SNOMED Forums search (redirects to https://forums.snomed.org/search?q=)
- **Account Section**: Placeholder for future SNOMED International account access
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional interface with smooth animations and hover effects
- **Accessibility**: Proper focus states, semantic HTML, and keyboard navigation support
- **Loading States**: Visual feedback during search redirections

## Files

- `index.html` - Main HTML page with structure and content
- `styles.css` - CSS styling with responsive design, SNOMED International branding, and modern UI components
- `script.js` - JavaScript functionality for search redirections, form handling, and user experience enhancements
- `images/snomed-logo.png` - Official SNOMED International logo
- `README.md` - This documentation file

## Usage

1. Host these files on any web server or static hosting service
2. Configure your old Confluence URL to redirect to this landing page
3. Users can search for content using any of the three search boxes:
   - **Documentation Search**: Searches official SNOMED CT documentation
   - **Spaces Search**: Searches the new SNOMED Spaces (Atlassian Cloud workspace)
   - **Forums Search**: Searches community discussions and questions

## Search URLs

The page redirects searches to:
- Documentation: `https://docs.snomed.org/?q={search_query}&global=true`
- SNOMED Spaces: `https://snomed.atlassian.net/wiki/search?text={search_query}`
- Forums: `https://forums.snomed.org/search?q={search_query}`

## Additional Features

- **Migration Notice**: Clear explanation of the service transition
- **Contact Information**: Direct email link to migration@snomed.org
- **Account Access**: Placeholder section for future SNOMED International account functionality
- **Responsive Grid Layout**: Automatically adjusts to different screen sizes
- **Enhanced UX**: Loading states, hover effects, and smooth transitions

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design with graceful degradation

## Customization

To customize the branding or URLs:
1. Update the logo URL in `index.html` if needed
2. Modify the search base URLs in `script.js` (lines 20-22)
3. Adjust colors and styling in `styles.css`
4. Update the migration notice text in `index.html`

## Technical Details

- **CSS Grid**: Responsive layout using CSS Grid with auto-fit columns
- **JavaScript**: ES6+ features with fallbacks for older browsers
- **Fonts**: Inter font family from Google Fonts
- **Icons**: SVG icons embedded directly in HTML
- **Animations**: CSS transitions and transforms for smooth interactions

## License

© 2025 International Health Terminology Standards Development Organisation (SNOMED International). All rights reserved.
