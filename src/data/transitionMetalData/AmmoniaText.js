import sectionFinish from "./genericContent/sectionFinish";

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
        filter: 'true',
        sameReference: 'In both sets of reactions...',
        AReference: 'whereas...',
        BReference: '',
        similarities: [
          {true: ['AQA', 'OCRA', 'OCRB', 'Edexcel'], content: ['iron(II) hydroxide can be oxidised to produce brown iron(III) hydroxide at the edges']},
          {true: ['OCRA'], content: ['manganese(II) hydroxide can be oxidised to produce brown manganese(III) hydroxide at the edges']}
        ],
        //similarities: [{true: ['AQA', 'Edexcel'], content: 'Both have enough hydroxide ion ligands to equalise charge of metal ions'}, {true: ['AQA', 'Edexcel'], content: 'Both have no overall charge'}],
        //similarities: ['Both have enough hydroxide ion ligands to equalise charge of metal ions', 'Both have no overall charge'],
        differencesA: [
          {true: ['AQA'], content: ['the aluminium hydroxide does not redissolve in excess ammonia solution']}, 
          {true: ['Edexcel', 'AQA'], content: ['both cobalt and copper hydroxide redissolve to produce new, different-coloured solutions']},
          {true: ['Edexcel', 'OCRA'], content: ['the chromium hydroxide precipitate dissolves to produce a different coloured solution than with sodium hydroxide']},
          {true: ['OCRA', 'OCRB'], content: ['the copper hydroxide precipitate dissolves to produce a deep blue-coloured solution']}
        ]
        //differencesB: [null],
        //differencesB: ['Both have enough hydroxide ion ligands to equalise charge of metal ions', 'Both have no overall charge']
      },
      props: {id: 50.3, key: 51.1}
    }
   ]
  },
  {id: 52, allContent: [
    {
      type: 'mcq', 
      doNotRender: ['OCRB'],               
      props: {key: 52.1},
      content: {id: 52}
    },
    {
      type: 'mcq',       
      doNotRender: ['Edexcel', 'OCRA', 'AQA'],               
      props: {key: 52.2},
      content: {id: 53}
    }
   ]
  },
  {id: 53, allContent: [
    {
      type: 'h2',
      props: {key: 53.1},
      content: 'Ligand exchange'

    },
    {
      type: 'div',      
      content: [
         {
            childType: 'img',
            childProps: {true: ['Edexcel', 'OCRA', 'OCRB', 'AQA'], style: {margin: '10px 0px'}, className: "img-fluid", key: 53.21, src: `${window.location.origin}/images/structures/equation Cu w XS ammonia.png`, alt: "octahedral hexaaquacopper(II) complex ion substitutes four aqua ligands for four ammine ligands, producing octahedral tetraammine diaqua copper (II) complex ion"},
            childContent: null                           
         },
         {
            childType: 'p',
            childProps: {true: ['Edexcel', 'OCRA', 'OCRB', 'AQA'], key: 53.22},
            childContent: 'When ammonia is added to hexaaquacopper(II) in excess, a ligand exchange reaction occurs in which four aqua (water) ligands are exchanged for four ammonia molecules, which become ammine ligands.'
         },
         {
          childType: 'p',
          childProps: {true: ['AQA'], key: 53.23},
          childContent: 'Ligand exchange also occurs with hexaaquacobalt(II) but in this case, all six aqua ligands are substituted for ammine ligands, as shown in the equation.'
         },
         {
          childType: 'p',
          childProps: {true: ['OCRA'], key: 53.24},
          childContent: 'Ligand exchange also occurs with hexaaquachromium(III) but in this case, all six aqua ligands are substituted for ammine ligands, as shown in the equation.'
         },
         {
          childType: 'p',
          childProps: {true: ['Edexcel'], key: 53.25},
          childContent: 'Ligand exchange also occurs with hexaaquacobalt(II) and hexaaquachromium(III) but in both cases, all six aqua ligands are substituted for ammine ligands, as shown in the equations.'
         },
         {
          childType: 'p',
          childProps: {true: ['Edexcel', 'AQA'], key: 53.26, tagged: 'true', style: {marginBottom: '10px'}},
          childContent: '[Co(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 6NH<sub>3</sub> &#8652; [Co(NH<sub>3</sub>)<sub>6</sub>]<sup>2+</sup> + 6H<sub>2</sub>O'
         },
         {
          childType: 'p',
          childProps: {true: ['Edexcel', 'OCRA'], key: 53.27, tagged: 'true', style: {marginBottom: '10px'}},
          childContent: '[Cr(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> + 6NH<sub>3</sub> &#8652; [Cr(NH<sub>3</sub>)<sub>6</sub>]<sup>3+</sup> + 6H<sub>2</sub>O'
         }         
         ],
      props: {key: 53.2, variablecontent: 'filter by exam board'}
   },
   {
    type: 'p',
    content: {            
      staticContent: "You will not be expected to explain why substition is complete for [REPLACE TEXT] but not for copper. A proper explanation requires reference to something called crystal field theory which is beyond the scope of the A-level course. Questions in the exam will be limited to the complex ions listed in the specification.",            
      dynamicContent: [          
          {string: 'cobalt', true: ['AQA']},
          {string: 'cobalt and chromium', true: ['Edexcel']},
          {string: 'chromium', true: ['OCRA']}
          
      ]
    },
    doNotRender: ['OCRB'],
    props: {key: 53.3, variablecontent: 'stringSplicer', style: {display: 'inline'}}
  },  
  ]

  },
  {id: 54, allContent: [
    {
      type: 'mcq',                
      props: {key: 54.1},
      content: {id: 54}
    }
  ]

  },
  {id: 55, allContent: [,
    
    {
      type: 'written-response',                
      props: {key: 55.1, id: 55.1},
      content: {id: 55.1, 
      filter: 'true', 
      questions:
        [
          {
            true: ['AQA', 'OCRB'],
            id: 'equationA',
            questionReference: 'equation',
            questionText: 'Describe and explain the changes you would observe if NH<sub>3</sub> was added dropwise to hexaaquacopper(II) until excess NH<sub>3</sub> had been added. Identify the complex species associated with each colour change. Include a set of equations in the first text box.'
          },
          {
            true: ['Edexcel', 'OCRA'],
            id: 'equationB',
            questionReference: 'equation',
            questionText: 'Describe and explain the changes you would observe if NH<sub>3</sub> was added dropwise to hexaaquachromium(III) until excess NH<sub>3</sub> had been added. Identify the complex species associated with each colour change. Include a set of equations in the first text box.'
          },
          {
            true: ['AQA', 'OCRB'],
            id: 'explanationA',
            questionReference: 'explanation',
            questionText: 'Include your observations in the text box below.'
          }, 
          {
            true: ['Edexcel', 'OCRA'],
            id: 'explanationB',
            questionReference: 'explanation',
            questionText: 'Include your observations in the text box below.'
          }

        ]
      }
    }
   ]
  },
  {id: 56, allContent: [
    
    {
      type: 'written-response-feedback',                
      props: {key: 56.1, id: 55.1},
      content: {id: 55.1, answers:
        [
          {            
            questionReference: 'equation',
            id: 'equationA',
            answerText: [              
              'Hydrolysis equation(s) which include NH<sub>3</sub> AND hydroxide precipitate.', 
              'At least one ligand substitution equation.'              
            ],            
            equation: [
              'Acceptable hydrolysis equations:',
              'NH<sub>3</sub> + H<sub>2</sub>O &#8652; NH<sub>4</sub><sup>+</sup> + OH<sup>–</sup>',
              '[Cu(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 2OH<sup>–</sup> &#8652; [Cu(H<sub>2</sub>O)<sub>4</sub>(OH)<sub>2</sub>] + 2H<sub>2</sub>O',
              'Cu<sup>2+</sup> + 2OH<sup>–</sup> &#8652; Cu(OH)<sub>2</sub>',
              '[Cu(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 2NH<sub>3</sub> &#8652; [Cu(H<sub>2</sub>O)<sub>4</sub>(OH)<sub>2</sub>] + 2NH<sub>4</sub><sup>+</sup>',
              'Acceptable ligand substitution equations:',
              '[Cu(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 4NH<sub>3</sub> &#8652; [Cu(NH<sub>3</sub>)<sub>4</sub>(H<sub>2</sub>O)<sub>2</sub>]<sup>2+</sup> + 4H<sub>2</sub>O',
              '[Cu(H<sub>2</sub>O)<sub>4</sub>(OH)<sub>2</sub>] + 4NH<sub>3</sub> &#8652; [Cu(NH<sub>3</sub>)<sub>4</sub>(H<sub>2</sub>O)<sub>2</sub>]<sup>2+</sup> + 2H<sub>2</sub>O + 2OH<sup>–</sup>'
            ]
          },  
          {
            questionReference: 'explanation',
            id: 'explanationA',
            answerText: [              
              'Blue solution produces pale blue precipitate.',
              'Precipitate is copper hydroxide / Cu(OH)<sub>2</sub> / [Cu(H<sub>2</sub>O)<sub>4</sub>(OH)<sub>2</sub>]',
              'Excess ammonia produces deep blue solution.',
              'Deep blue solution is [Cu(NH<sub>3</sub>)<sub>4</sub>(H<sub>2</sub>O)<sub>2</sub>]<sup>2+</sup> / tetraamminediaquacopper.'
            ]
          },
          {            
            questionReference: 'equation',
            id: 'equationB',
            answerText: [              
              'Hydrolysis equation(s) which include NH<sub>3</sub> AND hydroxide precipitate.', 
              'At least one ligand substitution equation.'              
            ],            
            equation: [
              'Acceptable hydrolysis equations:',
              'NH<sub>3</sub> + H<sub>2</sub>O &#8652; NH<sub>4</sub><sup>+</sup> + OH<sup>–</sup>',
              '[Cr(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> + 3OH<sup>–</sup> &#8652; [Cr(H<sub>2</sub>O)<sub>3</sub>(OH)<sub>3</sub>] + 3H<sub>2</sub>O',
              'Cr<sup>3+</sup> + 3OH<sup>–</sup> &#8652; Cr(OH)<sub>3</sub>',
              '[Cr(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> + 3NH<sub>3</sub> &#8652; [Cr(H<sub>2</sub>O)<sub>3</sub>(OH)<sub>3</sub>] + 3NH<sub>4</sub><sup>+</sup>',
              'Acceptable ligand substitution equations:',
              '[Cr(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> + 6NH<sub>3</sub> &#8652; [Cr(NH<sub>3</sub>)<sub>6</sub>]<sup>3+</sup> + 6H<sub>2</sub>O',
              '[Cr(H<sub>2</sub>O)<sub>3</sub>(OH)<sub>3</sub>] + 6NH<sub>3</sub> &#8652; [Cr(NH<sub>3</sub>)<sub>6</sub>]<sup>3+</sup> + 3H<sub>2</sub>O + 3OH<sup>–</sup>'
            ]
          },  
          {
            questionReference: 'explanation',
            id: 'explanationB',
            answerText: [              
              'Blueish green solution produces grey green precipitate.',
              'Precipitate is chromium hydroxide / Cr(OH)<sub>3</sub> / [Cr(H<sub>2</sub>O)<sub>3</sub>(OH)<sub>3</sub>]',
              'Excess ammonia produces violet solution.',
              'Violet solution is [Cr(NH<sub>3</sub>)<sub>6</sub>]<sup>3+</sup> / hexaamminechromium.'
            ]
          }          

        ]
      }
    
      
      }
    ]
  },
  {id: 57, allContent: [
    {
      type: 'h2',
      content: ['You\'ve finished this section!'],
      props: {key: 57.1}
    },
    {
      type: 'p',
      doNotRender: ['OCRB', 'OCRA', 'Edexcel'],
      content: [
        'Congratulations you\'ve finished this section!',
        ' Click the link below to advance to the next section.'        
      ],
      props: {key: 57.2}
    },
    {
      type: 'p',
      doNotRender: ['AQA'],
      content: [
        'Congratulations you\'ve finished the last section on reactions of complex ions!',
        ' Click the link below to return to the main menu.'        
      ],
      props: {key: 57.2}
    }

    ]
  }

]