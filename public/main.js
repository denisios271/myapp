
const getHashTagInfo = () => (window.location.hash).split('=')[1]?.split(',') ?? []
const getHash = (value) => {
    
    const currentHashInfo = getHashTagInfo()
   
    if (currentHashInfo.length) {
        console.log(currentHashInfo)
        return `tag=${currentHashInfo},${value}`
        
    }

    return `tag=${value}`
}
 
const input = document.getElementById('input')
const list = document.getElementById('list')
const button = document.getElementById('button')



const setNodeFromHash = (value) => {
    const node = document.createElement("li");
    const textnode = document.createTextNode(value);
    node.appendChild(textnode);
    node.onclick = () => deleteElement(node)
    list.appendChild(node)
}

const deleteElement = (node) =>{
    node.parentNode.removeChild(node)
    window.location.hash = (window.location.hash).replace(node.innerText,'').replace(',,',',')
}
 
button.addEventListener('click', () => {
    window.location.hash = getHash(input.value)
    setNodeFromHash(input.value)
})

for (const info of getHashTagInfo()) {
    setNodeFromHash(info)
}

setupCounter(document.querySelector('#counter'))