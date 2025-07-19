!(function($) {
    if (!$) {
        console.warn("Unslider needs jQuery");
        return;
    }

    const Unslider = function(element, options) {
        const self = this;
        const defaults = {
            autoplay: false,
            delay: 3000,
            speed: 750,
            easing: 'swing',
            keys: { prev: 37, next: 39 },
            nav: true,
            arrows: {
                prev: `<a class="unslider-arrow prev">Prev</a>`,
                next: `<a class="unslider-arrow next">Next</a>`
            },
            animation: 'horizontal',
            selectors: { container: 'ul:first', slides: 'li' },
            animateHeight: false,
            activeClass: 'unslider-active',
            swipe: true
        };

        self._ = 'unslider';
        self.options = $.extend({}, defaults, options);
        self.$context = element;
        self.current = 0;
        self.total = 0;
        self.prefix = 'unslider-';
        self.eventSuffix = `.${self.prefix}${~~(2000 * Math.random())}`;

        // Other properties and methods go here ...

        self.init(options);
    };

    $.fn.unslider = function(options) {
        return this.each(function() {
            const $this = $(this);
            if (typeof options === 'string' && $this.data('unslider')) {
                const [method, ...args] = options.split(':');
                const func = $this.data('unslider')[method];
                if ($.isFunction(func)) func.apply($this, args.length ? args.split(',') : null);
            } else {
                $this.data('unslider', new Unslider($this, options));
            }
        });
    };

    $.fn._active = function(className) {
        return this.addClass(className).siblings().removeClass(className);
    };

    $.fn._move = function() {
        return this.stop(true, true).animate.apply(this, arguments);
    };

    $.extend({
        _ucfirst: str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
    });
})(window.jQuery);
