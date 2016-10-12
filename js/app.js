var innitialCats = [
   {
      clickCount : 0,
      name : "Tobby",
      imgSrc : 'img/1413379559_412a540d29_z.jpg',
      imgAttribute : 'www.google.com',
      nickNames : [
        { name: 'Bert' },
        { name: 'Charles' },
        { name: 'Denise' }
    ]
   },
   {
      clickCount : 0,
      name : "Scrady",
      imgSrc : 'img/22252709_010df3379e_z.jpg',
      imgAttribute : 'www.google.com',
      nickNames : [
        { name: 'Bert' }
    ]
   },
   {
      clickCount : 0,
      name : "Scrobby",
      imgSrc : 'img/4154543904_6e2428c421_z.jpg',
      imgAttribute : 'www.google.com',
      nickNames : [
        { name: 'Scooby' }
    ]
   },
   {
      clickCount : 0,
      name : "Snowy",
      imgSrc : 'img/434164568_fea0ad4013_z.jpg',
      imgAttribute : 'www.google.com',
      nickNames : [
        { name: 'Snowy' }
    ]
   },
   {
      clickCount : 0,
      name : "Batty",
      imgSrc : 'img/9648464288_2516b35537_z.jpg',
      imgAttribute : 'www.google.com',
      nickNames : [
        { name: 'zzzzzzzzz' }
    ]
   }
]



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

   self.catList = ko.observableArray([]);

   innitialCats.forEach(function(catObj){
      self.catList().push(new Cat(catObj));
   });


   self.currentCat = ko.observable(self.catList()[0]);

   self.setCurrentCat = function(cat){
      self.currentCat(cat);
   }

   self.incrementCounter = function(){
   	self.currentCat().clickCount(self.currentCat().clickCount() + 1);
   }

   
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());