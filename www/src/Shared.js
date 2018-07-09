export default {
    app: null,
    device_description: {
        model: '',
        platform: '',
        device_id: '',
        version: '',
        manufacturer: '',
        serial: ''
    },
    config: {},
    router: {
        current_view: 'Login',
        current_page_title: ''
    },
    setView: function (viewName, title) {

        this.router.current_view = viewName;
        if (this.app !== null) {
            this.app.currentView = this.router.current_view;
        }
        if (typeof title !== 'undefined') {
            this.router.current_page_title = title;
        }
    }
}