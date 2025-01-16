import React, { useState } from 'react';

const Filters = ({ onApplyFilters, onPlaylistChange }) => {
    const [selectedAgents, setSelectedAgents] = useState([]);
    const [selectedMaps, setSelectedMaps] = useState([]);
  
    const handleAgentChange = (e) => {
      const value = e.target.value;
      setSelectedAgents((prev) =>
        e.target.checked ? [...prev, value] : prev.filter((agent) => agent !== value)
      );
    };
  
    const handleMapChange = (e) => {
      const value = e.target.value;
      setSelectedMaps((prev) =>
        e.target.checked ? [...prev, value] : prev.filter((map) => map !== value)
      );
    };
  
    return (
      <div className="filters">
        <label htmlFor="video-type">Type:</label>
        <select id="video-type" onChange={(e) => onPlaylistChange(e.target.value)}>
          <option value="vctNA2025Kickoff">VCT NA 2025 Kickoff</option>
          <option value="vctEMEA2025Kickoff">VCT EMEA 2025 Kickoff</option>
          <option value="vctPACIFIC2025Kickoff">VCT PACIFIC 2025 Kickoff</option>
          <option value="rankedVods">Ranked VODs</option>
        </select>
  
        <h4>Agents</h4>
        <div className="horizontal-checkboxes">
          <label>
            <input type="checkbox" value="astra" onChange={handleAgentChange} /> Astra
          </label>
          <label>
            <input type="checkbox" value="brimstone" onChange={handleAgentChange} /> Brimstone
          </label>
          <label>
            <input type="checkbox" value="breach" onChange={handleAgentChange} /> Breach
          </label>
          <label>
            <input type="checkbox" value="clove" onChange={handleAgentChange} /> Clove
          </label>
          <label>
            <input type="checkbox" value="chamber" onChange={handleAgentChange} /> Chamber
          </label>
          <label>
            <input type="checkbox" value="cypher" onChange={handleAgentChange} /> Cypher
          </label>
          <label>
            <input type="checkbox" value="deadlock" onChange={handleAgentChange} /> Deadlock
          </label>
          <label>
            <input type="checkbox" value="fade" onChange={handleAgentChange} /> Fade
          </label>
          <label>
            <input type="checkbox" value="gekko" onChange={handleAgentChange} /> Gekko
          </label>
          <label>
            <input type="checkbox" value="harbor" onChange={handleAgentChange} /> Harbor
          </label>
          <label>
            <input type="checkbox" value="iso" onChange={handleAgentChange} /> Iso
          </label>
          <label>
            <input type="checkbox" value="jett" onChange={handleAgentChange} /> Jett
          </label>
          <label>
            <input type="checkbox" value="kay/o" onChange={handleAgentChange} /> KAY/O
          </label>
          <label>
            <input type="checkbox" value="killjoy" onChange={handleAgentChange} /> Killjoy
          </label>
          <label>
            <input type="checkbox" value="neon" onChange={handleAgentChange} /> Neon
          </label>
          <label>
            <input type="checkbox" value="omen" onChange={handleAgentChange} /> Omen
          </label>
          <label>
            <input type="checkbox" value="phoenix" onChange={handleAgentChange} /> Phoenix
          </label>
          <label>
            <input type="checkbox" value="raze" onChange={handleAgentChange} /> Raze
          </label>
          <label>
            <input type="checkbox" value="reyna" onChange={handleAgentChange} /> Reyna
          </label>
          <label>
            <input type="checkbox" value="sage" onChange={handleAgentChange} /> Sage
          </label>
          <label>
            <input type="checkbox" value="skye" onChange={handleAgentChange} /> Skye
          </label>
          <label>
            <input type="checkbox" value="sova" onChange={handleAgentChange} /> Sova
          </label>
          <label>
            <input type="checkbox" value="tejo" onChange={handleAgentChange} /> Tejo
          </label>
          <label>
            <input type="checkbox" value="viper" onChange={handleAgentChange} /> Viper
          </label>
          <label>
            <input type="checkbox" value="yoru" onChange={handleAgentChange} /> Yoru
          </label>
        </div>
  
        <h4>Maps</h4>
        <div className="horizontal-checkboxes">
          <label>
            <input type="checkbox" value="abyss" onChange={handleMapChange} /> Abyss
          </label>
          <label>
            <input type="checkbox" value="ascent" onChange={handleMapChange} /> Ascent
          </label>
          <label>
            <input type="checkbox" value="bind" onChange={handleMapChange} /> Bind
          </label>
          <label>
            <input type="checkbox" value="breeze" onChange={handleMapChange} /> Breeze
          </label>
          <label>
            <input type="checkbox" value="fracture" onChange={handleMapChange} /> Fracture
          </label>
          <label>
            <input type="checkbox" value="haven" onChange={handleMapChange} /> Haven
          </label>
          <label>
            <input type="checkbox" value="icebox" onChange={handleMapChange} /> Icebox
          </label>
          <label>
            <input type="checkbox" value="lotus" onChange={handleMapChange} /> Lotus
          </label>
          <label>
            <input type="checkbox" value="pearl" onChange={handleMapChange} /> Pearl
          </label>
          <label>
            <input type="checkbox" value="split" onChange={handleMapChange} /> Split
          </label>
          <label>
            <input type="checkbox" value="sunset" onChange={handleMapChange} /> Sunset
          </label>
        </div>
  
        <button className="apply-button" onClick={() => onApplyFilters(selectedAgents, selectedMaps)}>Apply Filters</button>
      </div>
    );
  };
  
  export default Filters;
  