

export const textData = {
    introPage: [
        {id: 16, allContent: [
            
            {
                type: 'h2',
                content: ['What should I be able to do before I start?'],
                props: {}
            },
            {
                type: 'p',  
                content: ['Draw a diagram showing the structure of the complex ion formed when copper sulfate is dissolved in distilled water.',
                'Try drawing the diagram now and then click the next button to check your answer.'],
                props: {}
            }
          ]
        },
        {id: 17, allContent:[
            {
                type: 'h2',
                content: 'hexaaquacopper',
                props: {}
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
                props: {id: "intro-answer-sidenote"}
            },
            {
                type: 'pTagged',  
                content: ['Formula: [Cu(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup>'],
                props: {}
            },
            {
                type: 'p',  
                content: ['Check the boxes for the points you got correct.'],
                props: {}
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
                props: {style: {display: 'inline'}}          
              }

        
        ]
        }

           
        
    ],
};


/*
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