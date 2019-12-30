var authenticate = require('../authenticate');
module.exports= function(app)
{

    app.get('/Doctree_index',authenticate.verifyUser,(req,res)=>
{
    res.render('Doctree_index');
});
    app.get('/Doctree_about-us',function(req,res)
    {
        res.render('Doctree_about-us');
    });
    app.get('/about_us',function(req,res)
    {
        res.render('about_us');
    });
    app.get('/contact',function(req,res)
    {
        res.render('contact');
    });    
};               