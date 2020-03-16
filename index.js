const data = [
  {'name':'user1','group':1},
  {'name':'user2','group':1},
  {'name':'user3','group':2}
];

console.log('top line', data.group);

// Set app element
const app = document.querySelector('#app');

// Create markup to render data to DOM
app.innerHTML = '<div>' + data.map(function(user){
	
  return '<div id="div" class="username">' + user.name +
	'<span name="span" id="hidden">' + user.name + ' is in group number ' + user.group + '</span>'
	+ '</div>';
}).join('') + '</div>';


//document.getElementById('hidden').style.display = 'none';

//Create Event Listener
document.addEventListener('click', function (event) {
  if (!event.target.matches('.username')) return;
  
  event.preventDefault();
	

	

  //var x = event.getElementsById('hidden');
  alert(event.target.getElementsByTagName('SPAN')[0].innerHTML);

  //alert(event.target.getElementsByTagName('SPAN'));

}, false);




