import React from 'react';

const Playlist = ({ videos }) => {
  return (
    <div id="playlist-container">
      <div id="playlist">
        {videos.length > 0 ? (
          videos.map((video) => (
            <div key={video.id}>
              <a
                href={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} />
              </a>
              <span>{video.snippet.title}</span>
            </div>
          ))
        ) : (
          <p>No videos found.</p>
        )}
      </div>
    </div>
  );
};

export default Playlist;
