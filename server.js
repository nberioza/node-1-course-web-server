const express = require('express');
const hbs = require('hbs');

const app=express();
//using of reusibles called partials
hbs.registerPartials(__dirname+'/views/partials');
//setting a helper frst arg func name sec the func her self
hbs.registerHelper('getCurrentYear',()=>{
    return new Date().getFullYear();
})
//some change
app.set('view engine','hbs');

app.use(express.static(__dirname+'/public'));//not 100% on this line here

app.get('/',(req,res)=>{
    res.render('home.hbs',{pageTitle : 'Home Screen',
   
})}
);

app.get('/about',(req,res)=>{
    res.render('about.hbs',{pageTitle : 'About Page',
                           
})
    
    });
    


app.listen(3000);