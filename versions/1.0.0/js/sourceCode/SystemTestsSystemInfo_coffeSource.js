// Generated by CoffeeScript 1.10.0
window.SystemTestsSystemInfo_coffeSource = '# Holds information about browser and machine\n# Note that some of these could\n# change during user session.\n\nclass SystemTestsSystemInfo extends SystemInfo\n  # cannot just initialise the numbers here\n  # cause we are going to make a JSON\n  # out of this and these would not\n  # be picked up.\n  AutomatorVersionMajor: null\n  AutomatorVersionMinor: null\n  AutomatorVersionRelease: null\n\n  constructor: ->\n    super()\n    @AutomatorVersionMajor = 0\n    @AutomatorVersionMinor = 2\n    @AutomatorVersionRelease = 0\n';