export interface President {
    firstName: string,
    lastName: string,
    middleInitial?: string,
    age?: number,
    birthday?: any,
    presId?: number,
    img?: string,
    current?: boolean,
    display?: boolean,
    details: {
        spouse?: string,
        termsInOffice?: number,
        vicePresident?: string,
        partyAffiliation?: string
    }
}
