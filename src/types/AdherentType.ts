import type { AddressType } from "./AddressType";

export interface AdherentType {
    firstname: string;
    lastname: string;
    email: string;
    phone?: string;
    address: AddressType;
}
