export function addOrReplace(array, item, prop = 'id') {
    let index = array.findIndex(i => i[prop] === item[prop]);
    if (index !== -1) {
        array.splice(index, 1, item);
    } else {
        array.push(item);
    }
}

export function deleteIfExist(array, item, prop = 'id') {
    let index = array.findIndex(i => i[prop] === item[prop]);
    if (index !== -1) {
        array.splice(index, 1);
    }
}

export function reduceToCategories(array,objProp){
    return array.reduce((result,value) =>{
        if(!containCategory(result,value[objProp])){
            result.push({category:value[objProp], items:[]});
        }
        putToCategory(result,value,objProp)
        return result;
    },[]);
}

const containCategory = (array,category) => {
    if(!category){ //if category is undefined or null
        return array.findIndex(element=> !element.category) !== -1;
    }
    else if(typeof category === 'object' && category.id !== undefined){
        return array.findIndex(element => element.category.id === category.id) !==-1;
    }
    return array.findIndex(element => element.category === category) !==-1;
}

const putToCategory = (array,obj,objProp) =>{
    let index = -1;
    let property = obj[objProp];
    if(!property){
        index= array.findIndex(item=> !item.category);
    }
    else if(typeof property === 'object' && property.id !== undefined){
        index= array.findIndex(item => item.category.id === property.id);
    }else{
        index= array.findIndex(item => item.category === property);
    }
    if(index !== -1){
        array[index].items.push(obj);
    }
}
