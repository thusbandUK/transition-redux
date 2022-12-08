

export const textData = {
    introPage: [
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
                          {formElement: 'img',
                           props: {src: 'images/structures/hexaaquacopper.png', className: 'img-fluid', style: {maxWidth: '40%', height: 'auto'}},
                           formElementContent: null
                          },
                          {formElement: 'p',
                           props: {key: 2, id: "sidenote"},
                           formElementContent: "Did you include sulfate ions anywhere in your structure? Don't worry, it's a common mistake. The question states that copper sulfate is dissolved. When the ionically bonded copper sulfate is mixed with water, the ions will be separated as they become hydrated by the water molecules. The sulfate ions will become surrounded by water molecules. Each copper ion will also become surrounded by water molecules, which will arrange themselves around the copper ions as shown."
                          }
                        ],
                props: {id: "intro-answer-sidenote", key: 17.3}
            },
            {
                type: 'pTagged',  
                content: ['Formula: [Cu(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup>'],
                props: {key: 17.4}
            },
            {
                type: 'p',  
                content: ['Check the boxes for the points you got correct.'],
                props: {key: 17.5}
            },
            {
                type: 'form',
                content: [{formElement: 'br'},
                          {formElement: 'input',
                           props: {key: 1, type: 'checkbox', id: 'pre-learning-checklist', name: 'pre-learning-checklist', value: 'ligands', style: {display: 'inline'}},
                           formElementContent: null
                          },
                          {formElement: 'label',
                           props: {key: 2, for: 'pre-learning-checklist', style: {display: 'inline'}},
                           formElementContent: 'Six aqua ligands bonded via oxygen atoms'
                          },
                          {formElement: 'br'},
                          {formElement: 'input',
                           props: {key: 3, type: 'checkbox', id: 'pre-learning-checklist2', name:'pre-learning-checklist2', value:'brackets', style: {display: 'inline'}},
                           formElementContent: null
                          },
                          {formElement: 'label',
                           props: {key: 4, for: 'pre-learning-checklist2', style: {display: 'inline'}},
                           formElementContent: 'Square brackets with overall charge shown top right'
                          },
                          {formElement: 'br'},
                          {formElement: 'input',
                           props: {key: 5, type: 'checkbox', id: 'pre-learning-checklist3', name:'pre-learning-checklist3', value:'arrows', style: {display: 'inline'}},
                           formElementContent: null
                          },
                          {formElement: 'label',
                           props: {key: 6, for: 'pre-learning-checklist3', style: {display: 'inline'}},
                           formElementContent: 'Arrow heads point towards central Cu ion to show coordinate bonds'
                          },
                          {formElement: 'br'}
                         ],
                props: {style: {display: 'inline'}, key: 17.6}          
            }
        ]
    },
              {id: 18, allContent: [
                {
                    type: 'h2',
                    content: 'CHANGE ME BACK!' /*{            
                        staticContent: {
                            openingString: 'The ',
                            closingString: ' starting solutions'
                        },
                        dynamicContent: {
                            
                                AQA: 'five',
                                Edexcel: 'five',
                                OCRA: 'five',
                                OCRB: 'three'
                            
                        }
                        
                    }*/,
                    props: {key: 18.1}
                },
                {
                    type: 'p',  
                    content: ['The AQA syllabus includes the reactions of five hexaaquaions with four different reagents. The hexaaquaions are as follows:'],
                    props: {key: 18.2}
                },
                {
                    type: 'ul',
                    content: [
                              {formElement: 'li',
                               props: {},
                               formElementContent: 'hexaaquacobalt(II): pink solution'
                              },
                              {formElement: 'li',
                               props: {},
                               formElementContent: 'hexaaquacopper(II): blue solution'
                              },
                              {formElement: 'li',
                               props: {},
                               formElementContent: 'hexaquairon(II): green solution'
                              },
                              {formElement: 'li',
                               props: {},
                               formElementContent: 'hexaaquairon(III): pale yellow (or violet) solution'
                              },
                              {formElement: 'li',
                               props: {},
                               formElementContent: 'hexaaquaaluminium(III): colourless solution'
                              }
                            ],
                    props: {key: 18.3}
                        },
                    {
                        type: 'p',  
                        content: ['In each section the starting solutions appear in a different order with buttons you can click to reveal their identity. This is so you can practise recalling their name by colour.',
                    'After each set of reactions there is a set of text boxes to record your observations. Make sure to describe both the appearance of each tube at the start and at the end. State whether colours describe a solution or a precipitate. For example: "When a few drops of sodium hydroxide are added to a blue solution of hexaaquacopper(II) ions, a pale blue precipitate forms.'],
                        props: {key: 18.4}
                    }
                ]
                }


              

        
        ]
        }



        //'The five starting solutions'
/*
{            
                staticContent: {
                    openingString: 'The ',
                    closingString: ' starting solutions'
                },
                dynamicContent: {
                    
                        AQA: 'five',
                        Edexcel: 'five',
                        OCRA: 'five',
                        OCRB: 'three'
                    
                }
                
            }
*/


    /*       
        const content = {
            staticContent: `The ${numberOfStartingSolutions} starting solutions`,
            dynamicContent: {                 
                    AQA: 'five',
                    Edexcel: 'five',
                    OCRA: 'five',
                    OCRB: 'three'                
            }
        },
    


/*
id: "intro-answer-sidenote"
/*id: "intro-answer-sidenote"*//*

 {
              type: 'img',  
              content: null,
              props: {src: 'images/select reagent.png'}
            },
            {
              type: 'form',
              content: [{formElement: 'br'},
                        {formElement: 'input',
                         props: {key: 1, type: 'checkbox', id: 'pre-learning-checklist', name: 'pre-learning-checklist', value: 'ligands'},
                         formElementContent: null
                        },
                        {formElement: 'label',
                         props: {key: 2, for: 'pre-learning-checklist'},
                         formElementContent: 'Six aqua ligands bonded via oxygen atoms'
                        },
                        {formElement: 'br'},
                        {formElement: 'input',
                         props: {key: 3, type: 'checkbox', id: 'pre-learning-checklist2', name:'pre-learning-checklist2', value:'brackets'},
                         formElementContent: null
                        },
                        {formElement: 'label',
                         props: {key: 4, for: 'pre-learning-checklist2'},
                         formElementContent: 'Square brackets with overall charge shown top right'
                        },
                        {formElement: 'br'},
                        {formElement: 'input',
                         props: {key: 5, type: 'checkbox', id: 'pre-learning-checklist3', name:'pre-learning-checklist3', value:'arrows'},
                         formElementContent: null
                        },
                        {formElement: 'label',
                         props: {key: 6, for: 'pre-learning-checklist3'},
                         formElementContent: 'Arrow heads point towards central Cu ion to show coordinate bonds'
                        },
                        {formElement: 'br'}
                       ],
              props: {style: {display: 'block'}}          
            }

*/