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
    if(typeof category === 'object' && category.id !== undefined){
        return array.findIndex(element => element.category.id === category.id) !==-1;
    }
    return array.findIndex(element => element.category === category) !==-1;
}

const putToCategory = (array,obj,objProp) =>{
    let index = -1;
    if(typeof obj[objProp] === 'object' && obj[objProp].id !== undefined){
        index= array.findIndex(item => item.category.id === obj[objProp].id);
    }else{
        index= array.findIndex(item => item.category === obj[objProp]);
    }
    if(index !== -1){
        array[index].items.push(obj);
    }
}
