import budget from './budget.png'
import schedule from './schedule.png'
import teamwork from './teamwork.png'
import audit from './audit.png'
import accounting from './accounting.png'

export const services =  [
    {
      title: 'Finansije',
      body: 'Finansija predstavljaju svojevrsnu umetnost i nauku upravljanja novcem.',
      icon: budget,
  
  },
  {
    title: 'Revizija',
    body: 'Finansijaska revizija se sprovodi da bi obezbedila mišljenje da li je "finansijski izveštaj" (informacija koja se proverava) u skladu sa određenim kriterijumima. ',
    icon: schedule,

},
{
  title: 'Osiguranje',
  body: 'Osiguranje je jedan oblik upravljanja rizikom, prvenstveno usmeren na smanjenje finansijskih gubitaka. Osiguranje je prenos rizika sa osiguranika na osiguravajuće društvo, uz plaćanje premije osiguranja.',
  icon: teamwork,

},
{
  title: 'Planiranje',
  body: 'Planiranje predstavlja, kao proces, menadžersku funkciju kojom se određuju ciljevi tekućeg poslovanja i razvoja organizacije, zatim predviđanje i definisanje budućih zadataka, kao i uslova u kojima ti zadaci treba da se izvršavaju a ciljevi ostvaruju.',
  icon: audit,

},
{
  title: 'Finansijsko Planiranje',
  body: 'Finansijsko planiranje je konkretizacija finansijske politike uz finansijske planove kojima se cilj finansijske politike stavlja u vrednosni izraz u vremenu i prostoru.',
  icon: accounting,

},
// {
//   title: 'Osnivanje i registracija paušalne, preduzetničke radnje ili firme (DOO)',
//   body: 'Podrazumevane usluge: savetovanje o pravnoj formi, registracija kod APR-a, preuzimanje rešenja i priprema dokumentacije, prijava na obavezno socijalno osiguranje, ažuriranje zdravstvene kartice, izrada akta o osnivanju, regulisanje fiskalizacije (ukoliko je potrebno), priprema obavezne dokumentacije',
//   icon: accounting,

// },
  ]


export const questions =  [
  {   id: 1,
      title: 'Koja je cena vaših usluga?',
      body: 'Da bi mogli da formiramo cenu za naše usluge neophodno je da nam dostavite detaljne podatke o vašoj firmi, kao što su prosečan broj ulaznih i izlaznih računa, broj zaposlenih, ukupan prihod i slično.',
  },
  {   id: 2,
      title: 'Da li vaši zaposleni govore engleski?',
      body: 'Većina naših zaposlenih tečno govori i piše engleski jezik.',
  },
  {   id: 3,
      title: 'Da li moramo dostavljati dokumentaciju lično ili elektronskim putem?',
      body: 'Dokumentaciju možete dostavljati elektronskim putem, a orginale arhivirati kod sebe, a nakon toga (naknadno), u dogovorenom roku, dostavljate i orginalnu dokuemntaciju.',
  },
  {   id: 4,
      title: 'Da li vršite administrativne usluge za klijente?',
      body: 'Vršimo i ovaj vid usluga za klijente, ali je neophodno da se usaglasi obim i sadržaj istih prilikom uspostavljanja saradnje.',
  },
  {   id: 5,
      title: 'Da li je pečat neophodan?',
       body: 'Pečat više nije neophodan. Prestao je da bude obavezna stavka u poslovanju.',
  },
  {   id: 6,
      title: 'Kako otvoriti radnju elektronski',
       body: '1.otvaranje korisničkog naloga na sajtu APR,2.budući vlasnik mora posedovati ličnu kartu sa elektronskim sertifikatom,3.uplaćena taksa APR-u za registraciju u iznosu od 1000rsd,4.za neke delatnosti su potrebne saglasnosti,5.ovlašćenje za prokuru,APR u roku od 5 radnih dana šalje rešenje o registraciji, PIB i prijavu preduzetnika na socijalno osiguranje.',
  },
    ]