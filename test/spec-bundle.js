const testsInSourceFolder = require.context("../src", true, /\.spec\.ts/);
const unitTests = require.context("./unit", true, /\.spec\.ts/);

/*
 * get all the files, for each file, call the context function
 * that will require the file and load it up here. Context will
 * loop and require those spec files here
 */
function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}

// requires and returns all modules that match
requireAll(testsInSourceFolder);
requireAll(unitTests);
