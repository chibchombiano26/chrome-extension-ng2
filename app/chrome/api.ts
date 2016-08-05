export class Notify{


    notify(title: string, message: string){
        debugger
        var n : any = chrome.notifications.create('reminder', {
            type: 'basic',
            iconUrl: '/images/icon_128.png',
            title: title,
            message: message
     }, function(notificationId) {});
    }

}