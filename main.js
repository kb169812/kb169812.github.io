(function(b) {
    var a;
    b.fn.jqprint = function(d) {
        a = b.extend({}, b.fn.jqprint.defaults, d);
        var c = (this instanceof jQuery) ? this : b(this);
        var f = b("<iframe  />");
        if (!a.debug) {
            f.css({
                position: "absolute",
                width: "0px",
                height: "0px",
                left: "-600px",
                top: "-600px"
            })
        }
        f.appendTo("body");
        var e = f[0].contentWindow.document;
        if (a.importCSS) {
            if (b("link[media=print]").length > 0) {
                b("link[media=print]").each(function() {
                    e.write("<link type='text/css' rel='stylesheet' href='" + b(this).attr("href") + "' media='print' />")
                })
            } else {
                b("link").each(function() {
                    e.write("<link type='text/css' rel='stylesheet' href='" + b(this).attr("href") + "' />")
                })
            }
        }
        e.write(c.outer());
        e.close();
        f[0].contentWindow.focus();
        setTimeout(function() {
            f[0].contentWindow.print()
        }, 1000)
    }
    ;
    b.fn.jqprint.defaults = {
        debug: false,
        importCSS: true
    };
    jQuery.fn.outer = function() {
        return b(b("<div></div>").html(this.clone())).html()
    }
})(jQuery);
