import sectionFinish from "./genericContent/sectionFinish";

export const SodiumHydroxideText = [
    
    {
       id: 28, allContent: [
        {
        type: 'ObservationPage',                
        props: {key: 4},
        content: {
          modelObservations: {
            copper: "Initially blue solution changes to pale blue precipitate. Upon addition of excess, additional pale blue precipitate produced.",
            cobalt: "Initially pink solution changes to blue precipitate. Excess reagent produces additional blue precipitate.",
            "iron II": "Initially green solution changes to green precipitatea. After a short time the precipitate turns brown at the edges.",
            "iron III": "Initially pale yellow solution changes to brown precipitate. Excess reagent produces additional brown precipitate.",
            aluminium: "Initially colourless solution changes to white precipitate. Excess reagent cause white precipitate to dissolve, producing a colourless solution.",
            manganese: "Initially pale pink solution changes to white precipitate. After a short time the precipitate turns brown at the edges.",
            chromium: "Initially blueish-green solution produces grey-green precipitate. Excess reagent dissolves the precipitate to form a green solution."
          }
        }
        }
      ]
    },
    {id: 28.5, allContent: [
            
      {
          type: 'h2',
          content: ['A few drops of sodium hydroxide'],
          props: {key: 28.51}
      },
      {
          type: 'p',  
          content: ["The following slides will focus on the initial reaction of the metal solutions to the addition of just a few drops of sodium hydroxide solution."],
          props: {key: 28.52}
      }/*,
      {
          type: 'p',  
          content: ['Looking at an equation…'],
          props: {key: 29.3}
      },
      {
          type: 'p',  
          content: ['[Cu(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 2OH<sup>-</sup> &#8594;	 [Cu(H<sub>2</sub>O)<sub>4</sub>(OH)<sub>2</sub>] + 2H<sub>2</sub>O'],
          props: {key: 29.4, tagged: 'true', style: {marginBottom: '10px'}}
      },
      {
          type: 'p',  
          content: ["It seems as if two hydroxide ions have each been swapped for a water molecule, which would make this a ligand exchange reaction, but actually, that's not what's happening."],
          props: {key: 29.5}
      },
      {
          type: 'p',  
          content: ['So what is going on?'],
          props: {key: 29.6}
      }*/
    ]
    },
    {id: 29, allContent: [
            
      {
          type: 'h2',
          content: ['How can we explain this?'],
          props: {key: 29.1}
      },
      {
          type: 'p',  
          content: ["These are hydrolysis reactions."],
          props: {key: 29.2}
      },
      {
          type: 'p',  
          content: ['Looking at an equation…'],
          props: {key: 29.3}
      },
      {
          type: 'p',  
          content: ['[Cu(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 2OH<sup>-</sup> &#8594;	 [Cu(H<sub>2</sub>O)<sub>4</sub>(OH)<sub>2</sub>] + 2H<sub>2</sub>O'],
          props: {key: 29.4, tagged: 'true', style: {marginBottom: '10px'}}
      },
      {
          type: 'p',  
          content: ["It seems as if two hydroxide ions have each been swapped for a water molecule, which would make this a ligand exchange reaction, but actually, that's not what's happening."],
          props: {key: 29.5}
      },
      {
          type: 'p',  
          content: ['So what is going on?'],
          props: {key: 29.6}
      }
    ]
    },
    {id: 30, allContent: [
            
      {
          type: 'h2',
          content: ['Hydrolysis mechanism'],
          props: {key: 30.1}
      },
      {
        type: 'img',
        content: null,
        props: {key: 30.2, src: "images/structures/hydrolysis mechanism.png", alt: "an equation showing the octahedral complex hexaaquacopper reacting with two hydroxide ions, so that two of the aqua ligands lose protons to become hydroxide ions and the original hydroxide ions become water molecules", className: 'img-fluid'}
      },
      {
          type: 'p',  
          content: [
            'Look at the mechanism. See how the yellow hydrogen atoms form bonds to the blue oxygen atoms from the attacking hydroxide ions?',
            ' A hydrolysis reaction is when bonds are broken by water molecules or hydroxide ions.',
            ' We can see that the hydroxide ions are breaking O-H bonds in the aqua ligands.'
          ],
          props: {key: 30.3, style: {marginTop: '10px'}}
      }
    ]
  },
  {id: 31, allContent: [
          
      {
        type: 'h2',
        content: ['Why is the product a precipitate?'],
        props: {key: 31.1}
      },
      {
          type: 'p',  
          content: [
            'Compare these equations. List some similarities and differences between the complexes produced, both of which are precipitates.'
          ],
          props: {key: 31.2}
      }, /*    */            
      {
          type: 'div',                
          content: [
                    {childType: 'p',
                     childProps: {true: ['AQA', 'Edexcel'], key: 31.31, tagged: 'true', style: {margin: '10px 0px'}},
                     childContent: '[Co(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 2OH<sup>-</sup> &#8594;	 [Co(H<sub>2</sub>O)<sub>4</sub>(OH)<sub>2</sub>] + 2H<sub>2</sub>O'                           
                    },
                    {childType: 'p',
                     childProps: {true: ['AQA'], key: 31.32, tagged: 'true', style: {margin: '10px 0px'}},
                     childContent: '[Al(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> + 3OH<sup>-</sup> &#8594;	 [Al(H<sub>2</sub>O)<sub>3</sub>(OH)<sub>3</sub>] + 3H<sub>2</sub>O'                           
                    },
                    {childType: 'p',
                     childProps: {true: ['Edexcel', 'OCRA', 'OCRB'], key: 31.33, tagged: 'true', style: {margin: '10px 0px'}},
                     childContent: '[Fe(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> + 3OH<sup>-</sup> &#8594;	 [Fe(H<sub>2</sub>O)<sub>3</sub>(OH)<sub>3</sub>] + 3H<sub>2</sub>O'                           
                    },
                    {childType: 'p',
                     childProps: {true: ['OCRA', 'OCRB'], key: 31.34, tagged: 'true', style: {margin: '10px 0px'}},
                     childContent: '[Cu(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 2OH<sup>-</sup> &#8594;	 [Cu(H<sub>2</sub>O)<sub>4</sub>(OH)<sub>2</sub>] + 2H<sub>2</sub>O'                           
                    }  
                  ],
          props: {key: 31.3, variablecontent: 'filter by exam board'}
              },             
              {
                  type: 'comparison',
                  content: {},
                  props: {id: 31.4, key: 31.4}
              }
    ]
  },
  {id: 32, allContent: [
          
      {
        type: 'h2',
        content: ['Equations'],
        props: {key: 32.1}
      },
      /*{
          type: 'p',  
          content: [
            'Compare these equations. List some similarities and differences between the complexes produced, both of which are precipitates.'
          ],
          props: {key: 31.2}
      },*/                
      {
          type: 'div',                
          content: [
                    {childType: 'p',
                     childProps: {true: ['AQA', 'Edexcel'], key: 32.31, tagged: 'true', style: {margin: '10px 0px'}},
                     childContent: '[Co(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 2OH<sup>-</sup> &#8594;	 [Co(H<sub>2</sub>O)<sub>4</sub>(OH)<sub>2</sub>] + 2H<sub>2</sub>O'                           
                    },
                    {childType: 'p',
                     childProps: {true: ['AQA'], key: 32.32, tagged: 'true', style: {margin: '10px 0px'}},
                     childContent: '[Al(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> + 3OH<sup>-</sup> &#8594;	 [Al(H<sub>2</sub>O)<sub>3</sub>(OH)<sub>3</sub>] + 3H<sub>2</sub>O'                           
                    },
                    {childType: 'p',
                     childProps: {true: ['Edexcel', 'OCRA', 'OCRB'], key: 32.33, tagged: 'true', style: {margin: '10px 0px'}},
                     childContent: '[Fe(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> + 3OH<sup>-</sup> &#8594;	 [Fe(H<sub>2</sub>O)<sub>3</sub>(OH)<sub>3</sub>] + 3H<sub>2</sub>O'                           
                    },
                    {childType: 'p',
                     childProps: {true: ['OCRA', 'OCRB'], key: 32.34, tagged: 'true', style: {margin: '10px 0px'}},
                     childContent: '[Cu(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 2OH<sup>-</sup> &#8594;	 [Cu(H<sub>2</sub>O)<sub>4</sub>(OH)<sub>2</sub>] + 2H<sub>2</sub>O'                           
                    }  
                  ],
          props: {key: 32.2, variablecontent: 'filter by exam board'}
              },              
             /* {
                  type: 'comparison',
                  content: {},
                  props: {id: 20.4, key: 20.4}
              },*/
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
                props: {id: 31.4, key: 32.3}
              }
    ]
  },
  {id: 32, allContent: [
    {
      type: 'mcq',                
      props: {key: 33},
      content: {id: 44}
    }
   ]
  },
  {id: 33, allContent: [,
    
    {
      type: 'written-response',                
      props: {key: 33.1, id: 33.1},
      content: {id: 33.1, 
      filter: 'true', 
      questions:
        [
          {
            true: ['AQA'],
            id: 'equationA',
            questionReference: 'equation',
            questionText: 'Enter an ionic equation to show the hydrolysis of the hexaaquaaluminium(III) ion to produce a precipitate.'
          },
          {
            true: ['Edexcel', 'OCRA'],
            id: 'equationB',
            questionReference: 'equation',
            questionText: 'Enter an ionic equation to show the hydrolysis of the hexaaquachromium(III) ion to produce a precipitate.'
          },
          {
            true: ['OCRB'],
            id: 'equationC',
            questionReference: 'equation',
            questionText: 'Enter an ionic equation to show the hydrolysis of the hexaaquairon(II) ion to produce a precipitate.'
          }

        ]
      }
    }
   ]
  },
  {id: 34, allContent: [
    
    {
      type: 'written-response-feedback',                
      props: {key: 34, id: 33.1},
      content: {id: 25, answers:
        [
          {            
            questionReference: 'equation',
            id: 'equationA',
            answerText: [
              'Square brackets around both complexes', 
              'Overall 3+ charge on left-hand complex, no charge on right-hand complex',
              'H<sub>2</sub>O and OH<sup>-</sup> ligands in curved brackets',
              'Spectator ions / Na<sup>+</sup> ions not shown as <em>ionic</em> equation requested',
              '3 hydroxide ions in reactants, 3 water molecules in products',
              '6 H<sub>2</sub>O ligands in reactant, 3 H<sub>2</sub>O ligands <em>and</em> 3OH<sup>-</sup> ligands in product'
            ],
            equation: ['[Al(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> + 3OH<sup>-</sup> &#8594;	 [Al(H<sub>2</sub>O)<sub>3</sub>(OH)<sub>3</sub>] + 3H<sub>2</sub>O']
          },
          {            
            questionReference: 'equation',
            id: 'equationB',
            answerText: [
              'Square brackets around both complexes', 
              'Overall 3+ charge on left-hand complex, no charge on right-hand complex',
              'H<sub>2</sub>O and OH<sup>-</sup> ligands in curved brackets',
              'Spectator ions / Na<sup>+</sup> ions not shown as <em>ionic</em> equation requested',
              '3 hydroxide ions in reactants, 3 water molecules in products',
              '6 H<sub>2</sub>O ligands in reactant, 3 H<sub>2</sub>O ligands <em>and</em> 3OH<sup>-</sup> ligands in product'
            ],
            equation: ['[Cr(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> + 3OH<sup>-</sup> &#8652; [Cr(OH)<sub>3</sub>(H<sub>2</sub>O)<sub>3</sub>] + 3H<sub>2</sub>O']
          },
          {            
            questionReference: 'equation',
            id: 'equationC',
            answerText: [
              'Square brackets around both complexes', 
              'Overall 2+ charge on left-hand complex, no charge on right-hand complex',
              'H<sub>2</sub>O and OH<sup>-</sup> ligands in curved brackets',
              'Spectator ions / Na<sup>+</sup> ions not shown as <em>ionic</em> equation requested',
              '2 hydroxide ions in reactants, 2 water molecules in products',
              '6 H<sub>2</sub>O ligands in reactant, 4 H<sub>2</sub>O ligands <em>and</em> 2OH<sup>-</sup> ligands in product'
            ],
            equation: ['[Fe(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 2OH<sup>-</sup> &#8652; [Fe(OH)<sub>2</sub>(H<sub>2</sub>O)<sub>4</sub>] + 2H<sub>2</sub>O']
          }

        ]
      }
    
      
      }
    ]
  },
  {id: 35, allContent: [
    {
      type: 'h2',
      content: ['What about when reagent is added to excess?'],
      props: {key: 35.1}
    },
    {
      type: 'p',
      content: [
        'That concludes the explanation for the addition of a few drops of sodium hydroxide.',
        ' Continuing clicking the right hand arrow to learn what happens when sodium hydroxide is added in excess.'        
      ],
      props: {key: 35.2}
    }
    ]
  },
  {id: 36, allContent: [
    {
      type: 'h2',
      content: {            
        staticContent: "Why does the [REPLACE TEXT] hydroxide precipitate dissolve?",            
        dynamicContent: [
            {string: 'aluminium', true: ['AQA']},
            {string: 'chromium', true: ['OCRA', 'Edexcel']}
            
        ]
      },
      doNotRender: ['OCRB'],
      props: {key: 36.1, variablecontent: 'stringSplicer', style: {display: 'inline'}}
    },    
    {
      type: 'div',
      doNotRender: ['Edexcel', 'OCRA', 'OCRB'],
      content: [
         {
            childType: 'img',
            childProps: {style: {margin: '10px 0px'}, className: "img-fluid", key: 36.21, src: "images/structures/equation excess hydroxide aluminium.png", alt: "diagrams showing transformation of octahedral aluminium hydroxide complex turning into tetrahedral aluminium tetrahydrate ion"},
            childContent: null                           
         },
         {
            childType: 'p',
            childProps: {key: 36.22, tagged: 'true'},
            childContent: 'Aluminium hydroxide reacts with excess sodium hydroxide to produce a tetrahedral ion called aluminium tetrahydrate. Aluminium hydroxide can be represented as [Al(H<sub>2</sub>O)<sub>3</sub>(OH)<sub>3</sub>] or with the simplified formula Al(OH)<sub>3</sub>'
         },
         {
          childType: 'p',
          childProps: {key: 36.23},
          childContent: 'Remember also that the hydrolysis reactions are reversible, meaning that aluminium hydroxide can react with excess acid to turn back into hexaaquaaluminium as follows...'
         },
         {
          childType: 'p',
          childProps: {key: 36.24, tagged: 'true', style: {marginBottom: '10px'}},
          childContent: '[Al(H<sub>2</sub>O)<sub>3</sub>(OH)<sub>3</sub>] + 3H<sup>+</sup> &#8652;	   [Al(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> '
         },
         {
          childType: 'p',
          childProps: {key: 36.25, style: {display: 'inline'}},
          childContent: 'This shows the '
         },
         {
          childType: 'p',
          childProps: {key: 36.26, style: {display: 'inline', fontStyle: 'italic'}},
          childContent: 'amphoteric'
         },
         {
          childType: 'p',
          childProps: {key: 36.27, style: {display: 'inline'}},
          childContent: ' nature of aluminium hydroxide, which means its ability to react with both acids and bases.'
         },
         {
          childType: 'p',
          childProps: {key: 36.28, tagged: 'true', style: {marginTop: '10px'}},
          childContent: 'The reason why a tetrahedral complex is produced, rather than [Al(OH)<sub>6</sub>]<sup>3-</sup> is beyond the scope of the AQA course.'
         },         
         ],
      props: {key: 36.2, parent: 'true'}
   },
   {
    type: 'div',
    doNotRender: ['AQA', 'OCRB'],
    content: [
       {
          childType: 'img',
          //NEED TO SUBSTITUTE IN NEW IMAGE FOR THIS
          childProps: {style: {margin: '10px 0px'}, className: "img-fluid", key: 36.31, src: "images/structures/equation excess hydroxide aluminium.png", alt: "diagrams showing transformation of octahedral aluminium hydroxide complex turning into tetrahedral aluminium tetrahydrate ion"},
          childContent: null                           
       },
       {
          childType: 'p',
          childProps: {key: 36.32, tagged: 'true'},
          childContent: 'Chromium hydroxide reacts with excess sodium hydroxide to produce an octahedral ion with the formula [Cr(OH)<sub>6</sub>]<sup>3-</sup>'
       },
       {
        childType: 'p',
        childProps: {key: 36.33, tagged: 'true'},
        childContent: 'Recall from the observations that the grey green precipitate (formula Cr(OH)<sub>3</sub> OR [Cr(H<sub>2</sub>O)<sub>3</sub>(OH)<sub>3</sub>]) dissolves to produce a green solution.'
       },
       {
        childType: 'p',
        childProps: {key: 36.34, tagged: 'true'},
        childContent: 'The green colour of this solution is caused by the complex ion with formula [Cr(OH)<sub>6</sub>]<sup>3-</sup>'
       }              
       ],
    props: {key: 36.3, parent: 'true'}
    },
    {
      type: 'p',
      doNotRender: ['AQA', 'OCRB'],
      content: {            
        staticContent: "The reason why chromium is the only one of the five metals to form a precipitate which redissolves when excess sodium hydroxide is added is beyond the scope of the [REPLACE TEXT] course.",
        dynamicContent: [            
            {string: 'OCR A', true: ['OCRA']},            
            {string: 'Edexcel', true: ['Edexcel']}
            
        ]
      },      
      props: {key: 36.4, variablecontent: 'stringSplicer'}
    },


    {
      type: 'h2',
      content: ['Insert OCR B content'],
      doNotRender: ['AQA', 'Edexcel', 'OCRA'],
      props: {key: 35.1}
    },    
    ]
  },
  {id: 37, allContent: [
    {
      type: 'mcq', 
      doNotRender: ['Edexcel', 'OCRA', 'OCRB'],               
      props: {key: 37.1},
      content: {id: 46}
    },
    {
      type: 'mcq', 
      doNotRender: ['AQA', 'OCRB'],               
      props: {key: 37.2},
      content: {id: 47}
    },
    {
      type: 'mcq', 
      doNotRender: ['Edexcel', 'OCRA', 'AQA'],               
      props: {key: 37.3},
      content: {id: 48}
    }
   ]
  },
  {id: 38, allContent: [
    {
      type: 'h2',
      content: ['Why does iron(II) hydroxide turn brown on standing?'],
      doNotRender: ['OCRA'],
      props: {key: 38.1}
    },
    {
      type: 'h2',
      content: ['Why do iron(II) hydroxide and manganese(II) hydroxide turn brown on standing?'],
      doNotRender: ['AQA', 'Edexcel', 'OCRB'],
      props: {key: 38.2}
    },
    {
      type: 'div',
      //doNotRender: ['AQA', 'OCRB'],
      content: [         
         {
            childType: 'p',
            childProps: {key: 38.31, style: {display: 'inline'}},
            childContent: 'Iron(II) hydroxide turns brown at the edges on standing (after some time has passed). Note that sodium hydroxide does '
         },
         {
          childType: 'p',
          childProps: {key: 36.33, style: {display: 'inline', fontStyle: 'italic'}},
          childContent: 'not'
         },
         {
          childType: 'p',
          childProps: {key: 36.34, style: {display: 'inline'}},
          childContent: ' to be added in excess for this change to happen.'
         },
         {
          childType: 'p',
          childProps: {key: 36.35, style: {marginTop: '10px'}},
          childContent: 'The central iron 2+ ion is oxidised to iron 3+ by oxygen in the air as follows...'
         },
         {
          childType: 'p',
          childProps: {key: 36.36, tagged: 'true'},
          childContent: '4[Fe(H<sub>2</sub>O)<sub>4</sub>(OH)<sub>2</sub>] + O<sub>2</sub> &#8594;	 4[Fe(H<sub>2</sub>O)<sub>3</sub>(OH)<sub>3</sub>] + 2H<sub>2</sub>O'
         }
         ],
      props: {key: 38.3, parent: 'true'}
      },
      {
        type: 'p',
        content: ['White manganese(II) hydroxide precipitate also turns brown at the edges on standing for exactly the same reason. Note that manganese(III) hydroxide and iron(III) hydroxide are slightly different shades of brown brown, Iron(III) hydroxide being quite a reddish brown..'],
        doNotRender: ['AQA', 'Edexcel', 'OCRB'],
        props: {key: 38.4, style: {marginTop: '10px'}}
      }

   ]
  },
  {id: 39, allContent: [
    {
      type: 'mcq', 
      //doNotRender: ['Edexcel', 'OCRA', 'OCRB'],               
      props: {key: 39.1},
      content: {id: 49}
    }
  ]
  },
  {id: 40, allContent: [,
    
    {
      type: 'written-response',                
      props: {key: 40, id: 40},
      content: {id: 40,      
      filter: 'true', 
      questions:
        [
          {
            true: ['AQA', 'OCRB'],
            id: 'equationA',
            questionReference: 'equation',
            questionText: 'In the textbox below state and explain what you would observe if sodium hydroxide was added dropwise (drop by drop) to a solution of hexaaquairon(II) ions and then left to stand for several minutes. Include a set of equations in the first text box.'
          },
          {
            true: ['Edexcel', 'OCRA'],
            id: 'equationB',
            questionReference: 'equation',
            questionText: 'In the textbox below state and explain what you would observe if sodium hydroxide was added dropwise (drop by drop) to a solution of hexaaquachromium(III) ions until excess reagent had been added. Include a set of equations in the first text box.'
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
  {id: 41, allContent: [
    
    {
      type: 'written-response-feedback',                
      props: {key: 41, id: 40},
      content: {id: 40, answers:
        [
          {            
            questionReference: 'equation',
            id: 'equationA',
            answerText: [
              'One correct hydrolysis equation', 
              'Both half equations or complete equation to show oxidation of precipitate'              
            ],
            equation: [
              'Acceptable hydrolysis equations:',
              '[Fe(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 2OH<sup>-</sup> &#8652; [Fe(H<sub>2</sub>O)<sub>4</sub>(OH)<sub>2</sub>] + 2H<sub>2</sub>O',
                '[Fe(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 2NaOH &#8652; [Fe(H<sub>2</sub>O)<sub>4</sub>(OH)<sub>2</sub>] + 2H<sub>2</sub>O + 2Na<sup>+</sup>',
                'Fe<sup>2+</sup> + 2OH<sup>-</sup> &#8652; Fe(OH)<sub>2</sub>',
                'Acceptable equations to explain oxidation of iron(II) hydroxide',
                '2H<sub>2</sub>O + O<sub>2</sub> + 4e<sup>-</sup> &#8594; 4OH<sup>-</sup>',
                'Fe<sup>2+</sup> &#8594; Fe<sup>3+</sup> + e<sup>-</sup>',
                '4[Fe(H<sub>2</sub>O)<sub>4</sub>(OH)<sub>2</sub>] + O<sub>2</sub> &#8594;	 4[Fe(H<sub>2</sub>O)<sub>3</sub>(OH)<sub>3</sub>] + 2H<sub>2</sub>O'
            ]
          },  
          {
            questionReference: 'explanation',
            id: 'explanationA',
            answerText: [
              'green solution changes to green precipitate on addition of sodium hydroxide',
              'green precipitate turns brown at the edges on standing / after some time',
              'iron(II) / Fe<sup>2+</sup> (central metal) ion oxidised to iron(III) / Fe<sup>3+</sup>...',
              '...by oxygen in the air'
            ]
          },
          {            
            questionReference: 'equation',
            id: 'equationB',
            answerText: [
              'One correct equation for the addition of a few drops', 
              'One correct equation for the addition of excess reagents',
              'Correct charges on all formulae'
            ],
            equation: [
              'After addition of a few drops',
              'Cr<sup>3+</sup> + 3OH<sup>-</sup> &#8652; Cr(OH)<sub>3</sub>',
              'Cr(H<sub>2</sub>O)<sub>6</sub> + 3OH<sup>-</sup> &#8652; Cr(OH)<sub>3</sub>(H<sub>2</sub>O)<sub>3</sub> + 3H<sub>2</sub>O',
              'Once reagent added to excess',
              'Cr(OH)<sub>3</sub> + 3OH<sup>-</sup> &#8652; [Cr(OH)<sub>6</sub>]<sup>3-</sup>',
              'Cr(OH)<sub>3</sub>(H<sub>2</sub>O)<sub>3</sub> + 3OH<sup>-</sup> &#8652; [Cr(OH)<sub>6</sub>]<sup>3-</sup> + 3H<sub>2</sub>O'
            ]
          },  
          {
            questionReference: 'explanation',
            id: 'explanationB',
            answerText: [
              'blueish green solution changes to grey green precipitate on addition of a few drops of sodium hydroxide',
              'produces Cr(OH)<sub>3</sub> OR Cr(OH)<sub>3</sub>(H<sub>2</sub>O)<sub>3</sub>',
              'when excess reagent added, grey green precipitate dissolves',
              'producing a green solution',
              'with formula Cr(OH)<sub>6</sub> OR [Cr(OH)<sub>6</sub>]<sup>3-</sup>'
            ]
          }

        ]
      }
    }
   ]
  },
    {...sectionFinish, id: 42}
  

]


    
  