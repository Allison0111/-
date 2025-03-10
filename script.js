document.addEventListener('DOMContentLoaded', function() {
    // Prevent zooming on the webpage
    window.addEventListener("wheel", (e)=> {
        const isPinching = e.ctrlKey
        if(isPinching) e.preventDefault()
    }, { passive: false });

    // Toggle details sections
    const detailsToggles = document.querySelectorAll('.details-toggle');
    
    detailsToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const card = this.closest('.game-card');
            const content = card.querySelector('.details-content');
            
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                this.classList.add('active');
                this.textContent = '收起详情 ';
                const icon = document.createElement('i');
                icon.className = 'ri-arrow-up-s-line ml-1';
                this.appendChild(icon);
            } else {
                content.classList.add('hidden');
                this.classList.remove('active');
                this.textContent = '查看详情 ';
                const icon = document.createElement('i');
                icon.className = 'ri-arrow-down-s-line ml-1';
                this.appendChild(icon);
            }
        });
    });
});
