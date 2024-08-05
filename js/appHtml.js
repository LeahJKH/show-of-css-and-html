const infoContainer = document.querySelector("#main-info-cont")

const fullItems = [ 
    {
        header: "Basics",
        items: [
            {
                title: "<body>",
                desc: "body tag is between the body of your page. it is needed too make things appear on your page."
            },
            {
                title: "<html>",
                desc: "html tag is also a needed tag. html tag is a root tag and makes everything work."
            },
            {
                title: "<head>",
                desc: "head tag is used to link for example stylesheets or to give your website meta tags or link tags."
            },
            {
                title: "class",
                desc: "the class tag can be put at the end of every tag to give multiple tags css."
            },
            {
                title: "id",
                desc: "id is for singular use to link it up with css."
            },
            {
                title: "<style>",
                desc: "this tag adds css directly in your html file. it can be used inside the head or inside another tag."
            },
            {
                title: "<script>",
                desc: "this allows you to either link a javascript file or write javascript directly into the html file."
            },
            {
                title: "openings and closers",
                desc: "some tags will need both openings and closers. an opener is simply <> with a tag inside while a closer is </> with the same tag inside."
            },
            {
                title: "self closing tags",
                desc: "the tags that close themselves are: area, base, br, col, embed, hr, img, input, link, meta, param, source, track, wbr."
            },
            {
                title: "<title>",
                desc: "this is code that has to be put in the head tags. it's a tag that gives your site a name on the tab in the browser it's open on."
            }
        ]
    },
    {
        header: "Content Tags",
        items: [
            {
                title: "<p>",
                desc: "the p tag is the paragraph tag. it's used to write small text or paragraphs."
            },
            {
                title: "<h1>, <h2>, <h3>, <h4>, <h5>, <h6>",
                desc: "these are all headings in different sizes, h1 being the largest and h6 being the smallest."
            },
            {
                title: "<a>",
                desc: "the a tag is the anchor tag. it's used to anchor in many different ways like redirecting you to another site."
            },
            {
                title: "<i>",
                desc: "i tag is the italic tag. everything in between this tag will be written in italic."
            },
            {
                title: "<div>",
                desc: "div tag is a divider. it's used to nest multiple items under one, so it's most commonly used as a parent tag but it has many uses."
            },
            {
                title: "<img>",
                desc: "img tag is the image tag. image tag is used to put images on your website."
            },
            {
                title: "<header>",
                desc: "header is the top of your page."
            },
            {
                title: "<footer>",
                desc: "footer is the bottom of your page."
            }
        ]
    },
    {
        header: "Input Tags",
        items: [
            {
                title: "<input>",
                desc: "the input tag is used for different types of input. The different types of input are: button, checkbox, color, date, datetime, datetime-local, email, file, hidden, image, month, number, password, radio, range, reset, search, submit, tel, text, time, url, week. To write it you would have to write <input type=\"(put type here)\" />"
            },
            {
                title: "<input type=\" \">",
                desc: "here are the different input tags that I don't know well enough to explain: hidden, image, url, search, radio, tel, range, reset."
            },
            {
                title: "password",
                desc: "this is a password field that hides the text."
            },
            {
                title: "number",
                desc: "this lets you have a number field. using min you can choose the lowest number to be chosen and max the highest."
            },
            {
                title: "file",
                desc: "this lets you send in a file."
            },
            {
                title: "email",
                desc: "this lets you input email."
            },
            {
                title: "button",
                desc: "the button input tag will create an input button."
            },
            {
                title: "checkbox",
                desc: "checkbox will create an interactive box."
            },
            {
                title: "color",
                desc: "color input will let you choose which color from the RGB scale."
            },
            {
                title: "text",
                desc: "this lets you input text."
            },
            {
                title: "time values",
                desc: "input can create interactive time values like date, datetime, datetime-local, week, month, time."
            }
        ]
    },
    {
        header: "Other Things",
        items: [
            {
                title: "<ul>, <ol> and <li>",
                desc: "the ul tag is unordered list and the ol tag is ordered list. li is to be put in between to make a list for example",
                code: `
<pre class="code-line">
&lt;ul&gt;
&lt;li&gt;list item one&lt;/li&gt;
&lt;li&gt;list item two&lt;/li&gt;
&lt;li&gt;list item three&lt;/li&gt;
&lt;/ul&gt;
</pre>
`
            },
            {
                title: "<pre>",
                desc: "the pre tag is used for keeping spaces. an example would be",
                code: `
<pre>
&lt;pre&gt;
     words       words

     words
&lt;/pre&gt;
</pre>
<p>this would look like</p>
<pre>
     words       words

     words
</pre>
`
            },
            {
                title: "<button>",
                desc: "the button tag creates a button."
            },
            {
                title: "<span>",
                desc: "span makes so you can put different css in the middle of a text like this",
                example: `
<p>only the word <span style="font-weight: bolder">bold</span> is <span style="font-weight: bolder">bold</span></p>
`
            }
        ]
    }
]
function startBuild() {
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
startBuild();