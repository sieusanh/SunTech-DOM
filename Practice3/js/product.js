function changeProductList(type, element) {
    //document.getElementById(type).style.display = "block";
    let tabs = document.getElementsByClassName('tab-item');
    //console.log(tabs);
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.background = "#B41C38";
    }
    element.style.background = '#EE4D2D';

    let product_list = document.getElementsByClassName('animation');
    for (var i = 0; i < product_list.length; i++) {
        product_list[i].style.display = "none";
    }

    document.getElementById(type).style.display = "block";
    document.getElementById(type).style.backgroundColor = "#EE4D2D";
}