var Cat = function(){
   this.clickCount = ko.observable(0);
   this.name = ko.observable("Tobby");
   
   this.imgSrc = ko.observable('img/1413379559_412a540d29_z.jpg');
   this.imgAttribute = ko.observable('www.google.com');

   this.level = ko.computed(function(){
         if(this.clickCount() < 10){
            return "New Born";
         } else if(this.clickCount() < 20){
            return "Infent";
         } else if(this.clickCount() < 30) {
            return "teen"
         } else {
            return "well grown";
         }
   }, this);

   this.nickNames = ko.observableArray([
        { name: 'Bert' },
        { name: 'Charles' },
        { name: 'Denise' }
    ]);
}



function AppViewModel() {
   
   this.currentCat = ko.observable(new Cat());
   this.incrementCounter = function(){
   		this.currentCat().clickCount(this.currentCat().clickCount() + 1);
   }

   
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());