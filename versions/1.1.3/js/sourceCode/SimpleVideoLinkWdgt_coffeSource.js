// Generated by CoffeeScript 1.12.7
window.SimpleVideoLinkWdgt_coffeSource = 'class SimpleVideoLinkWdgt extends SimpleLinkWdgt\n\n  constructor: (@descriptionString, @linkString = "https://goo.gl/9xZrmG") ->\n    super @descriptionString, @linkString\n\n  createLinkIcon: ->\n    @externalLinkIcon = new VideoPlayButtonWdgt()\n\n';
