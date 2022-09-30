const template = document.querySelector('#card_template')
const box = document.querySelector('body')
//Cloning the contents of template element
const clone = template.content.cloneNode(true)
const remove_skeleton = clone.querySelectorAll('.skeleton__text')


//Removing unwanted div's that is used only for creating 
//skeleton loading
//effect
remove_skeleton.forEach(element => element.remove())



getContent()


//Function to simulate delay 
//for skeleton loading effect
async function getContent() {


        const result = setTimeout(() => {
        
        const h3 = document.createElement('h3')
        h3.innerText = 'Profile Name'
        const p = document.createElement('p')
        p.innerText = ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque id suscipit modi aut error voluptatibus!'

        clone.querySelector('.card__profile').append(h3);
        clone.querySelector('.profile__content').append(p);
        box.innerHTML = ''
        box.append(clone)

      
    }, 5000)


    
    
}




