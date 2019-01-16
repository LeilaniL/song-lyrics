
import $ from 'jquery';
import { LyricSearch } from './LyricSearch.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function () {

    $("#userForm").submit(function (event) {
        event.preventDefault();
        let artistName = $('#artist').val();
        let songTitle = $('#song').val();

        let newSearch = new LyricSearch(artistName, songTitle);

        $.ajax({
            url: `https://api.lyrics.ovh/v1/${artistName}/${songTitle}`,
            type: 'GET',
            data: {
                format: 'json'
            },
            success: function (response) {
                $("p#lyrics").text(response.lyrics);
                console.log(response.lyrics);


            },
            error: function () {
                $('#errors').text("There was an error processing your request. Please try again.");
            }
        });


    })
})
// $.ajax({
//     url: `https://api.giphy.com/v1/stickers/random?api_key=eA4oR2RUdVtaS1l8xJ1UtQaJs6JeItIz&tag=&rating=PG&limit=1`,
//     type: 'GET',
//     data: {
//         format: 'json'
//     },
//     success: function (response) {
//         document.getElementById("test").src = response.data.images.original.url;


//     },
//     error: function () {
//         $('#errors').text("There was an error processing your request. Please try again.");
//     }
