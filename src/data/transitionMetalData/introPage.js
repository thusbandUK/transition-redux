export const introPage = [
        {id: 16, allContent: [
            
            {
                type: 'h2',
                content: ['What should I be able to do before I start?'],
                props: {key: 16.1}
            },
            {
                type: 'p',  
                content: ['Draw a diagram showing the structure of the complex ion formed when copper sulfate is dissolved in distilled water.',
                'Try drawing the diagram now and then click the next button to check your answer.'],
                props: {key: 16.2}
            }
          ]
        },
        {id: 17, allContent:[
            {
                type: 'h2',
                content: 'hexaaquacopper',
                props: {key: 17.1}
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
                type: 'p',  
                content: ['Formula: [Cu(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup>'],
                props: {key: 17.4, tagged: true}
            },
            {
                type: 'p',  
                content: ['Check the boxes for the points you got correct.'],
                props: {key: 17.5}
            },
            {
                type: 'form',
                content: [{childType: 'br',
                           childProps: ''},
                          {childType: 'input',
                           childProps: {key: 1, type: 'checkbox', id: 'pre-learning-checklist', name: 'pre-learning-checklist', value: 'ligands', style: {display: 'inline'}},
                           childContent: null
                          },
                          {childType: 'label',
                           childProps: {key: 2, for: 'pre-learning-checklist', style: {display: 'inline'}},
                           childContent: 'Six aqua ligands bonded via oxygen atoms'
                          },
                          {childType: 'br',
                          childProps: ''},
                          {childType: 'input',
                           childProps: {key: 3, type: 'checkbox', id: 'pre-learning-checklist2', name:'pre-learning-checklist2', value:'brackets', style: {display: 'inline'}},
                           childContent: null
                          },
                          {childType: 'label',
                           childProps: {key: 4, for: 'pre-learning-checklist2', style: {display: 'inline'}},
                           childContent: 'Square brackets with overall charge shown top right'
                          },
                          {childType: 'br',
                           childProps: ''},
                          {childType: 'input',
                           childProps: {key: 5, type: 'checkbox', id: 'pre-learning-checklist3', name:'pre-learning-checklist3', value:'arrows', style: {display: 'inline'}},
                           childContent: null
                          },
                          {childType: 'label',
                           childProps: {key: 6, for: 'pre-learning-checklist3', style: {display: 'inline'}},
                           childContent: 'Arrow heads point towards central Cu ion to show coordinate bonds'
                          },
                          {childType: 'br',
                          childProps: ''}
                         ],
                props: {style: {display: 'inline'}, key: 17.6, parent: true}          
            }
        ]
    },
              {id: 18, allContent: [
                {
                    type: 'h2',
                    
                    content: /*'hello joe!',*/{            
                        staticContent: 'The [REPLACE TEXT] solutions.',            
                        dynamicContent: [
                            {string: 'five', true: ['AQA', 'Edexcel', 'OCRA']},
                            {string: 'three', true: ['OCRB']},
                        ]
                    },
                    props: {key: 18.1, variableContent: 'stringSplicer'}
                },
                {
                    type: 'p',
                    
                    content: /*'hello joe!',*/{            
                        staticContent: "The [REPLACE TEXT] syllabus includes the reactions of ",            
                        dynamicContent: [
                            {string: 'AQA', true: ['AQA']},
                            {string: 'OCR A', true: ['OCRA']},
                            {string: 'OCR B', true: ['OCRB']},
                            {string: 'Edexcel', true: ['Edexcel']}
                            
                        ]
                    },
                    props: {key: 18.2, variableContent: 'stringSplicer', style: {display: 'inline'}}
                },   
                {
                    type: 'p',
                    
                    content: /*'hello joe!',*/{            
                        staticContent: "[REPLACE TEXT] hexaaquaions with the reagents in the menu below. The hexaaquaions are as follows:",            
                        dynamicContent: [
                            {string: 'five', true: ['AQA', 'Edexcel', 'OCRA']},
                            {string: 'three', true: ['OCRB']}
                            
                        ]
                    },
                    props: {key: 18.2, variableContent: 'stringSplicer', style: {display: 'inline'}}
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
                               childProps: {true: ['AQA', 'OCRA', 'OCRB', 'Edexcel']},
                               childContent: 'hexaaquairon(III): pale yellow (or violet) solution'                           
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
                        }/*,
                   {
                    type: 'ul',
                    content: [
                              {childType: 'li',
                               childProps: {},
                               childContent: 'hexaaquacobalt(II): pink solution'
                              },
                              {childType: 'li',
                               childProps: {},
                               childContent: 'hexaaquacopper(II): blue solution'
                              },
                              {childType: 'li',
                               childProps: {},
                               childContent: 'hexaquairon(II): green solution'
                              },
                              {childType: 'li',
                               childProps: {},
                               childContent: 'hexaaquairon(III): pale yellow (or violet) solution'
                              },
                              {childType: 'li',
                               childProps: {},
                               childContent: 'hexaaquaaluminium(III): colourless solution'
                              }
                            ],
                    props: {key: 18.3, parent: true}
                        }*/,
                    {
                        type: 'p',  
                        content: [/*'In each section the starting solutions appear in a different order with buttons you can click to reveal their identity. This is so you can practise recalling their name by colour.',*/
                    'After each set of reactions there is a set of text boxes to record your observations. Make sure to describe both the appearance of each tube at the start and at the end. State whether colours describe a solution or a precipitate. For example: "When a few drops of sodium hydroxide are added to a blue solution of hexaaquacopper(II) ions, a pale blue precipitate forms.'],
                        props: {key: 18.4}
                    }
                ]
                }


              

        
        ]
        