import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/leaderboard.css"; // Assuming you have a CSS file for styling
import users from "../data/users.js";

const Leaderboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 20;

  const topUsers = users.slice(0, 3);
  const paginatedUsers = users.slice(3);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = paginatedUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(paginatedUsers.length / usersPerPage);

  return (
    <div className="leaderboard-container" style={{padding: '20px auto', maxWidth: '800px', margin: '0 auto'}}>
      <h2 className="leaderboard-title" style={{textAlign: 'center'}}>Leaderboard</h2>
      
      <div className="top-leaders" style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", gap: "8px", padding: "30px 0", backgroundColor: "#9500ff", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)" }}>
        <div 
          key={topUsers[1].username} 
          className="top-leader rank-2" 
          style={{ 
            background: "silver", 
            color: "black", 
            padding: "20px", 
            borderRadius: "12px", 
            boxShadow: "0px 5px 15px rgba(0,0,0,0.3)", 
            transform: "scale(0.9)",
            textAlign: "center"
          }}
        >
          <img src={topUsers[1].userProfile} alt={topUsers[1].fullName} className="profile-pic" />
          <div className="leader-info">
            <span className="leader-name">{topUsers[1].fullName}</span>
            <span className="leader-points">{topUsers[1].points} Pts</span>
            <div className="rank-badge">Rank 2</div>
          </div>
        </div>

        <div 
          key={topUsers[0].username} 
          className="top-leader rank-1" 
          style={{ 
            background: "gold", 
            color: "black", 
            padding: "25px", 
            borderRadius: "15px", 
            boxShadow: "0px 8px 20px rgba(0,0,0,0.4)",
            transform: "scale(1.1)",
            textAlign: "center"
          }}
        >
          <img src={topUsers[0].userProfile} alt={topUsers[0].fullName} className="profile-pic" />
          <div className="leader-info">
            <span className="leader-name">{topUsers[0].fullName}</span>
            <span className="leader-points">{topUsers[0].points} Pts</span>
            <div className="rank-badge">Rank 1</div>
          </div>
        </div>

        <div 
          key={topUsers[2].username} 
          className="top-leader rank-3" 
          style={{ 
            background: "#cd7f32", 
            color: "black", 
            padding: "20px", 
            borderRadius: "12px", 
            boxShadow: "0px 5px 15px rgba(0,0,0,0.3)", 
            transform: "scale(0.9)",
            textAlign: "center"
          }}
        >
          <img src={topUsers[2].userProfile} alt={topUsers[2].fullName} className="profile-pic" />
          <div className="leader-info">
            <span className="leader-name">{topUsers[2].fullName}</span>
            <span className="leader-points">{topUsers[2].points} Pts</span>
            <div className="rank-badge">Rank 3</div>
          </div>
        </div>
      </div>

      <div className="leaderboard-list" style={{ padding: "30px 0" }}>
        {currentUsers.map((user, index) => (
          <div key={user.username} className="leaderboard-item">
            <span className="rank">#{indexOfFirstUser + index + 4}</span>
            <img src={user.userProfile} alt={user.fullName} className="profile-pic" />
            <span className="name">{user.fullName}</span>
            <span className="points">{user.points} Pts</span>
          </div>
        ))}
      </div>

      <div className="pagination-container" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", padding: "20px 0" }}>
        <button
          className="btn btn-primary"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span> Page {currentPage} of {totalPages} </span>
        <button
          className="btn btn-primary"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Leaderboard;
