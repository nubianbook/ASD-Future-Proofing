 $('#infoPage').live('pageinit', function(){
    console.log("We are on the infoPage");

    $('#jsonBtn').bind('click', function(){
        console.log("We're here");

        $.ajax({
            url: 'xhr/data.json',
            type: 'GET',
            dataType: 'json',
            success: function(data){
                console.log(data);
                 for (var i=0, j=data.jsonData.length; i<j; i++){
                     var item = data.jsonData[i];
                     console.log(item);
                     $('#archive1').append($(' ' +
                         '<img src="images/cta_logo.png" alt="photo" class="picDefault" />' +
                             '<ul id="jsonList">' +
                             '<li>Groups: ' + item.groups + '</li>' +
                             '<li>Atitle: ' + item.atitle + '</li>' +
                             '<li>Watched: ' + item.watched + '</li>' +
                             '<li>Acquired: ' + item.acquired + '</li> ' +
                             '<li>Viewed: ' + item.viewed + '</li> ' +
                             '<li>RateStars: ' + item.rateStars + '</li> ' +
                             '<li>Slider: ' + item.slider + '</li> ' +
                             '<li>Notes: ' + item.notes + '</li></ul><br/><hr/><br/>'));
                 }
             }
         });
        $('jsonList').listview('refresh');
        console.log($('#jsonList'));
     });
 });

