// Example: Open streaming link in a modal or new tab
document.querySelectorAll('.movie-poster').forEach(poster => {
  poster.onclick = () => {
    const link = poster.dataset.link;
    if (link && link !== "YOUR_STREAMLINK") {
      window.open(link, '_blank');
    } else {
      alert('Please set your main streamlink for this film.');
    }
  };
});
// You can fill movie-poster's data-link with your own streaming links for each movie
// Modal logic for all "Watch" buttons
document.querySelectorAll('.watch-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const title = btn.dataset.title || "Movie Title";
    const description = btn.dataset.description || "Movie description goes here...";
    const stream = btn.dataset.stream || "";
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-description').textContent = description;
    document.getElementById('modal-player').src = stream;
    document.getElementById('open-stream-btn').onclick = function(){
      window.open(stream, '_blank');
    };
    document.getElementById('movie-modal').classList.remove('hidden');
  });
});

// Close modal logic
document.getElementById('close-modal').onclick = function() {
  document.getElementById('movie-modal').classList.add('hidden');
  document.getElementById('modal-player').src = "";
};

// Optional: Close modal when clicking outside the card
document.getElementById('movie-modal').addEventListener('click', function(e) {
  if (e.target === this) {
    this.classList.add('hidden');
    document.getElementById('modal-player').src = "";
  }
});