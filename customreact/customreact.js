
/* How react work behind the scene when it rendering some element ::  */

function customRender(reactElement,mainContainer)
{
const newElement=document.createElement(reactElement.type)
newElement.innerHTML=reactElement.children
for(const prop in reactElement.props)
    {
        if(prop==='children') continue;
        newElement.setAttribute(prop,reactElement.props[prop])
    }
    mainContainer.appendChild(newElement)
}
const reactElement={
    type:'a',
    props:{
        href:'https://www.google.com',
        target:'_blank'
    },
    children:'click me to visit Google'
}
const mainContainer=document.getElementById('root')
customRender(reactElement,mainContainer)