
  let attemptKey = "&%#$%ASDGF-#!GFDGP-#$%JKOBFDGO$#%-aSDF-F$#-vcx-K%$&O$"
  let attemptValue = "D#$$%a&#fDS#$#$#sdCSE$#&$&%$#$df&$%GFsfdDxUTv$%&%&%&%hgf45%Gfd&(af&sSDG%&(SDFG%G&0"

export function removeStorageResult(){
    localStorage.removeItem(attemptKey);
}
export function verifyAttemptStorageResult() : boolean {
 let localValue = localStorage.getItem(attemptKey)
    if( localValue == attemptValue && localValue.length > 70){
      return true;
    }
    return false;
}
export function setStorageResult(){
  localStorage.setItem(attemptKey,attemptValue);
}
