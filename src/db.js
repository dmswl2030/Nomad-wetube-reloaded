import mongoose from "mongoose";

mongoose.connect(process.env.DB_URL, {});

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB");
const handleError = (error) => console.log("❌ DB Error", error);

db.on("error", handleError); //on: 여러번 계속 발생
db.once("open", handleOpen); //once: 한번만 나오게
