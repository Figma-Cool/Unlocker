figma.showUI(__html__);

figma.ui.resize(600, 420);


const node = figma.root.findAll()
let isLoockArr = [];

node.forEach(item => {
    if (item.locked) {
        let node = [item.name, item.id, item.type]
        isLoockArr.push(node)
    }
    return isLoockArr
});

figma.ui.postMessage({
    isLoockArr
})

function findLockNodes(nodeType,) {

}

figma.ui.onmessage = (msg) => {
    if (msg.ans === 'all') {
        figma.root.findAll().forEach(item, () => {
            item.locked = false
        })

    }
    console.log(msg)
}


// figma.off('selectionchange')
// "DOCUMENT" |
//     "PAGE" |
//     "SLICE" |
//     "FRAME" |
//     "GROUP" |
//     "COMPONENT" |
//     "INSTANCE" |
//     "BOOLEAN_OPERATION" |
//     "VECTOR" |
//     "STAR" |
//     "LINE" |
//     "ELLIPSE" |
//     "POLYGON" |
//     "RECTANGLE" |
//     "TEXT"