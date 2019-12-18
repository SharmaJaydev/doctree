module.exports= function(app)
{
    app.get('/Doctree_index',(req,res)=>
    {
        res.render('Doctree_index');
    });
    app.post('/Doctree_index',(req,res)=>
    {
        res.render('Doctree_index');
    });
    app.get('/doctree_about-us',(req,res)=>
    {
        res.render('doctree_about-us');
    });
    app.get('/price',(req,res)=>
    {
        res.render('price');
    });
    app.get('/Doctree_contact',(req,res)=>
    {
        res.render('Doctree_contact')
    });
    app.get('/registration/registration',(req,res)=>
    {
        res.render('registration/registration')
    });

};