function javaTime() {
    var date = new Date();
    return date.toLocaleTimeString().substring(0, 5);
}