using API.Models;

namespace API.Services
{
    public interface IProductService
    {
        public Task<List<Product>> GetProductsAsync();

        public Task<Product?> GetProductByIdAsync(int id);

        public Task<Product?> AddProductAsync(Product product);

        public Task<Product?> UpdateProductAsync(Product product);

        public Task<bool> DeleteProductAsync(int id);
    }
}
