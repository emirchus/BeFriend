const $ = require('jquery');
const path = require('path');
const fs = require('fs');
$(() => {
    Array.from(document.getElementsByTagName("*")).map((item, i) => {
        var pName = $(item).prop("tagName").toLowerCase();
        var props = {}
        Array.prototype.slice.call($(item).get(0).attributes).forEach(function (item) {
            props[item.name] = item.value;
        });
        var pathjoin = '../' + path.join(upper(pName), pName);
        var sourcefile = path.join(__dirname, pathjoin)
        console.log(fs.existsSync(sourcefile+".js"));
        
        if(fs.existsSync(sourcefile+".js")){
            console.log(sourcefile);        
            const tClass = require(sourcefile+".js");
            var tmp = new tClass(props);

            var id = setInterval(() => {
                if (tmp.getHTML()) {
                    $(tmp.getHTML()).appendTo(item)
                    clearInterval(id)
                }
            }, 1)
        }



     
    })

    function upper(a) {
        return a.substring(0, 1).toUpperCase() + a.substring(1, a.length).toLowerCase();
    }
})