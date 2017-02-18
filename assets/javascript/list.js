// Render the category buttons
        $(document).on('click', '#listBtn', function() {
            for (let i = 0; i < kits.length; i++) {
                btn = $('<input id = "' + kits[i][0].kitName + '" class = "kit-btn" type="button" data-inline="true" data-mini="true" value = "' + kits[i][0].kitName + '"    >' + kits[i][0].icon + '</input>')
                    /*btn.append(kits[i][0].kitName);*/
                $('#buttons').append(btn);
            }
            $(document).off('click', '#listBtn')
        });