 $('#infoPage').live('pageinit', function(){
    console.log("We are on the infoPage");
     $('#archive1').empty();
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
                         '<img src="images/text2_logo.png" alt="photo" class="pic_text"/>' +
                             '<ul id="jsonList">' +
                             '<li>Groups: ' + item.groups + '</li>' +
                             '<li>Title: ' + item.title + '</li>' +
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
     $('#archive1').empty();

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
                     var name = $(this).find('name').text();
                     var year = $(this).find('year').text();
                     var score = $(this).find('score').text();
                     var awards = $(this).find('awards').text();
                     var country = $(this).find('country').text();
                     var rating = $(this).find('rating').text();
                     var notes = $(this).find('notes').text();
                     console.log(info);
                     $('#archive1').append($(' ' +
                         '<img src="images/text_logo.png" alt="photo" class="pic_text" />' +
                         '<ul id="xmlList">' +
                         '<li>Group: ' + group + '</li>' +
                         '<li>Name: ' + name + '</li>' +
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
                     '<img src="images/text3_logo.png" alt="photo" class="pic_text" />' +
                     '<ul id="csvList">' +
                     '<li> ' + row + '</li> ' + '</li></ul><br/><hr/><br/>'));
                }
             }
         })
     });
     // when the tag with id="btn" is clicked
     $('#resetBtn').click(function() {
         // removes all LI with class="cls" in OL
         $('#archive1').remove();
 });


 });
