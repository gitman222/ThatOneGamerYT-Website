const channelIdCarry =

// Fetch subscriber count from YouTube API
function fetchSubscriberCount() {
    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${UC_-RhG9pbrYTsGPVmCns_kQ}&key=AIzaSyAwxeFvT3qsOM54WdG1VRvY2mMCHHvjplw`)
        .then(response => response.json())
        .then(data => {
            const subscriberCount = data.items[0].statistics.subscriberCount;
            document.getElementById('subscriberCount').textContent = subscriberCount.toLocaleString();
        })
        .catch(error => {
            console.error('Error fetching subscriber count:', error);
            document.getElementById('subscriberCount').textContent = "Unavailable";
        });
}

// Call the function to update the subscriber count
fetchSubscriberCount();

// Smooth scrolling to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
