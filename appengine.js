function handleAppEngine () {
    if (window.location.href.toLocaleString().includes("appengine-demo")) {
        // AppEngine Demo Specific Stuff
        let warning = $("#demo-warning");
        if (warning.length === 1) {
            warning.remove();
        }
        $("body").prepend("<div id='demo-warning'>" +
            "<p style='color: white;background-color: red;text-align: center;font-weight: bolder'>THIS IS A DEMO ENVIRONMENT</p>" +
            "</div>");
    }
}
