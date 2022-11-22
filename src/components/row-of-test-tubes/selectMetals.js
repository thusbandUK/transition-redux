/*
this is from filterReagentByExamBoard.js in the Misc Javascript Snippets folder

I had a lot of concerns that actually it wasn't the right thing to do to cram so much logic into a reducer and I was right!!

I think I felt like the menuSlice should select EvErYtHiNg!!!!!! but I got feedback saying: "What are you doing mate? You can't
call that kind of logic here!!"

So...

The solution (ahem) is not so far from the existing situation. 
a) rowOfTubes needs to become a feature with a slice
b) the logic that filters the relevant parts of data.js to produce the selection of metals by reagent by examboard needs to be in the
rowOfTubes main file, probably in a useEffect hook. It's all about what you dispatch to the reducer, the reducer just says, okay
got some data, posting it to the store, but that doesn't mean you can't process stuff before you dispatch it


*/
const filtered = (examBoard, reagent) => {
    //console.log(data.metalsByReagent[examBoard][reagent]);
    const newArray = data.unreactedMetals.filter((x) => {
      //console.log(x.id);
      //return x.id === reagent;
      return data.metalsByReagent[examBoard][reagent].includes(x.id);
      })
      return newArray;
  }