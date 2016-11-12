var expect = require('chai').expect;

module.exports = function(helpers) {
    var widget = helpers.mount(require('./index'), {
        size: 'large',
        label: 'Initial Label'
    });

    expect(widget.el.className).to.contain('large');
    expect(widget.el.innerHTML).to.contain('Initial Label');

    require('marko/widgets').batchUpdate(function() {
        widget.setSize('small');
    });

    expect(widget.el.className).to.contain('small');
};