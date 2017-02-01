$(document).ready(function() {
    var btn;
//===================================================================
// Render the category buttons
    $('#list').on('click', function() {
        for (let i = 0; i < kits.length; i++) {
            btn = $('<input id = "' + kits[i][0].kitName + '" class = "kit-btn" type="button" data-inline="true" data-mini="true" value = "' + kits[i][0].kitName + '"    >' + kits[i][0].icon + '</input>')
                /*btn.append(kits[i][0].kitName);*/
            $('#buttons').append(btn);
        }
       /* $('#list').off('click')*/

    });
//===================================================================
// Render lists of items required for each kit
    $(document).on('click', '#Evac', function() {
        for (let i = 1; i < goKit.length; i++) {
            $('#content1').append('<div class="ui-block-a"><span>' + goKit[i].need + 
                '</span></div><div class="ui-block-b"><span>' + goKit[i].icon +  
                '</span></div><div class="ui-block-c"><span>' + iInfo +  
                '</span></div>')
        }

    })
    //------------------------------
        $(document).on('click', '#Stay', function() {
        	console.log("stay")
        for (let i = 1; i < stayKit.length; i++) {
            $('#l2').append('<li>' + stayKit[i].need + '</li>')
        }
    })
     $(document).on('click', '#Senior', function() {
     	console.log("senior")
        for (let i = 1; i < seniorKit.length; i++) {
            $('#l3').append('<li>' + seniorKit[i].need + '</li>')
        }
    })
         $(document).on('click', '#Pet', function() {
         	console.log("pet")
        for (let i = 1; i < petKit.length; i++) {
            $('#l4').append('<li>' + petKit[i].need + '</li>')
        }
    })
             $(document).on('click', '#Car', function() {
                console.log("car")
        for (let i = 1; i < carKit.length; i++) {
            $('#l5').append('<li>' + carKit[i].need + '</li>')
        }
    })
})
