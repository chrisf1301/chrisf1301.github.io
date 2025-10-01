class Dog{
    constructor(title, breed, color, age, size, pic){
        this.title = title; 
        this.breed = breed;
        this.color = color;
        this.age = age;
        this.size = size;
        this.pic = pic;
    }

    get item(){
        const section = document.createElement("section");
        section.classList.add("dog");

        const h3 = document.createElement("h3");
        h3.innerHTML = this.title;
        section.append(h3);
        
        return section; 
    }
}

const dogs = []; 
dogs. push(new Dog("Brandy", "yorkie", "brown", 3, "small", "yorkie.jpeg"));
dogs. push(new Dog("Rex", "labrador", "black", 5, "large", "labrador.jpeg"));
dogs. push(new Dog("Max", "golden retriever", "gold", 7, "large", "golden-retriever.jpeg"));


//on page load

const dogListDiv = document.getElementById("dog-list");

dogs.forEach((dog)=>{
    dogListDiv.append(dog.item);
}); 