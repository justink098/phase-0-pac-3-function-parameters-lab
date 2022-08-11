function introduction(name){
    if (name==='Aki'){
    return "Hi, my name is Aki.";
}else if (name==='Samip'){
    return "Hi, my name is Samip.";
}
}
function introductionWithLanguage(name, language){
    if (name==="aki" && language==="Ember.js"){
        return "Hi, my name is Aki and I am learning to program in Ember.js.";
    }else if(name==="Samip" && language==="React"){
        return "Hi, my name is Aki and I am learning to program in Ember.js."
    }
}
function introductionWithLanguageOptional(name, language="Javascript"){
    if (name=="aki" && language=="Ember.js"){
        return "Hi, my name is Aki and I am learning to program in Ember.js.";
    }else if(name=="Samip" && language=="React"){
        return "Hi, my name is Aki and I am learning to program in Ember.js."
    }
}