using API.Models;
using API.Services;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[Route("api/v1/[controller]")]
[ApiController]
public class ProductsController(IProductService productService) : ControllerBase
{
    [HttpGet]
    public async Task<IActionResult> GetProducts()
    {
        return Ok(await productService.GetProductsAsync());
    }

    [HttpGet("{id:int}")]
    public async Task<IActionResult> GetProductById(int id)
    {
        if (await productService.GetProductByIdAsync(id) is not Product product)
            return NotFound();

        return Ok(product);
    }

    [HttpGet("search")]
    public ActionResult AddProduct([FromQuery]string query)
    {
        return Ok(query);
    }

    [HttpPost]
    public async Task<IActionResult> AddProduct(Product product)
    {
        if (product is null)
            return BadRequest();

        if (await productService.AddProductAsync(product) is not Product productDb)
            return BadRequest();

        return Created("", productDb);
    }

    [HttpPut("{id:int}")]
    public async Task<IActionResult> UpdateProduct(Product product, int id)
    {
        if (product is null)
            return BadRequest();

        product.Id = id;

        if (await productService.UpdateProductAsync(product) is not Product productDb)
            return NotFound();

        return Ok(productDb);
    }

    [HttpDelete("{id:int}")]
    public async Task<IActionResult> DeleteProduct(int id)
    {
        if (!await productService.DeleteProductAsync(id))
            return NotFound();

        return NoContent();
    }
}
