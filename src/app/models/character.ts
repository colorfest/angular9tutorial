export interface Character {
  firstName: string,
  lastName: string,
  age: number,
  presID: number,
  details: {
    spouse: string,
    termsInOffice: number,
    vicePresident: string,
    partyAffiliation: string
  }
}
