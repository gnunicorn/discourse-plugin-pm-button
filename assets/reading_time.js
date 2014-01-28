(function() {
// READING TIME 

Discourse.PostView.reopen({
  updateReadingTime: function($post) {
  	var reading_time = Math.ceil(
  		$post.find('.cooked').text().split(" ").length / 180);
  	
  	$post.find('.topic-meta-data-inside').prepend(
  			'<span class="post-info reading-time" title="reading time">~' + reading_time +" min </span>")	
  }.on('postViewInserted')
});
})();