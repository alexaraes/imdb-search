$(document).ready(function() {
	function onReceivedMovies(movies) {
		console.log(movies.Search[0].Title)
	}

	$.get('http://www.omdbapi.com/', 
		{s: 'star wars'},
		onReceivedMovies,
		'json'
		);
}