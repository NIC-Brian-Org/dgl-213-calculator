(() => {
    console.log('Here we are!')
    window.addEventListener("load", (event) => {
        const multiplier = document.getElementById( 'multiplier' );
        const multiplicand = document.getElementById( 'multiplicand' );
        const product = document.getElementById( 'product' );

        const update = () => {
            product.innerHTML = multiplier.valueAsNumber * multiplicand.valueAsNumber;
        };

        multiplier.addEventListener("change", update);
        multiplicand.addEventListener("change", update);
    });      
})();