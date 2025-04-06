const users = [
    { fullName: "Alice Johnson", username: "alicej", points: 980, userProfile: "https://i.pravatar.cc/150?img=1" },
    { fullName: "Bob Smith", username: "bobsmith", points: 920, userProfile: "https://i.pravatar.cc/150?img=2" },
    { fullName: "Charlie Brown", username: "charlieb", points: 880, userProfile: "https://i.pravatar.cc/150?img=3" },
    { fullName: "David Williams", username: "davidw", points: 850, userProfile: "https://i.pravatar.cc/150?img=4" },
    { fullName: "Emma Davis", username: "emmad", points: 820, userProfile: "https://i.pravatar.cc/150?img=5" },
    { fullName: "Franklin Harris", username: "frankh", points: 790, userProfile: "https://i.pravatar.cc/150?img=6" },
    { fullName: "Grace Kelly", username: "gracek", points: 770, userProfile: "https://i.pravatar.cc/150?img=7" },
    { fullName: "Hannah Lewis", username: "hannahl", points: 740, userProfile: "https://i.pravatar.cc/150?img=8" },
    { fullName: "Isaac Moore", username: "isaacm", points: 710, userProfile: "https://i.pravatar.cc/150?img=9" },
    { fullName: "Jack Nelson", username: "jackn", points: 680, userProfile: "https://i.pravatar.cc/150?img=10" },
    { fullName: "Kate Owens", username: "kateo", points: 650, userProfile: "https://i.pravatar.cc/150?img=11" },
    { fullName: "Liam Perry", username: "liamp", points: 620, userProfile: "https://i.pravatar.cc/150?img=12" },
];

for (let i = 13; i <= 100; i++) {
    users.push({
        fullName: `User ${i}`,
        username: `user${i}`,
        points: Math.floor(Math.random() * 1000),
        userProfile: `https://i.pravatar.cc/150?img=${i % 70}`
    });
}

  
export default users;  