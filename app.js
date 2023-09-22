const application = require('express');
const app = application();

const bodyParser = require('body-parser')
const path = require('path')

// routers
const home = require('./controllers/homeController');
//end

settingConfig = () => {
    app.set('views', './views');
    app.set('view engine', 'ejs');
}

//middleware start
middlewareConfig = () => {
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(application.static(path.join(__dirname, 'static')));
    app.use(home);
    // app.use('/',(req,res,next)=>{
    //     res.render("404");
    // })
}
//middleware end

(() => {
    settingConfig();
    middlewareConfig();
})();




//routeing start
app.get('/', (req, res) => {
    res.render('index')
});


//routeing end



(() => {
    const port = 3000;
    app.listen(port, () => {
        console.log("Server Started");
    });
})();

