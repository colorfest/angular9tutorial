export interface Presidents {
    firstName: string,
    lastName: string,
    age: number,
    presId: number,
    details: {
        spouse: string,
        termsInOffice: number,
        vicePresident: string,
        partyAffiliation: string
    }
}
