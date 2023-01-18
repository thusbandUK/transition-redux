export const HydrochloricAcidText = [
    
    {
       id: 20, allContent: [
        {
        type: 'ObservationPage',                
        props: {key: 4},
        content: {
          modelObservations: {
            copper: "blue solution changes to yellow green solution",
            cobalt: "pink solution changes to blue solution",
            "iron III": "pale yellow solution changes to deep yellow solution"
          }
        }
        }
      ]
    },
    {id: 21, allContent: [
            
      {
          type: 'h2',
          content: ['How can we explain these observations?'],
          props: {key: 20.1}
      },
      {
          type: 'p',  
          content: ["Look at the equation below and compare the complex ions. List some similiarities and differences between the complex in the reactants and the complex in the products."],
          props: {key: 20.2}
      },
      {
          type: 'img',
          content: null,
          props: {key: 20.3, src: "images/structures/equation conc HCl substitution.png", alt: "an equation showing the octahedral complex hexaaquacopper reacting with four chloride ions to produce the tetrachlorocopper complex along with six displaced water molecules", className: 'img-fluid'}
      },
      {
          type: 'comparison',
          content: {},
          props: {id: 20.4, key: 20.4}
      }
    ]
  },
  {id: 22, allContent: [
    {
      type: 'img',
      content: null,
      props: {key: 22.1, src: "images/structures/equation conc HCl substitution.png", alt: "an equation showing the octahedral complex hexaaquacopper reacting with four chloride ions to produce the tetrachlorocopper complex along with six displaced water molecules", className: 'img-fluid'}
    },
    {
      type: 'comparison-feedback',
      content: {
        sameReference: 'For both complexes',
        AReference: 'The left-hand complex',
        BReference: 'The right-hand complex',
        similarities: ['the oxidation state of the copper ion is +2', 'the ligands are attached via coordinate (dative) bonds'],
        differencesA: ['has six aqua (water) ligands', '+2 overall charge', 'octahedral shape'],
        differencesB: ['has four chloro ligands', '-2 overall charge', 'tetrahedral shape']
      },
      props: {id: 20.4, key: 22.2}
    }
    ]
  },
  {id: 23, allContent: [
    {
      type: 'h2',
      content: ['Substitution reactions'],
      props: {key: 23.1}
    },
    {
      type: 'img',
      content: null,
      props: {key: 23.2, src: "images/structures/equation conc HCl substitution.png", alt: "an equation showing the octahedral complex hexaaquacopper reacting with four chloride ions to produce the tetrachlorocopper complex along with six displaced water molecules", className: 'img-fluid'}
    },
    {
      type: 'div',
      content: [
                {childType: 'p',
                 childProps: {key: 23.31, style: {display: 'inline'}},
                 childContent: 'These are'
                },
                {childType: 'p',
                 childProps: {key: 23.32, style: {display: 'inline', fontStyle: 'italic'}},
                 childContent: ' ligand substitution '
                },
                {childType: 'p',
                 childProps: {key: 23.33, style: {display: 'inline'}},
                 childContent: 'reactions or'
                },
                {childType: 'p',
                 childProps: {key: 23.34, style: {display: 'inline', fontStyle: 'italic'}},
                 childContent: ' ligand exchange '
                },
                {childType: 'p',
                 childProps: {key: 23.35, style: {display: 'inline'}},
                 childContent: 'reactions.'
                }
              ],
      props: {key: 23.3, style: {marginTop: '10px'}, parent: 'true'}
  },
  {
    type: 'p',
    content: [
      'As the name suggests this is when one or more ligands in a complex are substituted for other ligands.',
      ' As you will see below, not all ligand exchange reactions involve a change in coordination number, so why does it happen in this case?',
      ' How do the size and charge of chloro ligands compare to aqua ligands? How might that affect the shape of the complex ion?'
    ],
    props: {key: 23.4}
  }
    ]
  },
  {id: 24, allContent: [
    {
      type: 'h2',
      content: ['Changing shape'],
      props: {key: 24.1}
    },
    {
       type: 'div',
       content: [
          {
             childType: 'img',
             childProps: {true: ['AQA', 'Edexcel', 'OCRA', 'OCRB'], className: "col-md-3 m-2 img-fluid", key: 24.21, src: "images/structures/tetrachlorocopper.png", alt: "diagram showing the display formula of the tetrahedral complex ion tetrachlorocopper"},
             childContent: null                           
          },
          {
            childType: 'img',
            childProps: {true: ['AQA', 'Edexcel'], className: "col-md-3 m-2 img-fluid", key: 24.22, src: "images/structures/tetrachlorocobalt.png", alt: "diagram showing the display formula of the tetrahedral complex ion tetrachlorocobalt"},
            childContent: null                           
          },
          {
            childType: 'img',
            childProps: {true: ['AQA'], className: "col-md-3 m-2 img-fluid", key: 24.23, src: "images/structures/tetrachloroironIII.png", alt: "diagram showing the display formula of the tetrahedral complex ion tetrachloroironIII"},
            childContent: null                           
          },
          ],
       props: {key: 24.2, className: "row", variablecontent: 'filter by exam board'}
    },
    {
      type: 'p',
      content: [
        'Chloro ligands are larger than water ligands, which may not be self-evident.',
         ' Although aqua ligands each contain three atoms, two of these are hydrogen atoms, which are very small. Meanwhile oxygen has two electron shells compared to three in each chloride ion.',
          ' Consequently there is only space for four chloro ligands around the central copper ion. Furthermore this arrangement minimises the repulsion between the negatively charged chloro ligands.'
      ],
      props: {key: 24.3}
    },
    {
      type: 'p',
      
      content: {            
          staticContent: "[REPLACE TEXT]",
          dynamicContent: [
              {string: 'Cobalt and iron(III) also form tetrahedral complexes when reacted with excess hydrochloric acid.', true: ['AQA']},
              {string: '', true: ['OCRA']},
              {string: '', true: ['OCRB']},
              {string: 'Cobalt also forms tetrahedral complexes when reacted with excess hydrochloric acid.', true: ['Edexcel']}
              
          ]
      },
      props: {key: 24.4, variablecontent: 'stringSplicer', style: {display: 'inline'}}
  }, 
    ]
  },
  {id: 24, allContent: [,
    
    {
      type: 'mcq',                
      props: {key: 25},
      content: {id: 43}
    }
   ]
  },
  {id: 25, allContent: [,
    
    {
      type: 'written-response',                
      props: {key: 25, id: 25},
      content: {id: 25, questions:
        [
          {
            questionReference: 'equation',
            questionText: 'Enter an ionic equation to show the reaction of hexaaquairon(III) with excess concentrated hydrochloric acid.'
          },
          {
            questionReference: 'explanation',
            questionText: 'Explain why the complex ion produced is a different shape to the complex ion that reacts.'
          }

        ]
      }
    }
   ]
  },
  {id: 26, allContent: [,
    
    {
      type: 'written-response-feedback',                
      props: {key: 25, id: 25},
      content: {id: 25, answers:
        [
          {
            questionReference: 'equation',
            answerText: [
              'Square brackets around both complexes', 
              'Overall 3+ charge on left-hand complex, 1- charge on right-hand complex',
              '6 H<sub>2</sub>O ligands in left complex ion, 4 Cl ligands in right complex ion',
              'plus 4Cl<sup>-</sup> ions shown on left, plus 6H<sub>2</sub>O molecules on right'
            ]
          },
          {
            questionReference: 'explanation',
            answerText: [
              'chloro / Cl ligands larger than aqua / H<sub>2</sub>O ligands',
              'Only 4 chloro ligands can fit round metal ion (which minimises repulsion between negative charges)'
            ]
          }

        ]
      }
    }
   ]
  }
]


//written-response
//<p>Cobalt and iron(III) also form tetrahedral complexes when reacted with excess hydrochloric acid.</p>
//, style: {transform: 'scale(0.6)'}

/*
{
                type: 'mcq',                
                props: {key: 1},
                content: {id: 42}
            }
*/