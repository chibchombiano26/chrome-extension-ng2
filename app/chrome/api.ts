//To avoid the error
declare var chrome;
export class Notify{

    notify(title: string, message: string){        
        var n : any = chrome.notifications.create('reminder', {
            type: 'basic',
            iconUrl: 'Icon-128.png',
            title: title,
            message: message
     }, function(notificationId) {});
    }

}