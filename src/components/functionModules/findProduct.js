/*
 'cobalt ammino complex', link: 'images/cobalt ammino complex.png', opaque: true},
            {name: 'cobalt carbonate ppt', link: 'images/cobalt carbonate ppt.png', opaque: true},
            {name: 'copper carbonate ppt', link: 'images/copper carbonate ppt.png', opaque: true},
            {name: 'iron III hydroxide with effervescence', link: 'images/ironIII hydroxider effervescence', opaque: true},
            {name: 'iron II carbonate', link: 'images/iron II carbonate ppt.png', opaque: true},
            {name: 'aluminium hydroxide with effervescence', 
             */


function productFinder(metal, reagent) {
    if (metal === 'copper'){
        switch(reagent){
            case 'sodium carbonate solution':
                return 'copper carbonate ppt'
                break;
            case 'hydrochloric acid':
                return 'copper chloro complex'
                break;         
            case 'sodium hydroxide':               
            case 'ammonia solution':
                return 'copper hydroxide small ppt'
                break;
        }

    } else if (metal === 'cobalt'){
        switch(reagent){
            case 'sodium carbonate solution':
                return 'cobalt carbonate ppt'
                break;
            case 'hydrochloric acid':
                return 'cobalt chloro complex'
                break;
            case 'sodium hydroxide':            
            case 'ammonia solution':
                return 'cobalt hydroxide small ppt'
                break;
        }
    } else if (metal === 'iron II'){
        switch(reagent){
            case 'sodium carbonate solution':
                return 'iron II carbonate'
                break;
            case 'hydrochloric acid':
                return 'no reaction'
                break
            case 'sodium hydroxide':            
            case 'ammonia solution':
                return 'iron II hydroxide small ppt'
                break;
        }
    } else if (metal === 'iron III'){
        switch(reagent){
            case 'sodium carbonate solution':
                return 'iron III hydroxide with effervescence'
                break;
            case 'hydrochloric acid':
                return 'iron III chloro complex'
                break;
            case 'sodium hydroxide':            
            case 'ammonia solution':
                return 'iron III hydroxide small ppt'
                break;
        }
    } else if (metal === 'aluminium'){
        switch(reagent){
            case 'sodium carbonate solution':
                return 'aluminium hydroxide with effervescence'
                break;
            case 'hydrochloric acid':
                return 'no reaction'
                break;
            case 'sodium hydroxide':            
            case 'ammonia solution':
                    return 'aluminium hydroxide small ppt'
                    break;
        }
    } else if (metal === 'manganese') {
        switch(reagent){
            case 'sodium hydroxide':
            case 'ammonia solution':
                return 'manganese hydroxide small ppt'
                break;
        }
    } else if (metal === 'chromium') {
        switch(reagent){
            case 'sodium hydroxide':
            case 'ammonia solution':
                return 'chromium hydroxide small ppt'
                break;
        }
    }
}



export default productFinder;