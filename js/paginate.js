//Get posts from embeded JSON in the DOM
var posts = JSON.parse(document.getElementById('posts').innerHTML);

//Populate the page with posts
function PopulatePagePosts(page)
{
    var index = 5 * (page - 1);
    for (var i = 0; i < 5; i++) {
        if(index == posts.length)
        {
            break;
        } else {
            var post = posts[index + i];
            if (post == null) {
                break;
            } else {
                var htmlLocation = i + 1;
                $('[name="' + htmlLocation + '"]').html(post.title);
            }
        } 
    }
}

//Load first page on document load
$(document).ready(PopulatePagePosts(1));

//Have to have at least 2 for pagination to begin
$('#paginator').twbsPagination({
    totalPages: Math.ceil(posts.length / 5),
    visiblePages: 5,
    onPageClick: function (event, page) {
        PopulatePagePosts(page);
    }
});
