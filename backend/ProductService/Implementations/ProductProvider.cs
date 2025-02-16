using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProductService.Implementations.Db;
using ProductService.Models;

namespace ProductService.Implementations
{
    public class ProductProvider
    {
        private readonly ProductDbContext context;

        public ProductProvider(ProductDbContext context) => this.context = context;

        public IEnumerable<Product> GetProducts()
        {
            return context.Products.Select(product => product);
        }
    }
}