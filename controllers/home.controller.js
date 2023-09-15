// HomeController.js actions

const { default: axios } = require("axios");

function HomeController() {
  
function get(req,res) {

  res.render('index', { title: 'Express' });
}

function post(req,res) {
  console.log('req.body', req.body);
  res.render('index', { title: 'Express' });
}

return {
  get,
  post
}

}

module.exports = HomeController();