export const SodiumCarbonateText = [
    
    {
       id: 58, allContent: [
        {
        type: 'ObservationPage',                
        props: {key: 4},
        content: {
          modelObservations: {
            copper: "Blue solution produces blue-green precipitate.",
            cobalt: "Pink solution produces purple precipitate.",
            "iron II": "Green solution produces green precipitate.",
            "iron III": "Pale yellow solution produces brown precipitate with effervescence.",
            aluminium: "Colourless solution produces white precipitate with effervescence."
           
          }
        }
        }
      ]
    },
    {id: 59, allContent: [
            
      {
          type: 'h2',
          content: ['How do these observations compare to the reactions with sodium hydroxide?'],
          props: {key: 59.1}
      },
      {
        type: 'div',
        content: [
          {
              childType: 'img',
              childProps: {style: {margin: '10px 0px'}, className: "img-fluid", key: 59.21, src: `${window.location.origin}/images/comparison carbonate and hydroxide ppts.png`, alt: "diagrams showing different observations for the additions of sodium hydroxide and sodium carbonate"},
              childContent: null                           
           }
        ],
        props: {parent: 'true', key: 59.2, id: 'text-box-image-container'}
      },
      {
        type: 'div',        
        content: [           
           {
              childType: 'p',
              childProps: {key: 59.31},
              childContent: 'Notice that only two of the aqua ions, Fe(III) and Al(III), produce effervesence.'
           },
           {
            childType: 'p',
            childProps: {key: 59.32},
            childContent: 'Also the precipitates produced by the cobalt and copper solutions are different colours to their precipitates with sodium hydroxide.'
           },
           {
            childType: 'p',
            childProps: {key: 59.33, style: {marginBottom: '10px'}},
            childContent: 'Meanwhile the precipitates produced by Fe(II), Fe(III) and Al(III) are the same colour with both sodium carbonate and sodium hydroxide.'
           }           
           ],
        props: {key: 59.3, parent: 'true'}
     }
    ]
  },
  {id: 60, allContent: [
            
      {
          type: 'h2',
          content: ['How can we explain these observations?'],
          props: {key: 60.1}
      },
      {
        type: 'div',        
        content: [           
           {
              childType: 'p',
              childProps: {key: 60.21, tagged: 'true'},
              childContent: 'If we ignore the iron(II) result for a moment, there is a clear pattern between the observations and the oxidation state of the central metal ion. The Co<sup>2+</sup> and Cu<sup>2+</sup> solutions produce different colour precipitates, whereas the Fe<sup>3+</sup> and Al<sup>3+</sup> solutions produce effervescence.'
           },
           {
            childType: 'p',
            childProps: {key: 60.22, style: {marginTop: '10px'}},
            childContent: 'The metal(II) solutions form metal carbonate precipitates, eg:'
           },
           {
            childType: 'p',
            childProps: {key: 60.23, tagged: 'true', className: 'mt-2'},
            childContent: 'Co<sup>2+</sup> + CO<sub>3</sub><sup>2–</sup> &#8652; CoCO<sub>3</sub>'
           },           
           {
            childType: 'p',
            childProps: {key: 60.25, tagged: 'true', className: 'mt-2 mb-2'},
            childContent: 'But the metal(III) solutions have a lower pH (ie are more acidic) than the metal(II) solutions. Consequently they react with the carbonate ions to produce carbon dioxide gas. Since the metal(III) complex ions donate H<sup>+</sup> ions for this acid base reaction, they produce the same metal hydroxide precipitates as with sodium hydroxide.'
           },
           {
            childType: 'p',
            childProps: {key: 60.26, tagged: 'true', className: 'mt-2 mb-2'},
            childContent: '[Fe(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> + 3/2CO<sub>3</sub><sup>2–</sup> &#8594; [Fe(H<sub>2</sub>O)<sub>3</sub>(OH)<sub>3</sub>] + 3/2CO<sub>2</sub> + 3/2H<sub>2</sub>O'
           },
           {
            childType: 'p',
            childProps: {key: 60.27},
            childContent: 'Finally iron(II) produces a carbonate precipitate like copper and cobalt, but it just happens to be close enough in colour to its hydroxide precipitate that both are called green.'
           }
           ],
        props: {key: 60.2, parent: 'true'}
     }
    ]
  },
  {id: 61, allContent: [
    {
      type: 'mcq',                
      props: {key: 61.1},
      content: {id: 55}
    }
  ]

  },
  {id: 62, allContent: [ 
    {
      type: 'div',
      content: [
       { 
        childType: 'h2',
        childProps: {key: 62.11, style: {display: 'inline'}},
        childContent: 'Why are M'
      },
      { 
        childType: 'h2',
        childProps: {key: 62.12, style: {verticalAlign: 'super', display: 'inline'}},
        childContent: '3+'
      },
      { 
        childType: 'h2',
        childProps: {key: 62.13, style: {display: 'inline'}},
        childContent: ' solutions more acidic?'
      }
      ],
      props: {key: 62.1, parent: 'true'}

    },
    {
      type: 'div',
      content: [
        {
            childType: 'img',
            childProps: {style: {margin: '10px 0px'}, className: "img-fluid", key: 59.21, src: `${window.location.origin}/images/structures/acidity FeII vs FeIII.png`, alt: "diagrams showing hexaaquairon(II) and hexaaquairon(III). The Fe3+ ion is smaller than the Fe2+ ion and the O-H bonds are more polar in the iron (III) complex."},
            childContent: null                           
         }
      ],
      props: {parent: 'true', key: 62.2, id: 'text-box-image-container'}
    },
    {
      type: 'div',        
      content: [
           {
            childType: 'p',
            childProps: {key: 62.31, tagged: 'true', className: 'mt-2'},
            childContent: 'The Fe<sup>3+</sup> ion has a smaller ionic radius than the Fe<sup>2+</sup> ion, as well as a higher charge, meaning that it has a higher charge density. Consequently it exerts a stronger attraction on nearby electrons, including those in O—H bonds.'
           },           
           {
            childType: 'p',
            childProps: {key: 62.32, tagged: 'true', className: 'mt-2 mb-2'},
            childContent: 'Notice that the O—H bond in the iron(III) complex is more polar than the O—H bond in the iron(II) complex, so not only is the Fe<sup>3+</sup> ion more positive, but so are the H atoms in the aqua ligands. As a result there is stronger repulsion between the two, meaning that H<sup>+</sup> ions are lost more easily from the iron(III) complex.'
           },
           {
            childType: 'p',
            childProps: {key: 62.33, className: 'mt-2', style: {display: 'inline', textDecoration: 'underline'}},
            childContent: 'How to phrase it like the AQA mark scheme:'
           },
           {
            childType: 'p',
            childProps: {key: 62.34, tagged: 'true', className: 'mb-2', style: {display: 'inline'}},
            childContent: ' hexaaqua metal(III) complexes are more acidic than hexaaqua metal(II) complexes because the greater charge density of the metal ion has a more strongly polarising effect on the O—H bonds. This weakens the O—H bonds, meaning that more H<sup>+</sup> ions dissociate, which reduces the pH.'
           }             
         ],
      props: {key: 62.3, parent: 'true'}
     }
    ]
  },
  {id: 63, allContent: [
    {
      type: 'mcq',                
      props: {key: 63.1, id: 56},
      content: {id: 56}
    }
  ]

  },
  {id: 64, allContent: [
    
    {
      type: 'written-response',                
      props: {key: 64, id: 64},
      content: {id: 64,
      questions:
        [
          {            
            id: 'equationA',
            questionReference: 'equation',
            questionText: 'Describe and explain what you would observe when sodium carbonate solution is added to solutions of Al(III) ions and Cu(II) ions. Include equations in your answer. Include a set of equations in the first text box.'
          },              
          {            
            id: 'explanationA',
            questionReference: 'explanation',
            questionText: 'Include your observations in the text box below.'
          }
        ]
      }
    }
   ]
  },
  {id: 65, allContent: [
    
    {
      type: 'written-response-feedback',                
      props: {key: 65, id: 64},
      content: {id: 64, answers:
        [
          {            
            questionReference: 'equation',
            id: 'equationA',
            answerText: [
              'One correct copper equation',
              'One correct aluminium equation'
            ],           
            equation: [
              
              'Cu<sup>2+</sup> + CO<sub>3</sub><sup>2–</sup> &#8594; CuCO<sub>3</sub>',
                '[Cu(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + CO<sub>3</sub><sup>2–</sup> &#8594; CuCO<sub>3</sub> + 6H<sub>2</sub>O',
                '2[Al(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> + 3CO<sub>3</sub><sup>2–</sup> &#8594; 2[Al(H<sub>2</sub>O)<sub>3</sub>(OH)<sub>3</sub>] + 3CO<sub>2</sub> + 3H<sub>2</sub>O',                
                '[Al(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> + 3/2CO<sub>3</sub><sup>2–</sup> &#8594; [Al(H<sub>2</sub>O)<sub>3</sub>(OH)<sub>3</sub>] + 3/2CO<sub>2</sub> + 3/2H<sub>2</sub>O'                
            ]
          },  
          {
            questionReference: 'explanation',
            id: 'explanationA',
            answerText: [
              'Blue copper(II) solution produces blue green precipitate',
              'Colourless aluminium(III) solution produces white precipitate and effervescence',
              'Greater charge density of Al<sup>3+</sup> ion more strongly polarises and therefore weakens O—H bond',
              'More H<sup>+</sup> ions dissociate from Al(III) complex, which react with carbonate ions to produce CO<sub>2</sub> gas'
            ]
          },
        ]
      }
    }
   ]
  },
  {id: 66, allContent: [
    {
      type: 'h2',
      content: ['You\'ve finished this section!'],
      props: {key: 66.1}
    },
    {
      type: 'p',      
      content: [
        'Congratulations you\'ve finished the last section on reactions of complex ions!',
        ' Click the link below to return to the main menu.'        
      ],
      props: {key: 66.2}
    }

    ]
  }

]

