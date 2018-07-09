import Vue from 'vue';
import Login from './../src/components/login/Loginform.vue'
import Validation from './../src/components/Validation.vue'
import Shared from './../src/Shared'

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {

        console.log('Received Event: ' + id);

        Shared.app = new Vue({
            el: '#app',
            data: {
                Shared,
                currentView: Shared.router.current_view
            },
            components: {
                'Login': Login,
                'Validation': Validation
            },
            render: h => h(Shared.router.current_view)//render: h => h(App)
        });

        // Simulate render a different component after 5 seconds
        setTimeout(function () {
            Shared.router.current_view = 'Validation'
        }, 5000);

    }
};

app.initialize();