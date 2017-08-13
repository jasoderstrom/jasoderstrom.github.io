//Get posts from embeded JSON in the DOM
var posts = JSON.parse(document.getElementById('posts').innerHTML);

//Populate the page with posts
function PopulatePagePosts(page)
{
    var index = 5 * (page - 1);

    if (posts.length === 0) {
        $('[name=1-title]').html("Blog posts coming soon!");
        $('[name=1-title]').unwrap();
    }

    for (var i = 0; i < 5; i++) {
        if(index === posts.length)
        {
            break;
        } else {
            var post = posts[index + i];
            var htmlLocation = i + 1;
            if (post == null) {
                $('[name="' + htmlLocation + '-title"]').empty();
                $('[name="' + htmlLocation + '-date"]').empty();
                $('[name="' + htmlLocation + '-description"]').empty();
            } else {
                $('[name="' + htmlLocation + '-url"]').prop("href", post.url);
                $('[name="' + htmlLocation + '-title"]').html(post.title);
                $('[name="' + htmlLocation + '-date"]').html(post.date);
                $('[name="' + htmlLocation + '-description"]').html(post.description);
            }
        } 
    }
}

//Return total pages for pagination. Uses sets of 5
function TotalPages()
{
    if (posts.length === 0) {
            return 1;
        } else {
            return Math.ceil(posts.length / 5)
    }
}

//Load first page on document load
$(document).ready(PopulatePagePosts(1));

//Have to have at least 2 for pagination to begin
$('#paginator').twbsPagination({
    totalPages: TotalPages(),
    visiblePages: 5,
    onPageClick: function (event, page) {
        PopulatePagePosts(page);
    }
});
