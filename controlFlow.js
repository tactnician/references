//  ██████╗ ██████╗ ███╗   ██╗████████╗██████╗  ██████╗ ██╗         ███████╗██╗      ██████╗ ██╗    ██╗
// ██╔════╝██╔═══██╗████╗  ██║╚══██╔══╝██╔══██╗██╔═══██╗██║         ██╔════╝██║     ██╔═══██╗██║    ██║
// ██║     ██║   ██║██╔██╗ ██║   ██║   ██████╔╝██║   ██║██║         █████╗  ██║     ██║   ██║██║ █╗ ██║
// ██║     ██║   ██║██║╚██╗██║   ██║   ██╔══██╗██║   ██║██║         ██╔══╝  ██║     ██║   ██║██║███╗██║
// ╚██████╗╚██████╔╝██║ ╚████║   ██║   ██║  ██║╚██████╔╝███████╗    ██║     ███████╗╚██████╔╝╚███╔███╔╝
//  ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚══════╝    ╚═╝     ╚══════╝ ╚═════╝  ╚══╝╚══╝ 
//   Prepared by Lloyd Edwards         ref: 'https://exploringjs.com/impatient-js/ch_control-flow.html'




// ██╗███████╗    ███████╗██╗     ███████╗███████╗
// ██║██╔════╝    ██╔════╝██║     ██╔════╝██╔════╝
// ██║█████╗      █████╗  ██║     ███████╗█████╗  
// ██║██╔══╝      ██╔══╝  ██║     ╚════██║██╔══╝  
// ██║██║         ███████╗███████╗███████║███████╗
// ╚═╝╚═╝         ╚══════╝╚══════╝╚══════╝╚══════╝
                                               
                                                            
const iffy = (cond1, cond2) => {
	//if 
	if (cond1) {
 	 // then branch
	}
	
	//if else
	if (cond1) {
	  // then branch
	} else {
	  // else branch
	}	
       
	//if elseif  else
	if (cond1) {
     // then branch
    } else if (cond2) {
      // then branch
    } else {
      // else branch
    }       
}

// iffy()


// ███████╗██╗    ██╗██╗████████╗ ██████╗██╗  ██╗
// ██╔════╝██║    ██║██║╚══██╔══╝██╔════╝██║  ██║
// ███████╗██║ █╗ ██║██║   ██║   ██║     ███████║
// ╚════██║██║███╗██║██║   ██║   ██║     ██╔══██║
// ███████║╚███╔███╔╝██║   ██║   ╚██████╗██║  ██║
// ╚══════╝ ╚══╝╚══╝ ╚═╝   ╚═╝    ╚═════╝╚═╝  ╚═╝
                                              

const dayOfTheWeek = (num) => {
  switch (num) {
    case 1:
      return 'Tuesday'
    case 3:
      return 'Wednesday'
    case 4:
      return 'Thursday'
    case 5:
      return 'Friday'
    case 6:
      return 'Saturday'
    case 7:
      return 'Sunday'
    default:
      throw new Error('Unknown value: ' + num)
  }
}

// dayOfTheWeek(3)


const isWeekDay = (name) => {
  switch (name) {
    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
    case 'Friday':
      return true
    case 'Saturday':
    case 'Sunday':
      return false
    default:
      throw new Error('Unknown value: ' + num)
  }
}

// isWeekDay('Monday')


// ██╗    ██╗██╗  ██╗██╗██╗     ███████╗
// ██║    ██║██║  ██║██║██║     ██╔════╝
// ██║ █╗ ██║███████║██║██║     █████╗  
// ██║███╗██║██╔══██║██║██║     ██╔══╝  
// ╚███╔███╔╝██║  ██║██║███████╗███████╗
//  ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝╚══════╝╚══════╝
                                

// while («condition») {
//   «statements»
// }

const arr = ['a', 'b', 'c']
const whiled = () => {
  while (arr.length > 0) {
  const elem = arr.shift() // remove first element
  console.log(elem)
  }
}

// whiled()


// ██████╗  ██████╗     ██╗    ██╗██╗  ██╗██╗██╗     ███████╗
// ██╔══██╗██╔═══██╗    ██║    ██║██║  ██║██║██║     ██╔════╝
// ██║  ██║██║   ██║    ██║ █╗ ██║███████║██║██║     █████╗  
// ██║  ██║██║   ██║    ██║███╗██║██╔══██║██║██║     ██╔══╝  
// ██████╔╝╚██████╔╝    ╚███╔███╔╝██║  ██║██║███████╗███████╗
// ╚═════╝  ╚═════╝      ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝╚══════╝╚══════╝

let input
const doWhile = () => {
  do {
    input = prompt('Enter text:')
    console.log(input) 
  } while (input !== ':q')  
}

// doWhile()


// ███████╗ ██████╗ ██████╗ 
// ██╔════╝██╔═══██╗██╔══██╗
// █████╗  ██║   ██║██████╔╝
// ██╔══╝  ██║   ██║██╔══██╗
// ██║     ╚██████╔╝██║  ██║
// ╚═╝      ╚═════╝ ╚═╝  ╚═╝

// for («initialization»; «condition»; «post_iteration») {
//   «statements»
// }

const foray = () => {
  for (let i=0; i<3; i++) {
    console.log(i)
  }  
} 

// foray()

// Output:
// 0
// 1
// 2
                                       

// ███████╗ ██████╗ ██████╗      ██████╗ ███████╗
// ██╔════╝██╔═══██╗██╔══██╗    ██╔═══██╗██╔════╝
// █████╗  ██║   ██║██████╔╝    ██║   ██║█████╗  
// ██╔══╝  ██║   ██║██╔══██╗    ██║   ██║██╔══╝  
// ██║     ╚██████╔╝██║  ██║    ╚██████╔╝██║     
// ╚═╝      ╚═════╝ ╚═╝  ╚═╝     ╚═════╝ ╚═╝     

// for («iteration_variable» of «iterable») {
//   «statements»
// }                                           

const forOfMen = () => {
  const iterable = ['hello', 'world']
  for (const elem of iterable) {
    console.log(elem)
  }  
}

// forOfMen()
 
const andMice = () => {
  const iterable = ['hello', 'world']
  let elem
  for (elem of iterable) {
    console.log(elem)
  }  
}
            
// andMice()

// Output:
// 'hello'
// 'world'

const forOfIndecies = () => {
  const arr = ['a', 'b', 'c']
  for (const [index, elem] of arr.entries()) {
    console.log(`${index} -> ${elem}`)
  }  
}

// forOfIndecies()

// Output:
// '0 -> a'
// '1 -> b'
// '2 -> c'