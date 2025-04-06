import React from 'react';
import '../styles/leaderboard.css';

const LeaderboardItem = ({ rank, fullName, username, points, userProfile }) => {
  return (
    <div className={`leaderboard-item ${rank <= 3 ? 'top-rank' : ''}`}>
      <span className="rank">#{rank}</span>
      <img src={userProfile} alt={fullName} className="profile-pic" />
      <div className="user-info">
        <h4>{fullName} (@{username})</h4>
        <p>{points} pts</p>
      </div>
    </div>
  );
};

export default LeaderboardItem;