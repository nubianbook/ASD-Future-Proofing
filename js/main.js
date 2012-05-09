
 /*
$(function(){

    $.ajax({

        url: 'xhr/json.js',
        type: 'Get',
        dataType: 'json',
        success: function(response){
            for(var i=0, j=response.archive1.length; i<j; i++){
                    var archive1 = response.archive1[1];
            }
            console.log(response);

        };

        }

    });

});
  */


    $.ajax({
        url: 'xhr/data.json',
        type: 'GET',
        dataType: 'json',
        success: function(data){
            for (var i=0, j=data.jsonData.length; i<j; i++){
                var item = data.jsonData[i];
                $('#archive1').append(
                    '<img src="images/cta_logo.png" alt="photo" class="picDefault" />' +
                        '<li>Groups: ' + item.groups + '</li>' +
                        '<li>Atitle: ' + item.atitle + '</li>' +
                        '<li>Watched: ' + item.watched + '</li>' +
                        '<li>Checkbox1: ' + item.checkbox1 + '</li>' +
                        '<li>Checkbox2: ' + item.checkbox2 + '</li> ' +
                        '<li>Acquired: ' + item.acquired + '</li> ' +
                        '<li>Viewed: ' + item.viewed + '</li> ' +
                        '<li>RateStars: ' + item.rateStars + '</li> ' +
                        '<li>Slider: ' + item.slider + '</li> ' +
                        '<li>Notes: ' + item.notes + '</li><br/><hr/><br/>');
            }

        }
});

