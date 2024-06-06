
function showDetail(id) {
    // Hide all details
    const details = document.querySelectorAll('.detail');
    details.forEach(detail => detail.classList.remove('show'));
    
    // Show the selected detail
    const detail = document.getElementById(id);
    detail.classList.add('show');
}

// Optional: Close detail when clicking outside (for mobile UX)
document.addEventListener('click', function(event) {
    const details = document.querySelectorAll('.detail.show');
    details.forEach(detail => {
        if (!detail.contains(event.target) && !event.target.closest('.category')) {
            detail.classList.remove('show');
        }
    });
});
