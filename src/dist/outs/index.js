
//Default imports
import getImage from "../../functions/static_functions/get_img.js";
import getLink from "../../functions/static_functions/get_links.js";
import getText from "../../functions/static_functions/get_text.js";

const fetche = await fetch("./src/data/static.json")
const response = await fetche.json();

window.onload = loadFunction()

function loadFunction() {
    startApp()
}

function startApp() {
    for(let pages of response) {
        for(let content of pages.content) {
            if(document.getElementById(`${content.id}`)) {
                const search_document = document.getElementById(`${content.id}`);
                const parent_document = search_document.parentElement
                getText(search_document , content)
                getImage(search_document , content)
                getLink(search_document , content)
                if(content.type == "post") {
                    async function fetchPost() {
                        const fetch_post = await fetch(`./src/data/post/${content.file}`);
                        const response_post = await fetch_post.json();            
                        response_post.content.map((res , i) => {
                            const clonedocument = search_document.cloneNode(true);
                            clonedocument.id = `${clonedocument.id}_${res.post_id}`
                            content.reference.map((response) => {
                                const find = res.content.find(content => content.name == response);
                                const search_post = document.getElementById(`${response}`);
                                getText(search_post , find , true)
                                getImage(search_post , find)
                                getLink(search_post , find , res)
                            })
                            let parentChild = parent_document.appendChild(clonedocument);
                        })
                    }
                    fetchPost()
                }
                
            }
        }
    }
}