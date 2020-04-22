export class JavabogBruger {
  public brugernavn: string;
  public email: string;
  public sidstAktiv: string;
  public campusnetID: string;
  public studieretning: string;
  public fornavn: string;
  public efternavn: string;
  public adgangskode: string;
  public hobby: string;
  public webside: string;

  constructor(brugernavn: string, email: string, sidstAktiv: string,
              campusnetID: string, studieretning: string, fornavn: string,
              efternavn: string, adgangskode: string, hobby: string, webside: string) {
    this.brugernavn = brugernavn;
    this.email = email;
    this.sidstAktiv = sidstAktiv;
    this.campusnetID = campusnetID;
    this.studieretning = studieretning;
    this.fornavn = fornavn;
    this.efternavn = efternavn;
    this.adgangskode = adgangskode;
    this.hobby = hobby;
    this.webside = webside;
  }
}
