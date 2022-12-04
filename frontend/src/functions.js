/**
 * creates a new array with original data minus already deleted items
 * @param {array} originalData Data to remove things from
 * @param {array} removedObejctsIDs Data to be removed
 * @param {string} resourceType Resource, e.g. post, user, comment
 * @returns a new array based on the original but without removed things
 */
export function dataWitouthRemovedItems(originalData, removedObejctsIDs, resourceType) {
    resourceType = resourceType + "_id";
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
                if(object[resourceType] == removedObjectID) {
                    match = true
                }
            }
            //If there is at the end of the comarison there is no match add object to new array
            if (match === false) {
                //adding objects to a new array
                newData.push(object)
                //Adding deleted object with a tag (in the form of a new key)
            } else {
                object.deleted = true
                newData.push(object)
            }
        }
        return newData
    }
}
