import Constants from "../Constants";

class UtilityService {

    generateUUID () {
        return Math.ceil((Math.random(0, 1) * (Math.random(0, 1) * 98765) + 87234) + 9876243);
    }

    getDefaultMachineTemplate () {
        const uId = this.generateUUID();
        const titleId = "field-" + this.generateUUID();
        return {
            trackId: uId,
            id: uId,
            name: "New Machine",
            fields: [{
                name: "New Field",
                type: Constants.ATTRIBUTE_TYPE_TEXT,
                id: titleId,
                isTitle: true,
            }]
        };
    }

    getFieldTemplateForType ( type ) {
        const fieldId = "field-" + this.generateUUID();
        return {
            name: "New Field",
            type: type,
            id: fieldId,
            isTitle: false
        };
    }

    getNewInstanceForConfig ( fields ) {
        const itemValues = fields.map(( field ) => ({
            type: field.type,
            id: field.id,
            value: "",
            label: field.name
        }));
        return itemValues;
    }
}

export default new UtilityService();
