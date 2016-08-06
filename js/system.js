var horizon = Horizon({ host: "dockercloud-4659aec6.cloudapp.net:81", authType: 'unauthenticated' });
horizon.connect();
horizon.onReady(function() {
    System.import('app').then(function(m){
        m.RunApplication(horizon);
    }).catch(function(err){ console.error(err); });        
});