var timer = 10

var paraElement = document.createElement("p")
paraElement.innerText = timer

document.querySelector(".times").append(paraElement)

setTimeout(()=>{
    timer-=1
    paraElement.innerText = timer
    
    setTimeout(()=>{
        timer-=1
        paraElement.innerText = timer
       
        setTimeout(()=>{
            timer-=1
            paraElement.innerText = timer
 
            setTimeout(()=>{
                timer-=1
                paraElement.innerText = timer

                setTimeout(()=>{
                    timer-=1
                    paraElement.innerText = timer

                    setTimeout(()=>{
                        timer-=1
                        paraElement.innerText = timer
                        
                        setTimeout(()=>{
                            timer-=1
                            paraElement.innerText = timer
                           
                            setTimeout(()=>{
                                timer-=1
                                paraElement.innerText = timer
                     
                                setTimeout(()=>{
                                    timer-=1
                                    paraElement.innerText = timer
                    
                                    setTimeout(()=>{
                                        timer-=1
                                        paraElement.innerText = "Happy Independence Day!"
                                        paraElement.classList.add("paraclass")
                                    },1000)
                    
                                },1000)
                    
                            },1000)
                    
                        },1000)
                    
                    },1000)

                },1000)

            },1000)

        },1000)

    },1000)

},1000)