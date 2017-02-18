$(document).ready(function() {

/*        var config = {
            apiKey: "AIzaSyCpxHYzmMVHenG4b345MQ_rzs9myOeWQzI",
            authDomain: "multi-rps-30f12.firebaseapp.com",
            databaseURL: "https://multi-rps-30f12.firebaseio.com",
            storageBucket: "multi-rps-30f12.appspot.com",
            messagingSenderId: "903429570889"
        };
        firebase.initializeApp(config);
        database = firebase.database();*/

        var btn;
        var wrapGo = $('<div class = "wrapGo" >')
        var wrapStay = $('<div class = "wrapStay" >')
        var wrapSenior = $('<div class = "wrapSenior" >')
        var wrapPet = $('<div class = "wrapPet" >')
        var wrapCar = $('<div class = "wrapCar" >')
        var listGo = $('<div class = "listGo" >');    
        var listStay = $('<div class = "listStay" >');    
        var listSenior = $('<div class = "listSenior" >');    
        var listPet = $('<div class = "listPet" >');    
        var listCar = $('<div class = "listCar" >');    
        

//===================================================================
// Render the category buttons
        $(document).on('click', '#listBtn', function() {
            for (let i = 0; i < kits.length; i++) {
                btn = $('<input id = "' + kits[i][0].kitName + '" class = "kit-btn" type="button" data-inline="true" data-mini="true" value = "' + kits[i][0].kitName + '"    >' + kits[i][0].icon + '</input>')
                    /*btn.append(kits[i][0].kitName);*/
                $('#buttons').append(btn);
            }
            $(document).off('click', '#listBtn')
        });
//===================== GO KIT =============================================
        $(document).on('click', '#Evac', function(e) {

            e.preventDefault()
           wrapGo.append(goKit[0].icon + '<h2>'+ goKit[0].longName + '</h2>');
               for (let i = 1; i < goKit.length; i++) {
                wrapGo.append('<div class = "ui-grid-b ui-btn"><div class ="ui-block-a"><a href="#needDesc" data-rel="popup" data-transition="pop"  >' + goKit[i].icon + '</a></div><div class ="ui-block-b">' + goKit[i].need + '</div><div class ="ui-block-c"><div class="checkbox"><label><input type="checkbox" value="">Add To List</label></div></div>')

                $('.listGo').collapsible();              
                }
           wrapGo.append(listGo);
           $('#listDiv').append(wrapGo);         
           $('.wrapGo').collapsible();
           $(document).off('click', '#Evac')
            });
// =================== GO KIT ======================================
 
/*        $(document).on('click', '#Evac', function(e) {

            e.preventDefault()
           wrapGo.append(goKit[0].icon + '<h2>'+ goKit[0].longName + '</h2>');
               for (let i = 1; i < goKit.length; i++) {
                wrapGo.append('<div class = "ui-grid-b ui-btn"><div class ="ui-block-a"><a href="#needDesc" data-rel="popup" data-transition="pop"  >' + goKit[i].icon + '</a></div><div class ="ui-block-b">' + goKit[i].need + '</div><div class ="ui-block-c">' + goKit[i].descrip + '</div></div>')

                $('.listGo').collapsible();              
                }
           wrapGo.append(listGo);
           $('#listDiv').append(wrapGo);         
           $('.wrapGo').collapsible();
           $(document).off('click', '#Evac')
            });*/
// =================== GO KIT ======================================
       $(document).on('click', '#Stay', function(e) {
            e.preventDefault()
           wrapStay.append('<h2>'+ stayKit[0].longName + '</h2>');
               for (let i = 1; i < stayKit.length; i++) {
                wrapStay.append('<div class = "ui-grid-b ui-btn"><div class ="ui-block-a">' + stayKit[i].icon + '</div><div class ="ui-block-b">' + stayKit[i].need + '</div><div class ="ui-block-c"><div class="checkbox"><label><input type="checkbox" value="">Add To List</label></div></div>')
                $('.list').collapsible();              
                }
           wrapStay.append(listStay);
           $('#listDiv').append(wrapStay);         
           $('.wrapStay').collapsible();
           $(document).off('click', '#Stay')
            });
// =================== SENIOR KIT ======================================
        $(document).on('click', '#Senior', function(e) {
            e.preventDefault()
           wrapSenior.append('<h2>'+ seniorKit[0].longName + '</h2>');
               for (let i = 1; i < seniorKit.length; i++) {
                wrapSenior.append('<div class = "ui-grid-b ui-btn"><div class ="ui-block-a">' + seniorKit[i].icon + '</div><div class ="ui-block-b">' + seniorKit[i].need + '</div><div class ="ui-block-c"><div class="checkbox"><label><input type="checkbox" value="">Add To List</label></div></div>')
                $('.list').collapsible();              
                }
           wrapSenior.append(listSenior);
           $('#listDiv').append(wrapSenior);         
           $('.wrapSenior').collapsible();
           $(document).off('click', '#Senior')
            });
// =================== PET KIT ======================================
        $(document).on('click', '#Pet', function(e) {
            e.preventDefault()
           wrapPet.append('<h2>'+ petKit[0].longName + '</h2>');
               for (let i = 1; i < petKit.length; i++) {
                wrapPet.append('<div class = "ui-grid-b ui-btn"><div class ="ui-block-a">' + petKit[i].icon + '</div><div class ="ui-block-b">' + petKit[i].need + '</div><div class ="ui-block-c"><div class="checkbox"><label><input type="checkbox" value="">Add To List</label></div></div>')
                $('.list').collapsible();              
                }
           wrapPet.append(listPet);
           $('#listDiv').append(wrapPet);         
           $('.wrapPet').collapsible();
           $(document).off('click', '#Pet')
            });
// =================== CAR KIT ======================================
        $(document).on('click', '#Car', function(e) {
            e.preventDefault()
           wrapCar.append('<h2>'+ carKit[0].longName + '</h2>');
               for (let i = 1; i < carKit.length; i++) {
                wrapCar.append('<div class = "ui-grid-b ui-btn"><div class ="ui-block-a">' + carKit[i].icon + '</div><div class ="ui-block-b">' + carKit[i].need + '</div><div class ="ui-block-c"><div class="checkbox"><label><input type="checkbox" value="">Add To List</label></div>/div>')
                $('.list').collapsible();              
                }
           wrapCar.append(listCar);
           $('#listDiv').append(wrapCar);         
           $('.wrapCar').collapsible();
           $(document).off('click', '#Car')
            });
// =================== ICON POP UPS ====================================
$(document).on('click', 'i.fa', function(){
    console.log(this)
})


    })

