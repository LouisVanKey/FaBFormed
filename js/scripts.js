window.addEventListener('DOMContentLoaded', event => {
	// Toggle the side navigation
	const sidebarToggle = document.body.querySelector('#sidebarToggle');
	if (sidebarToggle) {
		// Uncomment Below to persist sidebar toggle between refreshes
		// if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
		//     document.body.classList.toggle('sb-sidenav-toggled');
		// }
		sidebarToggle.addEventListener('click', event => {
			event.preventDefault();
			document.body.classList.toggle('sb-sidenav-toggled');
			localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
		});
	}

	// Setup global variables
	window.card = new Card(
		new CanvasHelper(
			document.getElementById('cardCanvas'),
			''
		),
    ''
	);

	// Debug helper to find coordinates in the canvas
	function readMousePos(e) {
		var pos = getMousePos(window.canvasHelper.canvas, e);
		posx = pos.x;
		posy = pos.y;
		console.log(posx, posy);
	}

	function getMousePos(canvas, evt) {
		var rect = canvas.getBoundingClientRect();
		return {
			x: (evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width,
			y: (evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height
		};
	}

	//window.addEventListener('mousemove', readMousePos, false);
});
