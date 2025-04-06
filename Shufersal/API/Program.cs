using API.Data;
using API.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
{
    builder.Services.AddControllers();

    builder.Services.AddScoped<IProductService, ProductService>();

    builder.Services.AddDbContext<ShufersalContext>(options =>
        options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

    builder.Services.AddCors();
}

var app = builder.Build();
{
    app.UseCors(options => 
        options.AllowAnyHeader()
        .AllowAnyMethod()
        .AllowAnyOrigin());

    app.UseHttpsRedirection();

    app.MapControllers();

    app.Run();
}

