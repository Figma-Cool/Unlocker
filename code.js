figma.showUI(__html__, { width: 300, height: 480 });

const node = figma.root.findAll()
let isLockArr = [];


node.forEach(item => {
    if (item.locked) {
        let node = [item.name, item.id, item.type]
        isLockArr.push(node)
    }
    return isLockArr
});

figma.ui.postMessage({
    isLockArr,
})

figma.ui.onmessage = (msg) => {
    if (msg.click === 'all') {
        node.forEach(item => {
            if (item.locked) {
                item.locked = false
            }
        })
    }

    if (msg.clickItem) {
        let clickItem = []
        clickItem.push(figma.getNodeById(msg.clickItem))
        figma.currentPage.selection = clickItem
    }

    if (msg.type === "unlock-once") {
        figma.getNodeById(msg.click).locked = false
    }
}

figma.on('selectionchange', () => {
    isLockArr = []
    if (isLockArr == '') {
        figma.ui.postMessage({
            empty: 0
        })
    }
    node.forEach(item => {
        if (item.locked) {
            let node = [item.name, item.id, item.type]
            isLockArr.push(node)
        }
        return isLockArr
    });

    if (isLockArr) {
        figma.ui.postMessage({
            isLockArr,
            empty: 1
        })
    }
})

if (isLockArr == '') {
    figma.ui.postMessage({
        // isLockArr,
        empty: 0
    })
}

