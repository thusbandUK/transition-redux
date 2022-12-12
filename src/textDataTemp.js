export const MCQData = [
    {
        id: 42,
        question: 'Which of these equations shows a hydrolysis reaction that would produce a precipitate?',
        options: [
            {
                id: 421,
                optionNumber: 1,
                optionText: '4[Fe(H<sub>2</sub>O)<sub>4</sub>(OH)<sub>2</sub>] + O<sub>2</sub> &#8594;	 4[Fe(H<sub>2</sub>O)<sub>3</sub>(OH)<sub>3</sub>] + 2H<sub>2</sub>O',
                feedback: 'Incorrect! Complex product is neutral but this is oxidation.'
                
            },
            {
                id: 422,
                optionNumber: 2,
                optionText: '[Fe(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> + 2OH<sup>-</sup> &#8594;	 [Fe(H<sub>2</sub>O)<sub>4</sub>(OH)<sub>2</sub>]<sup>+</sup> + 2H<sub>2</sub>O',
                feedback: 'Incorrect! Complex product is charged so soluble.'
            },
            {
                id: 423,
                optionNumber: 3,
                optionText: '[Fe(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 2OH<sup>-</sup> &#8594;	 [Fe(H<sub>2</sub>O)<sub>4</sub>(OH)<sub>2</sub>] + 2H<sub>2</sub>O',
                feedback: 'Correct! '
            },
            {
                id: 424,
                optionNumber: 4,
                optionText: '[Al(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> + 4OH<sup>-</sup> &#8594;	 [Al(OH)<sub>4</sub>]<sup>-</sup> + 6H<sub>2</sub>O',
                feedback: 'Incorrect! Complex product is charged so soluble.'
            }
        ]
        
    },
    {
        id: 43,
        question: 'Which of these equations shows a hydrolysis reaction that would produce a precipitate?',
        options: [
            {
                id: 431,
                optionNumber: 1,
                optionText: ['[Co(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 4Cl<sup>-</sup> &#8652; [CoCl<sub>4</sub>]<sup>2-</sup> + 6H<sub>2</sub>O', 'blue solution to pink precipitate'],
                feedback: 'Incorrect! Complex product is neutral but this is oxidation.'
                
            },
            {
                id: 432,
                optionNumber: 2,
                optionText: '[Fe(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> + 2OH<sup>-</sup> &#8594;	 [Fe(H<sub>2</sub>O)<sub>4</sub>(OH)<sub>2</sub>]<sup>+</sup> + 2H<sub>2</sub>O',
                feedback: 'Incorrect! Complex product is charged so soluble.'
            },
            {
                id: 433,
                optionNumber: 3,
                optionText: '[Fe(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 2OH<sup>-</sup> &#8594;	 [Fe(H<sub>2</sub>O)<sub>4</sub>(OH)<sub>2</sub>] + 2H<sub>2</sub>O',
                feedback: 'Correct! '
            },
            {
                id: 434,
                optionNumber: 4,
                optionText: '[Al(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> + 4OH<sup>-</sup> &#8594;	 [Al(OH)<sub>4</sub>]<sup>-</sup> + 6H<sub>2</sub>O',
                feedback: 'Incorrect! Complex product is charged so soluble.'
            }
        ]/*,
        correct: {id: 433}*/
        
    }
]


export const textDataTemp = {
    introPage: [
        {id: 16, allContent: [
            {
                type: 'h2',
                
                content: /*'hello joe!',*/{            
                    staticContent: 'The [REPLACE TEXT] solutions.',            
                    dynamicContent: [
                        {string: 'five', true: ['AQA', 'Edexcel', 'OCRA']},
                        {string: 'three', true: ['OCRB']},
                    ]
                },
                props: {key: 18.1, variableContent: 'stringSplicer'/**/}
            },
            {
                type: 'h2',
                content: ['What should I be able to do before I start?'],
                props: {key: 16.1}
            },
            {
                type: 'ul',                
                content: [
                          {childType: 'li',
                           childProps: {true: ['AQA', 'Edexcel']},
                           childContent: 'hexaaquacobalt(II): pink solution'                           
                          },
                          {childType: 'li',
                           childProps: {true: ['AQA', 'OCRA', 'OCRB', 'Edexcel']},
                           childContent: 'hexaaquacopper(II): blue solution'                           
                          },
                          {childType: 'li',
                           childProps: {true: ['AQA', 'OCRA', 'OCRB', 'Edexcel']},
                           childContent: 'hexaquairon(II): green solution'                           
                          },
                          {childType: 'li',
                           childProps: {true: ['AQA', 'OCRA', 'OCRB', 'Edexcel'], tagged: true},
                           childContent: 'Formula: [Cu(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup>'                           
                          },
                          {childType: 'li',
                           childProps: {true: ['AQA']},
                           childContent: 'hexaaquaaluminium(III): colourless solution'                           
                          },
                          {childType: 'li',
                           childProps: {true: ['OCRA']},
                           childContent: 'hexaaquamanganese(II): very pale pink solution'                           
                          },
                          {childType: 'li',
                           childProps: {true: ['OCRA', 'Edexcel']},
                           childContent: 'hexaaquachromium(III): green solution'                           
                          }
                        ],
                props: {key: 18.3, variableContent: 'filter by exam board'}
                    },
                    
            {
                type: 'div',                
                content: [
                          {childType: 'img',
                           childProps: {src: 'images/structures/hexaaquacopper.png', className: 'img-fluid', style: {maxWidth: '40%', height: 'auto'}},
                           childContent: null
                          },
                          {childType: 'p',
                           childProps: {key: 2, id: "sidenote"},
                           childContent: "Did you include sulfate ions anywhere in your structure? Don't worry, it's a common mistake. The question states that copper sulfate is dissolved. When the ionically bonded copper sulfate is mixed with water, the ions will be separated as they become hydrated by the water molecules. The sulfate ions will become surrounded by water molecules. Each copper ion will also become surrounded by water molecules, which will arrange themselves around the copper ions as shown."
                          }
                        ],
                props: {id: "intro-answer-sidenote", key: 17.3, parent: true}
            },
            {
                type: 'form',                
                content: [{childType: 'br',
                           childProps: {}},
                          {childType: 'input',
                           childProps: {key: 1, type: 'checkbox', id: 'pre-learning-checklist', name: 'pre-learning-checklist', value: 'ligands', style: {display: 'inline'}},
                           childContent: null
                          },
                          {childType: 'label',
                           childProps: {key: 2, for: 'pre-learning-checklist', style: {display: 'inline'}},
                           childContent: 'Six aqua ligands bonded via oxygen atoms'
                          },
                          {childType: 'br',
                           childProps: {}},
                          {childType: 'input',
                           childProps: {key: 3, type: 'checkbox', id: 'pre-learning-checklist2', name:'pre-learning-checklist2', value:'brackets', style: {display: 'inline'}},
                           childContent: null
                          },
                          {childType: 'label',
                           childProps: {key: 4, for: 'pre-learning-checklist2', style: {display: 'inline'}},
                           childContent: 'Square brackets with overall charge shown top right'
                          },
                          {childType: 'br',
                           childProps: {}},
                          {childType: 'input',
                           childProps: {key: 5, type: 'checkbox', id: 'pre-learning-checklist3', name:'pre-learning-checklist3', value:'arrows', style: {display: 'inline'}},
                           childContent: null
                          },
                          {childType: 'label',
                           childProps: {key: 6, for: 'pre-learning-checklist3', tagged: true, style: {display: 'inline'}},
                           childContent: 'Formula: [Cu(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup>'
                          },
                          {childType: 'br',
                           childProps: {}}
                         ],
                props: {style: {display: 'inline'}, key: 17.6, parent: true}          
            }/**/,
            {
                type: 'p',  
                content: ['Formula: [Cu(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup>'],
                props: {key: 17.4, tagged: true}
            }/**/
        
            ]
        }
    ]
}

/*

 {id: 5, metal: "cobalt", true: {examBoards: ['AQA', 'Edexcel'], reagents: []}, link: '/images/cobalt chloride solution.png', altText: "test tube shows transparent pink solution", opaque: false},
          {id: 6, metal: "copper", true: {examBoards: ['AQA', 'OCRA', 'OCRB', 'Edexcel'], reagents: []}, link: '/images/copper sulfate solution.png', altText: "test tube shows transparent blue solution", opaque: false},
          {id: 7, metal: "aluminium", true: {examBoards: ['AQA'], reagents: []}, link: '/images/aluminium III solution.png', altText: "test tube shows colourless solution", opaque: false},
          {id: 8, metal: "iron II", true: {examBoards: ['AQA', 'OCRA', 'OCRB', 'Edexcel'], reagents: []}, link: '/images/iron II solution.png', altText: "test tube shows transparent green solution", opaque: false},
          {id: 9, metal: "iron III", true: {examBoards: ['AQA', 'OCRA', 'OCRB', 'Edexcel'], reagents: []}, link: '/images/iron III solution.png', altText: "test tube shows pale, transparent yellow solution", opaque: false},
          {id: 10, metal: "manganese", true: {examBoards: ['OCRA'], reagents: []}, link: '/images/manganese solution.png', altText: "test tube shows very pale, transparent pink solution", opaque: false},
          {id: 11, metal: "chromium", true: {examBoards: ['OCRA', 'Edexcel']

*/