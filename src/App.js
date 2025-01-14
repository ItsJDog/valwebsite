// App.js
import React, { useState, useEffect, useCallback } from 'react';
import Filters from './components/Filters';
import Playlist from './components/Playlist';
import './App.css';

function App() {
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAgents, setSelectedAgents] = useState([]);
  const [selectedMaps, setSelectedMaps] = useState([]);
  const [currentPlaylistId, setCurrentPlaylistId] = useState('playlistId_VCT');

  const apiKey = process.env.REACT_APP_YOUTUBE_API; // Replace with your API key
  const playlistIds = {
    vctVods: 'PLwn5keKYZ1Al0pTz6HJwZIKxkP38rnuhH&si=fjSF2Ng-pZ9udBDf',
    rankedVods: 'PLwn5keKYZ1AlZkTKvsJKUYOHw3XhZouG8&si=QBUjyGRqNojaGVyu',
  };

  // Use useCallback to memoize the fetchVideos function
  const fetchVideos = useCallback(async (playlistId) => {
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=100&playlistId=${playlistId}&key=${apiKey}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setVideos(data.items || []);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  }, [apiKey]);

  useEffect(() => {
    fetchVideos(currentPlaylistId);
  }, [currentPlaylistId, fetchVideos]); // Now fetchVideos is included in the dependency array

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase().trim());
  };

  const handleApplyFilters = (agents, maps) => {
    setSelectedAgents(agents.map(agent => agent.toLowerCase().trim()));
    setSelectedMaps(maps.map(map => map.toLowerCase().trim()));
  };

  const filteredVideos = selectedAgents.length === 0 && selectedMaps.length === 0 && !searchTerm
    ? videos // If no filters or search term, show all videos
    : videos.filter((video) => {
        const title = video.snippet.title.toLowerCase().trim();

        const matchesAgent = selectedAgents.length === 0 || selectedAgents.some((agent) => title.includes(agent));
        const matchesMap = selectedMaps.length === 0 || selectedMaps.some((map) => title.includes(map));
        const matchesSearch = !searchTerm || title.includes(searchTerm);

        return matchesAgent && matchesMap && matchesSearch;
      });

  return (
    <div className="container">
      <header>
        <h1>Search Valorant Vods</h1>
        <input
          type="text"
          className="search-bar"
          placeholder="Search for videos..."
          onChange={(e) => handleSearch(e.target.value)}
        />
      </header>
      <Filters
        onApplyFilters={handleApplyFilters}
        onPlaylistChange={(type) => setCurrentPlaylistId(playlistIds[type])}
      />
      <Playlist videos={filteredVideos} />
    </div>
  );
}

export default App;
