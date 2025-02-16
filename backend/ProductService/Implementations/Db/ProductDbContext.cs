using Microsoft.EntityFrameworkCore;
using ProductService.Models;

namespace ProductService.Implementations.Db
{
    public class ProductDbContext : DbContext
    {
        public DbSet<Product> Products { get; init; }
    }
}
