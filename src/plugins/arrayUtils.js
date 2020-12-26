export default{
    addOrReplace(array, item, prop = 'id'){
        let index = array.findIndex(i => i[prop] === item[prop]);
        if(index !== -1){
            array.splice(index,1,item);
        }else{
            array.push(item);
        }
    },
    deleteIfExist(array, item, prop = 'id'){
        let index = array.findIndex(i => i[prop] === item[prop]);
        if(index !== -1){
            array.splice(index,1);
        }
    }
}