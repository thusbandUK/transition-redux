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
}

]