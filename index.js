//create function
$(function() {
    //make a even listener for the submit button
    $("#js-shopping-list-form").submit(function(event) {
        //store the new item into a variable
        const addedItem = $("#shopping-list-entry").val();
        //prevent the submit to refresh the page
        event.preventDefault();
        //append new item to the list
        $(".shopping-list").append(
            `<li>
                <span class="shopping-item">${addedItem}</span>
                <div class="shopping-item-controls">
                    <button class="shopping-item-toggle">
                        <span class="button-label">check</span>
                    </button>
                    <button class="shopping-item-delete">
                        <span class="button-label">delete</span>
                    </button>
                </div>
            </li>`
        )
        //reset the input
        $("#shopping-list-entry").val("");
    });
    //create an event listner on the check button which can toggleClass
    $(".shopping-list").on("click", ".shopping-item-toggle", function(event) {
        $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked")
    });

    //create an event listener on the delete button which will remove from list
    $(".shopping-list").on("click", ".shopping-item-delete", function(event) {
        $(this).closest("li").remove();
    })

});