const express = require("express");
const app = express();
const PORT = 3000;

// Sample LoL accounts with images
const accounts = [
    { id: 1308, name: "LOL - Acc #1308", price: 2500000, img: "/images/account1.jpg" },
    { id: 1205, name: "LOL - Acc #1205", price: 150000, img: "/images/account2.jpg" },
    { id: 1304, name: "LOL - Acc #1304", price: 80000, img: "/images/account3.jpg" },
    { id: 4230, name: "LOL - Acc #4230", price: 125000, img: "/images/account4.jpg" },
];

// Serve static files from 'public' folder
app.use(express.static("public"));

// API route to get available accounts
app.get("/api/accounts", (req, res) => {
    res.json(accounts);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
