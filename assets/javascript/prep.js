   var iBank =  '<i class="fa fa-university" aria-hidden= "true"></i>';
   var iBattery = '<i class="fa fa-battery-half" aria-hidden="true"></i>';
   var iBed = '<i class="fa fa-bed" aria-hidden="true"></i>'
   var iBike = '<i class="fa fa-bicycle" aria-hidden="true"></i>'
   var iCar =  '<i class="fa fa-car" aria-hidden= "true"></i>';
   var iChild =  '<i class="fa fa-child" aria-hidden= "true"></i>';
   var iCredit =  '<i class="fa fa-credit-card" aria-hidden="true"></i>';
   var iFemale =  '<i class="fa fa-venus" aria-hidden= "true"></i>';
   var iFire =  '<i class="fa fa-fire" aria-hidden= "true"></i>';
   var iFireEx =  '<i class="fa fa-fire-extinguisher" aria-hidden= "true"></i>';
   var iFood = '<i class="fa fa-cutlery" aria-hidden="true"></i>';
   var iHome = '<i class="fa fa-home" aria-hidden="true"></i>'
   var iHeart =  '<i class="fa fa-heart" aria-hidden= "true"></i>';
   var iIdCard =  '<i class="fa fa-id-card-o" aria-hidden= "true"></i>';
   var iInfo =  '<i class="fa fa-info" aria-hidden= "true"></i>';
   var iKey =  '<i class="fa fa-key" aria-hidden= "true"></i>';
   var iLight = '<i class="fa fa-lightbulb-o" aria-hidden="true"></i>';
   var iMale =  '<i class="fa fa-mars" aria-hidden= "true"></i>';
   var iMap =  '<i class="fa fa-map-o" aria-hidden= "true"></i>';
   var iMedkit =  '<i class="fa fa-medkit" aria-hidden= "true"></i>';
   var iMoney =  '<i class="fa fa-money" aria-hidden="true"></i>';
   var iMug = '<i class="fa fa-beer" aria-hidden="true"></i>'
   var iPaw =  '<i class="fa fa-paw" aria-hidden= "true"></i>';
   var iPencil = '<i class="fa fa-pencil" aria-hidden="true"></i>'
   var iPhone = '<i class="fa fa-phone" aria-hidden="true"></i>'
   var iPhoto = '<i class="fa fa-picture-o" aria-hidden="true"></i>'
   var iPlace = '<i class="fa fa-map-marker" aria-hidden="true"></i>'
   var iRadio = '<i class="fa fa-wifi" aria-hidden="true"></i>';
   var iSenior =  '<i class="fa fa-wheelchair-alt" aria-hidden= "true"></i>';
   var iShop =  '<i class="fa fa-shopping-cart" aria-hidden= "true"></i>';
   var iSpoon =  '<i class="fa fa-spoon" aria-hidden= "true"></i>';
   var iTech = '<i class="fa fa-usb" aria-hidden="true"></i>'
   var iTrain =  '<i class="fa fa-train" aria-hidden= "true"></i>';
   var iUmbrella = '<i class="fa fa-umbrella" aria-hidden="true"></i>'
   var iUnk = '<i class="fa fa-window-close" aria-hidden="true"></i>'
   var iUserCirc =  '<i class="fa fa-user-circle" aria-hidden= "true"></i>';
   var iWater = '<i class="fa fa-tint" aria-hidden="true"></i>';



   var icons = [iBank, iBed, iBattery, iBike, iCar, iChild, iCredit, iFemale, iFire, iFireEx, iFood, iHeart, iHome, iIdCard, iInfo, iKey, iLight, iMale, iMap, iMedkit, iMoney, iMug, iPaw, iPencil, iPhone, iPhoto, iPlace, iRadio, iSenior, iShop, iSpoon, iTech, iTrain, iUmbrella, iUnk, iUserCirc, iWater]



var goKit = [
{ 'kitName' : 'Evac',
  'icon' : iTrain
  },

	{	
		'event' : ["All Events","Earthquake","Severe Drought","Wildfire","Flood","Hurricane","Blizzard","Heat Wave"],
		'goCat' : 'all',
		'need' : 'Documents',
		'descrip' : 'Copies of your important documents in a waterproof and portable container (insurance cards, birth certificates, deeds, photo IDs, proof of address, etc.)',
		'icon' : iTrain
	},
	{
		'event' : ["All Events","Earthquake","Severe Drought","Wildfire","Flood","Hurricane","Blizzard","Heat Wave"],
		'goCat' : 'all',
		'need' : 'Keys',
		'descrip' : 'Extra set of car and house keys',
		'icon' : iKey
	},
	{
		'event' : ["All Events","Earthquake","Severe Drought","Wildfire","Flood","Hurricane","Blizzard","Heat Wave"],
		'goCat' : 'all',
		'need' : 'Credit Cards',
		'descrip' : 'Copies of credit/ATM cards',
		'icon' : iCredit
	},
	{
		'event' : ["All Events","Earthquake","Severe Drought","Wildfire","Flood","Hurricane","Blizzard","Heat Wave"],
		'goCat' : 'all',
		'need' : 'Cash',
		'descrip' : 'Cash (in small bills)',
		'icon' : iMoney
	},
	{
		'event' : ["All Events","Earthquake","Severe Drought","Wildfire","Flood","Hurricane","Blizzard","Heat Wave"],
		'goCat' : 'all',
		'need' : 'Water',
		'descrip' : 'Bottled water',
		'icon' : iWater
	},
	{
		'event' : ["All Events","Earthquake","Severe Drought","Wildfire","Flood","Hurricane","Blizzard","Heat Wave"],
		'goCat' : 'all',
		'need' : 'Food',
		'descrip' : 'nonperishable food',
		'icon' : iFood
	},
	{
		'event' : ["All Events","Earthquake","Severe Drought","Wildfire","Flood","Hurricane","Blizzard","Heat Wave"],
		'goCat' : 'all',
		'need' : 'Light',
		'descrip' : 'Flashlight (Note-Traditional flashlight bulbs have limited lifespans. Light Emitting Diode (LED) flashlights, however, are more durable and last up to 10 times longer than traditional bulbs.)',
		'icon' : iLight
	},
	{
		'event' : ["All Events","Earthquake","Severe Drought","Wildfire","Flood","Hurricane","Blizzard","Heat Wave"],
		'goCat' : 'all',
		'need' : 'Radio',
		'descrip' : 'Battery-operated AM/FM radio',
		'icon' : iRadio
	},
	{
		'event' : ["All Events","Earthquake","Severe Drought","Wildfire","Flood","Hurricane","Blizzard","Heat Wave"],
		'goCat' : 'all',
		'need' : 'Batteries',
		'descrip' : 'Extra batteries/chargers',
		'icon' : iBattery
	},
	{
		'event' : ["All Events","Earthquake","Severe Drought","Wildfire","Flood","Hurricane","Blizzard","Heat Wave"],
		'goCat' : 'all',
		'need' : 'Medications',
		'descrip' : 'FA list of the medications each member of your household takes, why they take them, and their dosages. If you store extra medication in your Go Bag, be sure to refill it before it expires. Get prescription preparedness tips from the NYC Department of Health & Mental Hygiene',
		'icon' : iMedkit
	},
	{
		'event' : ["All Events","Earthquake","Severe Drought","Wildfire","Flood","Hurricane","Blizzard","Heat Wave"],
		'goCat' : 'all',
		'need' : 'First Aid',
		'descrip' : 'First-aid kit',
		'icon' : iMedkit
	},
	{
		'event' : ["All Events","Earthquake","Severe Drought","Wildfire","Flood","Hurricane","Blizzard","Heat Wave"],
		'goCat' : 'all',
		'need' : 'Toiletries',
		'descrip' : 'Toiletries',
		'icon' :iMug
	},
	{
		'event' : ["All Events","Earthquake","Severe Drought","Wildfire","Flood","Hurricane","Blizzard","Heat Wave"],
		'goCat' : 'all',
		'need' : 'Writing',
		'descrip' : 'Notepad and pen',
		'icon' : iPencil
	},
	{
		'event' : ["All Events","Earthquake","Severe Drought","Wildfire","Flood","Hurricane","Blizzard","Heat Wave"],
		'goCat' : 'all',
		'need' : 'Meeting Place',
		'descrip' : 'Contact and meeting place information for your household, and a small regional map',
		'icon' : iPlace
	},
	{
		'event' : ["All Events","Earthquake","Severe Drought","Wildfire","Flood","Hurricane","Blizzard","Heat Wave"],
		'goCat' : 'all',
		'need' : 'Rain Gear',
		'descrip' : 'Lightweight raingear and Mylar blanket',
		'icon' : iUmbrella
	}]
	var stayKit = [
{ 'kitName' : 'Stay',
  'icon' : iHome
  },
	{
		'event' : ["All Events","Earthquake","Severe Drought","Wildfire","Flood","Hurricane","Blizzard","Heat Wave"],
		'goCat' : 'stay',
		'need' : 'Water',
		'descrip' : 'One gallon of drinking water per person per day',
		'icon' : iWater
	},
	{
		'event' : ["All Events","Earthquake","Severe Drought","Wildfire","Flood","Hurricane","Blizzard","Heat Wave"],
		'goCat' : 'stay',
		'need' : 'Food',
		'descrip' : 'Nonperishable, ready-to-eat canned foods and manual can opener',
		'icon' : iFood
	},
	{
		'event' : ["All Events","Earthquake","Severe Drought","Wildfire","Flood","Hurricane","Blizzard","Heat Wave"],
		'goCat' : 'stay',
		'need' : 'First Aid',
		'descrip' : 'First-aid kit',
		'icon' : iMedkit
	},
	{
		'event' : ["All Events","Earthquake","Severe Drought","Wildfire","Flood","Hurricane","Blizzard","Heat Wave"],
		'goCat' : 'stay',
		'need' : 'Flashlight',
		'descrip' : 'Flashlight (Note-Traditional flashlight bulbs have limited lifespans. Light Emitting Diode (LED) flashlights, however, are more durable and last up to 10 times longer than traditional bulbs.)',
		'icon' : iLight
	},
	{
		'event' : ["All Events","Earthquake","Severe Drought","Wildfire","Flood","Hurricane","Blizzard","Heat Wave"],
		'goCat' : 'stay',
		'need' : 'Radio',
		'descrip' : 'Battery-operated AM/FM radio and extra batteries (you can also buy wind-up radios that do not require batteries)',
		'icon' : iRadio
	},
	{
		'event' : ["All Events","Earthquake","Severe Drought","Wildfire","Flood","Hurricane","Blizzard","Heat Wave"],
		'goCat' : 'stay',
		'need' : 'Whistle',
		'descrip' : 'Whistle',
		'icon' : iRadio
	},
	{
		'event' : ["All Events","Earthquake","Severe Drought","Wildfire","Flood","Hurricane","Blizzard","Heat Wave"],
		'goCat' : 'stay',
		'need' : 'Water Treatment',
		'descrip' : 'Iodine tablets or one quart of unscented bleach (for disinfecting water ONLY if directed to do so by health officials) and eyedropper (for adding bleach to water)',
		'icon'	: iPhone
	},
	{
		'event' : ["All Events","Earthquake","Severe Drought","Wildfire","Flood","Hurricane","Blizzard","Heat Wave"],
		'goCat' : 'stay',
		'need' : 'Hygiene',
		'descrip' : 'Personal hygiene items-soap, feminine hygiene products, toothbrush and toothpaste, etc.',
		'icon'	: iPhone	},
	{
		'event' : ["All Events","Earthquake","Severe Drought","Wildfire","Flood","Hurricane","Blizzard","Heat Wave"],
		'goCat' : 'stay',
		'need' : 'Land Line',
		'descrip' : 'Phone that does not rely on electricity',
		'icon'	: iPhone
	},
	{
		'event' : ["All Events","Earthquake","Severe Drought","Wildfire","Flood","Hurricane","Blizzard","Heat Wave"],
		'goCat' : 'stay',
		'need' : 'Child',
		'descrip' : 'Child care or other special care items',
		'icon'	: iChild
	}]
var seniorKit = [
{ 'kitName' : 'Senior',
  'icon' : iSenior
},
	{
		'event' : ["All Events","Earthquake","Severe Drought","Wildfire","Flood","Hurricane","Blizzard","Heat Wave"],
		'goCat' : 'elder',
		'need' : 'Special Tech',
		'descrip' : 'Instructions and extra batteries for any devices you use',
		'icon' : iTech
	},
	{
		'event' : ["All Events","Earthquake","Severe Drought","Wildfire","Flood","Hurricane","Blizzard","Heat Wave"],
		'goCat' : 'elder',
		'need' : 'Tires',
		'descrip' : 'Aerosol tire repair kits and/or tire inflator to repair flat wheelchair or scooter tires',
		'icon' : iBike
	},
	{
		'event' : ["All Events","Earthquake","Severe Drought","Wildfire","Flood","Hurricane","Blizzard","Heat Wave"],
		'goCat' : 'elder',
		'need' : 'Med Equipment',
		'descrip' : 'Back-up medical equipment',
		'icon' : iMedkit
	},
	{
		'event' : ["All Events","Earthquake","Severe Drought","Wildfire","Flood","Hurricane","Blizzard","Heat Wave"],
		'goCat' : 'elder',
		'need' : 'Comfort',
		'descrip' : 'Items to comfort you in a stressful situation',
		'icon' : iBed
	}]
var petKit = [
{ 'kitName' : 'Pet',
  'icon' : iPaw
},
	{
		'event' : ["All Events","Earthquake","Severe Drought","Wildfire","Flood","Hurricane","Blizzard","Heat Wave"],
		'goCat' : 'pet',
		'need' : 'Photo',
		'descrip' : 'A current color photograph of you and your pet together (in case you are separated)',
		'icon' : iPhoto
	},
	{
		'event' : ["All Events","Earthquake","Severe Drought","Wildfire","Flood","Hurricane","Blizzard","Heat Wave"],
		'goCat' : 'pet',
		'need' : 'Vet Data',
		'descrip' : 'Copies of medical records that indicate dates of vaccinations and a list of medications your pet takes and why he or she takes them',
		'icon' : iInfo
	},
	{
		'event' : ["All Events","Earthquake","Severe Drought","Wildfire","Flood","Hurricane","Blizzard","Heat Wave"],
		'goCat' : 'pet',
		'need' : 'Proof of ID',
		'descrip' : 'Proof of identification and ownership, including copies of registration information, adoption papers, proof of purchase, and microchip information',
		'icon'	: iIdCard
	},
	{
		'event' : ["All Events","Earthquake","Severe Drought","Wildfire","Flood","Hurricane","Blizzard","Heat Wave"],
		'goCat' : 'pet',
		'need' : 'Description',
		'descrip' : 'Physical description of your pet, including species, breed, age, sex, color, distinguishing traits, and any other vital information about characteristics and behavior',
		'icon' : iUnk
	},
	{
		'event' : ["All Events","Earthquake","Severe Drought","Wildfire","Flood","Hurricane","Blizzard","Heat Wave"],
		'goCat' : 'pet',
		'need' : 'Vet',
		'descrip' : 'Animal first aid kit, including flea and tick treatment and other items recommended by your veterinarian',
		'icon' : iMedkit
	},
	{
		'event' : ["All Events","Earthquake","Severe Drought","Wildfire","Flood","Hurricane","Blizzard","Heat Wave"],
		'goCat' : 'pet',
		'need' : 'Food',
		'descrip' : 'Food for at least three days',
		'icon' : iUnk
	},
	{
		'event' : ["All Events","Earthquake","Severe Drought","Wildfire","Flood","Hurricane","Blizzard","Heat Wave"],
		'goCat' : 'pet',
		'need' : 'Water',
		'descrip' : 'water for at least three days',
		'icon' : iWater
	},
	{
		'goCat' : 'pet',
		'need' : 'Dishes',
		'descrip' : 'Food and water dishes',
		'icon' : iUnk
	},
	{
		'event' : ["All Events","Earthquake","Severe Drought","Wildfire","Flood","Hurricane","Blizzard","Heat Wave"],
		'goCat' : 'pet',
		'need' : 'Crate',
		'descrip' : 'Collapsible cage or carrier',
		'icon' : iUnk
	},
	{
		'event' : ["All Events","Earthquake","Severe Drought","Wildfire","Flood","Hurricane","Blizzard","Heat Wave"],
		'goCat' : 'pet',
		'need' : 'Leash',
		'descrip' : 'sturdy leash (\\*Note-Nylon muzzles should only be used temporarily as they can restrict a dog\\’s ability to pant)',
		'icon' : iUnk
	},
	{
		'event' : ["All Events","Earthquake","Severe Drought","Wildfire","Flood","Hurricane","Blizzard","Heat Wave"],
		'goCat' : 'pet',
		'need' : 'Crate Cover',
		'descrip' : 'Cotton sheet to place over the carrier to help keep your pet calm',
		'icon' : iUnk
	},
	{
		'event' : ["All Events","Earthquake","Severe Drought","Wildfire","Flood","Hurricane","Blizzard","Heat Wave"],
		'goCat' : 'pet',
		'need' : 'Toys',
		'descrip' : 'Comforting toys or treats',
		'icon' : iUnk
	},
	{
		'event' : ["All Events","Earthquake","Severe Drought","Wildfire","Flood","Hurricane","Blizzard","Heat Wave"],
		'goCat' : 'pet',
		'need' : 'Litter',
		'descrip' : 'Litter, litter pan, and litter scoop',
		'icon' : iUnk
	},
	{
		'event' : ["All Events","Earthquake","Severe Drought","Wildfire","Flood","Hurricane","Blizzard","Heat Wave"],
		'goCat' : 'pet',
		'need' : 'Pickup Bags',
		'descrip' : 'Plastic bags for clean-up',
		'icon' : iUnk
	}]

var carKit = [
{ 'kitName' : 'Car',
  'icon'  : iCar
},
	{
		'event' : ["All Events","Earthquake","Severe Drought","Wildfire","Flood","Hurricane","Blizzard","Heat Wave"],
		'goCat' : 'car',
		'need' : 'Blankets',
		'descrip' : 'Blankets, sleeping bags, extra newspapers for insulation',
		'icon' : iUnk
	},
	{
		'event' : ["All Events","Earthquake","Severe Drought","Wildfire","Flood","Hurricane","Blizzard","Heat Wave"],
		'goCat' : 'car',
		'need' : 'Garbage Bags',
		'descrip' : 'Plastic bags (for sanitation)',
		'icon' : iUnk
	},
	{
		'event' : ["All Events","Earthquake","Severe Drought","Wildfire","Flood","Hurricane","Blizzard","Heat Wave"],
		'goCat' : 'car',
		'need' : 'Clothes',
		'descrip' : 'Extra mittens, socks, scarves and hat, raingear and extra clothes',
		'icon' : iUnk
	},
	{
		'event' : ["All Events","Earthquake","Severe Drought","Wildfire","Flood","Hurricane","Blizzard","Heat Wave"],
		'goCat' : 'car',
		'need' : 'Traction',
		'descrip' : 'Sack of sand or kitty litter for gaining traction under wheels, small shovel. Set of tire chains or traction mats',
		'icon' : iUnk
	},
	{
		'event' : ["All Events","Earthquake","Severe Drought","Wildfire","Flood","Hurricane","Blizzard","Heat Wave"],
		'goCat' : 'car',
		'need' : 'Tire Change',
		'descrip' : 'Working jack and lug wrench, spare tire',
		'icon' : iUnk
	},
	{
		'event' : ["All Events","Earthquake","Severe Drought","Wildfire","Flood","Hurricane","Blizzard","Heat Wave"],
		'goCat' : 'car',
		'need' : 'Scraper',
		'descrip' : 'Windshield scraper, broom',
		'icon' : iUnk
	},
	{
		'event' : ["All Events","Earthquake","Severe Drought","Wildfire","Flood","Hurricane","Blizzard","Heat Wave"],
		'goCat' : 'car',
		'need' : 'Toolkit',
		'descrip' : 'Small tools (pliers, wrench, screwdriver)',
		'icon' : iUnk
	},
	{
		'event' : ["All Events","Earthquake","Severe Drought","Wildfire","Flood","Hurricane","Blizzard","Heat Wave"],
		'goCat' : 'car',
		'need' : 'Battery',
		'descrip' : 'Booster cables or battery',
		'icon' : iUnk
	},
	{
		'event' : ["All Events","Earthquake","Severe Drought","Wildfire","Flood","Hurricane","Blizzard","Heat Wave"],
		'goCat' : 'car',
		'need' : 'Hazard Flag',
		'descrip' : 'Brightly colored cloth to use as a flag, flares or reflective triangles',
		'icon' : iUnk
	}
]
var kits = [goKit, stayKit, seniorKit, petKit, carKit]
var events = ["All Events","Earthquake","Severe Drought","Wildfire","Flood","Hurricane","Blizzard","Heat Wave"]
var avgCal = [
    {"label":"Adult Male", "value": 2445},
    {"label":"Adult Female", "value":2445},
    {"label":"Child Male", "value":1967},
    {"label":"Child Female", "value":1670}
]
