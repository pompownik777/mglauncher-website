function pobierz() {
    var element = document.createElement('a');
    element.setAttribute('href', "MGLauncher 2.1.zip");

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
