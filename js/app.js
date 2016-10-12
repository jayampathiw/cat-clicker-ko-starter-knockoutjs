var Cat = function(data){
   this.clickCount = ko.observable(data.clickCount);
   this.name = ko.observable(data.name);
   
   this.imgSrc = ko.observable(data.imgSrc);
   this.imgAttribute = ko.observable(data.imgAttribute);

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

   this.nickNames = ko.observableArray(data.nickNames);
}



function AppViewModel() {
   self = this;
   self.currentCat = ko.observable(new Cat({
      clickCount : 0,
      name : "Tobby",
      imgSrc : 'img/1413379559_412a540d29_z.jpg',
      imgAttribute : 'www.google.com',
      nickNames : [
        { name: 'Bert' },
        { name: 'Charles' },
        { name: 'Denise' }
    ]
   }));
   self.incrementCounter = function(){
   		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
   }

   
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());