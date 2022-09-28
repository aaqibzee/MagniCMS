// $(function () {
//     console.log('Binding the Student Component to the Server call');
//     var chat = $.connection.studentHub;

//     chat.client.StudentsDataUpdated = function (message) {
//         console.log('Student updated call executed from  Server and message ' + message);

//         window.studentComponentReference.zone.run(() => {
//             window.studentComponentReference.syncStudentsData();
//         });
//     };

//     $.connection.hub.start().done(function () {

//         chat.server.LetsChat($('#UserName').val(), $('#TxtMessage').val());

//     });
// });