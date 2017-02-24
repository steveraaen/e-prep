
$(document).ready(function(){
var nyc = [
    ["all", iHome, iSecurity,"In - home shelter", "When warned of an emergency situation reaching your home, fill your bathtub with water.  Having a clean, waterproof liner stored under the bathroom sink will help ensure that the water will not leak, and you also will not have to scrub the tub before filling it "],
    ["all", iWater, iHome, "Water for your home", "When warned of an emergency situation reaching your home, fill your bathtub with water.  Having a clean, waterproof liner stored under the bathroom sink will help ensure that the water will not leak, and you also will not have to scrub the tub before filling it "],
    ["all", iWater, iCar, "Water for your evacuation", "Evacuation or On The Go: Water bottles with purifying filters. They are easy to pack. Also water bubblers are usually highly regulated, safe, clean sources of water. (Mobile apps such as Fountain Finder or WeTap can assist you in finding a bubbler nearby.\)   "],
    ["all", iFood, iHome, "Non-perishable food for your home", "nonperishable food"],
    ["all", iFood, iCar, "Non-perishable food for evacuation", "nonperishable food"],
    ["all", iMedkit, iPerson, "Medications and Prescriptions", "FA list of the medications each member of your household takes_ why they take them_ and their dosages. If you store extra medication in your Go Bag_ be sure to refill it before it expires. Get prescription preparedness tips from the LA Department of Health & Mental Hygiene"],
    ["all", iMedkit, iHome, "First aid kit", "First-aid kit"],
    ["all", iMoney, iHome, "Cash (in small bills)", "Cash (in small bills)"],
/*  
    ["all", iPlace, "meetPlace", "Contact and meeting place information for your household_ and a small regional map"],
    ["car", "clothes", "Extra mittens_ socks_ scarves and hat_ raingear and extra clothes"],
    ["all", iMap, "docs", "Copies of your important documents in a waterproof and portable container (insurance cards_ birth certificates_ deeds_ photo IDs_ proof of address_ etc.)"],
    ["all", iKey, "keys", "Extra set of car and house keys"],
    ["all", iCredit, "cards", "Copies of credit/ATM cards"],
    ["all", iMoney, "cash", "Cash (in small bills)"],
    ["all", iWater, "water", "Bottled water"],
    ["all", iPlace, "meetPlace", "Contact and meeting place information for your household_ and a small regional map"],
 
    ["all", iLight, "light", "Flashlight (Note-Traditional flashlight bulbs have limited lifespans. Light Emitting Diode (LED) flashlights_ however_ are more durable and last up to 10 times longer than traditional bulbs.)"],
    ["all", iRadio, "radio", "Battery-operated AM/FM radio"],
    ["all", iBattery, "batteries", "Extra batteries/chargers"],
    ["all", iMedkit, "meds", "FA list of the medications each member of your household takes_ why they take them_ and their dosages. If you store extra medication in your Go Bag_ be sure to refill it before it expires. Get prescription preparedness tips from the NYC Department of Health & Mental Hygiene"],
    ["all", iMedkit, "first_aid", "First-aid kit"],
    ["all", iMug, "toiletries", "Toiletries"],
    ["all", iPencil, "writing", "Notepad and pen"],
   ["all", iUmbrella, "rain", "Lightweight raingear and Mylar blanket"],
    ["elder", iTech, "tech", "Instructions and extra batteries for any devices you use"],
    ["elder", iSenior, "tires", "Aerosol tire repair kits and/or tire inflator to repair flat wheelchair or scooter tires"],
    ["elder", iMedkit, "backUpMed", "Back-up medical equipment"],
    ["pet", iPhoto, "photo", "A current color photograph of you and your pet together (in case you are separated)"],
    ["pet", iInfo, "vetData", "Copies of medical records that indicate dates of vaccinations and a list of medications your pet takes and why he or she takes them"],
    ["pet", iIdCard, "proof", "Proof of identification and ownership_ including copies of registration information_ adoption papers_ proof of purchase_ and microchip information"],
    ["pet", iMap, "desc", "Physical description of your pet_ including species_ breed_ age_ sex_ color_ distinguishing traits_ and any other vital information about characteristics and behavior"],
    ["pet", iPaw, "vetSupplies", "Animal first aid kit_ including flea and tick treatment and other items recommended by your veterinarian"],
  ["pet", "goFood", "Food for at least three days"],
    ["pet", "goWater", "water for at least three days"],
    ["pet", "dishes", "Food and water dishes"],
    ["pet", "crate", "Collapsible cage or carrier"],
    ["pet", "leash", "sturdy leash (\*Note-Nylon muzzles should only be used temporarily as they can restrict a dog\’s ability to pant)"],
    ["pet", "cover", "Cotton sheet to place over the carrier to help keep your pet calm"],
    ["pet", "toys", "Comforting toys or treats"],
    ["pet", "litter", "Litter_ litter pan_ and litter scoop"],
    ["pet", "pickup", "Plastic bags for clean-up"],
    ["stay", "staywater", "One gallon of drinking water per person per day"],
    ["stay", "stayFood", "Nonperishable_ ready-to-eat canned foods and manual can opener"],
    ["stay", "firstAid", "First-aid kit"],
    ["stay", "flashlight", "Flashlight (Note-Traditional flashlight bulbs have limited lifespans. Light Emitting Diode (LED) flashlights_ however_ are more durable and last up to 10 times longer than traditional bulbs.)"],
    ["stay", "radio", "Battery-operated AM/FM radio and extra batteries (you can also buy wind-up radios that do not require batteries)"],
    ["stay", "whistle", "Whistle"],
    ["stay", "waterTreatment", "Iodine tablets or one quart of unscented bleach (for disinfecting water ONLY if directed to do so by health officials) and eyedropper (for adding bleach to water)"],
    ["stay", "hygiene", "Personal hygiene items-soap_ feminine hygiene products_ toothbrush and toothpaste_ etc."],
    ["stay", "landline", "Phone that does not rely on electricity"],
    ["stay", "children", "Child care supplies or other special care items"],
    ["car", "blankets", "Blankets_ sleeping bags_ extra newspapers for insulation"],
    ["car", "garbageBags", "Plastic bags (for sanitation)"],
    ["car", "clothes", "Extra mittens_ socks_ scarves and hat_ raingear and extra clothes"],
    ["car", "traction", "Sack of sand or kitty litter for gaining traction under wheels_ small shovel. Set of tire chains or traction mats"],
    ["car", "tireChange", "Working jack and lug wrench_ spare tire"],
    ["car", "scraper", "Windshield scraper_ broom"],
    ["car", "toolkit", "Small tools (pliers_ wrench_ screwdriver)"],
    ["car", "batter", "Booster cables or battery"],
    ["car", "hazard", "Brightly colored cloth to use as a flag_ flares or reflective triangles"]
*/];
$('select').selectmenu();

var nycObs = [];
var newObj = new Makeobj('name', 'need', 'description');
var curObj;
var panel = $('#mypanel');
function Makeobj() {
for (let i = 0; i < nyc.length; i++) {
    this.kIcon = nyc[i][1];
    this.kIcon2 = nyc[i][2];
    this.kNeed = nyc[i][3];
    this.kDesc = nyc[i][4];
    nycObs.push(this);

    $('#myTable').append('<tr class = "show" ><td class = "tCol1s">' + this.kNeed + '</td><td>' + this.kIcon + '</td><td>' + this.kIcon2 + '</td><td  class = "des">' + this.kDesc + '</td></tr>')
    $('.des').hide();
/*    console.log(this)*/
}

$( function() {
  $( "#mypanel" ).panel();
} );
    $( ".show" ).on( "vclick", function(){
var d = $(this).find(".des").html();
    $('#mypanel').html(d)
    $('#mypanel').panel('open');


        console.log(this)
    } );
}
})








