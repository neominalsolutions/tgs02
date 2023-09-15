// makalerleri çektiğimiz controller

const { default: axios } = require("axios");

// posts/1/comments
// posts/1
// posts
// posts/1/likes
// posts/1/tags

function PostsController() {

  const baseUrl = `https://jsonplaceholder.typicode.com`;

  // posts (GET)
  function get(req,res) {
     axios.get(`${baseUrl}/posts`)
     .then(response => {
      // controller = PostsController
      // model = response.data
      // views = posts
      console.log('responseObject', response);
      // controller actionda view'e veri gönderdik.
      res.render('./post/posts', { title:'posts', posts: response.data })
     }).catch(err => {
      res.render('error', {message:'Post verisi çekilirken hata meydana geldi.'})
     });
  }

  // posts/1 (GET)
  async function getById(req,res) {
    debugger;
    // axios async await, Promise
    const params = req.params; // {id:1,name:'deneme'}
    const id = req.params.id;
    try {
      let postDetail =  await axios.get(`${baseUrl}/posts/${id}`);
      let postComments = await axios.get(`${baseUrl}/comments?postId=${id}`);

      // let {data,status} = postDetail;

      // {'id':1,'title':'post1', 'body':'postBody', 'comments': [{'message':'Comment1', 'userId':1}, {'message':'comment2', 'userId':2}]}

      // express de view modeli literal formatta ihtiyaç dahilinde açabiliriz.
      const vm = {
        post: {... postDetail.data, comments: [... postComments.data]},
        commentCount: postComments.data.length
      }

      res.render('./post/posts-detail',{ title:'Post Detay', model: vm})
    } catch (error) {
      
    }
  }

  // posts/1/comments
  function getPostComments(req,res) {}

  // posts (HTTPOST)
  function post(req,res) {}

  // (HTTPPUT) update
  // posts/1
  function put(req,res) {}
  
  // posts/1
  function deleteById(req,res) {}

  return {
    get,
    getById,
    post,
    put,
    deleteById,
    getPostComments
  }

}

module.exports = PostsController();