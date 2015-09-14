var _ = require("underscore");

var Widgets = require("./widgets.js");

// As new widgets get added here, please also make sure they get added in
// webapp perseus/traversal.py so they can be properly translated.
_.each([
    require("./widgets/categorizer.jsx"),
    require("./widgets/cs-program.jsx"),
    require("./widgets/dropdown.jsx"),
    require("./widgets/example-widget.jsx"),
    require("./widgets/example-graphie-widget.jsx"),
    require("./widgets/explanation.jsx"),
    require("./widgets/expression.jsx"),
    require("./widgets/grapher.jsx"),
    require("./widgets/graded-group.jsx"),
    require("./widgets/group.jsx"),
    require("./widgets/iframe.jsx"),
    require("./widgets/image.jsx"),
    require("./widgets/input-number.jsx"),
    require("./widgets/interaction.jsx"),
    require("./widgets/interactive-graph.jsx"),
    require("./widgets/lights-puzzle.jsx"),
    require("./widgets/matrix.jsx"),
    require("./widgets/matcher.jsx"),
    require("./widgets/measurer.jsx"),
    require("./widgets/molecule.jsx"),
    require("./widgets/number-line.jsx"),
    require("./widgets/numeric-input.jsx"),
    require("./widgets/orderer.jsx"),
    require("./widgets/passage.jsx"),
    require("./widgets/passage-ref.jsx"),
    require("./widgets/passage-ref-target.jsx"),
    require("./widgets/plotter.jsx"),
    require("./widgets/radio.jsx"),
    require("./widgets/reaction-diagram.jsx"),
    require("./widgets/sequence.jsx"),
    require("./widgets/simulator.jsx"),
    require("./widgets/simple-markdown-tester.jsx"),
    require("./widgets/sorter.jsx"),
    require("./widgets/table.jsx"),
    require("./widgets/transformer.jsx"),
    require("./widgets/unit.jsx"),
    require("./widgets/video.jsx"),
], function(widget) {
    Widgets.register(widget.name, widget);
});

Widgets.validateAlignments();
