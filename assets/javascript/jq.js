console.log(goKit)

for(i = 0; i < events.length; i++){
$('#events').append('<option>' + events[i] + '</option>');
}

var calLst = $('<ul>');
$('document').on('select', '#events', function (){
	for(let i = 0;i < goKit.length; i++){
		$('#mainLst').wrap('<li>' + goKit[i].need + '</li>');		
	}
})
function getElder()	{
var selElderKit = $('#checkbox-h-2a')[0].checked;
	for (i=0; i < elderKit.length; i++){
		if (selElderKit === true){
			$('#elderLst').append('<li>' + elderKit[i].need + '</li>');
				$('li').addClass('elder');
			}
		if (selElderKit === false){
			$('li').closest('.elder').detach();
		}
	}
}
function getStay()	{
var selStayKit = $('#checkbox-h-2b')[0].checked;
	for (i=0; i < stayKit.length; i++){
		if (selStayKit === true){
			$('#stayLst').append('<li>' + stayKit[i].need + '</li>');
				$('li').addClass('stay');
			}
		if (selStayKit === false){
			$('li').closest('.stay').detach();
		}
	}
}
function getPet()	{
var selPetKit = $('#checkbox-h-2c')[0].checked;
	for (i=0; i < petKit.length; i++){
		if (selPetKit === true){
			$('#petLst').append('<li>' + petKit[i].need + '</li>');
				$('li').addClass('pet');
			}
		if (selPetKit === false){
			$('li').closest('.pet').detach();
		}
	}
}
function getCar()	{
var selCarKit = $('#checkbox-h-2d')[0].checked;
	for (i=0; i < carKit.length; i++){
		if (selCarKit === true){
			$('#carLst').append('<li>' + carKit[i].need + '</li>');
				$('li').addClass('car');
			}
		if (selCarKit === false){
			$('li').closest('.car').detach();
		}
	}
}
function getCalories(){
	sliderVal = $("#step").valueAsNumber;
	for(let i = 0;i < avgCal.length;i++){
		var calNode = avgCal[i].label + (avgCal[i].value * sliderVal);
		$('#calories').append(avgCal);
	console.log(calNode)
	console.log(sliderVal.valueAsNumber)
}
}

