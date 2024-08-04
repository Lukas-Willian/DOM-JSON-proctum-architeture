export default function getImage(element , content) {
    const url = `${window.location.protocol}//${window.location.host}`
    if(element && content && content.type == "img") {
        element.src = `${url}/src/img/${content.content}${content.extension}`
    }
}