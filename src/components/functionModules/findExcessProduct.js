

function excessProductFinder(metal, reagent) {
    if (metal === 'copper'){
        switch(reagent){                   
            case 'sodium hydroxide':
                return 'copper hydroxide ppt'
                break;
            case 'ammonia solution':
                return 'copper ammino complex'
                break;
        }
    } else if (metal === 'cobalt'){
        switch(reagent){            
            case 'sodium hydroxide':   
                return 'cobalt hydroxide ppt'
                break;         
            case 'ammonia solution':
                return 'cobalt ammino complex'
                break;
        }
    } else if (metal === 'iron II'){
        switch(reagent){            
            case 'sodium hydroxide':
            case 'ammonia solution':
                return 'iron II hydroxide oxidised ppt'
                break;            
        }
    } else if (metal === 'iron III'){
        switch(reagent){            
            case 'sodium hydroxide':            
            case 'ammonia solution':
                return 'iron III hydroxide ppt'
                break;
        }
    } else if (metal === 'aluminium'){
        switch(reagent){            
            case 'sodium hydroxide': 
                return 'aluminium hydroxide solution'  
                break
            case 'ammonia solution':
                return 'aluminium hydroxide ppt'
                break;
        }
    } else if (metal === 'chromium'){
        switch(reagent){
            case 'sodium hydroxide': 
                return 'chromium hydroxide solution'  
                break
            case 'ammonia solution':
                return 'chromium ammino complex'
                break;
        }
    } else if (metal === 'manganese'){
        switch(reagent){
            case 'sodium hydroxide':                 
            case 'ammonia solution':
                return 'manganese hydroxide oxidised ppt'
                break;
        }
    }
}

export default excessProductFinder;