using Microsoft.AspNetCore.Mvc;
using ProductService.Implementations;
using ProductService.Models;

namespace ProductService.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly ProductProvider productProvider;

        public ProductController(ProductProvider provider) => productProvider = provider;

        [HttpGet]
        public ActionResult GetProducts()
        {
            return Ok(productProvider.GetProducts());
        }
    }
}
