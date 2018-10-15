'use strict';

function handleTableClick(event) {
    if ((event.target.tagName === 'TH') && (event.target.dataset.propName)) {
        if (event.target.dataset.dir == '1') {
            event.target.dataset.dir = -1;
        } else {
            event.target.dataset.dir = 1;
        }
        event.currentTarget.dataset.sortBy = event.target.dataset.propName;

        let field = event.target.dataset.propName;
        let direction = event.target.dataset.dir;

        sortTable(field, direction);


    }
}
