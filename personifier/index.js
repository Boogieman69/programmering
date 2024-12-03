class Person {
    // Konstruktor til at initialisere et Person-objekt
    constructor(name, age, city) {
      this.name = name;
      this.age = age;
      this.city = city;
      this.createCard(); // Opretter automatisk en visuel repræsentation
    }
  
    // Metode til at oprette et kort-lignende billede af personen
    createCard() {
      // Definer en liste af baggrundsfarver
      const colors = ["#f9c74f", "#90be6d", "#f94144", "#577590", "#43aa8b"];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
      // Opret et div-element til at holde personens detaljer
      this.cardDiv = createDiv();
      this.cardDiv.style(`
        border: 2px solid #333;
        padding: 1rem;
        margin: 1rem;
        border-radius: 8px;
        width: 200px;
        text-align: center;
        font-family: Arial, sans-serif;
        background-color: ${randomColor};
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
        color: white;
      `);
  
      // Beregn pensionens resterende år og vis det på kortet
      const yearsToRetirement = this.calculateYearsToRetirement();
  
      // Tilføj indhold til kortet
      this.cardDiv.html(`
        <h3>${this.name}</h3>
        <p>Age: ${this.age}</p>
        <p>City: ${this.city}</p>
        <p>Years to Retirement: ${yearsToRetirement}</p>
      `);
  
      // Tilføj kortet til containeren
      select('#container').child(this.cardDiv);
    }
  
    // Metode til at beregne hvor mange år der er til pension
    calculateYearsToRetirement() {
      const retirementAge = 67;
      const yearsToRetirement = retirementAge - this.age;
      return yearsToRetirement > 0 ? yearsToRetirement : 0; // Hvis personen allerede er 67 eller ældre, returneres 0
    }
  }
  
  function setup() {
    noCanvas(); // Vi behøver ikke et canvas for dette eksempel
  
    // Opret flere Person-objekter
    let persons = [
      new Person("Alice", 30, "Copenhagen"),
      new Person("Bob", 25, "Aarhus"),
      new Person("Charlie", 35, "Odense"),
      new Person("Diana", 70, "Aalborg"), // Ældre person for at vise 0 år tilbage
      new Person("Eve", 40, "Esbjerg")
    ];
  }
  