export const AmmoniaText = [   
    {
       id: 43, allContent: [
        {
        type: 'ObservationPage',                
        props: {key: 4},
        content: {
          modelObservations: {
            copper: "Initially blue solution changes to pale blue precipitate. Upon addition of excess reagent, pale blue precipitate dissolves to produce deep blue solution.",
            cobalt: "Initially pink solution changes to blue precipitate. In excess reagent blue precipitate dissolves to produce straw-coloured solution.",
            "iron II": "Initially green solution changes to green precipitatea. After a short time the precipitate turns brown at the edges.",
            "iron III": "Initially pale yellow solution changes to brown precipitate. Excess reagent produces additional brown precipitate.",
            aluminium: "Initially colourless solution changes to white precipitate. Excess reagent produces additional white precipitate.",
            manganese: "Initially pale pink solution changes to white precipitate. After a short time the precipitate turns brown at the edges.",
            chromium: "Initially blueish-green solution produces grey-green precipitate. Excess reagent dissolves the precipitate to form a violet solution."
          }
        }
        }
      ]
    },
    {id: 43.5, allContent: [
            
      {
          type: 'h2',
          content: ['A few drops of ammonia solution'],
          props: {key: 43.51}
      },
      {
          type: 'p',  
          content: ["The following slides will focus on the initial reaction of the metal solutions to the addition of just a few drops of ammonia solution."],
          props: {key: 43.52}
      }
    ]
    },
    {id: 44, allContent: [
            
      {
          type: 'h2',
          content: ['Why do these observations look so familiar?'],
          props: {key: 44.1}
      },
      {
        type: 'div',
        content: [           
           {
              childType: 'p',
              childProps: {key: 44.21},
              childContent: 'These observations are identical to the observations recorded when a few drops of sodium hydroxide are added to the same solutions.'
           },
           {
            childType: 'p',
            childProps: {key: 44.22},
            childContent: 'That is because the same reaction is occurring, although we can represent the process with various different equations.'
           },
           {
            childType: 'p',
            childProps: {key: 44.23},
            childContent: 'Solutions of sodium hydroxide and ammonia are both alkaline, meaning they both release hydroxide ions in solution.'
           },
           {
            childType: 'div',
            childProps: {key: 44.24, style: {display: 'inline'}, tagged: 'true'},
            childContent: 'NH<sub>3</sub> + H<sub>2</sub>O   &#8652;   NH<sub>4</sub><sup>+</sup> + OH<sup>-</sup>'
           },
           {
            childType: 'p',
            childProps: {key: 44.25, style: {marginTop: '10px'}},
            childContent: 'In equations we can show the complex ions reacting directly with ammonia molecules, as follows:'
           },           
           {
            childType: 'div',
            childProps: {key: 44.26, tagged: 'true', style: {display: 'inline'}},
            childContent: '[Fe(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 2NH<sub>3</sub>   &#8652;   [Fe(H<sub>2</sub>O)<sub>4</sub>(OH)<sub>2</sub>] + 2NH<sub>4</sub><sup>+</sup>'
           },
           {
            childType: 'p',
            childProps: {key: 44.27, style: {marginTop: '10px'}},
            childContent: 'Or we can show the complex ions reacting with hydroxide ions, provided we also include an equation to show how ammonia produces hydroxide ions in aqueous solution.'
           },         
           ],
        props: {key: 44.2, parent: 'true'}
     },
    ]
  },
  {id: 45, allContent: [
    {
      type: 'mcq',                
      props: {key: 45.1},
      content: {id: 50}
    }
   ]
  },
  {id: 46, allContent: [
    {
      type: 'mcq',                
      props: {key: 46.1},
      content: {id: 51}
    }
   ]
  },
  {id: 47, allContent: [,
    
    {
      type: 'written-response',                
      props: {key: 47, id: 47},
      content: {id: 47,      
      questions:
        [
          {            
            id: 'equationA',
            questionReference: 'equation',
            questionText: 'In the textboxes below describe and explain the changes you would observe when iron(III) hydroxide is precipitated by the addition of a few drops of ammonia solution to hexaaquairon(III). You should include equations in the first text box.'
          },           
          {           
            id: 'explanationA',
            questionReference: 'explanation',
            questionText: 'Include your observations in the text box below.'
          },     
         

        ]
      }
    }
   ]
  },
  {id: 48, allContent: [
    
    {
      type: 'written-response-feedback',                
      props: {key: 48, id: 47},
      content: {id: 47, answers:
        [
          {            
            questionReference: 'equation',
            id: 'equationA',
            answerText: [
             'One equation showing ammonia accepting a proton', 
             'One equation showing production of iron(III) hydroxide precipitate'              
            ],
            equation: [
              
              '[Fe(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> + 3NH<sub>3</sub> &#8652; [Fe(H<sub>2</sub>O)<sub>3</sub>(OH)<sub>3</sub>] + 3NH<sub>4</sub><sup>+</sup>',
              'OR',
                'NH<sub>3</sub> + H<sub>2</sub>O &#8652; NH<sub>4</sub><sup>+</sup> + OH<sup>-</sup>',
                'AND EITHER',
                '[Fe(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> + 3OH<sup>-</sup> &#8652; [Fe(H<sub>2</sub>O)<sub>3</sub>(OH)<sub>3</sub>] + 3H<sub>2</sub>O',
                'OR',
                'Fe<sup>3+</sup> + 3OH<sup>-</sup> &#8652; Fe(OH)<sub>3</sub>',
                
            ]
          },  
          {
            questionReference: 'explanation',
            id: 'explanationA',
            answerText: [
              'starting colour AND state: pale yellow / violet solution',
              'final colour AND state: brown precipitate',
              'hydrolysis reaction occurs',              
              'ammonia solution is alkaline OR NH<sub>3</sub> / OH<sup>–</sup> accept protons / H<sup>+</sup> ions',
              'complex produced is neutral so precipitates / insoluble'
            ]
          }        

        ]
      }
    }
   ]
  },
  {id: 49, allContent: [
    {
      type: 'h2',
      content: ['What about when reagent is added to excess?'],
      props: {key: 49.1}
    },
    {
      type: 'p',
      content: [
        'That concludes the explanation for the addition of a few drops of ammonia solution.',
        ' Continue clicking the right hand arrow to learn what happens when ammonia is added in excess.'        
      ],
      props: {key: 49.2}
    }
    ]
  },
  {id: 50, allContent: [
    {
      type: 'h2',
      content: ['How can we explain these observations?'],
      props: {key: 50.1}
    },
    {
      type: 'div',                
      content: [
                {childType: 'p',
                 childProps: {key: 50.21},
                 childContent: 'When a few drops of ammonia solution were added to the five aqua ion solutions, the observations were the same as when a few drops of sodium hydroxide were added.'
                },
                {childType: 'p',
                childProps: {key: 50.22},
                childContent: 'How does the addition of excess ammonia compare to the addition of excess sodium hydroxide?'
                },
                {childType: 'p',
                childProps: {key: 50.23},
                childContent: 'Enter some similarities and differences into the text boxes below. If you cannot remember the observations, you may find it helpful to return to the observations slide and remind yourself.'
                }
                
              ],
      props: {key: 50.2, parent: 'true'}
          },             
          {
              type: 'comparison',
              content: {},
              props: {id: 50.3, key: 50.3}
          }
    ]
  },
  {id: 51, allContent: [
    {
      type: 'comparison-feedback',
      content: {
        sameReference: 'For the complexes produced...',
        AReference: 'However both complexes...',
        BReference: '',
        similarities: ['Both have enough hydroxide ion ligands to equalise charge of metal ions', 'Both have no overall charge'],
        differencesA: ['Have different numbers of hydroxide ion and water molecule ligands', 'Have central metal ions with different oxidation states'],
        differencesB: [null]
      },
      props: {id: 50.3, key: 51.1}
    }
   ]
  }

]