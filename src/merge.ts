class Merge{
    public merge(collection_1: number[], collection_2: number[]): number[] {
        var collection_3: number[] = []
        for (let i of collection_1) {
            let deleteCount = 0
            if (collection_2.length > 0){
                for (let j of collection_2) {
                    if (i >= j) {
                        collection_3.push(j) 
                        deleteCount += 1
                    }else {
                        collection_3.push(i)
                        break
                    }
                }
                collection_2.splice(0, deleteCount)
                if (collection_2.length === 0){
                    collection_3.push(i)
                }
            }else{
                collection_3.push(i)
            }        
        }
        collection_3 = collection_3.concat(collection_2)
        return collection_3
    }
}

export default new Merge();

var merge = new Merge();
console.log('merge([1, 5, 9, 14, 45, 50], [3, 4, 8, 11, 12, 15, 16]) = ['+ merge.merge([1, 5, 9, 14, 45, 50], [3, 4, 8, 11, 12, 15, 16])+']')