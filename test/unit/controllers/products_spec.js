const ProductsController = require('../../../src/controllers/products');
const sinon = require('sinon');
const Product = require('../../../src/models/product');

describe('Controllers: Products', () => {

    const defaultProduct = [{
        name: 'Default product',
        description: 'product description',
        price: 100
    }];

    describe('get() products', () => {

        it('calls send with a list of products', () => {

            const request = {};
            const response = {
                send: sinon.spy()
            };

            sinon.stub(Product, 'find').callsFake(() => Promise.resolve(defaultProduct));

            const productsController = new ProductsController(Product);

            return productsController.get(request, response)
            .then(() => {

                sinon.assert.calledWith(response.send, defaultProduct);
                Product.find.restore();
            });
        });

        it('should return 400 when an error occurs', () => {

            const request = {};
            const response = {
                send: sinon.spy(),
                status: sinon.stub()
            };

            response.status.withArgs(400).returns(response);
            const error = new Error('Error');

            sinon.stub(Product, 'find').callsFake(() => Promise.reject(error));

            const productsController = new ProductsController(Product);

            return productsController.get(request, response)
            .then(() => {

                sinon.assert.calledWith(response.send, 'Error');
                Product.find.restore();
            });
        });
    });
});
