export default function getLink(element , content , id) {
    if(element && content && content.type == "link") {
        element.innerText = content.content;
        element.href = `${content.link}?id=${id.post_id}`
    }
}