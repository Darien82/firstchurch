var maxWords = 250;

jQuery('textinput').keypress(function() {
    var $this, wordcount;
    $this = $(this);
    wordCount = $this.val().split(/\b[\s,\.-:;]*/).length;
    if (wordCount > maxWords) {
        jQuery(".word_count").text("" + maxWords);
        alert("You've reached the maximum allowed words.");
        return false;
    } else {
        return jQuery(".word_count").text(wordCount);
    }
});

jQuery('textinput').change(function() {
    var words = $(this).val().split(/\b[\s,\.-:;]*/);
    if (words.length > maxWords) {
        words.splice(maxWords);
        $(this).val(words.join(""));
       
    }
});​