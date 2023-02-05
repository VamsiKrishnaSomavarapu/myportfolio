// dropdown menu

const menu = document.getElementById("dropdown-menu")
const nav = document.getElementById("nav")
const navMain = document.getElementById("nav-main")

menu.addEventListener('click', () => {
    const dropdown = nav.getAttribute("dropdown")
    if (dropdown == "true") {
        nav.setAttribute("dropdown", "false")
        navMain.setAttribute("dropdown", "false")
    } else {
        nav.setAttribute("dropdown", "true")
        navMain.setAttribute("dropdown", "true")
    }
})

// typing

const description = document.getElementById("description")
const desc_main = document.getElementById("desc-main")

const contents = ['self-taught programmer', 'full-stack developer', 'cybersecurity enthusiast']
let i = 0
let j = 0
let fwd = true

const typing = () => {
    let k = j%contents.length
    if (k < contents.length) {
        if (i+1 < contents[k].length && fwd){
            description.innerHTML += contents[k][i]
            desc_main.setAttribute('not-typing', 'false')
            i++
            setTimeout(typing, 100)
        } else if (i+1 === contents[k].length && fwd) {
            description.innerHTML += contents[k][i]
            fwd = false
            i++
            desc_main.setAttribute('not-typing', 'true')
            setTimeout(typing, 2000)
        } else if (fwd === false) {
            description.innerHTML = contents[k].slice(0,i)
            i--
            if (i === -1) {
                i++
                j++
                fwd = true
                desc_main.setAttribute('not-typing', 'true')
                setTimeout(typing, 1000)
            } else {
                desc_main.setAttribute('not-typing', 'false')
                setTimeout(typing, 100)
            }
        }
    }
}

typing()