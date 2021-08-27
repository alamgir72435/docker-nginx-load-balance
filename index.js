const express = require("express");
const app = express();

const appid = process.env.APPID;

app.get("/", (req, res) => {
	res.send(`app running on appid : ${appid}`);
});

app.listen(appid, () => console.log(`server Running on port ${appid}`));
