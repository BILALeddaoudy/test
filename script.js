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