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

 /* this is the beginning of my XML pg */

 $('#infoPage').live('pageinit', function(){
     console.log("We are on the infoPage");

     $('#xmlBtn').bind('click', function(){
         console.log("We're here");

         $.ajax({
             url: 'xhr/data.xml',
             type: 'GET',
             dataType: 'xml',
             success: function(info){
                 console.log(info);
                 $(info).find("info").each(function(){
                     var group = $(this).find('group').text();
                     var movName = $(this).find('movName').text();
                     var year = $(this).find('year').text();
                     var score = $(this).find('score').text();
                     var awards = $(this).find('awards').text();
                     var country = $(this).find('country').text();
                     var rating = $(this).find('rating').text();
                     var notes = $(this).find('notes').text();
                     console.log(info);
                     $('#archive1').append($(' ' +
                         '<img src="images/cta_logo.png" alt="photo" class="picDefault" />' +
                         '<ul id="xmlList">' +
                         '<li>Group: ' + group + '</li>' +
                         '<li>MovName: ' + movName + '</li>' +
                         '<li>Year: ' + year + '</li>' +
                         '<li>Score: ' + score + '</li> ' +
                         '<li>Awards: ' + awards + '</li> ' +
                         '<li>Country: ' + country + '</li> ' +
                         '<li>Rating: ' + rating + '</li> ' +
                         '<li>Notes: ' + notes + '</li></ul><br/><hr/><br/>'));


                 });
         $('xmlList').listview('refresh');
         console.log($('#xmlList'));
             }

         });

     })

     $('#csvBtn').bind("click", function (){
         $.ajax({
         url: 'xhr/data.csv',
         type: 'GET',
         dataType: 'text',
         success: function(csvData){
         console.log("CSV data: ", csvData);
             var items = csvData.split("\n");
             for(var j=1; j < items.length; j++){
                 var row = items[j];
                 var columns = row.split(",");
                 console.log('CSV is: ', columns);
                 $('#archive1').append($(' ' +
                     '<ul id="csvList">' +
                     '<li>Category: ' + columns[0] + '</li>' +
                     '<li>Drama: ' + items[1] + '</li>' +
                     '<li>Horror: ' + items[2] + '</li>' +
                     '<li>Sifi: ' + items[3] + '</li> ' +
                     '<li>Family: ' + items[4] + '</li> ' +
                     '<li>Romance: ' + items[5] + '</li> ' +
                     '<li>Documentary: ' + items[6] + '</li> ' + '</li></ul><br/><hr/><br/>'));
                }
             }
         })
     });
 });


