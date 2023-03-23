QUnit.module('fizbuz', function () {
    QUnit.test('Létezik e fizbuz?', function (assert) {
        assert.ok(fizbuz, 'Létezik e fizbuz?');
    });


    QUnit.test('Függvény vagy e ?', function (assert) {
        assert.ok(typeof fizbuz === "function", "Függvény vagy e ?");
    });


    QUnit.test('fizbuz(0)', function (assert) {
        assert.equal(fizbuz(0), "");
    });

    QUnit.test('fizbuz(1)', function (assert) {
        assert.equal(fizbuz(1), 1);
    });

    QUnit.test('fizbuz(2)', function (assert) {
        assert.equal(fizbuz(2), "1, 2");
    });

    QUnit.test('fizbuz(3)', function (assert) {
        assert.equal(fizbuz(3), "1, 2, fizz");
    });

    QUnit.test('fizbuzErtek(1,2,4,7,8, 11,13,14)', function (assert) {
        const nemOszthatoLista = [1, 2, 4, 7, 8, 11, 13, 14];
        for (let index = 0; index < nemOszthatoLista.length; index++) {
            assert.equal(fizbuzErtek(nemOszthatoLista[index]), nemOszthatoLista[index]);
        }

    });

    QUnit.test('fizbuzErtek()[3,6,9,12]', function (assert) {
        const nemOszthatoLista = [3, 6, 9, 12];
        for (let index = 0; index < nemOszthatoLista.length; index++) {
            assert.equal(fizbuzErtek(nemOszthatoLista[index]), "fizz");
        }

    });

    QUnit.test('fizbuzErtek()[5,10]', function (assert) {
        const nemOszthatoLista = [5, 10];
        for (let index = 0; index < nemOszthatoLista.length; index++) {
            assert.equal(fizbuzErtek(nemOszthatoLista[index]), "buzz");
        }

    });

    QUnit.test('fizbuzErtek()[15]', function (assert) {
        const nemOszthatoLista = [15];
        for (let index = 0; index < nemOszthatoLista.length; index++) {
            assert.equal(fizbuzErtek(nemOszthatoLista[index]), "fizzbuzz");
        }

    });
});
