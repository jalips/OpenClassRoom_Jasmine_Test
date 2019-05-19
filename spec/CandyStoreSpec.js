describe("Candy store", function() {

    var candyStore;

    beforeEach(function(){
        candyStore = new CandyStore();
    });

    it("lorsque quelqu'un retire 20 bonbons d'une boîte plastique de 510 bonbons (d'un seul type de bonbon), "
        +"il devrait y avoir 490 bonbons qui restent dans la boîte.", function () {

            candyStore.candiesBox[CANDY_DRAGIBUS] = 510;
            candyStore.getCandies(20, CANDY_DRAGIBUS);

            expect(candyStore.candiesBox[CANDY_DRAGIBUS]).toEqual(490);
    });

    it("Quand un employé ajoute 600 bonbons à une boîte qui contient 4 bonbons (d'un seul type de bonbon), "
        +"il devrait y avoir 604 bonbons dans la boîte. "
        +"Enlever des bonbons d'un type ne change pas la quantité de l'autre type de bonbon.", function () {
       
            candyStore.candiesBox[CANDY_CHAMALLOWS] = 4;
            candyStore.addCandies(600, CANDY_CHAMALLOWS);

            expect(candyStore.candiesBox[CANDY_CHAMALLOWS]).toEqual(604); 
    });

    it("Enlever des bonbons d'un type ne change pas la quantité de l'autre type de bonbon.", function () {

            candyStore.candiesBox[CANDY_DRAGIBUS] = 510;
            candyStore.candiesBox[CANDY_CHAMALLOWS] = 4;

            candyStore.getCandies(20, CANDY_DRAGIBUS);

            expect(candyStore.candiesBox[CANDY_DRAGIBUS]).toEqual(490);
            expect(candyStore.candiesBox[CANDY_CHAMALLOWS]).toEqual(4); 
    });



});