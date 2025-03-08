// sockets/eliminar-ProductSocket.js
const redis = require('redis');
const client = redis.createClient();

client.on('error', (err) => {
    console.log('Error ' + err);
});

module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log('A user connected');

        // Evento para eliminar un producto
        socket.on('delete-product', (productId) => {
            client.hdel('products', productId, (err, response) => {
                if (err) {
                    console.error('Error deleting product:', err);
                    socket.emit('delete-product-response', { success: false, message: 'Error deleting product' });
                } else if (response === 0) {
                    console.log('Product not found');
                    socket.emit('delete-product-response', { success: false, message: 'Product not found' });
                } else {
                    console.log('Product deleted');
                    socket.emit('delete-product-response', { success: true, message: 'Product deleted successfully' });
                }
            });
        });

        socket.on('disconnect', () => {
            console.log('User disconnected');
        });
    });
};
