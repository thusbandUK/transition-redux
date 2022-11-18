export const spaceBeGone = (stringWithSpaces) => {
  if (!stringWithSpaces){
    return;
  }        
    const separatedWords = stringWithSpaces.split(' ');
    return separatedWords.join('_');
  }

export const dashBeGone = (stringWithDashes) => {
  if (!stringWithDashes){
    return;
  }  
    const separatedWords = stringWithDashes.split('_');
    return separatedWords.join(' ');
}