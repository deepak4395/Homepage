// Dynamic Content Rendering
document.addEventListener('DOMContentLoaded', function() {
    // Set site name and tagline
    document.getElementById('siteName').textContent = siteConfig.siteName;
    document.getElementById('tagline').textContent = siteConfig.tagline;

    // Render links dynamically
    const linksContainer = document.getElementById('linksContainer');
    
    siteConfig.links.forEach(function(link) {
        const linkButton = document.createElement('a');
        linkButton.href = link.url;
        linkButton.className = 'link-button';
        linkButton.target = '_blank';
        linkButton.rel = 'noopener noreferrer';
        
        // Create icon element if provided
        if (link.icon) {
            const iconSpan = document.createElement('span');
            iconSpan.className = 'link-icon';
            iconSpan.textContent = link.icon;
            linkButton.appendChild(iconSpan);
        }
        
        // Create label element
        const labelSpan = document.createElement('span');
        labelSpan.className = 'link-label';
        labelSpan.textContent = link.label;
        linkButton.appendChild(labelSpan);
        
        linksContainer.appendChild(linkButton);
    });

    // Add additional particle animation variation
    addDynamicParticles();
});

// Function to add dynamic particles for enhanced visual effect
function addDynamicParticles() {
    const spiritualBg = document.querySelector('.spiritual-bg');
    const particleCount = 5;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        particle.style.animationDelay = Math.random() * 5 + 's';
        spiritualBg.appendChild(particle);
    }
}

// Smooth scroll behavior for any internal links (if added later)
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
