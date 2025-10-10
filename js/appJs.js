const infoContainer = document.querySelector("#main-info-cont")


function startBuild(fullItems) {
    fullItems.forEach(section => {
        // Create and append the header for each section
        const header = document.createTextNode(section.header);
        const h2 = document.createElement("h2");
        h2.append(header);
        infoContainer.appendChild(h2);

        const contentDiv = document.createElement("div")
        contentDiv.classList.add("row");
        contentDiv.classList.add("row-wrap");
        infoContainer.appendChild(contentDiv)
        // Iterate over each item in the section
        section.items.forEach(item => {
            // Create a div for each item
            const div = document.createElement("div");
            div.classList.add("snippetcard");


            // Create and append the title
            const h2ETxt = document.createTextNode(item.title);
            const h2E = document.createElement("h2");
            h2E.append(h2ETxt);

            // Create and append the description
            const p = document.createElement("p");
            const desc = document.createTextNode(item.desc);
            p.append(desc);

            // Append title and description to the div
            div.appendChild(h2E);
            div.appendChild(p);

            // Append code or example if they exist
            if (item.code) {
                const pre = document.createElement("pre");
                pre.innerHTML = item.code;
                div.appendChild(pre);
            }

            if (item.example) {
                const exampleDiv = document.createElement("div");
                exampleDiv.innerHTML = item.example;
                div.appendChild(exampleDiv);
            }

            // Append the div to the container
            contentDiv.appendChild(div)
        });
    });
}
async function JsonGetter(path) {
    let file = await fetch(path)
    let res = await file.json()
    console.log(res)
    startBuild(res);
}
JsonGetter("../json/js.json")