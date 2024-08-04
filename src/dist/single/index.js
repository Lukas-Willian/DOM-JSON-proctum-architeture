//Function imports
import getText from "../../functions/static_functions/get_text.js";

window.onload = startSingle()

async function startSingle() {
    let id = document.body.firstElementChild.id.toLocaleLowerCase();
    const fetche = await fetch(`./src/data/post/${id}.json`)
    const response = await fetche.json();
    let post_id = window.location.search.split("=")[1]
    const post = response.content.find(res => res.post_id == post_id);
    for(let info of post.content) {
        if(document.getElementById(`${info.name}`)) {
            const search_document = document.getElementById(`${info.name}`)
            getText(search_document , info)
        }
    }

}