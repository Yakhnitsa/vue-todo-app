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
            result.push({title:value[objProp], items:[]});
        }
        putToCategory(result,value,objProp)
        return result;
    },[]);
}

export function reduceToSuggestedCategories(array,categories,objProp){
    const result = [];
    categories.forEach(category =>{
        let items = [];
        if(!category){
            items = array.filter(el => !el[objProp])
        }else if(typeof category === 'object' && category.id !== undefined){
            items = array.filter(el =>{
                return el[objProp] ? el[objProp].id === category.id : false;
            })
        }else{
            items = array.filter(el => el[objProp] === category);
        }
        result.push({
            category: category,
            items: items
        })
    })
    return result;
}

const containCategory = (array,category) => {
    if(!category){ //if category is undefined or null
        return array.findIndex(element=> !element.title) !== -1;
    }
    else if(typeof category === 'object' && category.id !== undefined){
        return array.findIndex(element =>
        {
            return element.title ? element.title.id === category.id : false;
        }) !==-1;
    }
    return array.findIndex(element => element.title === category) !==-1;
}

const putToCategory = (array,obj,objProp) =>{
    let index = -1;
    let property = obj[objProp];
    if(!property){
        index= array.findIndex(item=> !item.title);
    }
    else if(typeof property === 'object' && property.id !== undefined){
        index= array.findIndex(item => item.title ?
            item.title.id === property.id : false);

    }else{
        index= array.findIndex(item => item.title === property);
    }
    if(index !== -1){
        array[index].items.push(obj);
    }
}
