document.addEventListener('DOMContentLoaded', () => {

    anime({
        targets : '.one' ,
        translateY : [-700, 0],
        duration : 2500,
        delay : 150,
        opacity : [0,1],
        easing : 'easeOutQuart'
    })

    anime({
        targets : '.two', 
        translateY : [350,0],
        duration : 3000,
        delay : 800,
        opacity : [0,1],
        easing : 'easeOutQuart'
    })

    anime({
        targets : '.three',
        translateY : [-250,0],
        duration : 3400,
        delay : 1500,
        opacity : [0,1],
        easing : 'easeOutQuart'
    })

    anime({
        targets : '.four',
        translateY : [250,0],
        duration : 3800,
        delay : 2200,
        opacity : [0,1],
        easing : 'easeOutQuart'
    })

    anime({
        targets : '#text',
        translateX : [-1,0],
        duration : 3200, 
        delay : 2100,
        opacity : [0,1],
        easing : 'easeInCubic',
    })

    anime({
        targets : '#text2',
        translateX : [-1, 0],
        duration : 3300,
        delay : 2500,
        opacity : [0,1],
        easing : 'easeInCubic',
    })
})