import "cypress-drag-drop";

const columnA = '#column-a'
const columnB = '#column-b'


class DragAndDropPage {

    dragColumnA() {

        cy.get(columnA).drag(columnB);
    }
}

export default DragAndDropPage