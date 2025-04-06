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
            background: "#f2e9e4", 
            color: "black", 
            padding: "20px", 
            borderRadius: "12px", 
            boxShadow: "0px 5px 15px rgba(0,0,0,0.3)", 
            transform: "scale(0.9)",
            textAlign: "center"
          }}
        >
          <span style={{fontSize:'32px', textShadow: '2px 2px 5px #eb5e28'}}>🥈</span>
          <div className="rank-badge" style={{color: '#eb5e28', fontWeight:'bolder', paddingBottom: '8px'}}>Rank 2</div>
          <img src={topUsers[1].userProfile} alt={topUsers[1].fullName} className="profile-pic" />
          <div className="leader-info">
            <div className="leader-name" style={{color: '#eb5e28', fontWeight:'bolder', paddingTop: '8px'}}>{topUsers[1].fullName}</div>
            <div className="leader-points" style={{color:'#eb5e28', fontWeight:'bold'}}>{topUsers[1].points} 🪙</div>
          </div>
        </div>

        <div 
          key={topUsers[0].username} 
          className="top-leader rank-1" 
          style={{ 
            background: "#fad643", 
            color: "black", 
            padding: "25px", 
            borderRadius: "15px", 
            boxShadow: "0px 8px 20px rgba(0,0,0,0.4)",
            transform: "scale(1.1)",
            textAlign: "center"
          }}
        >
          <span style={{fontSize:'32px', textShadow: '2px 2px 5px #bbb'}}>🏆</span>
          <div className="rank-badge" style={{color: '#eb5e28', fontWeight:'bolder', paddingBottom: '8px'}}>Rank 1</div>
          <img src={topUsers[0].userProfile} alt={topUsers[0].fullName} className="profile-pic" />
          <div className="leader-info">
            <div className="leader-name" style={{color: '#eb5e28', fontWeight:'bolder', paddingTop: '8px'}}>{topUsers[0].fullName}</div>
            <div className="leader-points" style={{color:'#eb5e28', fontWeight:'bold'}}>{topUsers[0].points} 🪙</div>
          </div>
        </div>

        <div 
          key={topUsers[2].username} 
          className="top-leader rank-3" 
          style={{ 
            background: "#cb8c47", 
            color: "black", 
            padding: "20px", 
            borderRadius: "12px", 
            boxShadow: "0px 5px 15px rgba(0,0,0,0.3)", 
            transform: "scale(0.9)",
            textAlign: "center"
          }}
        >
          <span style={{fontSize:'32px', textShadow: '2px 2px 5px #fff'}}>🥉</span>
          <div className="rank-badge" style={{color: 'white', fontWeight:'bolder', paddingBottom: '8px'}}>Rank 3</div>
          <img src={topUsers[2].userProfile} alt={topUsers[2].fullName} className="profile-pic" />
          <div className="leader-info">
            <div className="leader-name" style={{color: 'white', fontWeight:'bolder', paddingTop: '8px'}}>{topUsers[2].fullName}</div>
            <div className="leader-points" style={{color:'#fff', fontWeight:'bold'}}>{topUsers[2].points} 🪙</div>
          </div>
        </div>
      </div>

      <div className="leaderboard-list" style={{ padding: "30px 0" }}>
        {currentUsers.map((user, index) => (
          <div key={user.username} className="leaderboard-item">
            <span className="rank">#{indexOfFirstUser + index + 4}</span>
            <img src={user.userProfile} alt={user.fullName} className="profile-pic" />
            <span className="name">{user.fullName}</span>
            <span className="points">{user.points} 🪙</span>
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
