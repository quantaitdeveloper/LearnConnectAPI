var apiCategories = "https://ctechworks.com/api/categories";
var apiPosts = "https://ctechworks.com/api/post";
var apilistPost = "https://ctechworks.com/api/post";

function getCategories() {
  fetch(apiCategories)
    .then(function (respone) {
      return respone.json();
    })
    .then(function (listData) {
      console.log(apiCategories);
      let listCate = listData.data.map(function (cateItem, index) {
        return `<a style="cursor :pointer;">
        ${cateItem.name} <span class="tag-link-count">(${index + 1})</span>
      </a>`;
      });
      let htmls = listCate.join("");

      document.getElementsByClassName("tagcloud")[0].innerHTML = htmls;
    });
}

function getPosts() {
  fetch(apiPosts)
    .then((res) => res.json())
    .then((listData) => {
      /*lấy danh sách bài viết*/

      let listPosts = listData.data.map((postItem, index) => {
        return `<div class="col-lg-6 col-md-6">
      <div class="single-blog-post-item">
        <div class="post-image">
          <a href="#">
            <img src="https://ctechworks.com/storage/${postItem.image}" width="350px" height="245px" alt="image">
          </a>
        </div>

        <div class="post-content">
          <ul class="post-meta">
            <li><a href="#">Admin</a></li>
            <li>${postItem.created_at}</li>
          </ul>
          <h3><a href="#">${postItem.title}</a></h3>
          <a href="#" class="read-more-btn">Read More <i data-feather="plus-circle"></i></a>
        </div>
      </div>
    </div>`
    ;
      });

      getElement(listPosts, "listPosts");

      /*lấy danh sách bài viết phổ biến */

      let listPopularPosts = listData.data.map((postItem, index) => {
        return `<article class="item">
      <a href="#" class="thumb">
        <span style="background-image : https://ctechworks.com/storage/${postItem.image}}" class="fullimage cover bg1"  role="img"></span>
      </a>
      <div class="info">
        <time datetime="2019-06-30">June 10, 2019</time>
        <h4 class="title usmall"><a href="#">${postItem.title}</a></h4>
      </div>

      <div class="clear"></div>
    </article>`;
      });

      getElement(listPopularPosts, "listpopPosts");
    });
}

/*hàm gọi element ra màn hình*/

function getElement(arr, id) {
  let posts = arr.join("");
  console.log(posts);
  document.getElementById(id).innerHTML = posts;
}

getCategories();
getPosts();
