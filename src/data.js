

export const data = {
    
    examBoards: [
        {id: 12, name: 'AQA'},
        {id: 13, name: 'Edexcel'},
        {id: 14, name: 'OCRA'},
        {id: 15, name: 'OCRB'}
    ],
    reagentOptions: [
        {id: 1, name: 'concentrated hydrochloric acid', path: '/concentrated_hydrochloric_acid', true: ['AQA', 'OCRA', 'OCRB', 'Edexcel'], link: 'images/HCl-bottle.png', altText: "a bottle of hydrochloric acid"},
        {id: 2, name: 'sodium hydroxide', path: '/sodium_hydroxide', true: ['AQA', 'OCRA', 'OCRB', 'Edexcel'], link: 'images/sodium hydroxide bottle.png', altText: "a bottle of sodium hydroxide"},
        {id: 3, name: 'ammonia solution', path: '/ammonia_solution', true: ['AQA', 'OCRA', 'OCRB', 'Edexcel'], link: 'images/ammonia bottle.png', altText: "a bottle of ammonia solution"},
        {id: 4, name: 'sodium carbonate solution', path: '/sodium_carbonate_solution', true: ['AQA'], link: 'images/sodium carbonate bottle.png', altText: "a bottle of sodium carbonate solution"}
      ],
    unreactedMetals: 
      [
          {id: 5, metal: "cobalt", true: {examBoards: ['AQA', 'Edexcel'], reagents: []}, link: '/images/cobalt chloride solution.png', altText: "test tube shows transparent pink solution", opaque: false},
          {id: 6, metal: "copper", true: {examBoards: ['AQA', 'OCRA', 'OCRB', 'Edexcel'], reagents: []}, link: '/images/copper sulfate solution.png', altText: "test tube shows transparent blue solution", opaque: false},
          {id: 7, metal: "aluminium", true: {examBoards: ['AQA'], reagents: []}, link: '/images/aluminium III solution.png', altText: "test tube shows colourless solution", opaque: false},
          {id: 8, metal: "iron II", true: {examBoards: ['AQA', 'OCRA', 'OCRB', 'Edexcel'], reagents: []}, link: '/images/iron II solution.png', altText: "test tube shows transparent green solution", opaque: false},
          {id: 9, metal: "iron III", true: {examBoards: ['AQA', 'OCRA', 'OCRB', 'Edexcel'], reagents: []}, link: '/images/iron III solution.png', altText: "test tube shows pale, transparent yellow solution", opaque: false},
          {id: 10, metal: "manganese", true: {examBoards: ['OCRA'], reagents: []}, link: '/images/manganese solution.png', altText: "test tube shows very pale, transparent pink solution", opaque: false},
          {id: 11, metal: "chromium", true: {examBoards: ['OCRA', 'Edexcel'], reagents: []}, link: '/images/chromium solution.png', altText: "test tube shows transparent blueish green solution", opaque: false}
      ],
    metalIdsByReagent:
      
        {Edexcel: {
            'concentrated hydrochloric acid': [5,6],
            'sodium hydroxide': [5,6,8,9,11],
            'ammonia solution': [5,6,8,9,11]
        },
        AQA: {
            'concentrated hydrochloric acid': [5,6,9],
            'sodium hydroxide': [5,6,7,8,9],
            'ammonia solution': [5,6,7,8,9,],
            'sodium carbonate solution': [5,6,7,8,9]
        },
        OCRA: {
            'concentrated hydrochloric acid': [6],
            'sodium hydroxide': [6,8,9,10,11],
            'ammonia solution': [6,8,9,10,11]
        },
        OCRB: {
            'concentrated hydrochloric acid': [6],
            'sodium hydroxide': [6,8,9],
            'ammonia solution': [6,8,9]
        }
    }
      
      
}