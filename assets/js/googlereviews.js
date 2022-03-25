jQuery(document).ready(function( $ ) {
    $("#google-reviews").googlePlaces({
        placeId: '', //Find placeID @: https://developers.google.com/places/place-id 16628069977964995341
        render: ['reviews'],
        // header content
        header: "<h3>Google Reviews</h3>",

        // footer content
        footer: '',

        // maximum number of reviews
        maxRows: 8,

        // minimum number of ratings
        minRating: 4,

        // localize month names
        months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],

        // break length
        text_break_length: "45",

        // shorten names
        shorten_names: true,

        // more reviews button url
        moreReviewsButtonUrl: '',

        // button label
        moreReviewsButtonLabel: 'Show More Reviews',

        // write review button url
        writeReviewButtonUrl: '',

        // button label
        writeReviewButtonLabel: 'Write New Review',

        // show review date
        showReviewDate: true,

        // show profile picture
        showProfilePicture: true
})}); 