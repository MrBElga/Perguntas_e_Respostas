const express = require("express");
const app     = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/perguntas", (req,res)=>{
    res.render("pergunta");
});

app.listen(8080,()=>{
    console.log("Iniciou! O_O << LEO ESTALA COOL");
});
