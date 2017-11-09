module.exports = function Route(app){
  app.get('/', function (req, res){
    res.render('index');
  });

  app.post('/result', function (req, res){
    const submittedInfo = {
      name: req.body.name,
      location: req.body.location,
      language: req.body.language,
      comment: req.body.comment
    };
    res.render('result', { userData: submittedInfo });
  });
};
