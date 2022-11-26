function productFinder(metal, reagent) {
    if (metal === 'copper'){
        switch(reagent){
            case 'sodium carbonate solution':
                return 'copper carbonate ppt';                
            case 'concentrated hydrochloric acid':
                return 'copper chloro complex';         
            case 'sodium hydroxide':               
            case 'ammonia solution':
                return 'copper hydroxide small ppt';
            default: 
                break;
        }

    } else if (metal === 'cobalt'){
        switch(reagent){
            case 'sodium carbonate solution':
                return 'cobalt carbonate ppt';
            case 'concentrated hydrochloric acid':
                return 'cobalt chloro complex';
            case 'sodium hydroxide':            
            case 'ammonia solution':
                return 'cobalt hydroxide small ppt';
            default:
                break;
        }
    } else if (metal === 'iron II'){
        switch(reagent){
            case 'sodium carbonate solution':
                return 'iron II carbonate';
            case 'concentrated hydrochloric acid':
                return 'no reaction';                
            case 'sodium hydroxide':            
            case 'ammonia solution':
                return 'iron II hydroxide small ppt';
            default:
                break;
        }
    } else if (metal === 'iron III'){
        switch(reagent){
            case 'sodium carbonate solution':
                return 'iron III hydroxide with effervescence';
            case 'concentrated hydrochloric acid':
                return 'iron III chloro complex';
            case 'sodium hydroxide':            
            case 'ammonia solution':
                return 'iron III hydroxide small ppt';
            default:
                break;
        }
    } else if (metal === 'aluminium'){
        switch(reagent){
            case 'sodium carbonate solution':
                return 'aluminium hydroxide with effervescence';
            case 'concentrated hydrochloric acid':
                return 'no reaction';
            case 'sodium hydroxide':            
            case 'ammonia solution':
                return 'aluminium hydroxide small ppt';
            default:
                break;
        }
    } else if (metal === 'manganese') {
        switch(reagent){
            case 'sodium hydroxide':
            case 'ammonia solution':
                return 'manganese hydroxide small ppt';
            default:
                break;
        }
    } else if (metal === 'chromium') {
        switch(reagent){
            case 'sodium hydroxide':
            case 'ammonia solution':
                return 'chromium hydroxide small ppt';
            default:
                break;
        }
    }
}



export default productFinder;