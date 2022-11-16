const imagesOfReactantsAndProducts = {
    unreactedMetals: 
        [
            {metal: "cobalt", link: 'images/cobalt chloride solution.png', altText: "test tube shows transparent pink solution", opaque: false},
            {metal: "copper", link: 'images/copper sulfate solution.png', altText: "test tube shows transparent blue solution", opaque: false},
            {metal: "aluminium", link: 'images/aluminium III solution.png', altText: "test tube shows colourless solution", opaque: false},
            {metal: "iron II", link: 'images/iron II solution.png', altText: "test tube shows transparent green solution", opaque: false},
            {metal: "iron III", link: 'images/iron III solution.png', altText: "test tube shows pale, transparent yellow solution", opaque: false},
            {metal: "manganese", link: 'images/manganese solution.png', altText: "test tube shows very pale, transparent pink solution", opaque: false},
            {metal: "chromium", link: 'images/chromium solution.png', altText: "test tube shows transparent blueish green solution", opaque: false}
        ]
        ,
    reagentBottles:
        [
            {reagent: "hydrochloric acid", link: 'images/HCl bottle.png', altText: "a bottle of hydrochloric acid"},
            {reagent: "sodium hydroxide", link: 'images/sodium hydroxide bottle.png', altText: "a bottle of sodium hydroxide"},
            {reagent: "ammonia solution", link: 'images/ammonia bottle.png', altText: "a bottle of ammonia solution"},
            {reagent: "sodium carbonate solution", link: 'images/sodium carbonate bottle.png', altText: "a bottle of sodium carbonate solution"},
            {reagent: "select reagent", link: 'images/select reagent.png', altText: "a bottle of an unspecified reagent"}
        ],

    products:
        [
            
            {name: 'cobalt carbonate ppt', link: 'images/cobalt carbonate ppt.png', opaque: true, altText: "test tube shows a purple precipitate"},
            {name: 'copper carbonate ppt', link: 'images/copper carbonate ppt.png', opaque: true, altText: "test tube shows a blue green precipitate"},
            {name: 'iron III hydroxide with effervescence', link: 'images/iron III hydroxide effervescence.png', opaque: true, altText: "test tube shows a brown precipitate and bubbles of gas"},
            {name: 'iron II carbonate', link: 'images/iron II carbonate ppt.png', opaque: true, altText: "test tube shows a green precipitate"},
            {name: 'aluminium hydroxide with effervescence', link: 'images/aluminium hydroxide effervescence.png', opaque: true, altText: "test tube shows a white precipitate and bubbles of gas"},
            {name: 'copper hydroxide small ppt', link: 'images/copper hydroxide small ppt.png', opaque: true, altText: "test tube shows a small amount of pale blue precipitate"},
            {name: 'cobalt hydroxide small ppt', link: 'images/cobalt hydroxide small ppt.png', opaque: true, altText: "test tube shows a small amount of blue precipitate"},
            {name: 'iron II hydroxide small ppt', link: 'images/iron II hydroxide small ppt.png', opaque: true, altText: "test tube shows a small amount of green precipitate"},
            {name: 'iron III hydroxide small ppt', link: 'images/iron III hydroxide small ppt.png', opaque: true, altText: "test tube shows a small amount of brown precipitate"},
            {name: 'aluminium hydroxide small ppt', link: 'images/aluminium hydroxide small ppt.png', opaque: true, altText: "test tube shows a small amount of white precipitate"},
            {name: 'cobalt chloro complex', link: 'images/cobalt chloro complex.png', opaque: false, altText: "test tube shows a blue solution"},
            {name: 'copper chloro complex', link: 'images/copper chloro complex.png', opaque: false, altText: "test tube shows a yellow green solution"},
            {name: 'iron III chloro complex', link: 'images/iron III chloro complex.png', opaque: false, altText: "test tube shows a yellow solution"},
            {name: 'copper hydroxide ppt', link: 'images/copper hydroxide ppt.png', opaque: true, altText: "test tube shows a pale blue precipitate"},
            {name: 'copper ammino complex', link: 'images/copper ammino complex.png', opaque: false, altText: "test tube shows a deep blue solution"},
            {name: 'cobalt hydroxide ppt', link: 'images/cobalt hydroxide ppt.png', opaque: true, altText: "test tube shows a blue precipitate"},
            {name: 'cobalt ammino complex', link: 'images/cobalt ammino complex.png', opaque: false, altText: "test tube shows a straw solution"},
            {name: 'iron II hydroxide oxidised ppt', link: 'images/iron II hydroxide oxidised ppt.png', opaque: true, altText: "test tube shows a precipitate which is mostly green but brown at the edges"},
            {name: 'iron III hydroxide ppt', link: 'images/iron III hydroxide ppt.png', opaque: true, altText: "test tube shows a brown precipitate"},

            //note aluminium hydroxide solution is a more appropriate name (esp for alt text) but the image is indistinguisable from 
            //aluminum III solution, so same image linked

            {name: 'aluminium hydroxide solution', link: 'images/aluminium III solution.png', opaque: false, altText: "test tube shows colourless solution"},
            {name: 'aluminium hydroxide ppt', link: 'images/aluminium hydroxide ppt.png', opaque: true, altText: "test tube shows a white precipitate"},
            {name: 'chromium ammino complex', link: 'images/chromium ammino complex.png', opaque: false, altText: "test tube shows a violet solution"},
            {name: 'chromium hydroxide small ppt', link: 'images/chromium hydroxide small ppt.png', opaque: true, altText: "test tube shows a small amount of grey green precipitate"},
            {name: 'chromium hydroxide solution', link: 'images/chromium hydroxide solution.png', opaque: false, altText: "test tube shows a green solution"},
            {name: 'manganese hydroxide oxidised ppt', link: 'images/manganese hydroxide oxidised ppt.png', opaque: true, altText: "test tube shows a precipitate which is mostly white but brown at the edges"},

            //note manganese hydroxide is the name of the formula but the image is indistinguisable from aluminium hydroxide (as above)

            {name: 'manganese hydroxide small ppt', link: 'images/aluminium hydroxide small ppt.png', opaque: true, altText: "test tube shows a small amount of white precipitate"}
            




        ],
    background: 
        [
            {name: 'laboratory', link: 'images/laboratory background trial.jpg'}
        ]

}

export default imagesOfReactantsAndProducts;

/*
return ''
                return '' 
                return ''
                return ''
                return ''
                return ''
                ''  //I think you should change the name of this to help with alt images
                ''
*/