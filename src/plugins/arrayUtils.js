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
