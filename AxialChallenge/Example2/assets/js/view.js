(function (window) {
    'use strict';

    function View() {

        this.listTemplate
            =	'<li data-id="{{target-id}}" data-count="{{topref-count}}">'
            +		'<span class="people">{{people}}</span>'
            +		'<span class="title">{{title}}</span>'
            +       '<div id="{{topref-id}}" class="toprefs">'
            +           '<div id="title">Top Referrers</div>'
            +           '<div><ul class="toprefs-list">{{toprefs}}</ul></div>'
            +       '</div>'
            +	'</li>';
    }

    View.prototype.showAll = function (data) {

        var i, l, j, len,
            view = '',
            template,
            toprefs,
            list;

        for (i = 0, l = data.length; i < l; i++) {

            template = this.listTemplate;
            toprefs = data[i].stats.toprefs;
            list = '';

            template = template.replace('{{target-link}}', 'item-' + i);
            template = template.replace('{{target-id}}', 'item-' + i);
            template = template.replace('{{topref-id}}', 'item-' + i);
            template = template.replace('{{people}}', data[i].stats.people);
            template = template.replace('{{title}}', data[i].title);
            template = template.replace('{{topref-count}}', toprefs.length);

            for (j = 0, len = toprefs.length; j < len; j++) {

                list = list + '<li><span class="people">' + toprefs[j].visitors + '</span><span class="title"><a href="http://' + toprefs[j].domain + '" target="_blank">' + toprefs[j].domain + '</a></span></li>';
            }

            template = template.replace('{{toprefs}}', list);

            view = view + template;
        }

        return view;
    };

    window.app.View = View;

})(window);