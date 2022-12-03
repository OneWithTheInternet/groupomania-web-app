/**
     * creates a new array with original data minus already deleted items
     */
 export function dataWitouthRemovedItems(originalData, removedObejctsIDs) {
    //Checking that nothing has been removed yet
    if(removedObejctsIDs.length == 0){
        return originalData
        //otherwise proceeding with new array 
    } else {
        let newData = [];

        //Looping over original data
        for (let index = 0; index < originalData.length; index++) {
            let object = originalData[index];
            let match = false;

            //comparing each orignial data element against removed items
            for (let i = 0; i < removedObejctsIDs.length; i++) {
                let removedObjectID = removedObejctsIDs[i];
                if(object.post_id == removedObjectID) {
                    match = true
                }
            }
            //If there is at the end of the comarison there is no match add object to new array
            if (match === false) {
                //adding objects to a new array
                newData.push(object)
            }
        }
        return newData
    }
}
