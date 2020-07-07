// This plugin will open a modal to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.
// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser enviroment (see documentation).
// This shows the HTML page in "ui.html".
figma.showUI(__html__);
// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.resize(600, 420);

figma.on('selectionchange', () => {
    let fName = figma.currentPage.selection[0].fontName;
    console.log(fName)
    figma.loadFontAsync(fName)
    figma.currentPage.selection[0].characters = '0000';
})


// figma.ui.onmessage = msg => {

// };

// figma.off('selectionchange')
