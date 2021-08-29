//class MyArray<T> {

//   private _length: number;
//   private data: any;

//   constructor() {
//     this._length = 0;
//     this.data = {};
//   }

//   get length(): number {
//     return this._length;
//   }

//   get( index: number ) {
//     return this.data[ index ];
//   };

//   get _data() {
//     return this.data;
//   }

//   push( item: T ) {
//     this.data[ this._length ] = item;
//     this._length++;
//     return this.data;
//   }

//   pop() {
//     const lastItem = this.data[ this._length - 1 ];
//     delete this.data[ this.length - 1 ];
//     this._length--;
//     return lastItem;
//   }

//   delete( index: number ) {
//     const item = this.data[ index ];
//     this.shiftIndex( index );
//     return item;
//   }

//   shiftIndex( index: number ) {
//     for ( let i = index; i < this._length - 1; i++ ) {
//       this.data[ i ] = this.data[ i + 1 ];
//     }
//     delete this.data[ this._length - 1 ];
//   }

//   shif() {
//     const firstItem = this.data[ 0 ];
//     this.shiftIndex( 0 );
//     return firstItem;
//   }


// }