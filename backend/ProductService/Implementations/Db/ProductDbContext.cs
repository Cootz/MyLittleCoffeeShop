using Microsoft.EntityFrameworkCore;
using ProductService.Models;

namespace ProductService.Implementations.Db
{
    public class ProductDbContext(DbContextOptions<ProductDbContext> contextOptions) : DbContext(contextOptions)
    {
        public required DbSet<Product> Products { get; init; }
    }
}
