const express = require("express");

const app = express();






//Template Engine
app.set("view engine", "ejs"); //Template Engine'mizin ejs olduğunu söyledik


//MiddleWares
app.use(express.static("public"));//static dosyamızı public klasörünün içeriisnde olacak diyoruz. ve public klasörü oluşturuyoruz.




//Routes (yönlendirmeler)
app.get('/', (req,res)=>{
    // res.status(200).send('INDEX SAYFASI');
    res.status(200).render('index', {
      page_name: "index"
    }); // index.ejs sayfasını çalıştırdık
});

app.get('/about', (req,res)=>{
    // res.status(200).send('INDEX SAYFASI');
    res.status(200).render('about', {
      page_name: "about"
    }); // index.ejs sayfasını çalıştırdık
});



const port = 3000;
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});

