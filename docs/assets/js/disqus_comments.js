(function() {
  var disqus_config;

  disqus_config = function() {
    this.page.url = 'https://murderhotel.github.io/assets/js/disqus_comments.js';
    this.page.identifier = 'https://murderhotel.github.io/assets/js/disqus_comments.js';
    return false;
  };

  (function() {
    var d, s;
    d = document;
    s = d.createElement('script');
    s.src = 'https://.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    return false;
  });

}).call(this);
