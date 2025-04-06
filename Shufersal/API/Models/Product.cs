using System.ComponentModel.DataAnnotations.Schema;

namespace API.Models;

public class Product
{
    public int Id { get; set; }

    public required string Name { get; set; }

    public string? Description { get; set; }

    [Column(TypeName = "decimal(6,2)")]
    public required decimal Price { get; set; }
}
