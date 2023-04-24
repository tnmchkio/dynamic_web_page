
document.addEventListener('DOMContentLoaded', () => {
	document.querySelector("#submit").disabled = true;
});

function validate() {
	document.querySelector("#submit").disabled  = false;
	document.querySelectorAll('.check_empty').forEach(input => {
		if(input.value.length == 0 ){
			document.querySelector("#submit").disabled =  true;
		}
	});
}