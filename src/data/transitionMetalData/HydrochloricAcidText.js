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
    {id: 20, allContent: [
            
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
          props: {src: "images/structures/equation conc HCl substitution.png", altText: "an equation showing the octahedral complex hexaaquacopper reacting with four chloride ions to produce the tetrachlorocopper complex along with six displaced water molecules", className: 'img-fluid'}
      },
      {
          type: 'comparison',
          content: {},
          props: {key: 20.3}
      }
    ]
  }

]