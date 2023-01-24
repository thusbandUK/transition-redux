export const MCQData = [
    {
        id: 41,
        columns: 2,
        question: 'Choose the answer in which the observations are accurate for the stated equation.',
        correct: {id: 434},
        options: [
            {
                key: 411,
                optionNumber: 1,
                optionText: [
                    {childType: 'p',
                     childProps: {className: "col-md-5", tagged: true},
                     childContent: '[Co(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 4Cl<sup>-</sup> &#8652; [CoCl<sub>4</sub>]<sup>2-</sup> + 6H<sub>2</sub>O'
                    },
                    {childType: 'p',
                     childProps: {className: "col-md-5"},
                     childContent: 'blue solution to pink precipitate'
                    }
                  ],
                
                //['[Co(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 4Cl<sup>-</sup> &#8652; [CoCl<sub>4</sub>]<sup>2-</sup> + 6H<sub>2</sub>O', 'blue solution to pink precipitate'],
                feedback: 'Incorrect! Pink solution produces a blue solution.',
                correct: false
                
            },
            {
                key: 412,
                optionNumber: 2,
                optionText: [
                    {childType: 'p',
                     childProps: {className: "col-md-5", tagged: true},
                     childContent: '[Cu(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 4Cl<sup>-</sup> &#8652; [CuCl<sub>4</sub>]<sup>2-</sup> + 6H<sub>2</sub>O'
                    },
                    {childType: 'p',
                     childProps: {className: "col-md-5"},
                     childContent: 'blue solution to yellow green precipitate'
                    }
                  ],
                
                //['[Co(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 4Cl<sup>-</sup> &#8652; [CoCl<sub>4</sub>]<sup>2-</sup> + 6H<sub>2</sub>O', 'blue solution to pink precipitate'],
                feedback: 'Incorrect! Product is a solution, not a precipitate.',
                correct: false
                
            },
            {
                key: 413,
                optionNumber: 3,
                optionText: [
                    {childType: 'p',
                     childProps: {className: "col-md-5", tagged: true},
                     childContent: '[Fe(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> + 4Cl<sup>-</sup> &#8652;  [FeCl<sub>4</sub>]<sup>-</sup>  + 6H<sub>2</sub>O'
                    },
                    {childType: 'p',
                     childProps: {className: "col-md-5"},
                     childContent: 'pale yellow solution to deep yellow precipitate'
                    }
                  ],
                
                //['[Co(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 4Cl<sup>-</sup> &#8652; [CoCl<sub>4</sub>]<sup>2-</sup> + 6H<sub>2</sub>O', 'blue solution to pink precipitate'],
                feedback: 'Incorrect! Product is a solution, not a precipitate.',
                correct: false
                
            },
            {
                key: 414,
                optionNumber: 4,
                optionText: [
                    {childType: 'p',
                     childProps: {className: "col-md-5", tagged: true},
                     childContent: '[CuCl<sub>4</sub>]<sup>2-</sup> + 6H<sub>2</sub>O &#8652; [Cu(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 4Cl<sup>-</sup>'
                    },
                    {childType: 'p',
                     childProps: {className: "col-md-5"},
                     childContent: 'yellow green solution to blue solution'
                    }
                  ],
                
                //['[Co(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 4Cl<sup>-</sup> &#8652; [CoCl<sub>4</sub>]<sup>2-</sup> + 6H<sub>2</sub>O', 'blue solution to pink precipitate'],
                feedback: 'Correct!',
                correct: true
                
            }
        ]/*,
        correct: {id: 433}*/
        
    },
    {
        id: 42,
        question: 'Which of these equations shows a hydrolysis reaction that would produce a precipitate?',
        correct: {id: 434},
        options: [
            {
                key: 421,
                optionNumber: 1,
                optionText: '4[Fe(H<sub>2</sub>O)<sub>4</sub>(OH)<sub>2</sub>] + O<sub>2</sub> &#8594;	 4[Fe(H<sub>2</sub>O)<sub>3</sub>(OH)<sub>3</sub>] + 2H<sub>2</sub>O',
                feedback: 'Incorrect! Complex product is neutral but this is oxidation.'
                
            },
            {
                key: 422,
                optionNumber: 2,
                optionText: '[Fe(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> + 2OH<sup>-</sup> &#8594;	 [Fe(H<sub>2</sub>O)<sub>4</sub>(OH)<sub>2</sub>]<sup>+</sup> + 2H<sub>2</sub>O',
                feedback: 'Incorrect! Complex product is charged so soluble.'
            },
            {
                key: 423,
                optionNumber: 3,
                optionText: '[Fe(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 2OH<sup>-</sup> &#8594;	 [Fe(H<sub>2</sub>O)<sub>4</sub>(OH)<sub>2</sub>] + 2H<sub>2</sub>O',
                feedback: 'Correct! '
            },
            {
                key: 424,
                optionNumber: 4,
                optionText: '[Al(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> + 4OH<sup>-</sup> &#8594;	 [Al(OH)<sub>4</sub>]<sup>-</sup> + 6H<sub>2</sub>O',
                feedback: 'Incorrect! Complex product is charged so soluble.'
            }
        ]
        
    },
    {
        id: 43,
        columns: 2,
        filter: 'true', 
        question: 'Choose the answer in which the observations are accurate for the stated equation.',
        correct: {id: 434},
        options: [
            {
                id: 431,
                optionNumber: 1,
                true: ['AQA', 'Edexcel'],
                optionText: [
                    {childType: 'p',
                     childProps: {className: "col-md-5", tagged: 'true'},
                     childContent: '[Co(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 4Cl<sup>-</sup> &#8652; [CoCl<sub>4</sub>]<sup>2-</sup> + 6H<sub>2</sub>O'
                    },
                    {childType: 'p',
                     childProps: {className: "col-md-5"},
                     childContent: 'blue solution to pink precipitate'
                    }
                  ],
                
                //['[Co(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 4Cl<sup>-</sup> &#8652; [CoCl<sub>4</sub>]<sup>2-</sup> + 6H<sub>2</sub>O', 'blue solution to pink precipitate'],
                feedback: 'Incorrect! Pink solution produces a blue solution.',
                correct: false
                
            },
            {
                id: 431,
                optionNumber: 1,
                true: ['OCRA', 'OCRB'],
                optionText: [
                    {childType: 'p',
                     childProps: {className: "col-md-5", tagged: 'true'},
                     childContent: '[Cu(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 4Cl<sup>-</sup> &#8652; [CuCl<sub>4</sub>]<sup>2-</sup> + 6H<sub>2</sub>O'
                    },
                    {childType: 'p',
                     childProps: {className: "col-md-5"},
                     childContent: 'blue precipitate to yellow green solution'
                    }
                  ],
                
                //['[Co(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 4Cl<sup>-</sup> &#8652; [CoCl<sub>4</sub>]<sup>2-</sup> + 6H<sub>2</sub>O', 'blue solution to pink precipitate'],
                feedback: 'Incorrect! Reactant is a solution, not a precipitate.',
                correct: false
                
            },
            {
                id: 432,
                optionNumber: 2,
                true: ['AQA', 'Edexcel', 'OCRA', 'OCRB'],
                optionText: [
                    {childType: 'p',
                     childProps: {className: "col-md-5", tagged: 'true'},
                     childContent: '[Cu(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 4Cl<sup>-</sup> &#8652; [CuCl<sub>4</sub>]<sup>2-</sup> + 6H<sub>2</sub>O'
                    },
                    {childType: 'p',
                     childProps: {className: "col-md-5"},
                     childContent: 'blue solution to yellow green precipitate'
                    }
                  ],
                
                //['[Co(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 4Cl<sup>-</sup> &#8652; [CoCl<sub>4</sub>]<sup>2-</sup> + 6H<sub>2</sub>O', 'blue solution to pink precipitate'],
                feedback: 'Incorrect! Product is a solution, not a precipitate.',
                correct: false
                
            },
            {
                id: 433,
                optionNumber: 3,
                true: ['AQA'],
                optionText: [
                    {childType: 'p',
                     childProps: {className: "col-md-5", tagged: 'true'},
                     childContent: '[Fe(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> + 4Cl<sup>-</sup> &#8652;  [FeCl<sub>4</sub>]<sup>-</sup>  + 6H<sub>2</sub>O'
                    },
                    {childType: 'p',
                     childProps: {className: "col-md-5"},
                     childContent: 'pale yellow solution to deep yellow precipitate'
                    }
                  ],
                
                //['[Co(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 4Cl<sup>-</sup> &#8652; [CoCl<sub>4</sub>]<sup>2-</sup> + 6H<sub>2</sub>O', 'blue solution to pink precipitate'],
                feedback: 'Incorrect! Product is a solution, not a precipitate.',
                correct: false
                
            },
            {
                id: 433,
                optionNumber: 3,
                true: ['Edexcel'],
                optionText: [
                    {childType: 'p',
                     childProps: {className: "col-md-5", tagged: 'true'},
                     childContent: '[Co(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 4Cl<sup>-</sup> &#8652; [CoCl<sub>4</sub>]<sup>2-</sup> + 6H<sub>2</sub>O'
                    },
                    {childType: 'p',
                     childProps: {className: "col-md-5"},
                     childContent: 'blue precipitate to pink solution'
                    }
                  ],
                
                //['[Co(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 4Cl<sup>-</sup> &#8652; [CoCl<sub>4</sub>]<sup>2-</sup> + 6H<sub>2</sub>O', 'blue solution to pink precipitate'],
                feedback: 'Incorrect! Reactant is a solution, not a precipitate.',
                correct: false
                
            },
            {
                id: 433,
                optionNumber: 3,
                true: ['OCRA', 'OCRB'],
                optionText: [
                    {childType: 'p',
                     childProps: {className: "col-md-5", tagged: 'true'},
                     childContent: '[CuCl<sub>4</sub>]<sup>2-</sup> + 6H<sub>2</sub>O &#8652; [Cu(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 4Cl<sup>-</sup>'
                    },
                    {childType: 'p',
                     childProps: {className: "col-md-5"},
                     childContent: 'blue solution to yellow green solution'
                    }
                  ],
                
                //['[Co(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 4Cl<sup>-</sup> &#8652; [CoCl<sub>4</sub>]<sup>2-</sup> + 6H<sub>2</sub>O', 'blue solution to pink precipitate'],
                feedback: 'Inorrect! Yellow green solution produces blue solution',
                correct: true
                
            },
            {
                id: 434,
                optionNumber: 4,
                true: ['AQA', 'Edexcel', 'OCRA', 'OCRB'],
                optionText: [
                    {childType: 'p',
                     childProps: {className: "col-md-5", tagged: 'true'},
                     childContent: '[CuCl<sub>4</sub>]<sup>2-</sup> + 6H<sub>2</sub>O &#8652; [Cu(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 4Cl<sup>-</sup>'
                    },
                    {childType: 'p',
                     childProps: {className: "col-md-5"},
                     childContent: 'yellow green solution to blue solution'
                    }
                  ],
                
                //['[Co(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 4Cl<sup>-</sup> &#8652; [CoCl<sub>4</sub>]<sup>2-</sup> + 6H<sub>2</sub>O', 'blue solution to pink precipitate'],
                feedback: 'Correct!',
                correct: true
                
            }
        ]/*,
        correct: {id: 433}*/
        
    },
    {
        id: 44,
        question: 'Which of these equations shows a hydrolysis reaction that would produce a precipitate?',        
        filter: 'true', 
        correct: {id: 434},
        options: [
            {
                id: 441,
                optionNumber: 1,
                optionText: '4[Fe(H<sub>2</sub>O)<sub>4</sub>(OH)<sub>2</sub>] + O<sub>2</sub> &#8594;	 4[Fe(H<sub>2</sub>O)<sub>3</sub>(OH)<sub>3</sub>] + 2H<sub>2</sub>O',
                feedback: 'Incorrect! Complex product is neutral but this is oxidation.',
                true: ['AQA', 'Edexcel', 'OCRA', 'OCRB']
                
            },
            {
                id: 442,
                optionNumber: 2,
                optionText: '[Fe(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> + 2OH<sup>-</sup> &#8594;	 [Fe(H<sub>2</sub>O)<sub>4</sub>(OH)<sub>2</sub>]<sup>+</sup> + 2H<sub>2</sub>O',
                feedback: 'Incorrect! Complex product is charged so soluble.',
                true: ['AQA', 'Edexcel', 'OCRA', 'OCRB']
            },
            {
                id: 443,
                optionNumber: 3,
                optionText: '[Fe(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 2OH<sup>-</sup> &#8594;	 [Fe(H<sub>2</sub>O)<sub>4</sub>(OH)<sub>2</sub>] + 2H<sub>2</sub>O',
                feedback: 'Correct! ',
                true: ['AQA', 'Edexcel', 'OCRA', 'OCRB']
            },
            {
                id: 444,
                optionNumber: 4,
                optionText: '[Al(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> + 4OH<sup>-</sup> &#8594;	 [Al(OH)<sub>4</sub>]<sup>-</sup> + 6H<sub>2</sub>O',
                feedback: 'Incorrect! Complex product is charged so soluble.',
                true: ['AQA']
            },
            {
                id: 445,
                optionNumber: 4,
                optionText: '[Cr(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> + 6OH<sup>-</sup> &#8594;	 [Cr(OH)<sub>6</sub>]<sup>3-</sup> + 6H<sub>2</sub>O',
                feedback: 'Incorrect! Complex product is charged so soluble.',
                true: ['Edexcel', 'OCRA']
            },
            {
                id: 446,
                optionNumber: 4,
                optionText: '[Cu(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + OH<sup>-</sup> &#8594;	 [Cu(OH)(H<sub>2</sub>O)<sub>5</sub>]<sup>+</sup> + H<sub>2</sub>O',
                feedback: 'Incorrect! Complex product is charged so soluble.',
                true: ['OCRB']
            }
        ]
        
    },
    {
        id: 45,
        columns: 2,
        question: 'Choose the answer in which the observations are accurate for the stated equation.',
        correct: {id: 434},
        options: [
            {
                id: 431,
                optionNumber: 1,
                true: ['AQA', 'Edexcel'],
                optionText: [
                    {childType: 'p',
                     childProps: {className: "col-md-5", tagged: 'true'},
                     childContent: '[Co(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 4Cl<sup>-</sup> &#8652; [CoCl<sub>4</sub>]<sup>2-</sup> + 6H<sub>2</sub>O'
                    },
                    {childType: 'p',
                     childProps: {className: "col-md-5"},
                     childContent: 'blue solution to pink precipitate'
                    }
                  ],
                
                //['[Co(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 4Cl<sup>-</sup> &#8652; [CoCl<sub>4</sub>]<sup>2-</sup> + 6H<sub>2</sub>O', 'blue solution to pink precipitate'],
                feedback: 'Incorrect! Pink solution produces a blue solution.',
                correct: false
                
            },
            {
                id: 431,
                optionNumber: 1,
                true: ['OCRA', 'OCRB'],
                optionText: [
                    {childType: 'p',
                     childProps: {className: "col-md-5", tagged: 'true'},
                     childContent: '[Cu(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 4Cl<sup>-</sup> &#8652; [CuCl<sub>4</sub>]<sup>2-</sup> + 6H<sub>2</sub>O'
                    },
                    {childType: 'p',
                     childProps: {className: "col-md-5"},
                     childContent: 'blue precipitate to yellow green solution'
                    }
                  ],
                
                //['[Co(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 4Cl<sup>-</sup> &#8652; [CoCl<sub>4</sub>]<sup>2-</sup> + 6H<sub>2</sub>O', 'blue solution to pink precipitate'],
                feedback: 'Incorrect! Reactant is a solution, not a precipitate.',
                correct: false
                
            },
            {
                id: 432,
                optionNumber: 2,
                true: ['AQA', 'Edexcel', 'OCRA', 'OCRB'],
                optionText: [
                    {childType: 'p',
                     childProps: {className: "col-md-5", tagged: 'true'},
                     childContent: '[Cu(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 4Cl<sup>-</sup> &#8652; [CuCl<sub>4</sub>]<sup>2-</sup> + 6H<sub>2</sub>O'
                    },
                    {childType: 'p',
                     childProps: {className: "col-md-5"},
                     childContent: 'blue solution to yellow green precipitate'
                    }
                  ],
                
                //['[Co(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 4Cl<sup>-</sup> &#8652; [CoCl<sub>4</sub>]<sup>2-</sup> + 6H<sub>2</sub>O', 'blue solution to pink precipitate'],
                feedback: 'Incorrect! Product is a solution, not a precipitate.',
                correct: false
                
            },
            {
                id: 433,
                optionNumber: 3,
                true: ['AQA'],
                optionText: [
                    {childType: 'p',
                     childProps: {className: "col-md-5", tagged: 'true'},
                     childContent: '[Fe(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> + 4Cl<sup>-</sup> &#8652;  [FeCl<sub>4</sub>]<sup>-</sup>  + 6H<sub>2</sub>O'
                    },
                    {childType: 'p',
                     childProps: {className: "col-md-5"},
                     childContent: 'pale yellow solution to deep yellow precipitate'
                    }
                  ],
                
                //['[Co(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 4Cl<sup>-</sup> &#8652; [CoCl<sub>4</sub>]<sup>2-</sup> + 6H<sub>2</sub>O', 'blue solution to pink precipitate'],
                feedback: 'Incorrect! Product is a solution, not a precipitate.',
                correct: false
                
            },
            {
                id: 433,
                optionNumber: 3,
                true: ['Edexcel'],
                optionText: [
                    {childType: 'p',
                     childProps: {className: "col-md-5", tagged: 'true'},
                     childContent: '[Co(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 4Cl<sup>-</sup> &#8652; [CoCl<sub>4</sub>]<sup>2-</sup> + 6H<sub>2</sub>O'
                    },
                    {childType: 'p',
                     childProps: {className: "col-md-5"},
                     childContent: 'blue precipitate to pink solution'
                    }
                  ],
                
                //['[Co(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 4Cl<sup>-</sup> &#8652; [CoCl<sub>4</sub>]<sup>2-</sup> + 6H<sub>2</sub>O', 'blue solution to pink precipitate'],
                feedback: 'Incorrect! Reactant is a solution, not a precipitate.',
                correct: false
                
            },
            {
                id: 433,
                optionNumber: 3,
                true: ['OCRA', 'OCRB'],
                optionText: [
                    {childType: 'p',
                     childProps: {className: "col-md-5", tagged: 'true'},
                     childContent: '[CuCl<sub>4</sub>]<sup>2-</sup> + 6H<sub>2</sub>O &#8652; [Cu(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 4Cl<sup>-</sup>'
                    },
                    {childType: 'p',
                     childProps: {className: "col-md-5"},
                     childContent: 'blue solution to yellow green solution'
                    }
                  ],
                
                //['[Co(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 4Cl<sup>-</sup> &#8652; [CoCl<sub>4</sub>]<sup>2-</sup> + 6H<sub>2</sub>O', 'blue solution to pink precipitate'],
                feedback: 'Inorrect! Yellow green solution produces blue solution',
                correct: true
                
            },
            {
                id: 434,
                optionNumber: 4,
                true: ['AQA', 'Edexcel', 'OCRA', 'OCRB'],
                optionText: [
                    {childType: 'p',
                     childProps: {className: "col-md-5", tagged: 'true'},
                     childContent: '[CuCl<sub>4</sub>]<sup>2-</sup> + 6H<sub>2</sub>O &#8652; [Cu(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 4Cl<sup>-</sup>'
                    },
                    {childType: 'p',
                     childProps: {className: "col-md-5"},
                     childContent: 'yellow green solution to blue solution'
                    }
                  ],
                
                //['[Co(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 4Cl<sup>-</sup> &#8652; [CoCl<sub>4</sub>]<sup>2-</sup> + 6H<sub>2</sub>O', 'blue solution to pink precipitate'],
                feedback: 'Correct!',
                correct: true
                
            }
        ]/*,
        correct: {id: 433}*/
        
    },
    {
        id: 46,
        question: 'Which of these equations does not correctly show an acid-base reaction of aluminium hydroxide?',        
        //filter: 'true', 
        correct: {id: 443},
        options: [
            {
                id: 441,
                optionNumber: 1,
                optionText: '[Al(H<sub>2</sub>O)<sub>3</sub>(OH)<sub>3</sub>] + 3H<sub>3</sub>O<sup>+</sup> &#8652; [Al(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> + 3H<sub>2</sub>O',
                feedback: 'Incorrect selection! Balanced equation uses H<sub>3</sub>O<sup>+</sup> longhand for acidic proton.',
                //true: ['AQA', 'Edexcel', 'OCRA', 'OCRB']
                
            },
            {
                id: 442,
                optionNumber: 2,
                optionText: 'Al(OH)<sub>3</sub> + NaOH  &#8652; Na[Al(OH)<sub>4</sub>]',
                feedback: 'Incorrect selection! Question does not specify that equation should be ionic.',
                //true: ['AQA', 'Edexcel', 'OCRA', 'OCRB']
            },
            {
                id: 443,
                optionNumber: 3,
                optionText: '[Al(H<sub>2</sub>O)<sub>3</sub>(OH)<sub>3</sub>] + 3H<sup>+</sup> &#8652; [Al(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> + 3H<sub>2</sub>O',
                feedback: 'Correct! Although equation shows acid base reaction, it is not balanced; 3H<sub>2</sub>O should be omitted.',
                //true: ['AQA', 'Edexcel', 'OCRA', 'OCRB']
            },
            {
                id: 444,
                optionNumber: 4,
                optionText: '[Al(H<sub>2</sub>O)<sub>3</sub>(OH)<sub>3</sub>] + OH<sup>&ndash;</sup> &#8652; [Al(OH)<sub>4</sub>]<sup>&ndash;</sup> + 3H<sub>2</sub>O',
                feedback: 'Incorrect selection! Balanced ionic equation shows production of aluminium tetrahydrate ion.',
                //true: ['AQA']
            }
            
        ]
        
    },
    {
        id: 47,
        columns: 2,
        question: 'Choose the answer in which the observations are accurate for the stated equation.',
        correct: {id: 472},
        options: [
            {
                id: 471,
                optionNumber: 1,                
                optionText: [
                    {childType: 'p',
                     childProps: {className: "col-md-5", tagged: 'true'},
                     childContent: 'Cr<sup>3+</sup> + 3OH<sup>-</sup> &#8652; Cr(OH)<sub>3</sub>'
                    },
                    {childType: 'p',
                     childProps: {className: "col-md-5"},
                     childContent: 'grey-green precipitate to dark green solution'
                    }
                  ],
                                
                feedback: 'Incorrect! The grey-green precipitate is the product, not the reactant.',
                correct: false
                
            },
            {
                id: 472,
                optionNumber: 2,                
                optionText: [
                    {childType: 'p',
                     childProps: {className: "col-md-5", tagged: 'true'},
                     childContent: 'Cr(OH)<sub>3</sub> + 3OH<sup>-</sup> &#8652; [Cr(OH)<sub>6</sub>]<sup>3-</sup>'
                    },
                    {childType: 'p',
                     childProps: {className: "col-md-5"},
                     childContent: 'grey-green precipitate produces green solution'
                    }
                  ],
                                
                feedback: 'Correct!',
                correct: true
                
            },
            {
                id: 473,
                optionNumber: 3,                
                optionText: [
                    {childType: 'p',
                     childProps: {className: "col-md-5", tagged: 'true'},
                     childContent: '[Cr(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> + 3OH<sup>-</sup> &#8652; [Cr(OH)<sub>3</sub>(H<sub>2</sub>O)<sub>3</sub>] + 3H<sub>2</sub>O'
                    },
                    {childType: 'p',
                     childProps: {className: "col-md-5"},
                     childContent: 'pink solution produces grey-green precipitate'
                    }
                  ],
                                
                feedback: 'Incorrect! Starting solution is blueish-green, not pink.',
                correct: false
                
            },            
            {
                id: 474,
                optionNumber: 4,                
                optionText: [
                    {childType: 'p',
                     childProps: {className: "col-md-5", tagged: 'true'},
                     childContent: '[Cr(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> + 6OH<sup>-</sup> &#8652; [Cr(OH)<sub>6</sub>]<sup>3-</sup> + 6H<sub>2</sub>O'
                    },
                    {childType: 'p',
                     childProps: {className: "col-md-5"},
                     childContent: 'blueish green solution to grey-green precipitate'
                    }
                  ],
                                
                feedback: 'Incorrect! Blueish green solution produces green solution.',
                correct: false
                
            }
        ]
        
    },
    {
        id: 48,
        question: 'I AM A PLACEHOLDER FOR THE OCRB QUESTION TO BE WRITTEN',        
        //filter: 'true', 
        correct: {id: 443},
        options: [
            {
                id: 441,
                optionNumber: 1,
                optionText: '[Al(H<sub>2</sub>O)<sub>3</sub>(OH)<sub>3</sub>] + 3H<sub>3</sub>O<sup>+</sup> &#8652; [Al(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> + 3H<sub>2</sub>O',
                feedback: 'Incorrect selection! Balanced equation uses H<sub>3</sub>O<sup>+</sup> longhand for acidic proton.',
                //true: ['AQA', 'Edexcel', 'OCRA', 'OCRB']
                
            },
            {
                id: 442,
                optionNumber: 2,
                optionText: 'Al(OH)<sub>3</sub> + NaOH  &#8652; Na[Al(OH)<sub>4</sub>]',
                feedback: 'Incorrect selection! Question does not specify that equation should be ionic.',
                //true: ['AQA', 'Edexcel', 'OCRA', 'OCRB']
            },
            {
                id: 443,
                optionNumber: 3,
                optionText: '[Al(H<sub>2</sub>O)<sub>3</sub>(OH)<sub>3</sub>] + 3H<sup>+</sup> &#8652; [Al(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> + 3H<sub>2</sub>O',
                feedback: 'Correct! Although equation shows acid base reaction, it is not balanced; 3H<sub>2</sub>O should be omitted.',
                //true: ['AQA', 'Edexcel', 'OCRA', 'OCRB']
            },
            {
                id: 444,
                optionNumber: 4,
                optionText: '[Al(H<sub>2</sub>O)<sub>3</sub>(OH)<sub>3</sub>] + OH<sup>&ndash;</sup> &#8652; [Al(OH)<sub>4</sub>]<sup>&ndash;</sup> + 3H<sub>2</sub>O',
                feedback: 'Incorrect selection! Balanced ionic equation shows production of aluminium tetrahydrate ion.',
                //true: ['AQA']
            }
            
        ]
        
    },
    {
        id: 49,
        question: 'Choose the half equation which correctly shows the role of oxygen in the oxidation of iron(II) hydroxide to iron(III) hydroxide',
        //filter: 'true', 
        correct: {id: 492},       
        options: [
            {
                id: 491,
                optionNumber: 1,
                optionText: '4H<sup>+</sup> + O<sub>2</sub> + 4e<sup>-</sup> &#8594; 2H<sub>2</sub>O',
                feedback: 'Incorrect selection! This half equation would apply to acidic conditions.',
                //true: ['AQA', 'Edexcel', 'OCRA', 'OCRB']
                
            },
            {
                id: 492,
                optionNumber: 2,
                optionText: '2H<sub>2</sub>O + O<sub>2</sub> + 4e<sup>-</sup> &#8594; 4OH<sup>-</sup>',
                feedback: 'Correct!',
                //true: ['AQA', 'Edexcel', 'OCRA', 'OCRB']
            },
            {
                id: 493,
                optionNumber: 3,
                optionText: '2H<sub>2</sub>O &#8594; 4H<sup>+</sup> + O<sub>2</sub> + 4e<sup>-</sup>',
                feedback: 'Incorrect! O<sub>2</sub> should be a reactant.',
                //true: ['AQA', 'Edexcel', 'OCRA', 'OCRB']
            },
            {
                id: 494,
                optionNumber: 4,
                optionText: '4OH<sup>-</sup> &#8594; 2H<sub>2</sub>O + O<sub>2</sub> + 4e<sup>-</sup>',
                feedback: 'Incorrect! O<sub>2</sub> should be a reactant.',
                //true: ['AQA']
            }
            
        ]
        
    },
    {
        id: 50,
        question: 'What kind of reaction takes place when a few drops of ammonia solution are added to hexaaquacopper(II) to produce a pale blue precipitate?',
        correct: {id: 504},       
        options: [            
            {
                id: 501,
                optionNumber: 1,
                optionText: 'Ligand exchange',
                feedback: 'Incorrect! Ammonia needs to be in excess for ligand exchange to occur.'               
                
            },
            {
                id: 502,
                optionNumber: 2,
                optionText: 'Oxidation',
                feedback: 'Incorrect! Oxidation state of central copper ion does not change.'                
            },
            {
                id: 503,
                optionNumber: 3,
                optionText: 'Reduction',
                feedback: 'Incorrect! Oxidation state of central copper ion does not change.'               
            },
            {
                id: 504,
                optionNumber: 4,
                optionText: 'Hydrolysis',
                feedback: 'Correct!'                
            }
            
        ]
        
    },
    {
        id: 51,
        question: 'Which equation could not be used to represent any stage of the hydrolysis of hexaaquacopper(II) to produce a precipitate?',
        correct: {id: 512},       
        options: [       
            /*{question: 1,correct: 'n',text: 'NH<sub>3</sub> acts as base by accepting protons from complex.'},
            {question: 2,correct: 'y',text: 'Ligand exchange should not take place during a hydrolysis reaction.'},
            {question: 3,correct: 'n',text: 'NH<sub>3</sub> solution is alkaline so contains OH<sup>&ndash;</sup> ions.'},
            {question: 4,correct: 'n',text: 'This is an acceptable simplified equation for hydrolysis.'}     */
            {
                id: 511,
                optionNumber: 1,
                optionText: '[Cu(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 2NH<sub>3</sub>   &#8652;   [Cu(H<sub>2</sub>O)<sub>4</sub>(OH)<sub>2</sub>] + 2NH<sub>4</sub><sup>+</sup>',
                feedback: 'Incorrect selection! NH<sub>3</sub> acts as base by accepting protons from complex.'               
                
            },
            {
                id: 512,
                optionNumber: 2,
                optionText: '[Cu(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 2NH<sub>4</sub><sup>+</sup>   &#8652;   [Cu(H<sub>2</sub>O)<sub>4</sub>(NH<sub>3</sub>)<sub>2</sub>] + 2H<sub>3</sub>O<sup>+</sup>',
                feedback: 'Correct selection! This question shows ligand exchange not hydrolysis.'
            },
            {
                id: 513,
                optionNumber: 3,
                optionText: '[Cu(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 2OH<sup>-</sup>   &#8652;   [Cu(H<sub>2</sub>O)<sub>4</sub>(OH)<sub>2</sub>] + 2H<sub>2</sub>O',
                feedback: 'Incorrect selection! NH<sub>3</sub> solution is alkaline so contains OH<sup>-</sup> ions.'               
            },
            {
                id: 514,
                optionNumber: 4,
                optionText: 'Cu<sup>2+</sup> + 2OH<sup>-</sup>   &#8594;   Cu(OH)<sub>2</sub>',
                feedback: 'Incorrect selection! This is an acceptable simplified equation for hydrolysis.'                
            }
            
        ]
        
    }
]