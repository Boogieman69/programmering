class Person {
    // definere information om personerne 
    constructor(name, age, city) {
      this.name = name;
      this.age = age;
      this.city = city;
      this.createCard(); // Opretter automatisk en visuel repræsentation
    }
  
    // skaber kortene så man kan se det visuelt i koden
    createCard() {
      // liste af farver til profilernes bokse 
      const profileColors = ["#FF6347", "#FFD700", "#90EE90", "#ADD8E6", "#FF69B4", "#8A2BE2", "#20B2AA"];
      const selectedColor = profileColors[this.age % profileColors.length]; // Bruger alder til at vælge en farve
  
      // Opret et div-element som kan holde personernes info
      this.cardDiv = createDiv();
      this.cardDiv.style(`
        border: 2px solid #333;
        padding: 1rem;
        margin: 1rem;
        border-radius: 8px;
        width: 200px;
        text-align: center;
        font-family: Arial, sans-serif;
        background-color: ${selectedColor};
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
        color: white;
      `);
  
      // Beregn hvornår personerne bliver pensioneret 
      const yearsToRetirement = this.calculateYearsToRetirement();
  
      // Tilføj indhold til kortet
      this.cardDiv.html(`
        <h3>${this.name}</h3>
        <p>Age: ${this.age}</p>
        <p>City: ${this.city}</p>
        <p>Years to Retirement: ${yearsToRetirement}</p>
      `);
  
      // Tilføj kortet til containeren
      this.setContainerColor(); // Farve til containeren
    }
  
    //hvor mange år der er til pension
    calculateYearsToRetirement() {
      const retirementAge = 67;
      const yearsToRetirement = retirementAge - this.age;
      return yearsToRetirement > 0 ? yearsToRetirement : 0; // Hvis personen allerede er 67 eller ældre, returneres 0
    }
  
    // ændre containerens baggrundsfarve
    setContainerColor() {
      // Liste af baggrundsfarver for containerne (de omkransende bokse)
      const containerColors = ["#f1faee", "#a8dadc", "#457b9d", "#1d3557", "#e63946"];
      const selectedContainerColor = containerColors[this.age % containerColors.length];
  
      // Opretter containeren 
      this.containerDiv = createDiv();
      this.containerDiv.style(`
        display: inline-block;
        padding: 10px;
        background-color: ${selectedContainerColor};
        border-radius: 10px;
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
        margin: 10px;
      `);
  
      // ligger kortet til containeren
      this.containerDiv.child(this.cardDiv);
  
      // Find containeren i DOM'en og gør det som et barn
      select('#container').child(this.containerDiv);
    }
  }
  
  function setup() {
    noCanvas(); // Vi behøver ikke et canvas for dette eksempel
  
    // Opret en container til at holde personkortene
    let container = createDiv();
    container.id('container');
    document.body.appendChild(container.elt); // Tilføjer containeren til bodyen
  
    // Opret flere Person-objekter
    let persons = [
      new Person("Alice", 30, "Copenhagen"),
      new Person("Bob", 25, "Aarhus"),
      new Person("Charlie", 35, "Odense"),
      new Person("Diana", 70, "Aalborg"), // Ældre person for at vise 0 år tilbage
      new Person("Eve", 40, "Esbjerg")
    ];
  }
  