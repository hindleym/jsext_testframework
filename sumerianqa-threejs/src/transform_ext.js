export class transform_ext {
    constructor(obj_list = null) { this._objList = obj_list; }

    TranslateObj(obj, x, y, z) {
        if(!this._objList) {
            obj.position.x += x;
            obj.position.y += y;
            obj.position.z += z;
        } else {
            for(let i = 0; i < this._objList.length; ++i) {
                if(obj === this._objList[i]) {
                    this._objList[i].position.x += x;
                    this._objList[i].position.y += y;
                    this._objList[i].position.z += z;
                } else {
                    console.log("Object List isn't Empty but doesn't contain the object being translated");
                    console.log("Object List: ", this._objList);
                    console.log("Passed Object: ", obj);
                }
            }
        }
    }

    RotateObj(obj, x, y, z) {
        if(!this._objList) {
            obj.rotation.x += x;
            obj.rotation.y += y;
            obj.rotation.z += z;
        } else {
            for(let i = 0; i < this._objList.length; ++i) {
                if(obj === this._objList[i]) {
                    this._objList[i].rotation.x += x;
                    this._objList[i].rotation.y += y;
                    this._objList[i].rotation.z += z;
                } else {
                    console.log("Object List isn't Empty but doesn't contain the object being translated");
                    console.log("Object List: ", this._objList);
                    console.log("Passed Object: ", obj);
                }
            }
        }
    }
}