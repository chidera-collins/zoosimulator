import React, { useEffect, useRef, useState } from 'react'
import elephant1 from './zoopictures/download.jpg'
import elephant2 from './zoopictures/Elephant2.jpg'
import elephant3 from './zoopictures/elephant3.jpg'
import giraffe1 from './zoopictures/girrafe1.jpg'
import giraffe2 from './zoopictures/girrafe2.jpg'
import giraffe3 from './zoopictures/giraffe3.jpg'
import monkey1 from './zoopictures/monkey1.jpg'
import monkey2 from './zoopictures/monkey2.jpg'
import monkey3 from './zoopictures/monkey3.jpg'






function Zoo() {
    let [animal1,setAnimal]=useState(100.0)
    let [animal2,setAnimal2] = useState(100.0)
    let [animal3, setAnimal3] = useState(100.0)
    let [animal4, setAnimal4] = useState(100.0)
    let [animal5, setAnimal5] = useState(100.0)
    let [animal6, setAnimal6] = useState(100.0)
    let [animal7, setAnimal7] = useState(100.0)
    let [animal8, setAnimal8] = useState(100.0)
    let [animal9, setAnimal9] = useState(100.0)
    let [animal10, setAnimal10] = useState(100.0)
    let [animal11, setAnimal11] = useState(100.0)
    let [animal12, setAnimal12] = useState(100.0)
    let [animal13, setAnimal13] = useState(100.0)
    let [animal14, setAnimal14] = useState(100.0)
    let [animal15, setAnimal15] = useState(100.0)


 


    // EMPTY VARIABLES TO CREATE A RANDOM NUMBER AND STORE THE ANIMAL HEALTH
    let health ='';
    let health2 = '';
    let health3 = '';
    let health4 = '';
    let health5 = '';
    let health6 = '';
    let health7 = '';
    let health8 = '';
    let health9 = '';
    let health10 = '';
    let health11 = '';
    let health12 = '';
    let health13 = '';
    let health14 = '';
    let health15 = '';

    // the timer for the zoo 
    let [hour, setHour] = useState(0)
    let [minute, setMinute] = useState(0)
    let [sec, setSeconds] = useState(0)
        // The text to be displayed when the animal is daed 
    let [pass, setPass] = useState()
    let [pass2, setPass2] = useState()
    let [pass3, setPass3] = useState()
    let [pass4, setPass4] = useState()
    let [pass5, setPass5] = useState()
    let [pass6, setPass6] = useState()
    let [pass7, setPass7] = useState()
    let [pass8, setPass8] = useState()
    let [pass9, setPass9] = useState()
    let [pass10, setPass10] = useState()
    let [pass11, setPass11] = useState()
    let [pass12, setPass12] = useState()
    let [pass13, setPass13] = useState()
    let [pass14, setPass14] = useState()
    let [pass15, setPass15] = useState()



    // The height of the displayed text 
    let[passer, setPasser] = useState()
    let[passer2, setPasser2] = useState()
    let[passer3, setPasser3] = useState()
    let[passer4, setPasser4] = useState()
    let[passer5, setPasser5] = useState()
    let[passer6, setPasser6] = useState()
    let[passer7, setPasser7] = useState()
    let[passer8, setPasser8] = useState()
    let[passer9, setPasser9] = useState()
    let[passer10, setPasser10] = useState()
    let[passer11, setPasser11] = useState()
    let[passer12, setPasser12] = useState()
    let[passer13, setPasser13] = useState()
    let[passer14, setPasser14] = useState()
    let[passer15, setPasser15] = useState()



    useEffect(()=>{
        let time= setInterval(()=>{
            setSeconds(sec = (sec+1)%60)
            if (sec == 59) {
                setMinute(minute = (minute+1)%3)
            }
             if ( minute ===0 && sec === 59 ) {
                // alert("hello")
                setHour(hour => (hour+1)%24)

                //   // For the first animal
                health =(Math.random()*20)/100;
                setAnimal(animal1 = animal1 - Math.floor(animal1*health))
                console.log(animal1 + 'animal1')
                console.log(health)
                
                // For second animal 
                health2 = Math.random()*20/100;
                setAnimal2(animal2 = animal2 - Math.floor(animal2*health2))

                // for third animal 
                health3 =  (Math.random() * 20)/100
                setAnimal3(animal3 = animal3 - Math.floor((animal3 * health3)))
                // console.log("for rand3 = " + rand3)
                // console.log("for animal3 = " +animal3)

                // // for fourth animal 
                health4 = Math.random()*20/100;
                setAnimal4(animal4 = animal4 - Math.floor((animal4 * health4)))


                // // FOR fifth animal 
                health5 = Math.random()*20/100;
                setAnimal5(animal5 = animal5 - Math.floor(animal5 * health5))        

                // // for sixth animal 
                health6 = (Math.random()*20)/100;
                setAnimal6(animal6= animal6 - Math.floor(animal6 * health6)) 

                // console.log('for health'+ health6)
                // console.log('for animal'+ animal6)
                // // for seventh animal
                health7 = Math.random()*20/100;
                setAnimal7(animal7 = animal7 - Math.floor(animal7 * health7))
                // // for the eighth animal 
                health8 = Math.random() *20/100;
                setAnimal8(animal8 = animal8 - Math.floor(animal8 * health8))
                // // for the ninth animal 
                health9 = Math.random() *20/100;
                setAnimal9(animal9 = animal9 - Math.floor(animal9 * health9))
                // // for the tenth animal 
                health10 = Math.random() *20/100;
                setAnimal10(animal10 = animal10 - Math.floor(health10 * animal10))
                // // for the eleventh animal 
                health11 = Math.random() *20/100;
                setAnimal11(animal11 = animal11 - Math.floor(animal11 * health11))
                // // for the twelveth animal 
                health12 = Math.random() *20/100;
                setAnimal12(animal12 = animal12 - Math.floor(health12 * animal12))
                // // for the thirtheenth animal 
                health13 = Math.random() *20/100;
                setAnimal13(animal13 = animal13 - Math.floor(health13 * animal13))
                // // for the fourteenth animal 
                health14 = Math.random() *20/100;
                setAnimal14(animal14 = animal14 - Math.floor(animal14 * health14))
                // // for the fiftheenth animal 
                health15 = Math.random() *20/100;
                setAnimal15(animal15 = animal15 - Math.floor(health15 * animal15))


                if (animal1 <= 70) {
                    setPass('CANT WALK')
                    setPasser(200)
                    if (animal1 <= 65) {
                        setPass('DEAD')
                        setPasser(200)
                        
                    }        
                }
                else{
                    setPass('')
                    setPasser('')
                }
                if (animal2 <= 50) {
                    setPass2('DEAD')
                    setPasser2(200)
                    
                } else { 
                    setPass2('')
                    setPasser2('')   
                }
                if (animal3 <= 30) {
                    setPass('DEAD')
                    setPasser3(200)
                    
                } else {
                    setPass3('')
                    setPasser3('')   
                }
                if (animal4 <= 70) {
                    setPass4('CANT WALK')
                    setPasser4(200)
                    if (animal4 < 65) {
                        setPass4('DEAD') 
                        setPasser4(200)
                    }
                    
                } else {
                    setPass4('')
                    setPasser4('')
                    
                }
                if (animal5 <= 50) {
                    setPass5('DEAD')
                    setPasser5(200)
                    
                } else {
                    setPass5('')
                    setPasser5('')    
                }
                if (animal6 <= 30) {
                    setPass6('DEAD')
                    setPasser6(200)
                    
                } else {
                    setPass6('')
                    setPasser6('')              
                }
                if (animal7 <= 70) {
                    setPass7('CANT WALK')
                    setPasser7(200)
                    if (animal7 < 65) {
                        setPass7('DEAD') 
                        setPasser7(200)
                    }                   
                } else {
                    setPass7('') 
                    setPasser7('')
                    
                }
                if (animal8 <= 50) {
                    setPass8('DEAD') 
                    setPasser8(200)
                    
                } else {
                    setPass8('') 
                    setPasser8('')                  
                }
                if (animal9 <= 30) {
                    setPass9('DEAD') 
                    setPasser9(200)
                    
                } else {
                    setPass9('') 
                    setPasser9('')                  
                }
                if (animal10 <= 70) {
                    setPass10('CANT WALK')
                    setPasser10(200)
                    if (animal10 < 65) {
                        setPass10('DEAD') 
                        setPasser10(200)
                    }  
                } else {
                    setPass10('') 
                    setPasser10('')
                    
                }
                if (animal11 <= 50) {
                    setPass11('DEAD')
                    setPasser11(200)                  
                } else {
                    setPass11('')
                    setPasser11('') 
                    
                }
                if (animal12 <= 30) {
                    setPass12('DEAD')
                    setPasser12(200)  
                } else {
                    setPass12('')
                    setPasser12('') 
                    
                }
                if (animal13 <= 70) {
                    setPass13('CANT WALK')
                    setPasser13(200)
                    if (animal13 < 65) {
                        setPass13('DEAD') 
                        setPasser13(200)
                    }                    
                } else {
                    setPass13('')
                    setPasser13('')      
                }
                if (animal14 <= 50) {
                    setPass14('DEAD') 
                    setPasser14(200)
                    
                } else {
                    setPass14('') 
                    setPasser14('')
                    
                }
                if (animal15 <= 30) {
                    setPass15('DEAD') 
                    setPasser15(200)
                    
                } else {
                    setPass15('') 
                    setPasser15('')
                    
                }


            } 

         },100)  
       
         return ()=> clearInterval(time)


    },[sec,minute,hour])




       function skiptime() {
             setHour(hour => (hour+1)%24)
                //   // For the first animal
                 health =(Math.random()*20)/100;
                setAnimal(animal1 = animal1 - Math.floor(animal1*health))


                if (animal1 <= 70) {
                    setPass('CANT WALK')
                    setPasser(200)
                    if (animal1 <= 65) {
                        setPass('DEAD')
                        setPasser(200)
                        
                    }
                    
                }
                else{
                    setPass('')
                    setPasser()
                }
                // console.log( 'for random'+health)
                // console.log( 'for setanimal'+animal1)

                // For second animal 
                health2 = Math.random()*20/100;
                setAnimal2(animal2 = animal2 - Math.floor(animal2*health2))
                if (animal2 <= 50) {
                    setPass2('DEAD')
                    setPasser2(200)
                    
                } else { 
                    setPass2('')
                    setPasser2('')   
                }

                // for third animal 
                // health3 =  ;
                health3 =  (Math.random() * 20)/100
                setAnimal3(animal3 = animal3 - Math.floor((animal3 * health3)))
                if (animal3 <= 30) {
                    setPass3('DEAD')
                    setPasser3(200)
                    
                } else {
                    setPass3('')
                    setPasser3('')   
                }
                // console.log("for rand3 = " + rand3)
                // console.log("for animal3 = " +animal3)

                // // for fourth animal 
                health4 = Math.random()*20/100;
                setAnimal4(animal4 = animal4 - Math.floor((animal4 * health4)))
                if (animal4 <= 70) {
                    setPass4('CANT WALK')
                    setPasser4(200)
                    if (animal4 < 65) {
                        setPass4('DEAD') 
                        setPasser4(200)
                    }
                    
                } else {
                    setPass4('')
                    setPasser4('')
                    
                }

                // // FOR fifth animal 
                health5 = Math.random()*20/100;
                setAnimal5(animal5 = animal5 - Math.floor(animal5 * health5))      
                if (animal5 <= 50) {
                    setPass5('DEAD')
                    setPasser5(200)
                    
                } else {
                    setPass5('')
                    setPasser5('')    
                }  

                // // for sixth animal 
                health6 = (Math.random()*20)/100;
                setAnimal6(animal6= animal6 - Math.floor(animal6 * health6)) 
                if (animal6 <= 30) {
                    setPass6('DEAD')
                    setPasser6(200)
                    
                } else {
                    setPass6('')
                    setPasser6('')              
                }

                // console.log('for health'+ health6)
                // console.log('for animal'+ animal6)
                // // for seventh animal
                health7 = Math.random()*20/100;
                setAnimal7(animal7 = animal7 - Math.floor(animal7 * health7))
                if (animal7 <= 70) {
                    setPass7('CANT WALK')
                    setPasser7(200)
                    if (animal7 <= 65) {
                        setPass7('DEAD') 
                        setPasser7(200)
                    }                   
                } else {
                    setPass7('') 
                    setPasser7('')
                }
                // // for the eighth animal 
                health8 = Math.random() *20/100;
                setAnimal8(animal8 = animal8 - Math.floor(animal8 * health8))
                if (animal8 <= 50) {
                    setPass8('DEAD') 
                    setPasser8(200)
                    
                } else {
                    setPass8('') 
                    setPasser8('')                  
                }
                // // for the ninth animal 
                health9 = Math.random() *20/100;
                setAnimal9(animal9 = animal9 - Math.floor(animal9 * health9))
                if (animal9 <= 30) {
                    setPass9('DEAD') 
                    setPasser9(200)
                    
                } else {
                    setPass9('') 
                    setPasser9('') 
                }
                                                  
                // // for the tenth animal 
                health10 = Math.random() *20/100;
                setAnimal10(animal10 = animal10 - Math.floor(health10 * animal10))
                if (animal10 <= 70) {
                    setPass10('CANT WALK')
                    setPasser10(200)
                    if (animal10 < 65) {
                        setPass10('DEAD') 
                        setPasser10(200)
                    }  
                } else {
                    setPass10('') 
                    setPasser10('')
                }
            
                // // for the eleventh animal 
                health11 = Math.random() *20/100;
                setAnimal11(animal11 = animal11 - Math.floor(animal11 * health11))
                if (animal11 <= 50) {
                    setPass11('DEAD')
                    setPasser11(200)                  
                } else {
                    setPass11('')
                    setPasser11('') 
                    
                }
                // // for the twelveth animal 
                health12 = Math.random() *20/100;
                setAnimal12(animal12 = animal12 - Math.floor(health12 * animal12))
                if (animal12 <= 30) {
                    setPass12('DEAD')
                    setPasser12(200)  
                } else {
                    setPass12('')
                    setPasser12('') 
                    
                }
                // // for the thirtheenth animal 
                health13 = Math.random() *20/100;
                setAnimal13(animal13 = animal13 - Math.floor(health13 * animal13))
                if (animal13 <= 70) {
                    setPass13('CANT WALK')
                    setPasser13(200)
                    if (animal13 < 65) {
                        setPass13('DEAD') 
                        setPasser13(200)
                    }                    
                } else {
                    setPass13('')
                    setPasser13('')      
                }
                // // for the fourteenth animal 
                health14 = Math.random() *20/100;
                setAnimal14(animal14 = animal14 - Math.floor(animal14 * health14))
                if (animal14 <= 50) {
                    setPass14('DEAD') 
                    setPasser14(200)
                    
                } else {
                    setPass14('') 
                    setPasser14('')
                    
                }
                // // for the fiftheenth animal 
                health15 = Math.random() *20/100;
                setAnimal15(animal15 = animal15 - Math.floor(health15 * animal15))    
                if (animal15 <= 30) {
                    setPass15('DEAD') 
                    setPasser15(200)
                    
                } else {
                    setPass15('') 
                    setPasser15('')
                    
                }
            }
                // Here we created a new vriable to generate a new Number that will add to the existing life of the animal 
            let healthh = '';
            let healthh2 ='';
            let healthh3 = '';
            let healthh4 = '';
            let healthh5 = '';
            let healthh6 = '';
            let healthh7 = '';
            let healthh8 = '';
            let healthh9 = '';
            let healthh10 = '';
            let healthh11 = '';
            let healthh12 = '';
            let healthh13= '';
            let healthh14= '';
            let healthh15= '';

            // In between the lines of the code i created 15 different variables each to hold the new variable life in which it floors the life and add it to the existing life

            function feedanimal() {

                    if (animal1 <100) {
                         healthh= Math.random()*10+15;
                         const newAnimalHealth = animal1 + Math.floor(health + healthh);
        
                         if (newAnimalHealth > 100) {
                             setAnimal(100);  // Set the health to exactly 100 if it exceeds 100

                             
                         }
                         
                        else if (animal1 <= 70) {
                            setPass('CANT WALK')
                            setPasser(200)
                            if (animal1 <= 65) {
                                setPass('DEAD')
                                setPasser(200)
                                
                            }
                            
                        }
                         else {
                            setPass('')
                            setPasser()
                             setAnimal(newAnimalHealth);  // Set the health to the calculated value if it's less than or equal to 100
                         }

                        // console.log(healthh)
                        //  console.log(animal1) 
                    }
                    else{
                       healthh = Math.random()*0;
                        setAnimal( animal1 =
                            animal1 + Math.floor(health + healthh )                            
                        )
                    }
                    if (animal2 < 100) {
                        healthh2 = Math.random()*10 + 15;
                        const NewHealth2 = Math.floor(animal2 + healthh2)
                        setAnimal2(NewHealth2)
                        if (NewHealth2 > 100) {
                            setAnimal2(100)
                            
                        }else if (animal2 < 50) {
                            setPass2('DEAD')
                            setPasser2(200) 
                            setAnimal2(animal2)  

                        }else{
                            setPass2('')
                            setPasser2() 

                        }
                        
                    } else {
                        healthh2 = Math.random()*0;
                        setAnimal2(animal2 = animal2 + Math.floor(health2 + healthh2))
                        
                    }
                    // console.log(healthh2 + 'forhealth2')
                    // console.log
                    if (animal3 < 100) {
                        healthh3 = Math.random()* 10 + 15;
                        const NewHealth3 = Math.floor(animal3 + healthh3)
                        setAnimal3(NewHealth3)
                        if (NewHealth3 > 100) {
                            setAnimal3(100)
                        }else if (animal3 < 30) {
                            setPass3('DEAD')
                            setPasser3(200) 
                            setAnimal3(animal3)     
                        }else{
                            setPass3('')
                            setPasser3()
                        }           
                    } else {
                        healthh3 = Math.random()*0;
                        setAnimal3(animal3 = animal3 + Math.floor(health3 + healthh3))    
                    }
                    if (animal4 < 100) {
                        healthh4 = Math.random()*10 + 15;
                        const NewHealth4 = Math.floor(animal4 + healthh4)
                        setAnimal4(NewHealth4)
                        if (NewHealth4 > 100) {
                            setAnimal4(100)
                            //  console.log(NewHealth4 + 'animal4')
                            
                        } else if (animal4 <= 70) {
                            setPass4('CANT WALK')
                            setPasser4(200)
                            if (animal4 <= 65) {
                                setPass4('DEAD')
                                setPasser4(200)
                                setAnimal4(animal4);                                              

                            }         
                        } else {
                            setPass4('')
                            setPasser4()

                        }
                        
                        } else {
                        healthh4 = Math.random()*0;
                        setAnimal4( animal4 =
                            animal4 + Math.floor(health4 + healthh4 )                            
                        )                   
                    }
                    if (animal5 < 100) {
                        healthh5 = Math.random()*10 + 15;
                        const NewHealth5 = Math.floor(animal5 + healthh5)
                        setAnimal5(NewHealth5)
                        if (NewHealth5 > 100) {
                            setAnimal5(100)
                            
                        }else if (animal5 < 50) {
                            setPass5('DEAD')
                            setPasser5(200) 
                            setAnimal5(animal5)  

                        }else{
                            setPass5('')
                            setPasser5() 

                        }
                        
                    } else {
                        healthh5 = Math.random()*0;
                        setAnimal5(animal5 = animal5 + Math.floor(health5 + healthh5))
                        
                    }
                    if (animal6 < 100) {
                        healthh6 = Math.random()* 10 + 15;
                        const NewHealth6 = Math.floor(animal6 + healthh6)
                        setAnimal6(NewHealth6)
                        if (NewHealth6 > 100) {
                            setAnimal6(100)
                        }else if (animal6 < 30) {
                            setPass6('DEAD')
                            setPasser6(200) 
                            setAnimal6(animal6)     
                        }else{
                            setPass6('')
                            setPasser6()
                        }           
                    } else {
                        healthh3 = Math.random()*0;
                        setAnimal3(animal3 = animal3 + Math.floor(health3 + healthh3))    
                    }
                    if (animal7 < 100) {
                        healthh7 = Math.random()*10 + 15;
                        const NewHealth7 = Math.floor(animal7 + healthh7)
                        setAnimal7(NewHealth7)
                        if (NewHealth7 > 100) {
                            setAnimal7(100)
                            
                        } else if (animal7 <= 70) {
                            setPass7('CANT WALK')
                            setPasser7(200)
                            if (animal7 <= 65) {
                                setPass7('DEAD')
                                setPasser7(200)
                             setAnimal7(animal7);                                              

                            }         
                        } else {
                            setPass7('')
                            setPasser7()

                        }
                        
                        } else {
                        healthh7 = Math.random()*0;
                        setAnimal7( animal7 =
                            animal7 + Math.floor(health7 + healthh7 )                            
                        )                   
                    }
                    if (animal8 < 100) {
                        healthh8 = Math.random()*10 + 15;
                        const NewHealth8 = Math.floor(animal8 + healthh8)
                        setAnimal8(NewHealth8)
                        if (NewHealth8 > 100) {
                            setAnimal8(100)
                            
                        }else if (animal8 < 50) {
                            setPass8('DEAD')
                            setPasser8(200) 
                            setAnimal8(animal8)  

                        }else{
                            setPass8('')
                            setPasser8() 

                        }
                        
                    } else {
                        healthh8 = Math.random()*0;
                        setAnimal8(animal8 = animal8 + Math.floor(health8 + healthh8))
                        
                    }

                    if (animal9 < 100) {
                        healthh9 = Math.random()* 10 + 15;
                        const NewHealth9 = Math.floor(animal9 + healthh9)
                        setAnimal9(NewHealth9)
                        if (NewHealth9 > 100) {
                            setAnimal9(100)
                        }else if (animal9 < 30) {
                            setPass9('DEAD')
                            setPasser9(200) 
                            setAnimal9(animal9)     
                        }else{
                            setPass9('')
                            setPasser9()
                        }           
                    } else {
                        healthh9 = Math.random()*0;
                        setAnimal9(animal9 = animal9 + Math.floor(health9 + healthh9))    
                    }
                    if (animal10 < 100) {
                        healthh10 = Math.random()*10 + 15;
                        const NewHealth10 = Math.floor(animal10 + healthh10)
                        setAnimal10(NewHealth10)
                        if (NewHealth10 > 100) {
                            setAnimal10(100)
                            
                        } else if (animal10 <= 70) {
                            setPass10('CANT WALK')
                            setPasser10(200)
                            if (animal10 <= 65) {
                                setPass10('DEAD')
                                setPasser10(200)
                                setAnimal10(animal10);                                              

                            }         
                        } else {
                            setPass10('')
                            setPasser10()

                        }
                        
                        } else {
                        healthh10 = Math.random()*0;
                        setAnimal10( animal10 =
                            animal10 + Math.floor(health10 + healthh10)                            
                        )                   
                    }
                    if (animal11 < 100) {
                        healthh11 = Math.random()*10 + 15;
                        const NewHealth11 = Math.floor(animal11 + healthh11)
                        setAnimal11(NewHealth11)
                        if (NewHealth11 > 100) {
                            setAnimal11(100)
                            
                        }else if (animal11 < 50) {
                            setPass11('DEAD')
                            setPasser11(200) 
                            setAnimal11(animal11)  

                        }else{
                            setPass11('')
                            setPasser11() 

                        }
                        
                    } else {
                        healthh11 = Math.random()*0;
                        setAnimal11(animal11 = animal11 + Math.floor(health11 + healthh11))
                        
                    }
                    if (animal12 < 100) {
                        healthh12 = Math.random()* 10 + 15;
                        const NewHealth12 = Math.floor(animal12 + healthh12)
                        setAnimal12(NewHealth12)
                        if (NewHealth12 > 100) {
                            setAnimal12(100)
                        }else if (animal12 < 30) {
                            setPass12('DEAD')
                            setPasser12(200) 
                            setAnimal12(animal12)     
                        }else{
                            setPass12('')
                            setPasser12()
                        }           
                    } else {
                        healthh12 = Math.random()*0;
                        setAnimal12(animal12 = animal12 + Math.floor(health12 + healthh12))    
                    }
                    if (animal13 < 100) {
                        healthh13 = Math.random()*10 + 15;
                        const NewHealth13 = Math.floor(animal13 + healthh13)
                        setAnimal13(NewHealth13)
                        if (NewHealth13 > 100) {
                            setAnimal13(100)
                            
                        } else if (animal13 <= 70) {
                            setPass13('CANT WALK')
                            setPasser13(200)
                            if (animal13 <= 65) {
                                setPass13('DEAD')
                                setPasser13(200)
                             setAnimal13(animal13);                                              

                            }         
                        } else {
                            setPass13('')
                            setPasser13()

                        }
                        
                        } else {
                        healthh13 = Math.random()*0;
                        setAnimal13( animal13  =
                            animal13 + Math.floor(health13 + healthh13)                            
                        )                   
                    }
                    if (animal14 < 100) {
                        healthh14 = Math.random()*10 + 15;
                        const NewHealth14 = Math.floor(animal14 + healthh14)
                        setAnimal14(NewHealth14)
                        if (NewHealth14 > 100) {
                            setAnimal14(100)
                            
                        }else if (animal14 < 50) {
                            setPass14('DEAD')
                            setPasser14(200) 
                            setAnimal14(animal14)  

                        }else{
                            setPass14('')
                            setPasser14() 

                        }
                        
                    } else {
                        healthh14 = Math.random()*0;
                        setAnimal14(animal14 = animal14 + Math.floor(health14 + healthh14))
                        
                    }
                    if (animal15 < 100) {
                        healthh15 = Math.random()* 10 + 15;
                        const NewHealth15 = Math.floor(animal15 + healthh15)
                        setAnimal15(NewHealth15)
                        if (NewHealth15 > 100) {
                            setAnimal15(100)
                        }else if (animal15 < 30) {
                            setPass15('DEAD')
                            setPasser15(200) 
                            setAnimal15(animal15)     
                        }else{
                            setPass15('')
                            setPasser15()
                        }           
                    } else {
                        healthh15 = Math.random()*0;
                        setAnimal12(animal15 = animal15 + Math.floor(health15 + healthh15))    
                    }



                
            }


  
  return (
    <div>
        <div className=' h-[50px] w-full bg-[yellow] flex justify-around items-center'>
            <div className='flex gap-10'>
                <button className=' border-[black]  rounded-lg border-[2px] ' onClick={skiptime}>Skip 1 hour</button>
                <button className='border-[black]  rounded-lg border-[2px] ' onClick={feedanimal}>Feed The Animal</button>
            </div>
            <div>
                <h1 className='font-bold text-2xl'>ZOO SIMULATOR</h1>
            </div>
            <div className='flex gap-10'>
                <h1 className=' text-2xl font-bold'>{hour}:{minute}:{sec}</h1>
            </div>
        </div>
        <div className='min-h-[100px] w-[99%] bg-[blue] grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 text-white mt-5 gap-5 p-2 box-content grid-rows-3'>
            <div className='bg-[#d8c7d8]  relative'>

                <div className=' bg-[pink] '>

                    <div className=' h-[200px]'>
                        <img src={elephant1} className='' alt=""  />
                    </div>
                    <div className=' bg-[#da2e2e8a] w-[285px] text-black font-bold flex items-center justify-center overflow-hidden text-2xl bottom-[25px] absolute' style={{height:passer}}>
                                <h1>{pass}</h1>

                    </div>
                </div>
                <div>
                        <div className='h-[25px] bg-[green] rounded-lg  flex items-center' style={{width:animal1 + '%'}}>
                            <p>{animal1}%</p>
                        </div>
                </div>

            </div>
            <div className='bg-[#d8c7d8] row-span-1 col-span-1'>
                <div className='h-[200px] bg-[#361a1f] relative'>
                        <div className='h-[200px]'>
                            <img src={giraffe3} height='100%' width='100%' alt="" />
                        </div>
                        <div className=' bg-[#da2e2e8a] w-[285px] text-black font-bold flex items-center justify-center overflow-hidden text-2xl bottom-[2px] absolute'    style={{height:passer2}}>
                            <h1>{pass2}</h1>

                        </div>
                </div>
                    <div>
                            <div className='h-[25px] bg-[green] rounded-lg flex items-center'style={{width:animal2 + '%'}}>
                                <p>{animal2}%</p>
                            </div>
                    </div>
            </div>
            <div className='bg-[#d8c7d8] row-span-1 col-span-1 '>
                <div className='h-[200px] bg-[#e4cfd2] relative'>
                        <div className='h-[200px]'>
                            <img src={monkey1} alt="" />
                        </div>
                        <div className=' bg-[#da2e2e8a] w-[285px] text-black font-bold flex items-center justify-center overflow-hidden text-2xl bottom-[2px] absolute'    style={{height:passer3}}>
                            <h1>{pass3}</h1>

                        </div>
                </div>
                    <div>
                            <div className='h-[25px] bg-[green] rounded-lg flex items-center' style={{width:animal3+"%"}}>
                                <p>{animal3}%</p>
                            </div>
                    </div>         
            </div>
            <div className='bg-[#d8c7d8] row-span-1 col-span-1 '>
                <div className='h-[200px] bg-[#25be4b] relative'>
                        <div className='h-[200px]'>
                            <img src={elephant2} alt="" />
                        </div>
                     <div className='bg-[#da2e2e8a] text-black font-bold text-2xl items-center justify-center flex absolute w-full bottom-[2px] overflow-hidden'style={{height:passer4}}>
                            <h1>{pass4}</h1>
                     </div>
                </div>
                    <div>
                            <div className='h-[25px] bg-[green] rounded-lg  flex items-center' style={{width:animal4 + '%'}}>
                                <p>{animal4}%</p>
                            </div>
                    </div>
            </div>
            <div className='bg-[#d8c7d8] col-span-1 row-span-1'>
                <div className=' bg-[#5424bb] h-[200px] relative'>
                         <div className='h-[200px]'>
                            <img src={giraffe2} alt="" />
                        </div>
                     <div className='bg-[#da2e2e8a] text-black font-bold text-2xl items-center justify-center flex absolute w-full bottom-[2px] overflow-hidden'style={{height:passer5}}>
                            <h1>{pass5}</h1>
                     </div>
                        
                </div>
                    <div>
                            <div className='h-[25px] bg-[green] rounded-lg flex items-center'style={{width:animal5 + '%'}}>
                                <p>{animal5}%</p>
                            </div>
                    </div>
            </div>
            <div className='bg-[#d8c7d8] row-span-1 col-span-1'>
                <div className=' bg-[#add234] h-[200px] relative'>
                        <div className='h-[200px]'>
                            <img src={monkey2} alt="" />
                        </div>
                     <div className='bg-[#da2e2e8a] text-black font-bold text-2xl items-center justify-center flex absolute w-full bottom-[2px] overflow-hidden'style={{height:passer6}}>
                            <h1>{pass6}</h1>
                     </div>
                </div>
                    <div>
                            <div className='h-[25px] bg-[green] rounded-lg flex items-center'style={{width:animal6 + '%'}}>
                                <p>{animal6}%</p>
                            </div>
                    </div>
            </div>
            <div className='bg-[#d8c7d8] row-span-1 col-span-1'>
                <div className=' bg-[#add234] h-[200px] relative'>
                        <div className='h-[200px]'>
                            <img src={elephant3} alt="" />
                        </div>
                     <div className='bg-[#da2e2e8a] text-black font-bold text-2xl items-center justify-center flex absolute w-full bottom-[2px] overflow-hidden'style={{height:passer7}}>
                            <h1>{pass7}</h1>
                     </div>
                </div>
                    <div>
                            <div className='h-[25px] bg-[green] rounded-lg flex items-center'style={{width:animal7 + '%'}}>
                                <p>{animal7}%</p>
                            </div>
                    </div>
            </div>
            <div className='bg-[#d8c7d8] row-span-1 col-span-1'>
                <div className=' bg-[#add234] h-[200px] relative'>
                         <div className='h-[200px]'>
                            <img src={giraffe3} alt="" />
                        </div>
                     <div className='bg-[#da2e2e8a] text-black font-bold text-2xl items-center justify-center flex absolute w-full bottom-[2px] overflow-hidden'style={{height:passer8}}>
                            <h1>{pass8}</h1>
                     </div>
                </div>
                    <div>
                            <div className='h-[25px] bg-[green] rounded-lg flex items-center'style={{width:animal8 + '%'}}>
                                <p>{animal8}%</p>
                            </div>
                    </div>
            </div>
            <div className='bg-[#d8c7d8] row-span-1 col-span-1'>
                <div className=' bg-[#add234] h-[200px] relative'>
                        <div className='h-[200px]'>
                            <img src={monkey3} alt="" />
                        </div>
                     <div className='bg-[#da2e2e8a] text-black font-bold text-2xl items-center justify-center flex absolute w-full bottom-[2px] overflow-hidden'style={{height:passer9}}>
                            <h1>{pass9}</h1>
                     </div>
                </div>
                    <div>
                            <div className='h-[25px] bg-[green] rounded-lg flex items-center'style={{width:animal9 + '%'}}>
                                <p>{animal9}%</p>
                            </div>
                    </div>
            </div>
            <div className='bg-[#d8c7d8] row-span-1 col-span-1'>
                <div className=' bg-[#add234] h-[200px] relative'>
                        <div className='h-[200px]'>
                            <img src={elephant1} alt="" />
                        </div>
                     <div className='bg-[#da2e2e8a] text-black font-bold text-2xl items-center justify-center flex absolute w-full bottom-[2px] overflow-hidden'style={{height:passer10}}>
                            <h1>{pass10}</h1>
                     </div>
                </div>
                    <div>
                            <div className='h-[25px] bg-[green] rounded-lg flex items-center'style={{width:animal10 + '%'}}>
                                <p>{animal10}%</p>
                            </div>
                    </div>
            </div>
            <div className='bg-[#d8c7d8] col-span-1 row-span-1'>
                <div className=' bg-[#5424bb] h-[200px] relative'>
                        <div className='h-[200px]'>
                            <img src={giraffe2} alt="" />
                        </div>
                     <div className='bg-[#da2e2e8a] text-black font-bold text-2xl items-center justify-center flex absolute w-full bottom-[2px] overflow-hidden'style={{height:passer11}}>
                            <h1>{pass11}</h1>
                     </div>
                </div>
                    <div>
                            <div className='h-[25px] bg-[green] rounded-lg flex items-center'style={{width:animal11 + '%'}}>
                                <p>{animal11}%</p>
                            </div>
                    </div>
            </div>
            <div className='bg-[#d8c7d8] col-span-1 row-span-1'>
                <div className=' bg-[#170a0a] h-[200px] relative'>
                         <div className='h-[200px]'>
                            <img src={monkey2} alt="" />
                        </div>
                     <div className='bg-[#da2e2e8a] text-black font-bold text-2xl items-center justify-center flex absolute w-full bottom-[2px] overflow-hidden'style={{height:passer12}}>
                            <h1>{pass12}</h1>
                     </div>
                </div>
                    <div>
                            <div className='h-[25px] bg-[green] rounded-lg flex items-center'style={{width:animal12 + '%'}}>
                                <p>{animal12}%</p>
                            </div>
                    </div>
            </div>
            <div className='bg-[#d8c7d8] col-span-1 row-span-1'>
                <div className=' bg-[#33249f] h-[200px] relative'>
                        <div className='h-[200px]'>
                             <img src={elephant2} alt="" />
                            
                        </div>
                     <div className='bg-[#da2e2e8a] text-black font-bold text-2xl items-center justify-center flex absolute w-full bottom-[2px] overflow-hidden'style={{height:passer13}}>
                            <h1>{pass13}</h1>
                     </div>
                </div>
                    <div>
                            <div className='h-[25px] bg-[green] rounded-lg flex items-center'style={{width:animal13 + '%'}}>
                                <p>{animal13}%</p>
                            </div>
                    </div>
            </div>
            <div className=' bg-[#d8c7d8] col-span-1 row-span-1'>
                <div className=' bg-[#e33ab6] h-[200px] relative'>
                        <div className='h-[200px]'>
                            <img src={giraffe3} alt="" />
                        </div>
                     <div className='bg-[#da2e2e8a] text-black font-bold text-2xl items-center justify-center flex absolute w-full bottom-[2px] overflow-hidden'style={{height:passer14}}>
                            <h1>{pass14}</h1>
                     </div>
                </div>
                    <div>
                            <div className='h-[25px] bg-[green] rounded-lg flex items-center'style={{width:animal14 + '%'}}>
                                <p>{animal14}%</p>
                            </div>
                    </div>
            </div>
            <div className='bg-[#d8c7d8] col-span-1 row-span-1'>
                <div className=' bg-[#e33ab6] h-[200px] relative'>
                        <div className='h-[200px]'>
                            <img src={monkey1} alt="" />
                        </div>
                     <div className='bg-[#da2e2e8a] text-black font-bold text-2xl items-center justify-center flex absolute w-full bottom-[2px] overflow-hidden'style={{height:passer15}}>
                            <h1>{pass15}</h1>
                     </div>
                </div>
                    <div>
                            <div className='h-[25px] bg-[green] rounded-lg flex items-center'style={{width:animal15 + '%'}}>
                                <p>{animal15}%</p>
                            </div>
                    </div>
            </div>
                    
        </div>
    </div>
  )
}

export default Zoo