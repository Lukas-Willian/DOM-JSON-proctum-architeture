export default function getText(element , content , limit) {
    if(element && content && content.type == "text") {
        element.innerHTML = `${content.content.substring(0 , limit && content.limit ? content.limit : content.content.length)}${limit && content.limit ? "..." : ""}`
    }
}