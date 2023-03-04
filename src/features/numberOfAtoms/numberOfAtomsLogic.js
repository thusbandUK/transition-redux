export const atomCalculator = {
    _elements: [
        /*figures below are the mass in kg taken up by the specified element in a person with a mass of 70kg*/
        {
            elementName: 'carbon',
            massInKg: 16,
            relativeAtomicMass: 12
        },
        {
            elementName: 'oxygen',
            massInKg: 43,
            relativeAtomicMass: 16
        },
        {
            elementName: 'nitrogen',
            massInKg: 1.8,
            relativeAtomicMass: 14
        },
        {
            elementName: 'hydrogen',
            massInKg: 7,
            relativeAtomicMass: 1
        },
        {
            elementName: 'calcium',
            massInKg: 1,
            relativeAtomicMass: 40
        },
        {
            elementName: 'phosphorus',
            massInKg: 0.78,
            relativeAtomicMass: 31
        },
        {
            elementName: 'potassium',
            massInKg: 0.14,
            relativeAtomicMass: 39
        },
        {
            elementName: 'sulfur',
            massInKg: 0.14,
            relativeAtomicMass: 32
        },
        {
            elementName: 'sodium',
            massInKg: 0.1,
            relativeAtomicMass: 23
        },
        {
            elementName: 'chlorine',
            massInKg: 0.095,
            relativeAtomicMass: 35.5
        },
        {
            elementName: 'magnesium',
            massInKg: 0.019,
            relativeAtomicMass: 24
        },
        {
            elementName: 'iron',
            massInKg: 0.0042,
            relativeAtomicMass: 56
        },
        {
            elementName: 'fluorine',
            massInKg: 0.0026,
            relativeAtomicMass: 19
        },
        {
            elementName: 'zinc',
            massInKg: 0.0023,
            relativeAtomicMass: 65
        },
        {
            elementName: 'silicon',
            massInKg: 0.001,
            relativeAtomicMass: 28
        },
        {
            elementName: 'rubidium',
            massInKg: 0.00068,
            relativeAtomicMass: 85
        },
        {
            elementName: 'strontium',
            massInKg: 0.00032,
            relativeAtomicMass: 88
        },
        {
            elementName: 'bromine',
            massInKg: 0.00026,
            relativeAtomicMass: 80
        },
        {
            elementName: 'lead',
            massInKg: 0.00012,
            relativeAtomicMass: 207
        },
        {
            elementName: 'copper',
            massInKg: 0.000072,
            relativeAtomicMass: 63.5
        },
        {
            elementName: 'aluminium',
            massInKg: 0.00006,
            relativeAtomicMass: 27
        },
        {
            elementName: 'cadmium',
            massInKg: 0.00005,
            relativeAtomicMass: 112
        },
        {
            elementName: 'cerium',
            massInKg: 0.00004,
            relativeAtomicMass: 140
        },
        {
            elementName: 'barium',
            massInKg: 0.000022,
            relativeAtomicMass: 137
        },
        {
            elementName: 'iodine',
            massInKg: 0.00002,
            relativeAtomicMass: 127
        },
        {
            elementName: 'tin',
            massInKg: 0.00002,
            relativeAtomicMass: 119
        },
        {
            elementName: 'titanium',
            massInKg: 0.00002,
            relativeAtomicMass: 48
        },
        {
            elementName: 'boron',
            massInKg: 0.000018,
            relativeAtomicMass: 11
        },
        {
            elementName: 'nickel',
            massInKg: 0.000015,
            relativeAtomicMass: 59
        },
        {
            elementName: 'selenium',
            massInKg: 0.000015,
            relativeAtomicMass: 79
        },
        {
            elementName: 'chromium',
            massInKg: 0.000014,
            relativeAtomicMass: 52
        },
        {
            elementName: 'manganese',
            massInKg: 0.000012,
            relativeAtomicMass: 55
        },
        {
            elementName: 'arsenic',
            massInKg: 0.000007,
            relativeAtomicMass: 75
        },
        {
            elementName: 'lithium',
            massInKg: 0.000007,
            relativeAtomicMass: 7
        },
        {
            elementName: 'cesium',
            massInKg: 0.000006,
            relativeAtomicMass: 133
        },
        {
            elementName: 'mercury',
            massInKg: 0.000006,
            relativeAtomicMass: 201
        },
        {
            elementName: 'germanium',
            massInKg: 0.000005,
            relativeAtomicMass: 73
        },
        {
            elementName: 'molybdenum',
            massInKg: 0.000005,
            relativeAtomicMass: 96
        },
        {
            elementName: 'cobalt',
            massInKg: 0.000003,
            relativeAtomicMass: 59
        },
        {
            elementName: 'antimony',
            massInKg: 0.000002,
            relativeAtomicMass: 122
        },
        {
            elementName: 'silver',
            massInKg: 0.000002,
            relativeAtomicMass: 108
        },
        {
            elementName: 'niobium',
            massInKg: 0.0000015,
            relativeAtomicMass: 93
        },
        {
            elementName: 'zirconium',
            massInKg: 0.000001,
            relativeAtomicMass: 91
        },
        {
            elementName: 'lanthanium',
            massInKg: 0.0000008,
            relativeAtomicMass: 139
        },
        {
            elementName: 'gallium',
            massInKg: 0.0000007,
            relativeAtomicMass: 70
        },
        {
            elementName: 'tellurium',
            massInKg: 0.0000007,
            relativeAtomicMass: 128
        },
        {
            elementName: 'yttrium',
            massInKg: 0.0000006,
            relativeAtomicMass: 89
        },
        {
            elementName: 'bismuth',
            massInKg: 0.0000005,
            relativeAtomicMass: 209
        },
        {
            elementName: 'thallium',
            massInKg: 0.0000005,
            relativeAtomicMass: 204
        },
        {
            elementName: 'indium',
            massInKg: 0.0000004,
            relativeAtomicMass: 115
        },
        {
            elementName: 'gold',
            massInKg: 0.0000002,
            relativeAtomicMass: 197
        },
        {
            elementName: 'scandium',
            massInKg: 0.0000002,
            relativeAtomicMass: 45
        },
        {
            elementName: 'tantalum',
            massInKg: 0.0000002,
            relativeAtomicMass: 181
        },
        {
            elementName: 'vanadium',
            massInKg: 0.00000011,
            relativeAtomicMass: 51
        },
        {
            elementName: 'thorium',
            massInKg: 0.0000001,
            relativeAtomicMass: 232
        },
        {
            elementName: 'uranium',
            massInKg: 0.0000001,
            relativeAtomicMass: 238
        },
        {
            elementName: 'samarium',
            massInKg: 0.00000005,
            relativeAtomicMass: 150.4
        },
        {
            elementName: 'beryllium',
            massInKg: 0.000000036,
            relativeAtomicMass: 9
        },
        {
            elementName: 'tungsten',
            massInKg: 0.00000002,
            relativeAtomicMass: 184
        },
    ],
    get elements() {
        return this._elements;
    },

    //SUPER IMPORTANT, _atomsPerElement is the array in which the new calculated values are filed

    _atomsPerElement: [
    ],
    get atomsPerElement() {
        return this._atomsPerElement;
    },
    set atomsPerElement(elementDetailsIn) {
        this._atomsPerElement = elementDetailsIn;
    },

    /**
     * 
     * the below is necessary for the array this.atomsPerElement to be populated with the results of the related calculations
     */
    addDetailsToElement(elementName, numberOfAtoms) {

        const elementDetail2 = {
            name: elementName,
            atoms: numberOfAtoms,
        };
        return this._atomsPerElement.push(elementDetail2);


    },

    //these functions return the massInKg (of which each element would have in a person with a mass of 70Kg) and the relative atomic mass
    //for given elements

    indexProByName(elementName) {
        for (var i = 0; i < this._elements.length; i++) {
            if (this._elements[i].elementName === elementName) return this._elements[i].massInKg;
        }
    },
    indexArByName(elementName) {
        for (var i = 0; i < this._elements.length; i++) {
            if (this._elements[i].elementName === elementName) return this._elements[i].relativeAtomicMass;
        }
    },
    /**
     * 
     * the below is  the function that calculates the number of atoms of each individual element
     */

    numberOfAtoms: function (mass, element) {
        const massOfGivenElement = this.indexProByName(element);
        const avogadroConstant = 602000000000000000000000;
        const referenceMass = 70;
        const atomicMass = this.indexArByName(element);
        const noAtoms = mass * 1000 * massOfGivenElement / referenceMass / atomicMass * avogadroConstant;
        //return `The number of atoms of ${element} in a person with a mass of ${mass} kilograms is: ${noAtoms.toPrecision(3)}`;
        //console.log(noAtoms.toPrecision(3));
        return noAtoms.toPrecision(3);
        
    },

    
    



    numberOfAtomsOfEachElementArray: function (mass) {
        console.log(mass);
        let i = 0;
        console.log(`In a person with a mass of ${mass} kilograms, the number of atoms of each element is...`)
        do {
            let element = this._elements[i].elementName;
            let noAtoms = this.numberOfAtoms(mass, element);
            i += 1;
            this.addDetailsToElement(element, noAtoms);
        } while (i < this._elements.length);

    },
}