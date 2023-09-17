class Drag {
    constructor(DragArea, DragItem) {
        this.DragArea = document.querySelector(DragArea);
        this.allDragItems = document.querySelectorAll(DragItem);
        // this.start()
        this.currentDragItem = null;
        this.activemove = false
        this.mousemove = false
        this.activeId = []
        this.activecurrentId = null
        this.mouse()
        this.consoleXY = false;
    }
    mouse() {
        document.addEventListener("mousedown", (e) => {
            this.activemove = true
        })
        this.DragArea.addEventListener("mousemove", (e) => {
            // e.stopPropagation();
            e.preventDefault();
            if (this.activemove && this.currentDragItem) {
                let clone = this.currentDragItem.cloneNode(true)
                clone.id = this.uid()
                clone.style.position = "absolute"
                clone.style.transform = 'translate(-50%, -50%)';
                clone.addEventListener("mousedown", () => {
                    this.activecurrentId = clone
                    this.activecurrentId.style.pointerEvents = "none"
                })


                clone.style.top = e.offsetY + "px";
                clone.style.left = e.offsetX + "px"
                this.activeId.push(clone.id)
                this.DragArea.appendChild(clone)
                this.currentDragItem = null
                this.activemove = false

                this.mousemove = e
            }
            if (this.activecurrentId) {
                this.activecurrentId.style.top = e.offsetY + "px";
                this.activecurrentId.style.left = e.offsetX + "px"
            }
        })
        document.addEventListener("mouseup", (e) => {
            if (this.activecurrentId) {
                this.activecurrentId.style.pointerEvents = "auto"
                if (this.consoleXY) {
                    console.log("X:", (this.activecurrentId.style.left).split("px")[0], "Y:", (this.activecurrentId.style.top).split("px")[0]);

                }
                this.activecurrentId = null;
            }
            this.activemove = false
        })

    }
    getconsoleXY() {
        this.consoleXY = true
    }
    getAllIdAndXY() {
        let prt = this.DragArea.children
        // console.log(prt,"okok");
        let allData = []
        for (let i = 0; i < prt.length; i++) {
            let el = prt[i]
            // console.log(el,"el");
            let myoneData = {
                x: (el.style.left).split("px")[0],
                y: (el.style.top).split("px")[0],
            }
            if (el.dataset.id) {
                myoneData.id = el.dataset.id
            }
            allData.push(myoneData)
        }
        return allData
    }
    start() {
        this.DragArea.style.position = "relative";
        [...Array(this.allDragItems.length).keys()].forEach((d, i) => {
            let el = this.allDragItems[i];
            el.addEventListener("mousedown", (e) => {
                // e.preventDefault()
                this.currentDragItem = el
            })
        })
    }
    startNewEntery() {
        if (this.clickandmove) {

        }
    }
    uid() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }

}


// if(typeof module )
if (typeof module === "object") {
    module.exports = Drag
}
