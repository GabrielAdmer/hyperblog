import '@styles/main.scss';

const button = document.getElementById( 'button' ) as HTMLButtonElement;
const box = document.querySelector( '.box' ) as HTMLDivElement;

button.addEventListener( 'click', ( e ) => {
  box.classList.toggle( 'mover' );
} );

