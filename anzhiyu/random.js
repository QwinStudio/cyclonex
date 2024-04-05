var posts=["posts/5300452d.html","posts/4f583520.html","posts/47d90f53.html","posts/6e48712d.html","posts/afde1d19.html","posts/d2249b9a.html","posts/1904a8e.html","posts/8861df0c.html","posts/79e39941.html","posts/355fcaf4.html","posts/972d1e0c.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };