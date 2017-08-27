export interface MedicationList {
    medicationCode: string; // required field with minimum 5 characters
    prescription: Prescription[]; // user can have one or more addresses
}

export interface Prescription {
    dosage: string;  // required field
    take: number;
    time: number;
    day: number;
    totalQty: number;
    uom: string;
    price: number;
    discPerc: number;
    discAmt: number;
    totalPrice: number;
    route: string;
    necessary: boolean;
    instructionOne: string;
    instructionTwo: string;
    indication: string;

}