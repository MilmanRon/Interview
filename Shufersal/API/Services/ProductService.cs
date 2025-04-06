using API.Data;
using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Services;

public class ProductService(ShufersalContext context) : IProductService
{
    public async Task<List<Product>> GetProductsAsync()
    {
        return await context.Products.AsNoTracking().ToListAsync();
    }

    public async Task<Product?> GetProductByIdAsync(int id) 
    {
        var product = await context.Products.AsNoTracking()
                                            .SingleOrDefaultAsync(p => p.Id == id);

        return product;
    }

    public async Task<Product?> AddProductAsync(Product product)
    {
        if (product is null)
            return null;

        await context.Products.AddAsync(product);
        await context.SaveChangesAsync();

        return product;
    }

    public async Task<Product?> UpdateProductAsync(Product product)
    {
        if (product is null)
            return null;

        if (!context.Products.Any(p => p.Id == product.Id))
            return null;

        context.Products.Update(product);
        await context.SaveChangesAsync();
        return product;
    }

    public async Task<bool> DeleteProductAsync(int id)
    {
        if (await context.Products.FindAsync(id) is not Product product)
            return false;

        context.Products.Remove(product);
        await context.SaveChangesAsync();
        return true;
    }



}
