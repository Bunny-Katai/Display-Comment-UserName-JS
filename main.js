const userName = $('#display-name-input');
const comment = $('#comment-input');

$('#main-submit').click(function () {
    if (userName.val() !== '' && comment.val() !== '') {
        $('#comment-section').append(
            `<div class="comment-container">
                <img src="./assets/generic_user.png">
                <div class="content-container">
                    <div class="separate-them">
                        <span class="username">${userName.val()}</span>
                        <div>
                            <span class="control edit-control">Edit</span>
                            <span class="control delete-control">Delete</span>
                        </div>
                    </div>
                    <p>
                    ${comment.val()}
                    </p>
                </div>
            </div>`
        );
        $('#display-name-input').val('');
        $('#comment-input').val('');
        $('.delete-control').click(function () {
            $(this).parent().parent().parent().parent().remove();
        }); 
    }
});

$('#comment-section').on('click', '.edit-control', function () {
    $(this).parent().parent().parent().append(
        `<div>
            <input class="comment-creation-input">
            <div>
                <button type="submit" class="submit-button secondary-submit">Submit</button>
                <button type="button" class="submit-button cancel-button">Cancel</button>
        </div>`
    );
    $('.secondary-submit').click(function () {
        if ($(this).parent().prev().val() !== '') {
            let newComment = $(this).parent().prev().val();
            $(this).parent().parent().prev().html(newComment);
        }
        $(this).parent().parent().remove();
    });
    $('.cancel-button').click(function () {
        $(this).parent().parent().remove();
    });
});
