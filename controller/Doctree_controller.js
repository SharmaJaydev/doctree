module.exports= function(app)
{

    app.get('/',function(req,res)
{
    res.render('index');
});
    app.get('/index',function(req,res)
    {
        res.render('index');
    });
    app.get('/about_us',function(req,res)
    {
        res.render('about_us');
    });
    app.get('/contact',function(req,res)
    {
        res.render('contact');
    });
    app.get('/reg_form/login',function(req,res)
    {
        res.render('reg_form/login');
        
    });
    app.post('/reg_form/login',function(req,res)
    {
        res.render('reg_form/login');
    });
    app.get('/reg_form/Sign_Up',function(req,res)
    {
        res.render('reg_form/Sign_Up');
    });
    app.post('/reg_form/Sign_Up',function(req,res)
    {
        res.render('reg_form/Sign_Up')
    });
    app.get('/reg_form/forgot',function(req,res)
    {
        res.render('reg_form/forgot');
    });
    app.post('/reg_form/otp',function(req,res)
    {
        res.render('reg_form/otp');
    });
    app.post('/reg_form/New_Password',function(req,res)
    {
        res.render('reg_form/New_password');
    });
};               