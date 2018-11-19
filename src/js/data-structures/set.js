export default class Set {
   constructor() {
      this.items = {};
   }

   add(element) {
      if (!this.has(element)) {
         this.items[element] = element;
         return true;
      }
      return false;
   }

   delete(element) {
      if (this.has(element)) {
         delete this.items[element];
         return true;
      }
      return false;
   }

   has(element) {
      return Object.prototype.hasOwnProperty.call(this.items, element);
   }

   values() {
      return Object.values(this.items);
   }

   valuesLegacy() {
      const values = [];
      for (const key in this.itmes) {
         if (this.items.hasOwnProperty(key)) {
            values.push(key);
         }
      }
      return values;
   }

   size() {
      return Object.keys(this.items).length;
   }

   sizeLegacy() {
      let count = 0;
      for (const key in this.items) {
         if (this.items.hasOwnProperty(key)) {
            count++;
         }
      }
      return count;
   }

   clear() {
      this.itmes = {};
   }
}
