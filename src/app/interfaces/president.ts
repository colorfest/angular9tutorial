export interface President {
    firstName: string,
    lastName: string,
    middleInitial?: string,
    age?: number,
    presId?: number,
    img?: string,
    current?: boolean,
    details: {
        spouse?: string,
        termsInOffice?: number,
        vicePresident?: string,
        partyAffiliation?: string
    }
}
