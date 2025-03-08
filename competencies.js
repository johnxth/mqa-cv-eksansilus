document.addEventListener("DOMContentLoaded", function () {
    const items = [
        "Item 1", "Item 2", "Item 3", "Item 4", "Item 5", 
        "Item 6", "Item 7", "Item 8", "Item 9", "Item 10", 
        "Item 11", "Item 12"
    ];

    const container = document.getElementById("listbox-container");
    const columns = 3; 
    const itemsPerColumn = Math.ceil(items.length / columns);

    for (let i = 0; i < columns; i++) {
        let col = document.createElement("div");
        col.className = "col-md-4 col-sm-6 mb-3";
        let listGroup = document.createElement("div");
        listGroup.className = "list-group";

        items.slice(i * itemsPerColumn, (i + 1) * itemsPerColumn).forEach(item => {
            let listItem = document.createElement("button");
            listItem.className = "list-group-item list-group-item-action";
            listItem.textContent = item;
            listGroup.appendChild(listItem);
        });

        col.appendChild(listGroup);
        container.appendChild(col);
    }
});
