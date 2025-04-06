using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class ShufersalContext(DbContextOptions options) : DbContext(options)
{
    public DbSet<Product> Products { get; set; }
}
