setInterval(function () {
   jQuery.ajax({
       'type': 'POST',
       'url': '/ajaxservice/get',
       'data': {'from': 101, 'to': 102, 'message': 'bla­bla..'},
       'cache': false,
       'success': function (mess) {
                if (mess) {
                    render(mess); //    необходимо реализовать
                }
         }})
}, 9000);
