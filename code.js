figma.showUI(__html__, { width: 300, height: 700 });

const node = figma.currentPage.findAll()
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
                figma.notify('👌All Unlocked', { timeout: 1 })
            }
        })
    }

    if (msg.hoverItem) {
        let hoverItem = []
        hoverItem.push(figma.getNodeById(msg.hoverItem))
        figma.viewport.scrollAndZoomIntoView(hoverItem);
        figma.currentPage.selection = hoverItem

    }

    if (msg.type === "unlock-once") {
        figma.getNodeById(msg.click).locked = false;
        figma.notify('👌Unlocked', { timeout: 1 })
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

